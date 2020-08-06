from __future__ import unicode_literals
from django.db import models
from django.contrib.auth.models import User, Group



class NEW(models.Model):
    text =models.CharField(primary_key=True, max_length=5)
