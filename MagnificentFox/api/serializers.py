from rest_framework import serializers
from .models import User, Product, Order, OrderItem

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'email', 'mobile', 'dob', 'gender']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'mrp', 'discount_percentage', 'inclusive_of_taxes', 'sizes', 'quantity', 'dispatch_time', 'cash_on_delivery', 'return_policy', 'details', 'design_and_fit', 'fabric_and_care', 'customer_reviews', 'created_at', 'updated_at']

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['id', 'order', 'product', 'quantity', 'price']

class OrderSerializer(serializers.ModelSerializer):
    order_items = OrderItemSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = ['id', 'user', 'created_at', 'updated_at', 'total_price', 'status', 'order_items']

class ColumnStructureSerializer(serializers.Serializer):
    message = serializers.CharField()