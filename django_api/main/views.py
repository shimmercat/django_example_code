from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Person
from .serializers import PersonSerializer


class PersonViewSet(APIView):

    def post(self, request):
        Person.objects.create(name=request.data['name'])
        return Response(PersonSerializer(Person.objects.all(), many=True).data)
