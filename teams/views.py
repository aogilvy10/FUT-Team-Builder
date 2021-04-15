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

    def post(self, request):
        team_to_add =TeamSerializer(data=request.data)
        if team_to_add.is_valid():
            team_to_add.save()
            return Response(team_to_add.data, status=status.HTTP_201_CREATED)
        return Response(team_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


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

    def delete(self, _request, pk):
        team_to_delete = self.get_team(pk=pk)
        team_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        team_to_edit = self.get_team(pk=pk)
        updated_team = TeamSerializer(team_to_edit, data=request.data)
        if updated_team.is_valid():
            updated_team.save()
            return Response(updated_team.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_team.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)