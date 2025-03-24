from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserListCreate.as_view(), name='user-list-create'),
    path('products/', views.ProductListCreate.as_view(), name='product-list-create'),
    path('orders/', views.OrderListCreate.as_view(), name='order-list-create'),
    path('columnStructureData/', views.column_structure_data, name='column-structure-data')
]
