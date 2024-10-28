from django.urls import path
from .views import add_to_cart, cart_detail, remove_from_cart
from . import views
urlpatterns = [
    path('index', views.index, name='index'),
    path('login', views.login, name='login'),
    path('register', views.register, name='register'),
    path('carrito/', views.carrito, name='carrito'),
    path('victus/', views.victus, name='victus'),
    path('asus/', views.asus, name='asus'),
    path('blank_page/', views.blank_page, name='blank_page'),
    path('quienes_somos/', views.quienes_somos, name='quienes_somos'),
    path('productos/', views.productos, name='productos'),
    
    path('add-to-cart/<int:product_id>/', add_to_cart, name='add_to_cart'),
    path('cart/', cart_detail, name='cart_detail'),
    path('remove-from-cart/<int:product_id>/', remove_from_cart, name='remove_from_cart'),
]
    
    
    
    




