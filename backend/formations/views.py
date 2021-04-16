from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status 

from .serializers.populated import PopulatedFormationSerializer
from .models import Formation

class FormationListView(APIView):
    
    def get(self, _request):
        formation = Formation.objects.all()
        serialized_formations = PopulatedFormationSerializer(formation, many=True)
        return Response(serialized_formations.data, status=status.HTTP_200_OK)