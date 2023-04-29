from flask import Flask, render_template, jsonify, request
from tinydb import Query, TinyDB
# tem que instalar o frameork flask, no terminal digite: pip install flask
# tem que intalar também o tinydb no terminal digite: pip install tinydb

app = Flask(__name__)

db = TinyDB("BD.json")
user = Query

jogos = [
    {
        'game_name': 'Mario',
        'game_id': 1,
    },
    {
        'game_name': 'Sonic',
        'game_id': 2,
    },
    {
        'game_name': 'Mortal Kombat',
        'game_id': 3,
    }
]

print(db)

# consultar(todos os jogos) 
@app.route('/jogos', methods=['GET'])
def obter_jogos():
    return jsonify(jogos)

# consultar(ID)
@app.route('/jogos/<int:id>', methods=['GET'])
def obter_jogo_por_id(id):
    for jogos in jogos:
        if jogos.get('id'):
            return jsonify(jogos)
    

#@app.route('/')
#def home():
#   return render_template('index.html')

# cria uma pagina especifica para cada usuario(assim como o facebook)
@app.route("/usuarios/<nome_usuario>")
def usuarios(nome_usuario):
    return nome_usuario


if __name__ == '__main__':
    app.run(debug=True, host='Localhost' , port=8000)