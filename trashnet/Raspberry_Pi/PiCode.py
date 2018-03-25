import RPi.GPIO as IO
import time
import sqlite3
import MySQLdb as mdb

#!/usr/bin/env python

IO.setwarnings(False)
IO.setmode(IO.BCM)
IO.setup(14,IO.IN) #GPIO 14 -> IR sensor as input

conn = mdb.Connection(db='NAME OF DATABASE', host='localhost', user='root', passwd='PASSWORD')
cur = conn.cursor()
id = 1;



def monitor:
	if(IO.input(14)==False): #object is near
		#put replace with update SQL command
		cur.execute("UPDATE visit SET time =" + time.time() + ", ")
		print ("trash thrown out")
		time.sleep(5)
		if(IO.input == False):
			print("trash is full")
			cur.execute("UPDATE alerts SET full =" + true + ". where Id = " + id)
			
while 1:
	monitor