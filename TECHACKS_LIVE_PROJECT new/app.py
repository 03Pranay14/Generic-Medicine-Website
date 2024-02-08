from flask import Flask, render_template, request
import mysql.connector

app = Flask(__name__)#makes an app in the current python file

# Connect to MySQL
connection = mysql.connector.connect(host="localhost", user="root", password="amit", database="amit")

@app.route('/') #a decorator, it gets triggered when the base url is entered in a browser
def index():
    return render_template('index.html')

@app.route('/search1')
def search1():
    return render_template('search1.html')


@app.route('/testimonial')
def testimonial():
    return render_template('testimonial.html')


@app.route('/search', methods=['POST'])
def search():
    cursor = connection.cursor()

    # Retrieve the search term from the HTML form
    search_term = request.form['search_term']

    # Execute a SELECT query with a parameterized query to avoid SQL injection
    query = "SELECT generic,nongeneric,image_link,purpose FROM medicine WHERE generic LIKE %s or nongeneric like %s"
    cursor.execute(query, ('%' + search_term + '%','%' + search_term + '%'))

    # Fetch all rows+
    rows = cursor.fetchall()

    # Close the cursor
    cursor.close()

    # Pass the data to the HTML template
    return render_template('search_results.html', search_term=search_term, rows=rows)

if __name__ == '__main__':
    app.run(debug=True) #runs the Flask development server

