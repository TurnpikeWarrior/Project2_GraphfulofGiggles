# get dependencies
from __future__ import print_function
from uszipcode import ZipcodeSearchEngine

from flask import Flask, jsonify, render_template, request 
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

#Flask setup 
app = Flask(__name__)

# data setup
engine = create_engine("mysql+mysqldb://root:AshPon@localhost/where_are_your_stores?host=localhost?port=3306")
conn = engine.connect()

# define search object for uszips
# search = ZipcodeSearchEngine()
# zipcode = search.by_state('New Jersey', returns=0)
# print(zipcode)

# start the engine
@app.route("/")
def homepage():
	return render_template("index.html")
# define a route called by index and base js
# this route will return all the stores information from the file in a list
# the file I loaded I will convert it into a list and return it 
# you need to assume that you have the list and continue workking
# that cities list in the class code, just replace with a few sample data and go on....

@app.route("/app/yourloc")
def yourLoc():
	# define vars 
	names= []
	namesDict = {}

	sqlStoresStr = ("SELECT \
		              njstores.LOCATION_NAME,\
	    			  njstores.CITY_NAME,\
	    			  njstores.POSTAL_CD,\
	     			  njstores.LATITUDE_MEAS,\
	    			  njstores.LONGITUDE_MEAS,\
	    			  njstores.CH_ZIP\
			 	 FROM where_are_your_stores.njstores")

	# Grab the file and return all store locations
	results = conn.execute(sqlStoresStr)

	# print all the first cell of all the rows
	for row in results:
		namesDict = {}
		namesDict["StoreName"] = row.LOCATION_NAME
		namesDict["City"] = row.CITY_NAME
		namesDict["Zip"]  = row.POSTAL_CD
		namesDict["Lat"]  = row.LATITUDE_MEAS
		namesDict["Long"] = row.LONGITUDE_MEAS
		names.append(namesDict)

	return jsonify(names)

@app.route("/app/allZips", methods=['GET'])
def getZips():
	# get variables passed
	stName = request.args.get('Store')
	rad = request.args.get('Radius')

	# declare local vars
	resList = []
	resDict = {}

	# sqlStr = ("SELECT \
 #     			  njstores.LATITUDE_MEAS,\
 #    			  njstores.LONGITUDE_MEAS\
	# 	 	 FROM where_are_your_stores.njstores\
	# 	 	WHERE LOCATION_NAME = '" + stName +"'")
	sqlStr = ("SELECT \
 			  njstores.LATITUDE_MEAS,\
			  njstores.LONGITUDE_MEAS\
	 	 FROM where_are_your_stores.njstores\
	 	WHERE LOCATION_NAME = 'MATAWAN' ")

	# Grab the file and return all store locations
	results = conn.execute(sqlStr)

	for row in results:
		resDict["Lat"] = row.LATITUDE_MEAS
		resDict["Long"] = row.LONGITUDE_MEAS
		stLat = row.LATITUDE_MEAS
		stLong = row.LONGITUDE_MEAS

		resList.append(resDict)

	# execute 
	search = ZipcodeSearchEngine()

	# by default it returns only 5 zipcodes
	# res = search.by_coordinate(baseLat, baseLong, radius=rad)
	res = search.by_coordinate(stLat, stLong, radius=rad, returns=0)

	allZips = []
	for aRec in res:
		allZips.append(aRec.Zipcode)
		# allPop.append(aRec.Population)
		# allIncome.append(aRec.Total)
	return (allZips)


# zipList = getZips(39.122229, -77.133578, 10)

# for zip in zipList:
# 	zipInfo = search.by_zipcode(zip)
# 	print(zipInfo)

#Default app settings
if __name__ == '__main__':
	app.run(debug=True)