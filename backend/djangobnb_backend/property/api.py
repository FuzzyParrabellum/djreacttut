from django.http import JsonResponse

from rest_framework.decorators import api_view,authentication_classes, permission_classes
from rest_framework_simplejwt.tokens import AccessToken

#perso
from useraccount.models import User

from .forms import PropertyForm
from .models import Property, Reservation
from .serializers import PropertiesListSerializer, PropertyDetailSerializer, ReservationsListSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    # Auth
    # ces lignes de code sont nécessaires au lieu de juste faire request.user,
    # car on a rajouté ces deux lignes au-dessus @authentication_classes([])
    # @permission_classes([]), sinon va juste renvoyer un AnonymousUser mm si co
    try:
        token = request.META['HTTP_AUTHORIZATION'].split('Bearer ')[1]
        token = AccessToken(token)
        user_id = token.payload['user_id']
        user = User.objects.get(pk=user_id)
    except Exception as e:
        user = None

    print('user', user)

    favorites = []
    properties = Property.objects.all()

    landlord_id = request.GET.get('landlord_id', '')
    is_favorites = request.GET.get('is_favorites', '')

    if landlord_id:
        properties = properties.filter(landlord_id=landlord_id)

    if is_favorites:
        # IMPORTANT ci-dessous user doit être placé ds une lsite, car sinon bug
        # vu que doit être iterable
        properties = properties.filter(favorited__in=[user])

    #
    # Favorites
    if user:
        for property in properties:
            if user in property.favorited.all():
                favorites.append(property.id)

    print('favorites', favorites)

    serializer = PropertiesListSerializer(properties, many=True)

    return JsonResponse({
        'data': serializer.data,
        'favorites':favorites # pas besoin de les serialiser comme juste une liste d'ids
    })


@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    property = Property.objects.get(pk=pk)
    serializer = PropertyDetailSerializer(property, many=False)

    return JsonResponse({
        'data': serializer.data
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_reservations(request, pk):
    property = Property.objects.get(pk=pk)
    reservations = property.reservations.all()

    serializer = ReservationsListSerializer(reservations, many=True)

    return JsonResponse({
        'data': serializer.data
    })

@api_view(['POST', 'FILES'])
def create_property(request):
    
    form = PropertyForm(request.POST, request.FILES)

    if form.is_valid():
        property = form.save(commit=False)
        property.landlord = request.user
        property.save()

        return JsonResponse({'success': True})
    
    else:
        print('error', form.errors, form.non_field_errors)
        return JsonResponse({'error': form.errors.as_json()}, status=400)
    
@api_view(['POST'])
def book_property(request, pk):
    try:
        start_date = request.POST.get('start_date', '')
        end_date = request.POST.get('end_date', '')
        number_of_nights = request.POST.get('number_of_nights', '')
        total_price = request.POST.get('total_price', '')
        guests = request.POST.get('guests', '')

        property = Property.objects.get(pk=pk)

        Reservation.objects.create(
            property= property,
            start_date=start_date,
            end_date=end_date,
            number_of_nights=number_of_nights,
            total_price=total_price,
            guests=guests,
            created_by=request.user
        )
        #perso
        return JsonResponse({'success': True})
    except Exception as e:
        print('Error', e)

        return JsonResponse({'success': False})
    
@api_view(['POST'])
def toggle_favorite(request, pk):
    
    property = Property.objects.get(pk=pk)

    if request.user in property.favorited.all():
        property.favorited.remove(request.user)

        return JsonResponse({'is_favorite':False})
    else:
        property.favorited.add(request.user)
        return JsonResponse({'is_favorite':True})