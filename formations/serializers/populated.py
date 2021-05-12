from .common import FormationSerializer
from teams.serializers.common import TeamSerializer



class PopulatedFormationSerializer(FormationSerializer):

    teams = TeamSerializer(many=True)