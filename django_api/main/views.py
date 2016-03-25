from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Person
from .serializers import PersonSerializer


class PersonViewSet(APIView):

    def get(self, request):
        Person.objects.create(name=request.GET['name'])
        return Response(PersonSerializer(Person.objects.all(), many=True).data)
