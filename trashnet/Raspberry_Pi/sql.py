import datetime
#Server Connection to MySQL:

import MySQLdb
conn = MySQLdb.connect(host= "trashnet.ece.iastate.edu",user="logan",passwd="ROFLdb!789",db="trashnet_db")
x = conn.cursor()

try:
   x.execute("INSERT INTO binStatus (Id, Status) VALUES (1,'Full')")
   conn.commit()
except:
   conn.rollback()

conn.close()
print("done");