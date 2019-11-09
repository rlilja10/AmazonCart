from flask import Flask, request

app = Flask(__name__)

@app.route('/', methods=['GET'])
def health_check():
    return "Healthy\n"

@app.route('/getImageFromLink', methods=['GET'])
def get_image():
    return request.args.get('url')
