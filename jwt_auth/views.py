from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from rest_framework.exceptions import PermissionDenied, NotFound
from datetime import datetime, timedelta
from django.conf import settings
from .serializers.populated import PopulatedUserSerializer
import jwt


from .serializers.common import UserSerializer

User = get_user_model()


class RegisterView(APIView):

    def post(self, request):
        # run user through serializer
        user_to_create = UserSerializer(data=request.data)
        # check if user is valid
        if user_to_create.is_valid():
            user_to_create.save()
            return Response({'message': 'Registration successful'}, status=status.HTTP_202_ACCEPTED)
        print(user_to_create.errors)
        return Response(user_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class LoginView(APIView):

    def get(self, _request): 
        users = User.objects.all()
        serialized_users = PopulatedUserSerializer(users, many=True)
        return Response(serialized_users.data, status=status.HTTP_200_OK)



    def post(self, request):
        # get some data off the request
        email = request.data.get('email')
        password = request.data.get('password')

        # get the user from the db
        try:
            user_to_login = User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied(detail='Invalid credentials')
        if not user_to_login.check_password(password): # check password against hashed version in db
            raise PermissionDenied(detail='Invalid credentials')

        dt = datetime.now() + timedelta(days=7) # generate expiry for token

        # generate a token
        token = jwt.encode(
            {'sub': user_to_login.id, 'exp': int(dt.strftime('%s'))},
            settings.SECRET_KEY,
            algorithm='HS256'
        )
        serialized_user = PopulatedUserSerializer(user_to_login)


        return Response({ 'token': token, 'message': f'Welcome back {user_to_login.first_name}', 'user1': serialized_user.data})
    
class LoginDetailView(APIView): 
    def get_user(self, pk):
        try:
            return User.objects.get(pk=pk)
        except User.DoesNotExist: 
            raise NotFound(detail="👤 User doesn't exist")

    def get(self, _request, pk):
        user = self.get_user(pk=pk)
        serialized_user = PopulatedUserSerializer(user)
        return Response(serialized_user.data, status=status.HTTP_200_OK) 
