from flask import Flask, jsonify, render_template, send_file
import sqlalchemy as sql
import json
#from flask_cors import cross_origin

app=Flask(__name__)


engine=sql.create_engine('sqlite:///data/db.sqlite')


#@cross_origin()
@app.route('/data')
def return_data(): 
    results=engine.execute('select * from data').all()
    # Convert list of tuples to list of dictionaries
    keys = ['id', 'name', 'country', 'type', 'last_eruption', 'age', 'region', 'continent', 'lat', 'lon', 'elevation',             'composition', 'tectonic_settings']
    data_dict = [dict(zip(keys, values)) for values in results]

    # Convert list of dictionaries to JSON format
    json_data = json.dumps(data_dict)
    return json_data

@app.route('/icon')
def serve_icon():
    # Replace 'image.jpg' with the filename of your image
    image_filename = 'image/image3.png'
    return send_file(image_filename, mimetype='image/png')

@app.route('/image')
def serve_image():
    # Replace 'image.jpg' with the filename of your image
    image_filename = 'image/image1.jpg'
    return send_file(image_filename, mimetype='image/jpeg')


@app.route('/')
def home(): 
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)

