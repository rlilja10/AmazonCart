from flask import Flask, request, jsonify
import utils

app = Flask(__name__)

@app.route('/', methods=['GET'])
def health_check():
    return "Healthy\n"

@app.route('/get_image', methods=['GET'])
def get_image():
    return utils.get_image(request.args.get('url'))

@app.route('/get_price', methods=['GET'])
def get_price():
    return utils.get_price(request.args.get('url'))

@app.route('/get_info', methods=['GET'])
def get_info():
    info = utils.get_info(request.args.get('url'))
    return jsonify(price=info['price'], image=info['image'])