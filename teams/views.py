from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status

from .models import Team
from .serializers.common import TeamSerializer


class TeamListView(APIView):

    def get(self, _request):
        teams = Team.objects.all()
        serialized_teams = TeamSerializer(teams, many=True)
        return Response(serialized_teams.data, status=status.HTTP_200_OK)


class TeamDetailView(APIView):

    def get(self, _request, pk):
        team = Team.objects.get(pk=pk)
        serialized_team = TeamSerializer(team)
        return Response(serialized_team.data, status=status.HTTP_200_OK)