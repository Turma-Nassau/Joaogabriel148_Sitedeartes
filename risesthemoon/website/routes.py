from flask import render_template, jsonify
from db import quadros
from flask import Blueprint
from auth import auth

routes = Blueprint('routes', __name__, template_folder='templates')


@routes.route('/')
def login():
    return render_template("cadastro.html")

@routes.route('/home')
def home():
    return render_template('index.html')

@routes.route("/usuarios/<nome_usuario>")
def usuarios(nome_usuario):
    return nome_usuario

@routes.route('/quadros', methods=['GET'])
def obter_quadros():
    return jsonify(quadros)

@routes.route('/quadros/<int:id>', methods=['GET'])
def obter_quadros_porID(id):
    for quadro in quadros:
        if quadro.get('id') == id:
            return jsonify(quadro)
  
            