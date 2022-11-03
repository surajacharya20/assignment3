const { loggers } = require("winston")

const emptyValueChecker=function(str){
   // loggers.info(`Entered input.js`);
    if(typeof str=== "string" && str.trim().length===0){
        return false;
    }
    else
    {
        return true;
    }
    };

    module.exports=emptyValueChecker; 
