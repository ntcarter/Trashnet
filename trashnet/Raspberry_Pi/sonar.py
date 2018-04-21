#!/usr/bin/python  
import time  
import RPi.GPIO as GPIO 
import datetime
#Server Connection to MySQL:
import MySQLdb

  
  
# SONAR DISTANCE MEASURE  
GPIO.setmode(GPIO.BOARD)  
def ReadDistance(pin):  
   GPIO.setup(pin, GPIO.OUT)  
   GPIO.output(pin, 0)  
  
   time.sleep(0.000002)  
  
  
   #send trigger signal  
   GPIO.output(pin, 1)  
  
  
   time.sleep(0.000005)  
  
  #stop sending trigger
   GPIO.output(pin, 0)  
  
  #receive trigger setup
   GPIO.setup(pin, GPIO.IN)  
  
  
   while GPIO.input(pin)==0:  
      starttime=time.time()  
  
  
   while GPIO.input(pin)==1:  
      endtime=time.time()  
        
   duration=endtime-starttime  
   # Distance is defined as time/2 (there and back) * speed of sound 34000 cm/s   
   distance=duration*34000/2  
   return distance * .3937
  


# SQL CONNECTION

id = 1
trashStatus = "empty"
lastDistance = ReadDistance(11);

while True:  
   distance = ReadDistance(11)   
   time.sleep(1)  
   if(lastDistance-distance > 4):
         print("bin visited")
         trashStatus = "full"
         ##sql update
         conn = MySQLdb.connect(host= "trashnet.ece.iastate.edu",user="logan",passwd="ROFLdb!789",db="trashnet_db")
         x = conn.cursor()
         try:
               cursor.execute("INSERT INTO binStatus (UnitId, EventType, EventTime) VALUES(" + id + ", 3, " +datetime.datetime.now())
               conn.commit()
         except:
               conn.rollback()

   if(distance < 5 and trashStatus == "empty"):
         print("trash is full")
         trashStatus = "full"
         ##sql update
         conn = MySQLdb.connect(host= "trashnet.ece.iastate.edu",user="logan",passwd="ROFLdb!789",db="trashnet_db")
         x = conn.cursor()
         try:
               cursor.execute("UPDATE binStatus SET Status ='Full' WHERE UnitId = " + id)
               cursor.execute("INSERT INTO binStatus (UnitId, EventType, EventTime) VALUES(" + id + ", 1, " +datetime.datetime.now())
               conn.commit()
         except:
               conn.rollback()
         
         conn.close()
         print("done")
   if(distance > 5 and trashStatus == "full"):
         print("trash is emptied")
         trashStatus = "empty"
         ##sql update
         conn = MySQLdb.connect(host= "trashnet.ece.iastate.edu",user="logan",passwd="ROFLdb!789",db="trashnet_db")
         x = conn.cursor()
         try:
               cursor.execute("UPDATE binStatus SET Status ='Empty' WHERE UnitId = " + id)
               cursor.execute("INSERT INTO binStatus (UnitId, EventType, EventTime) VALUES(" + id + ", 0, " +datetime.datetime.now())
               conn.commit()
               
         except:
               conn.rollback()

         conn.close()
         print("done")