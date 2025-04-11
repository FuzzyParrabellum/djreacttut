from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from property.serializers import ReservationsListSerializer

from .serializers import UserDetailSerializer
from .models import User

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def landlord_detail(request,pk):
    user = User.objects.get(pk=pk)

    serializer = UserDetailSerializer(user, many=False)

    return JsonResponse(serializer.data, safe=False)

# PERSO
@api_view(['GET'])
def reservations_list(request):
    reservations = request.user.reservations.all()
    print("USER", request.user)
    # sinon tenter qq chose comme user.reservations.filter(created_by=user)



    # landlord_id = request.GET.get('landlord_id', '')

    # if landlord_id:
    #     properties = properties.filter(landlord_id=landlord_id)

    serializer = ReservationsListSerializer(reservations, many=True)

    return JsonResponse({
        'data': serializer.data,
    }, safe=False)