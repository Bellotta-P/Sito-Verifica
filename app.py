from flask import Flask, render_template, request, redirect, url_for, session, jsonify, flash,  render_template, Response
from flask_mysqldb import MySQL
import MySQLdb.cursors
# Regular expression operations
import re
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
import pymssql
import pandas as pd
from bson import json_util
import json
# PostgreSQL database adapter for Python
import psycopg2
import psycopg2.extras

app = Flask(__name__)

app.secret_key = 'xyzsdfg'


def connection():
    conn = pymssql.connect(server='213.140.22.237\SQLEXPRESS', user='bellotta.pietro', password='xx123##', database='')
    return conn


mysql = MySQL(app)
CORS(app)




@app.route('/docenti')
def docenti():
    # Crea una connessione
    conn = connection()
    # Crea un cursore
    cur = conn.cursor(as_dict=True)
    # Esegue la query di SQL
    cur.execute("SELECT * FROM Docenti")
    # Raccoglie tutte le righe
    list_users = cur.fetchall()
    return jsonify(list_users)
    resp = jsonify(list_users)
    # Ritorna un json.dumps
    resp = json_util.dumps(list_users)
    return Response(resp, mimetype='application/json')

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)