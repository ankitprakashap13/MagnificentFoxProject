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

# API Endpoint to List Products
@api_view(['GET'])
def list_products(request):
    """Returns a list of products with their details"""
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

# API Endpoint for Card List Data
@api_view(['GET'])
def card_list_data(request):
    """Returns card list data dynamically from the database"""
    data = [
        {
            "image": "//massio.in/cdn/shop/files/Untitled_design_-_2024-08-02T180443.001.png?v=1722602091&width=800",
            "title": "PAJAMA SETS",
            "onClick": "/collections/pajama-sets"
        },
        {
            "image": "//massio.in/cdn/shop/files/2_d19feac4-a541-4be8-8f29-edd86d033140.png?v=1722602200&width=800",
            "title": "SHORT SETS",
            "onClick": "/collections/shorts-set"
        },
        {
            "image": "//massio.in/cdn/shop/files/3_88c1c12c-d11d-4ab9-83f4-0ad5e12cce10.png?v=1722602222&width=800",
            "title": "BOTTOMS",
            "onClick": "/collections/bottoms-1"
        },
        {
            "image": "//massio.in/cdn/shop/files/4_e9317460-1d32-4d4f-b8fc-56488a32447f.png?v=1722602248&width=800",
            "title": "T-SHIRTS",
            "onClick": "/collections/tee-shirts"
        },
        {
            "image": "//massio.in/cdn/shop/files/5_82e258dd-eeb8-476e-a2fe-f6d265453abd.png?v=1722602276&width=800",
            "title": "LINEN TOPS",
            "onClick": "/collections/summer-linen-tops"
        },
        {
            "image": "//massio.in/cdn/shop/files/6_ac8577cb-ab51-412d-989c-2c89aa3b35ae.png?v=1722602295&width=800",
            "title": "LOUNGE PANTS",
            "onClick": "/collections/lounge-pants"
        },
        {
            "image": "//massio.in/cdn/shop/files/7_10963347-20c6-4fd7-aa64-8be2e32bdaaa.png?v=1722602313&width=800",
            "title": "CO-ORD SETS",
            "onClick": "/collections/co-ord-sets"
        }
    ]
    # Replace the above static data with database queries if needed
    return Response(data)

# API Endpoint for Favourites Data
@api_view(['GET'])
def favourites_data(request):
    """Returns favourites data dynamically from the database"""
    data = [
        {
            "id": "7621700124811",
            "name": "Coral Rose Lucy Butter-Soft Cotton Knit Women's Pajama Set- Full Sleeves",
            "price": 279900,
            "salePrice": 299900,
            "imageUrl": "//massio.in/cdn/shop/files/MassioCatalogue-1537.jpg?v=1737198564&width=700",
            "link": "/collections/bestsellers/products/coral-rose-lucy-butter-soft-cotton-knit-womens-pajama-set-full-sleeves"
        },
        {
            "id": "7620579459211",
            "name": "Ivy Blue Floral Cotton Blend Women's Pajama Set- Full Sleeves",
            "price": 299900,
            "salePrice": 320000,
            "imageUrl": "//massio.in/cdn/shop/files/MassioCatalogue-733.jpg?v=1737025440&width=700",
            "link": "/collections/bestsellers/products/ivy-blue-floral-cotton-blend-womens-pajama-set-full-sleeves"
        },
    ]
    # Replace the above static data with database queries if needed
    return Response(data)

# API Endpoint for Reviews Data
@api_view(['GET'])
def reviews_data(request):
    """Returns reviews data dynamically from the database"""
    data = [
        {
            "author": "Courtney Van Winkle",
            "rating": 5,
            "text": "I have a hard time finding short sets that, not only fit, but are super comfortable..."
        },
        {
            "author": "Aditi Rana",
            "rating": 5,
            "text": "Easy buying process, timely shipping. The quality of the co-ord sets exceeded expectations..."
        },
    ]
    # Replace the above static data with database queries if needed
    return Response(data)

# API Endpoint for Video Cards Data
@api_view(['GET'])
def video_cards_data(request):
    """Returns video cards data dynamically from the database"""
    data = [
        {
            "video": "https://example.com/video1.mp4",
            "products": [
                {"title": "Product 1", "link": "/products/product-1"},
                {"title": "Product 2", "link": "/products/product-2"}
            ]
        },
        {
            "video": "https://example.com/video2.mp4",
            "products": [
                {"title": "Product 3", "link": "/products/product-3"},
                {"title": "Product 4", "link": "/products/product-4"}
            ]
        },
    ]
    # Replace the above static data with database queries if needed
    return Response(data)
