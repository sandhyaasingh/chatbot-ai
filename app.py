from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from chat import get_response
import download_nltk_data

app = Flask(__name__)
CORS(app)

# Add this route to serve the HTML file
@app.route("/")
def home():
    return render_template("index.html")  # Ensure 'index.html' is in the 'templates' folder

@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    response = get_response(text)
    return jsonify({"answer": response})  # Fixed response format

if __name__ == "__main__":
    app.run(debug=True, port=8000)
