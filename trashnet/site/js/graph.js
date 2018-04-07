// JavaScript Document
function GraphInfo(labelA, dataA, title){
			var data = {
				// The type of chart we want to create
				type: 'bar',

				// The data for our dataset
				data: {
					labels: labelA,
					datasets: [{
						label: title,
						backgroundColor: 'rgb(255, 122, 20)',
						borderColor: 'rgb(255, 122, 20)',
						data: dataA,
					}]
				},

				// Configuration options go here
				options: {}
			};
			return data;
		}
		
		function CreateGraphs(){
			
			var label1 = ["3/26", "3/27", "3/28", "3/29", "3/30", "3/31", "4/1"];
			var label2 = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];
			
			var data1 = [45, 32, 13, 18, 34, 13, 23];
			var data2 = [4, 12, 6, 9, 14, 4, 9, 4, 12, 6, 9, 14, 4, 9];
			
			var title1 = "Frequency By day";
			var title2 = "Frequency By Hour";
			
			var ctx1 = document.getElementById('myChart1').getContext('2d');
			var ctx2 = document.getElementById('myChart2').getContext('2d');
			if(window.bar != undefined){
				chart && chart.destroy();
			}
			var chart = new Chart(ctx1, GraphInfo(label1, data1, title1));
			var chart = new Chart(ctx2, GraphInfo(label2, data2, title2));
		}
		
		CreateGraphs();