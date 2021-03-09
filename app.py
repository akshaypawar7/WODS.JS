from flask import Flask,render_template,jsonify
from flask_cors import CORS

def js(fName):
    from json import load
    with open(fName)as f:
        a = load(f)
        f.close()
    return a


app = Flask(__name__)
CORS(app)

@app.route('/')
def table():
    return render_template('index.html')

@app.route('/dd')
def daily():
    return jsonify(js('eod_Data/json/MT_indiwidgets.json'))

app.run()
