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
engine = create_engine("mysql+mysqldb://root:Christyajrc1*@localhost/where_are_your_stores?host=localhost?port=3306")
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

@app.route("/allStores")
def allStores():
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
		LocList = []
		namesDict["StoreName"] = row.LOCATION_NAME
		namesDict["City"] = row.CITY_NAME
		namesDict["Zip"]  = row.POSTAL_CD
		LocList.append(row.LATITUDE_MEAS)
		LocList.append(row.LONGITUDE_MEAS)
		namesDict["Location"] = LocList
		# namesDict["Lat"]  = row.LATITUDE_MEAS
		# namesDict["Long"] = row.LONGITUDE_MEAS
		names.append(namesDict)

	return jsonify(names)

@app.route("/allZips", methods=['GET'])
def getZips():
	# get variables passed
	stName = request.args.get('Store')
	stRad = request.args.get('Scope')
	sqlStr = ("SELECT \
				  njstores.LATITUDE_MEAS,\
				  njstores.LONGITUDE_MEAS\
		 	 FROM where_are_your_stores.njstores\
		 	WHERE LOCATION_NAME = '" + stName + "'")

	# Grab the file and return all store locations
	results = conn.execute(sqlStr)
	resDict = {}
	resList = []

	for row in results:
		resDict["Lat"] = row.LATITUDE_MEAS
		resDict["Long"] = row.LONGITUDE_MEAS
		stLat = row.LATITUDE_MEAS
		stLong = row.LONGITUDE_MEAS
		resList.append(resDict)

	stRad = int(stRad)
	# stRad = request.args.get('Scope')
	search = ZipcodeSearchEngine()
	res = search.by_coordinate(stLat, stLong, radius=stRad, returns=0)
	# print(res)

	allZips = []
	for aRec in res:
		zDict = {}
		# allZips.append(aRec.Zipcode)
		# allPop.append(aRec.Population)
		# allIncome.append(aRec.Total)
		zDict["City"] = aRec.Zipcode
		zDict["Density"] = aRec.Zipcode
		zDict["HouseOfUnits"] = aRec.Zipcode
		zDict["LandArea"] = aRec.Zipcode
		zDict["Latitude"] = aRec.Zipcode
		zDict["Longitude"] = aRec.Zipcode
		zDict["NEBoundLatitude"] = aRec.Zipcode
		zDict["NEBoundLongitude"] = aRec.Zipcode
		zDict["Population"] = aRec.Zipcode
		zDict["SWBoundLatitude"] = aRec.Zipcode
		zDict["SWBoungLongitude"] = aRec.Zipcode
		zDict["State"] = aRec.Zipcode
		zDict["TotalWages"] = aRec.Zipcode
		zDict["WaterArea"] = aRec.Zipcode
		zDict["Wealthy"] = aRec.Zipcode
		zDict["Zipcode"] = aRec.Zipcode
		zDict["ZipcodeType"] = aRec.Zipcode

		
		allZips.append(zDict)

	return jsonify(allZips)


#Default app settings
if __name__ == '__main__':
	app.run(debug=True)