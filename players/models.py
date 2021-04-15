from django.db import models


class Player(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    team_name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)
    photo = models.CharField(max_length=500)
    team = models.ForeignKey(
        "teams.Team",
        related_name="players",
        on_delete=models.CASCADE
    )


    def __str__(self):
        return f"{self.firstname}, {self.lastname}, {self.team_name}"