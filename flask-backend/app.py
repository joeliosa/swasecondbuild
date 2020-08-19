import flask
from flask import Flask

app = Flask(__name__, static_folder="/Users/joelsaarinen/projects/swabuildtwo/flask-backend/static")

@app.route("/")
def my_index():
    return flask.render_template("index.html")

app.run(debug=True)    