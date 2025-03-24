from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import User, Product, Order
from .serializers import UserSerializer, ProductSerializer, OrderSerializer, ColumnStructureSerializer

# Generic Views for CRUD Operations
class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ProductListCreate(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class OrderListCreate(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


# API Endpoint for Column Structure Data
@api_view(['GET'])
def column_structure_data(request):
    """Returns API status message"""
    data = {"message": "API is working!"}
    return Response(ColumnStructureSerializer(data).data)
