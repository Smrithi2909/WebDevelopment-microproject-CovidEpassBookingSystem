from flask.json import jsonify
import covid
from flask import Flask
from datetime import datetime
from flask import request

from covid import covid
from flask_cors import CORS,cross_origin

app = Flask(__name__)
cors = CORS(app)

@app.route("/")
def fun():
    return "hi"


@app.route("/login", methods=['POST'])
def login():
    req = request.get_json()
    email = req["email"]
    password= req["password"]
    response = jsonify({"data":email})
    response.headers.add("Access-Control-Allow-Origin","*")
    return response


@app.route("/signup", methods=['POST'])
def signup():
    return "Signing up"


# ---------------------------------------------------------------------------------------------
app.register_blueprint(covid, url_prefix="/covid")


if __name__ == "__main__":
    app.run()
