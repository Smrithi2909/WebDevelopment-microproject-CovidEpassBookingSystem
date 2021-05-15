import covid
from flask import Flask
from datetime import datetime

from covid import covid
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def fun():
    return "hi"


@app.route("/login", methods=['POST'])
def login():
    return "login"


@app.route("/signup", methods=['POST'])
def signup():
    return "Signing up"


# ---------------------------------------------------------------------------------------------
app.register_blueprint(covid, url_prefix="/covid")


if __name__ == "__main__":
    app.run()
