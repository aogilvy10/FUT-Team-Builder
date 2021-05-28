from django.db import models


class Player(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    team_name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)
    photo = models.CharField(max_length=500)
   

    def __str__(self):
        return f"{self.first_name}, {self.last_name}, {self.team_name}"