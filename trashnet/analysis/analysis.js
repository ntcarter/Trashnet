

function Analysis(){
    var inst = this;
    this.eventData;
    this.numberOfIDs

    this.getData = function(){
        $.get("data.php",function(data, status){
            inst.eventData = JSON.parse(data);
        });
    }

    this.displayData = function(){
        $("#btn").click(function(){
            console.log(inst.eventData);
        });
    }
    

    this.getNumberOfIDs = function(){
        var array = [];
        var j;

        for(var i = 0; i < inst.eventData.length; i++){
            for(j = 0; j < array.length; j++){
                if(eventData[i].UnitId == array[j]){
                    break;
                }
            }
            if(j == )
        }

        
    }




}