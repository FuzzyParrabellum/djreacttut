import json

from asgiref.sync import sync_to_async
from channels.generic.websocket import AsyncWebsocketConsumer

from .models import ConversationMessage


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        # prof préscise que ici scope est à peu près égal à la session
        # kwargs seront tous les param passés à la fin de l'url qu'on va nous
        # donner
        # cf routing.py pr voir la construction de l'url
        self.room_group_name = f'chat_{self.room_name}'


        # Join room

        #cf channel_layer ds les settings.py où on définit où les données seront
        # stockées
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self):
        #Leave room

        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    # Receive messages from websocket
        
    async def receive(self, text_data):
        data = json.loads(text_data)

        conversation_id = data['data']['conversation_id']
        sent_to_id = data['data']['sent_to_id']
        name = data['data']['name']
        body = data['data']['body']

        await self.channel_layer.group_send(
            self.room_group_name, 
            {
                'type':'chat_message',
                'body': body,
                'name':name
            }
        )

    # sending messages
    async def chat_message(self, event):
        body = event['body']
        name = event['name']

        await self.send(text_data=json.dumps(
        {
            'body': body,
            'name':name
        }
        )
    )

