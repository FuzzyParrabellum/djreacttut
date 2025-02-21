from rest_framework import serializers

from .models import Property



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