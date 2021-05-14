from django.db import models

# Create your models here.

class Formation(models.Model):
    name = models.CharField(max_length=10)

    def __str__(self):
        return f"{self.name}"