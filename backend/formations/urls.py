from django.urls import path
from .views import FormationListView

urlpatterns = [
    path('', FormationListView.as_view())
]