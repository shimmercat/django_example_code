from django.conf.urls import url

from .views import PersonViewSet

urlpatterns = [
     url(r'^api/person/', PersonViewSet.as_view(), name='person'),
]
