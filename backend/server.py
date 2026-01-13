
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# Ligação à BD (Vercel usa a variável de ambiente DATABASE_URL)
client = MongoClient(os.environ.get("DATABASE_URL"))
db = client.get_database()

@app.route('/api/deals', methods=['GET'])
def get_deals():
    # Vai buscar os projetores à tua BD com os campos novos
    deals = list(db.deals.find({}, {'_id': 0}))
    return jsonify(deals)

@app.route('/api/auth/me', methods=['GET'])
def auth_me():
    # Lógica de sessão baseada no teu auth_testing.md
    return jsonify({"status": "authenticated", "user": "Test User"})

if __name__ == "__main__":
    app.run()


