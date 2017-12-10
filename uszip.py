from __future__ import print_function
from uszipcode import ZipcodeSearchEngine
search = ZipcodeSearchEngine()
zipcode = search.by_zipcode(7039)
print(zipcode)


def getZips(baseLat, baseLong, rad):
    # by default it returns only 5 zipcodes
    # res = search.by_coordinate(baseLat, baseLong, radius=rad)
    res = search.by_coordinate(baseLat, baseLong, radius=rad, returns=0)

    allZips = []

    for aRec in res:
        # print(aRec.to_json())
        allZips.append(aRec.Zipcode)

    return allZips

zipList = getZips(39.122229, -77.133578, 10)

for zip in zipList:
    print(zip)

