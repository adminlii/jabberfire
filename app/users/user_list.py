
from flask import Blueprint, request, redirect, abort, make_response, jsonify, render_template,g
from model import User as UserModel
from flask_jwt import jwt_required, current_user

from app import jwt, api
from flask_restful import  Resource

user_list_blueprint = Blueprint('user_list_blueprint', __name__)
api.init_app(user_list_blueprint)


class UserList(Resource):

    method_decorators = [jwt_required()]

    def get(self):
        userlist = []

        for user in UserModel.list():
            userroles = []
            for role in current_user.roles:
                userroles.append({
                    'id': role.id,
                    'name': role.name
                })

            model = {

                    'id': user.id,
                    'firstname': user.firstname,
                    'lastname': user.lastname,
                    'email': user.email,
                    'username': user.username,
                    'employee_id': user.employee_id,
                    'status': user.status,
                    'roles': userroles
            }
            userlist.append(model)
        return jsonify({'users': userlist})

    def post(self):
        json = request.json['user']
        print json
        return '', 400

api.add_resource(UserList, '/api/users')

