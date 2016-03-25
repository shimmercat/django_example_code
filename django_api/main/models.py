from __future__ import unicode_literals

from django.db import models


class Person(models.Model):
    name = models.CharField(max_length=50)

    def __unicode__(self):
        return self.name
