import RPi.GPIO as IO
import time
IO.setwarnings(False)
IO.setmode (IO.BCM)

IO.setup(14,IO.IN) #GPIO 14 -> IR sensor as input

def monitor:
	if(IO.input(14)==False): #object is near
		#put replace with update SQL command
		print ("trash thrown out")
		time.sleep(5)
if(IO.input == False)
print("trash is full")