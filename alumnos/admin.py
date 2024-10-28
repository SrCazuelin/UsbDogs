from django.contrib import admin
from .models import Genero, Alumnos
from .models import Product, Cart, CartItem

# Register your models here.

admin.site.register(Genero)
admin.site.register(Alumnos)
admin.site.register(Product)
admin.site.register(Cart)
admin.site.register(CartItem)