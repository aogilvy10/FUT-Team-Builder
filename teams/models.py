from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=50)
    abbreviation = models.CharField(max_length=3)
    team_logo = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.team_name}, {self.abbreviation}"