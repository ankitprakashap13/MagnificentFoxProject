import os
import sys
import django
import random
from django.utils import timezone

# Add the project directory to the Python path
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'MagnificentFox.settings')
django.setup()

from api.models import User, Product, Tag, Offer, ProductImage, ProductVideo, Order, OrderItem, Cart, CartItem, Wishlist, WishlistItem

def create_dummy_data():
    # Create 5 users
    users = []
    for i in range(5):
        user = User.objects.create_user(
            username=f'user{i}',
            name=f'User {i}',
            email=f'user{i}@example.com',
            mobile=f'123456789{i}',
            password='password',
            dob=timezone.now().date(),
            gender='Male' if i % 2 == 0 else 'Female'
        )
        users.append(user)

    # Create 30 products
    products = []
    for i in range(30):
        product = Product.objects.create(
            name=f'Product {i}',
            description=f'This is the description for product {i}.',
            price=random.uniform(10.0, 100.0),
            mrp=random.uniform(10.0, 100.0),
            discount_percentage=random.uniform(0.0, 50.0),
            inclusive_of_taxes=True,
            sizes='S,M,L,XL',
            quantity=random.randint(1, 100),
            dispatch_time='2-3 days',
            cash_on_delivery=True,
            return_policy='30 days return policy',
            details=f'Details of product {i}',
            design_and_fit=f'Design and fit of product {i}',
            fabric_and_care=f'Fabric and care instructions for product {i}',
            customer_reviews=f'Customer reviews for product {i}',
        )
        products.append(product)

    # Create tags
    tags = []
    for i in range(5):
        tag = Tag.objects.create(name=f'Tag {i}')
        tags.append(tag)

    # Create offers
    offers = []
    for i in range(5):
        offer = Offer.objects.create(
            name=f'Offer {i}',
            discount_percentage=random.uniform(5.0, 20.0),
            start_date=timezone.now(),
            end_date=timezone.now() + timezone.timedelta(days=30)
        )
        offers.append(offer)

    # Assign tags and offers to products
    for product in products:
        product.tags.set(random.sample(tags, k=random.randint(1, 3)))
        product.offers.set(random.sample(offers, k=random.randint(1, 2)))

    # Create product images and videos
    for product in products:
        for j in range(3):
            ProductImage.objects.create(product=product, image=f'product_images/image{j}.jpg')
            ProductVideo.objects.create(product=product, video=f'product_videos/video{j}.mp4')

    # Create orders for users
    for user in users:
        order = Order.objects.create(user=user, total_price=random.uniform(50.0, 500.0))
        for _ in range(random.randint(1, 5)):
            OrderItem.objects.create(order=order, product=random.choice(products), quantity=random.randint(1, 5), price=random.uniform(10.0, 100.0))

    # Create carts for users
    for user in users:
        cart = Cart.objects.create(user=user)
        for _ in range(random.randint(1, 5)):
            CartItem.objects.create(cart=cart, product=random.choice(products), quantity=random.randint(1, 5))

    # Create wishlists for users
    for user in users:
        wishlist = Wishlist.objects.create(user=user)
        for _ in range(random.randint(1, 5)):
            WishlistItem.objects.create(wishlist=wishlist, product=random.choice(products))

if __name__ == '__main__':
    create_dummy_data()
