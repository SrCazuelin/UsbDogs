from django.shortcuts import render, redirect, get_object_or_404
from .models import Alumnos,Genero
from .models import Product, Cart, CartItem
from django.contrib.auth.decorators import login_required

# Create your views here.

def index(request):
    alumnos=Alumnos.objects.all()
    context={}
    return render(request, 'alumnos/index.html', context)
    
def register(request):
    context={}
    return render(request, 'alumnos/register.html', context)

def login(request):
    context={}
    return render(request, 'alumnos/login.html', context)

def carrito(request):
    context = {}
    return render(request, 'alumnos/carrito.html', context)

def victus(request):
    context = {}
    return render(request, 'alumnos/victus.html', context)

def asus(request):
    context = {}
    return render(request, 'alumnos/asus.html', context)

def blank_page(request):
    context = {}
    return render(request, 'alumnos/blank_page.html', context)

def quienes_somos(request):
    context = {}
    return render(request, 'alumnos/quienes_somos.html', context)

def productos(request):
    context = {}
    return render(request, 'alumnos/productos.html', context)



@login_required
def add_to_cart(request, product_id):
    product = get_object_or_404(Product, id=product_id)
    cart, created = Cart.objects.get_or_create(user=request.user)
    cart_item, created = CartItem.objects.get_or_create(cart=cart, product=product)
    cart_item.quantity += 1
    cart_item.save()
    return redirect('cart_detail')

@login_required
def cart_detail(request):
    cart = Cart.objects.get_or_create(user=request.user)[0]
    cart_items = CartItem.objects.filter(cart=cart)
    total_price = sum(item.product.price * item.quantity for item in cart_items)
    return render(request, 'alumnos/carrito.html', {'cart_items': cart_items, 'total_price': total_price})

@login_required
def remove_from_cart(request, product_id):
    cart = get_object_or_404(Cart, user=request.user)
    product = get_object_or_404(Product, id=product_id)
    cart_item = get_object_or_404(CartItem, cart=cart, product=product)
    cart_item.delete()
    return redirect('cart_detail')

def product_detail(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    # Ahora puedes acceder al id del producto con product.id
    print(product.id)  # Imprime el id del producto
    return render(request, 'carrito.html', {'product': product})

def cart(request):
    cart = Cart.objects.get_or_create(user=request.user)[0]
    products = cart.products.all()
    print(products)
    return render(request, 'carrito.html', {'products': products})