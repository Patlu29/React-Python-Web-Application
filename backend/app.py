from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

# app creation
app = Flask(__name__)
CORS(app)

# data base configuration
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///friends.db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# database created
db = SQLAlchemy(app)

import routes

# create tables
with app.app_context():
    db.create_all()

# run the app.py if main is Ture with the debug
if __name__ == "__main__":
    app.run(debug=True)
