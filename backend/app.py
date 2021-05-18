from bson.objectid import ObjectId
from flask.helpers import send_from_directory
from flask.json import jsonify

from flask import Flask
from datetime import datetime
from flask import request
from flask_cors.core import ACL_ALLOW_HEADERS

import pymongo
import qrcode

from covid import covid
from flask_cors import CORS,cross_origin

app = Flask(__name__)
cors = CORS(app,resources={r"/*":{"origins":"*"}})


client = pymongo.MongoClient("mongodb://localhost:27017");
db = client['epasssystem']



@app.route("/")
def fun():
    return "hi"


@app.route("/login", methods=['POST'])
def login():
    req = request.get_json()
    email = req["email"]
    password= req["password"]
    response = jsonify({"data":"User does not exists"})
    a = db["users"].find_one({"email":email,"password":password})
    if(a != None):
        response = jsonify({"id":str(a['_id'])})    
    return response


@app.route("/signup", methods=['POST'])
def signup():
    req=request.get_json()
    email=req["email"]
    password=req["password"]
    firstname=req["firstname"]
    phone=req["phone"]
    aadhar=req["aadhar"]
    address=req["address"]
    city=req["city"]
    state=req["state"]
    zip=req["zip"]
    response = jsonify({"data":"Could not add user"})
    b = db["users"].find_one({"email":email})
    a = None
    if(b == None):
         a = db["users"].insert_one({"email":email,"password":password,"firstname":firstname,"phone":phone,"aadhar":aadhar,"address":address,"city":city,"state":state,"zip":zip})
    else:
        response = jsonify({"data":"User already Exists"})
    if(a != None):
        response = jsonify({"email":email,"firstname":firstname,"phone":phone,"aadhar":aadhar,"address":address,"city":city,"state":state,"zip":zip})    
    return response



@app.route("/bookpass",methods=['POST'])
def book():
    req = request.get_json();
    a=db["passes"].insert_one(req)
    insertedId = str(a.inserted_id)
    img = qrcode.make("http://localhost:4200/confirm/info/"+insertedId)
    img.save("qrs/"+insertedId+".jpg")
    return {"id":insertedId}

@app.route("/mypass",methods=['POST'])
def mypass():
    req = request.get_json()
    a = db["passes"].find({"id":req['id']})
    res = []
    for i in a:
        res.append({"source":i["source"],"destination":i["destination"],"id":str(i["_id"])})
    return {"data":res}

 

@app.route("/getqrs/<path:path>",methods=["GET"])
def getqr(path):
    return send_from_directory("qrs",path)


@app.route("/getInfo/<id>",methods=['GET'])
def info(id):
    a  = db["passes"].find_one({"_id":ObjectId(id)})
    res = {}
    res["source"] = a["source"]
    res["destination"] = a["destination"]
    b = db["users"].find_one({"_id":ObjectId(a["id"])})
    res["email"] = b["email"]
    res["phone"] = b["phone"]
    res["aadhar"] = b["aadhar"]
    res["firstname"] = b["firstname"]
    res["qr"] = str(a["_id"])+".jpg"
    return res





# ---------------------------------------------------------------------------------------------
app.register_blueprint(covid, url_prefix="/covid")


if __name__ == "__main__":
    app.run()
