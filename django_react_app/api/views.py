from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

users_list  = [
        {"id": 1, "name": "John Doe"},
        {"id": 2, "name": "Jane Smith"},
        {"id": 3, "name": "Alice Johnson"},
    ]

@api_view(['GET'])
def welcome(request):
    return Response({"message": "Welcome to my website!"})

@api_view(['GET'])
def users(request):
    return Response(users_list)

@api_view(['POST'])
def add_user(request):
    data = request.data
    new_user = {
        "id": len(users_list) + 1,
        "name" : data.get("name"),
    }
    users_list.append(new_user)
    return Response(new_user, status=status.HTTP_201_CREATED)
