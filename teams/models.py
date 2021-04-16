from django.db import models

class Team(models.Model):
    team_name = models.CharField(max_length=50)
    abbreviation = models.CharField(max_length=3)
    team_logo = models.CharField(max_length=500)
    created_at = models.DateTimeField(auto_now_add=True)
    formation = models.ManyToManyField('formations.Formation', related_name='teams')
    player = models.ManyToManyField('players.Player', related_name='teams', blank=True)
    owner = models.ForeignKey(
		"jwt_auth.User",
		related_name = "teams",
		on_delete = models.CASCADE
)

    def __str__(self):
        return f"{self.team_name}, {self.abbreviation}"