from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers.common import PlayerSerializer
from .models import Player


class PlayerListView(APIView):

    def post(self, request):
        player_to_create = PlayerSerializer(data=request.data)
        if player_to_create.is_valid():
            player_to_create.save()
            return Response(player_to_create.data, status=status.HTTP_201_CREATED)
        return Response(player_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


    def get(self, _request):
        players = Player.objects.get()
        serialized_players = PlayerSerializer(players, many=True)
        return Response(serialized_players.data, status=status.HTTP_200_OK)
