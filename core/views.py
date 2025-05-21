from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'core/home.html')

def custom_404(request, exception):
    return render(request, '404.html', status=404)

def custom_500(request):
    return render(request, '500.html', status=500)

def developer(request):
    return render(request, 'developer.html')
