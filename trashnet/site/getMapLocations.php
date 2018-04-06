<?php

//use http://trashnet.ece.iastate.edu/ConnectTest.php
$host="localhost";
$port=3306;
$user="logan";
$password="ROFLdb!789";
$dbname="trashnet_db";

// connects to database using the login credentials
$conn = mysqli_connect($host,$user,$password,$dbname,$port);

//tests and checks for a successful connection to the database
if (!$conn){
  die("Connection failed: ".mysqli_connect_error());
}
if($conn){
  //echo "Connection successful";
}

function parseToXML($htmlStr)
{
$xmlStr=str_replace('<','&lt;',$htmlStr);
$xmlStr=str_replace('>','&gt;',$xmlStr);
$xmlStr=str_replace('"','&quot;',$xmlStr);
$xmlStr=str_replace("'",'&#39;',$xmlStr);
$xmlStr=str_replace("&",'&amp;',$xmlStr);
return $xmlStr;
}

//This works, but not quite correctly. Needs to select ONLY the most recent row from events log that 
//matches the other criteria. Not sure how to do that right now.
//Also needs to add functionality to narrow the query with parameters $fullnessOption and $ownerOption
$sql = "SELECT registration.UnitId, registration.OwnerId, registration.Latitude, registration.Longitude, registration.Address, eventsLog.EventType 
FROM registration 
INNER JOIN eventsLog 
ON registration.UnitID=eventsLog.UnitId 
WHERE eventsLog.EventType = 0 OR eventsLog.EventType = 1";

$result = mysqli_query($conn, $sql);

if (!$result) {
    die('Invalid query: ' . mysql_error());
}
  
header("Content-type: text/xml");

// Start XML file, echo parent node
echo "<?xml version='1.0' ?>";
echo '<markers>';
$ind=0;
// Iterate through the rows, printing XML nodes for each
while ($row = @mysqli_fetch_assoc($result)){
  // Add to XML document node
  echo '<marker ';
  echo 'UnitId="' . $row['UnitId'] . '" ';
  echo 'OwnerId="' . parseToXML($row['OwnerId']) . '" ';
  echo 'Address="' . parseToXML($row['Address']) . '" ';
  echo 'Latitude="' . $row['Latitude'] . '" ';
  echo 'Longitude="' . $row['Longitude'] . '" ';
  echo 'Fullness="' . $row['EventType'] . '" ';
  echo '/>';
  $ind = $ind + 1;
}

// End XML file
echo '</markers>';

mysqli_close($conn);
?>
