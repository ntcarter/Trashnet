

function Analysis(){
    var inst = this;
    this.eventData;
    this.individualIDs = [];

    this.getData = function(){
        $.get("data.php",function(data, status){
            inst.eventData = JSON.parse(data);
            inst.getIndividualIDs();
            inst.averageFillUpTimes();
        });
    }

    this.displayData = function(){
        $("#btn").click(function(){
            console.log(inst.eventData);
            console.log(inst.individualIDs);

        });
    }
    

    this.getIndividualIDs = function(){
        var j, flag = 0, count = 0;

        for(var i = 0; i < inst.eventData.length; i++){
            for(j = 0; j < inst.individualIDs.length; j++){
                if(inst.eventData[i].UnitId == inst.individualIDs[j]){
                    flag = 1;
                    break;
                }
            }
            if(flag == 1){
                flag = 0;
            }else{
                inst.individualIDs.push(inst.eventData[i].UnitId);
                count++;
            }
        }

        return count;
    }

    this.averageFillUpTimes = function(){
        var average_times = [];

        inst.individualIDs.forEach(function(id){
            var ID_instances = [];
            inst.eventData.forEach(function(entry){
                if(entry.UnitId == id){
                    ID_instances.push(entry);
                }
            });
            //average_times.push(ID_instances);

            var totalFillUpTime = 0;
            var fullOccurances = 0;
            var timeAtEmpty;
            ID_instances.forEach(function(entry){
                if(entry.EventType == 0){
                    timeAtEmpty = Date.parse(entry.EventTime);
                    console.log(new Date(entry.EventTime).toString());
                }else if(entry.EventType == 1 && timeAtEmpty != null){
                    console.log(new Date(entry.EventTime).toString());
                    totalFillUpTime += (Date.parse(entry.EventTime) - timeAtEmpty);
                    timeAtEmpty = null;
                    fullOccurances++;
                }else{
                    console.log(new Date(entry.EventTime).toString());
                }
            });
            var ave_time = totalFillUpTime/fullOccurances;
            average_times.push({timeInMillis: ave_time,
                 time: inst.MillisTo_Days_Hours_Minutes_Seconds_Milliseconds(ave_time),
                id: id});
            

        });
        console.log(average_times);
    }

    this.MillisTo_Days_Hours_Minutes_Seconds_Milliseconds = function(timeSpan){
        var t = timeSpan;
        var days = Math.floor(t/(24*60*60*1000));
        t = t%(24*60*60*1000);
        var hours = Math.floor(t/(60*60*1000));
        t = t%(60*60*1000);
        var minutes = Math.floor(t/(60*1000));
        t = t%(60*1000);
        var seconds = Math.floor(t/(1000));
        t = t%(1000);
        var millis = t;

        return {days: days, hours: hours, minutes: minutes, seconds: seconds, milliseconds: millis}
    }

}

function AnalysisObject(){

    
}