import sqlite3
import click
from flask import current_app, g

#conexao com banco de dados(não está pronto!!!)
#db = sqlite3.connect("DB.sqlite")
# cursor = db.cursor()

def get_db():
    if 'db' not in g:
        g.db = sqlite3.connect(
            current_app.config['DATABASE'],
            detect_types=sqlite3.PARSE_DECLTYPES
        )
        g.db.row_factory = sqlite3.Row

    return g.db

def init_db():
    db = get_db()

    with current_app.open_resource('schema.sql') as f:
        db.executescript(f.read().decode('utf8'))


@click.command('init-db')
def init_db_command():
    """Clear the existing data and create new tables."""
    init_db()
    click.echo('Initialized the database.')

def init_app(app):
    app.teardown_appcontext(close_db)
    app.cli.add_command(init_db_command)


def close_db(e=None):
    db = g.pop('db', None)

    if db is not None:
        db.close()


quadros = [
    {
        'nome': 'A Noite Estrelada',
        'ano': 1888,
        'autor': 'Vincent Van Gogh',
        'id': 0,
        'estilo': 'pos-impressionista'
    },
    {
        'nome': 'Mona lisa',
        'ano': 1506,
        'autor': 'Leonardo Da Vinci',
        'id': 1,
        'estilo': 'Renascentista'
    },
    {
        'nome': 'Guernica',
        'ano': 1937,
        'autor': 'Pablo Picasso',
        'id': 2,
        'estilo': 'Cubismo'
    },
    {
        'nome': 'Moca com Brinco de Perola',
        'ano': 1665,
        'autor': 'Johannes Vermeer',
        'id': 3,
        'estilo': 'Barroco'
    }
]