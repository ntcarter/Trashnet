import RPi.GPIO as IO
import time
import sqlite3
import MySQLdb as mdb

#!/usr/bin/env python
IO.setwarnings(False)
IO.setmode(IO.BCM)
IO.setup(14,IO.IN) #GPIO 14 -> IR sensor as input

conn = mdb.Connection(db='NAME OF DATABASE', host='localhost', user='root', passwd='PASSWORD')
db = conn.cursor()
id = 1;
full = false

def monitor:
	if(IO.input(14)==False): #object is near
		#put replace with update SQL command
		db.execute("UPDATE visit SET time =" + time.time() + ", ")
		print ("trash thrown out")
		time.sleep(0.5)
		
		if(IO.input(14) == False):
			print("trash is full")
			db.execute("UPDATE alerts SET full =" + true + ". where Id = " + id + "time = " + time.time())
			
while 1:
	monitor