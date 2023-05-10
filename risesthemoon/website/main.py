# tem que instalar o micro-frameork web flask, no terminal digite: pip install flask
from flask import Flask, request
from routes import routes
import os
import sqlite3
from db import quadros

app = Flask(__name__)
app.register_blueprint(routes, url_prefix ="/")
# a linha abaixo vai cripitografar ou proteger os cookies e dados de sessão relacionados ao site
app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite'),
    )

if __name__ == '__main__':
    app.run(debug=True, host='Localhost' , port=8000)