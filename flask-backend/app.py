import flask
from flask import Flask, request, jsonify
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials

app = Flask(__name__, static_folder="/Users/joelsaarinen/projects/swabuildtwo/flask-backend/static")

# for artist searched by user, compiles the top ten songs of artist in 
# dictionary by [song name] : [song Spotify ID]. 
def makeSongDict(bigtrackdataobject):
    songinfodict = {}
    for track in bigtrackdataobject['tracks'][:10]:
        songinfodict[(track['name'])] = track['id']
    return songinfodict    

@app.route("/", methods = ['GET', 'POST'] )
def my_index():
    if request.method == "POST":
        rawformdata = (request.form).values()
        value_iterator = iter(rawformdata)
        convformdata = next(value_iterator)
        client_id = '85725aa023e545729e6630b2a369cf90'
        client_secret = '1abf0e31be774f2d9fb434adb538ae87'
        spotify = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id, client_secret))
        searchbynameresult = spotify.search(q='artist:' + convformdata, type='artist')
        artistitems = searchbynameresult['artists']['items']
        artist = artistitems[0]
        artist_uri = artist['uri']
        trackresults = spotify.artist_top_tracks(artist_uri)
        songinfodict = makeSongDict(trackresults)
        return jsonify(songinfodict)
    else:
        return flask.render_template("index.html")


app.run(debug=True)    