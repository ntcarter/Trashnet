Here is a rough outline for the front end of the website so far. The form is not connected to anything so right now nothing will happen if you fill it out.  Also right now it's not fully
responsive so making it to small will break some of it. I will get that fix in the future.

# ajax.js #
If you make your php file name "data.php" then you will not have to change anything in the ajax file.  If you do not name in data.php then in line 4 in the ajax.js you will have to change the name to
whatever you file is.

```javascript
ajax.open("GET", "data.php", true);
```
### [GetAddress(lat, lon)] (https://git.ece.iastate.edu/SE329_Spring2018_Projects/TeamCyclops/trashnet/blob/master/trashnet/site/js/ajax.js)
This is the method that convinces the latitude and longitude into a address.  Right now it only does city and state.  The only problem with code is it is very slow and sometime times out.
I have done research on this and according to some slack overflow https://stackoverflow.com/questions/3752383/geolocation-is-so-slow-what-im-doing-wrong there not much you can do about it.  So the code might not get used and as of right now it is not being called anywhere.
