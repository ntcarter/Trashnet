##import RPi.GPIO as IO
import time
import sqlite3
import MySQLdb as mdb

##SONAR
import RPi.GPIO as GPIO

def distance():

	GPIO.setmode(GPIO.BCM)

	OUTPUT = 23 
	INPUT = 24

	print "Distance Measurement In Progress"

	GPIO.setup(OUTPUT,GPIO.OUT)
	GPIO.setup(INPUT,GPIO.IN)

	GPIO.output(OUTPUT, False)
	print "Waiting For Sensor To Settle"
	time.sleep(2)

	GPIO.output(OUTPUT, True)
	time.sleep(0.00001)
	GPIO.output(OUTPUT, False)

	while GPIO.input(INPUT)==0:
  		pulse_start = time.time()

	while GPIO.input(INPUT)==1:
  		pulse_end = time.time()

	pulse_duration = pulse_end - pulse_start

	distance = pulse_duration * 17150

	distance = round(distance, 2)

	print "Distance:",distance,"cm"
	GPIO.cleanup()
	return distance

##


































##IO.setwarnings(False)
##IO.setmode(IO.BCM)
##IO.setup(14,IO.IN) #GPIO 14 -> IR sensor as input

conn = sqlite3.Connection(db='test', host='trashnet.ece.iastate.edu', user='root', passwd='PASSWORD')

db = conn.cursor()
id = 1;
## 0 = empty
## 1 = full
## 3 = trash thrown 
status = 0;
##full = false

def monitor():
	if(IO.input(14)==False): #object is near
		db.execute("UPDATE events SET location = 'East Side' where ID = " + id)
		print ("trash thrown out")
		time.sleep(0.5)
		
		if(IO.input(14) == False):
			print("trash is full")
			db.execute("UPDATE alerts SET full =" + true + ". where Id = " + id + "time = " + time.time())
		else
			print("trash has been thrown in")
			db.execute("INSERT INTO eventsLog (UnitId, EventType, EventTime) VALUES (" + id + ", 3,"  + time.time() + ")")



def test():
	print("Hello", flush=True)
	time.sleep(1)
	print("World", flush=True)
	time.sleep(1)
	
while 1:
	monitor()
	time.sleep(0.5)
