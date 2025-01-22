from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from datetime import date

import os

app = Flask(__name__)




# Allow CORS for requests from http://localhost:5173
CORS(app, resources={r"/*": {"origins": "*"}})

# Get the absolute path to the server directory
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
THOUGHTS_FILE = os.path.join(BASE_DIR, "thoughts.json")
BOOK_FILE = os.path.join(BASE_DIR, "books.json")

@app.route("/thoughts", methods=["GET", "POST", "OPTIONS"])
def thoughts():

    #We need to handle the OPTIONS request to allow the frontend to make requests for advanced data structures like JSON that we are sending over 
    if request.method == "OPTIONS":
        response = jsonify({})
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == "POST":
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        data["time"] = date.today().strftime("%m-%d-%Y")
        
        # Debug print statements
       # print(f"Looking for file at: {THOUGHTS_FILE}")
       # print(f"Current working directory: {os.getcwd()}")
        
        thoughts = []
        try:
            with open(THOUGHTS_FILE, "r") as file:
                thoughts = json.load(file)
        except FileNotFoundError:
            # If file doesn't exist, we'll create it with the first thought
            print(f"Creating new file at: {THOUGHTS_FILE}")
            
        thoughts.insert(0, data)
        
        # Ensure the file is created/updated
        with open(THOUGHTS_FILE, "w") as file:
            json.dump(thoughts, file, indent=4)
            
        return jsonify({"message": "Thought saved successfully"}), 200

    if request.method == "GET":
        try:
            with open(THOUGHTS_FILE, "r") as file:
                thoughts = json.load(file)
        except FileNotFoundError:
            print("File not found")
            thoughts = []  # Return empty list if file doesn't exist
        return jsonify(thoughts), 200


@app.route("/books", methods=["GET", "POST", "OPTIONS"])
def books():

    #We need to handle the OPTIONS request to allow the frontend to make requests for advanced data structures like JSON that we are sending over 
    if request.method == "OPTIONS":
        response = jsonify({})
        response.headers.add('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == "POST":
        data = request.json
        if not data:
            return jsonify({"error": "No data provided"}), 400
        
        data["time"] = date.today().strftime("%m-%d-%Y")
        
        # Debug print statements
       # print(f"Looking for file at: {THOUGHTS_FILE}")
       # print(f"Current working directory: {os.getcwd()}")
        
        thoughts = []
        try:
            with open(BOOK_FILE, "r") as file:
                thoughts = json.load(file)
        except FileNotFoundError:
            # If file doesn't exist, we'll create it with the first thought
            print(f"Creating new file at: {BOOK_FILE}")
            
        thoughts.insert(0, data)
        
        # Ensure the file is created/updated
        with open(BOOK_FILE, "w") as file:
            json.dump(thoughts, file, indent=4)
            
        return jsonify({"message": "Thought saved successfully"}), 200

    if request.method == "GET":
        try:
            with open(BOOK_FILE, "r") as file:
                thoughts = json.load(file)
        except FileNotFoundError:
            print("File not found")
            thoughts = []  # Return empty list if file doesn't exist
        return jsonify(thoughts), 200

if __name__ == "__main__":
    app.run(port=5000, debug=True)
