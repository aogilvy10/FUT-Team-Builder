from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Team
from .serializers.common import TeamSerializer



class TeamListView(APIView):

    def get(self, _request):
        teams = Team.objects.all()
        serialized_teams = TeamSerializer(teams, many=True)
        return Response(serialized_teams.data, status=status.HTTP_200_OK)


class TeamDetailView(APIView):

    def get_team(self, pk):
        try:
            return Team.objects.get(pk=pk)
        except Team.DoesNotExist:
            raise NotFound(detail="Cannot find that team")

    def get(self, _request, pk):
        team = self.get_team(pk=pk)
        serialized_team = TeamSerializer(team)
        return Response(serialized_team.data, status=status.HTTP_200_OK)


