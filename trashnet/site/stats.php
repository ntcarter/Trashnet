<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Stats</title>
	<link rel="stylesheet" href="css/styles.css">
	<scipt
</head>

<body>
	<!--The header and navigation part of every page-->
    <div class="nav-header clearfix">
        <h1>TrashNet</h1>
    </div>
	
	<nav class="nav-bar clearfix">
		<div class="wrapper">
			<ul class="clearfix">
				<li><a href="index.html">Home</a></li>
				<li><a href="about.html">About Us</a></li>
				<li><a href="stats.php">Stats</a></li>
				<li><a href="map.html">Map</a></li>
			</ul>
		</div>
	</nav>
	<!--End of header and navigation-->
	
	<!--Body-->
	<div class="wrapper-stats">
		
		<h1 class="main-title">Stats</h1>
		
		<div class="main-body">
			<div class="table-body">
				<table>
					<tr>
						<th>ID</th>
						<th>Frequency</th>
						<th>Location</th>
						<th>Date</th>
						<th>Fullness</th>
					</tr>
					<tbody id="data">

					</tbody>
				</table>
			</div>
			
			<div class="more-info">
				<div class="graph-section">
				
					<div class="table-body-more-info">
						<table>
							<tr>
								<th>Start Date</th>
								<th>End Date</th>
								<th>Time</th>
							</tr>
							<tbody id="">

							</tbody>
						</table>
					</div>
					
					<div class="graph1">
						<canvas id="myChart1"></canvas>
					</div>
					
					<div class="graph2">
						<canvas id="myChart2"></canvas>
					</div>
				</div>
				
				<div class="map-section">
					
				</div>
			</div>
		</div>
			
	</div>
	<!--End of Body-->
    
    <!--Footer-->
    <footer>
        <div class="wrapper">
            <ul>
                <li>Copyright &#169 2018 TrashNet Inc. All right reserved</li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Legal</a></li>
                <li><a href="#">Terms of Use</a></li>
            </ul>
        </div>
    </footer>
	<!--End of Footer-->
	<script src="js/ajax.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
	<script src="js/graph.js"></script>
</body>
</html>
