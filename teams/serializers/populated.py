from players.serializers.common import PlayerSerializer
from ..serializers.common import TeamSerializer
from formations.serializers.common import FormationSerializer

class PopulatedTeamSerializer(TeamSerializer):
    players = PlayerSerializer(many=True)
    formation = FormationSerializer()
    