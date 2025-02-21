from django.urls import path 

from . import api

app_name = 'property'

urlpatterns = [
    path('', api.properties_list, name='api_properties_list'),
]