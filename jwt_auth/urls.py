from django.urls import path
from .views import RegisterView, LoginView, LoginDetailView

urlpatterns = [
	path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('<pk>/', LoginDetailView.as_view())
]