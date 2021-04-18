from players.serializers.common import PlayerSerializer
from ..serializers.common import TeamSerializer
from formations.serializers.common import FormationSerializer
from jwt_auth.serializers.common import UserSerializer

class PopulatedTeamSerializer(TeamSerializer):
    players = PlayerSerializer(many=True)
    formation = FormationSerializer()
    owner = UserSerializer()
    