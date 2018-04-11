##import RPi.GPIO as IO
import time
import sqlite3
import datetime
#Server Connection to MySQL:
import MySQLdb

##SONAR
import RPi.GPIO as GPIO

##
##IO.setwarnings(False)
##IO.setmode(IO.BCM)
##IO.setup(14,IO.IN) #GPIO 14 -> IR sensor as input

## 0 = empty
## 1 = full
## 3 = trash thrown 

conn = MySQLdb.connect(host= "trashnet.ece.iastate.edu",user="logan",passwd="ROFLdb!789",db="trashnet_db")
cursor = conn.cursor()
status = "empty";
id = 1
##full = false

def monitor():
	if(IO.input(14)==False): #object is near
		db.execute("INSERT INTO eventsLog (UnitId, EventType, EventTime) VALUES (" + id + ", 3," + datetime.time() +")")
		print ("trash thrown in")
		time.sleep(0.5)
		
		if(IO.input(14) == False):
			print("trash is full")
			trash = "full"
			##sql update
			try:
   				cursor.execute("UPDATE binStatus SET Status ='Full' WHERE UnitId = " + id)
   				conn.commit()
			except:
   				conn.rollback()
	
while 1:
	monitor()
	time.sleep(0.5)
