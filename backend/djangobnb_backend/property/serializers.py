from rest_framework import serializers

from .models import Property

from useraccount.serializers import UserDetailSerializer



class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Property
        # il n'y a que ces fields qui seront retournés par notre api, même si 
        # il y en a plus ds le modèle de base.
        fields = (
            'id',
            'title',
            'price_per_night',
            'image_url',
        )

class PropertyDetailSerializer(serializers.ModelSerializer):

    landlord = UserDetailSerializer(read_only=True, many=False)

    class Meta:
        model = Property
        fields = (
            'id',
            'title',
            'description',
            'price_per_night',
            'image_url',
            'bedrooms',
            'bathrooms',
            'guests',
            'landlord'
        )