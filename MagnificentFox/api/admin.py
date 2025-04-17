from django.contrib import admin
from .models import User, Product, Tag, Offer, ProductImage, ProductVideo, Order, OrderItem, Cart, CartItem, Wishlist, WishlistItem, OTP

admin.site.register(User)
admin.site.register(Product)
admin.site.register(Tag)
admin.site.register(Offer)
admin.site.register(ProductImage)
admin.site.register(ProductVideo)
admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Cart)
admin.site.register(CartItem)
admin.site.register(Wishlist)
admin.site.register(WishlistItem)
admin.site.register(OTP)

admin.site.site_header = "Magnificent Fox Administration"
admin.site.site_title = "Magnificent Fox Admin Portal"
admin.site.index_title = "Welcome to the Magnificent Fox Admin"
