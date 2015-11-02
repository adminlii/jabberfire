
from flask import Flask, Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_cors import CORS
from flask_jwt import JWT, JWTError
from flask_restful import Api


db = SQLAlchemy()
mail = Mail()



class ErrorFriendlyApi(Api):
    def error_router(self, original_handler, e):
        if type(e) is JWTError:
            return original_handler(e)
        else:
            return super(ErrorFriendlyApi, self).error_router(original_handler, e)

api = ErrorFriendlyApi()
jwt = JWT()
from app.users.model import user_datastore, User

def create_app(debug=False):
    # Instantiate the application object
    app = Flask(__name__)

    CORS(app, resources='*', allow_headers='*')
    # Register the blueprints

    from app.admin.controller import admin
    app.register_blueprint(admin)

    from app.testing.controller import testing
    app.register_blueprint(testing)

    from app.roles.controller import role_bp
    app.register_blueprint(role_bp)

    from app.roles.controller import role_list_bp
    app.register_blueprint(role_list_bp)

    from app.users.controller import user
    app.register_blueprint(user)

    from app.users import user_list
    app.register_blueprint(user_list)

    from app.users.controller import c_user
    app.register_blueprint(c_user)

    # Set configurations
    app.config.update(
        DEBUG=debug,

        # EMAIL SETTINGS
        MAIL_SERVER='smtp.gmail.com',
        MAIL_PORT=465,
        MAIL_USE_SSL=True,
        MAIL_USERNAME='the.auto.server@gmail.com',
        MAIL_PASSWORD='autopass',

        # DATABASE SETTINGS
        SECRET_KEY=':r7^97B)qA8{>|{8TXDz"4]1bt>O%s',
        SQLALCHEMY_DATABASE_URI='mysql://root:password@localhost/ccmh',
        SQLALCHEMY_COMMIT_ON_TEARDOWN=True,

        # TEMPLATE PATHS
        CSS='/static/css/',
        PLUGIN='/static/plugin/',
        IMG='/static/img/',
        JS='/static/js/',

        # SECURITY CORE
        SECURITY_PASSWORD_HASH='sha512_crypt',
        SECURITY_PASSWORD_SALT='FLAPPYflapflapflap',
        # SECURITY TEMPLATE PATHS

        JWT_EXPIRATION_DELTA=3600
    )



    # Initiate the database object
    db.init_app(app)

    # Create the Database
    with app.app_context():

        db.create_all()

    # Initiate the Mail object
    mail.init_app(app)

    # Initiate the socketio object
    socket.init_app(app)

    jwt.init_app(app)

    return app


