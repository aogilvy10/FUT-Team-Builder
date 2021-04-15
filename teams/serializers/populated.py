from players.serializers.common import PlayerSerializer
from ..serializers.common import TeamSerializer


class PopulatedTeamSerializer(TeamSerializer):
    players = PlayerSerializer(many=True)

    