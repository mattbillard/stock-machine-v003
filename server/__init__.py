import config
import controllers
import flask
import os
from models.model_helper import ModelHelper

# @TODO@mattbillard finish
server = flask.Flask(__name__, template_folder='templates', static_url_path="", static_folder="../public/dev")
# server = flask.Flask(__name__, template_folder='templates', static_url_path="", static_folder="../public/prod")


server.config.update(dict(
    DATABASE=os.path.join(server.root_path, '../data/stocks.db'),
    DEBUG=True,
    PORT=5000,
    SECRET_KEY='\x17\x96e\x94]\xa0\xb8\x1e\x8b\xee\xdd\xe9\x91^\x9c\xda\x94\t\xe8S\xa1Oe_',
    USERNAME='web',
    PASSWORD='site'
))
server.config.from_envvar('CONFIG', silent=True)


@server.teardown_appcontext
def close_db(error):
    ModelHelper.close_db()


server.register_blueprint(controllers.home.blueprint)
server.register_blueprint(controllers.stocks.blueprint)

ModelHelper.init_db_if_empty()
