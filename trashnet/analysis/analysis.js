

function Analysis(){
    var inst = this;
    this.eventData;
    this.individualIDs = new Array();

    this.getData = function(){
        $.get("data.php",function(data, status){
            inst.eventData = JSON.parse(data);
            inst.getIndividualIDs();
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

}

function AnalysisObject(){
    
}