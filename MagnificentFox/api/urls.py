from django.urls import path
from . import views

urlpatterns = [
    path('users/', views.UserListCreate.as_view(), name='user-list-create'),
    path('products/', views.ProductListCreate.as_view(), name='product-list-create'),
    path('orders/', views.OrderListCreate.as_view(), name='order-list-create'),
    path('columnStructureData/', views.column_structure_data, name='column-structure-data'),
    path('list-products/', views.list_products, name='list-products'),
    path('card-list-data/', views.card_list_data, name='card-list-data'),
    path('favourites-data/', views.favourites_data, name='favourites-data'),
    path('reviews-data/', views.reviews_data, name='reviews-data'),
    path('video-cards-data/', views.video_cards_data, name='video-cards-data')
]
