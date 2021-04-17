from teams.serializers.populated import PopulatedTeamSerializer
from jwt_auth.serializers.common import UserSerializer 

class PopulatedUserSerializer(UserSerializer): 

    teams = PopulatedTeamSerializer(many=True)
    user = UserSerializer

