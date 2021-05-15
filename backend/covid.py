from flask import Blueprint
import requests as re
covid = Blueprint("covid", __name__)


@covid.route("/", methods=['GET'])
def indiaNums():
    r = re.get("https://api.rootnet.in/covid19-in/stats/latest")
    data = r.json()
    return dict(data["data"]["unofficial-summary"][0])


@covid.route("state/<state>", methods=['GET'])
def district(state):
    r = re.get("https://api.rootnet.in/covid19-in/stats/latest")
    data = r.json()
    data = data["data"]["regional"]
    result = "None"
    for i in data:
        if(i["loc"] == state):
            result = i
            break
    return result
@covid.route("/region", methods=['GET'])
def region():
    r=re.get("https://api.rootnet.in/covid19-in/stats/latest")
    data=r.json()
    d={"data":(data["data"]["regional"])}

    return d
