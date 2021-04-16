from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.permissions import IsAuthenticated

from .models import Team
from .serializers.common import TeamSerializer
from .serializers.populated import PopulatedTeamSerializer


class TeamListView(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, _request):
        teams = Team.objects.all()
        serialized_teams = PopulatedTeamSerializer(teams, many=True)
        return Response(serialized_teams.data, status=status.HTTP_200_OK)

    def post(self, request):
        request.data["owner"] = request.user.id
        team_to_add = TeamSerializer(data=request.data)
        if team_to_add.is_valid():
            team_to_add.save()
            return Response(team_to_add.data, status=status.HTTP_201_CREATED)
        return Response(team_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class TeamDetailView(APIView):

    permission_classes = (IsAuthenticated,)

    def get_team(self, pk):
        try:
            return Team.objects.get(pk=pk)
        except Team.DoesNotExist:
            raise NotFound(detail="Cannot find that team")

    def get(self, _request, pk):
        team = self.get_team(pk=pk)
        serialized_team = PopulatedTeamSerializer(team)
        return Response(serialized_team.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        team_to_delete = self.get_team(pk=pk)
        if team_to_delete.owner != request.user:
            raise PermissionDenied()
        team_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        team_to_edit = self.get_team(pk=pk)
        updated_team = TeamSerializer(team_to_edit, data=request.data)
        if updated_team.is_valid():
            updated_team.save()
            return Response(updated_team.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_team.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
