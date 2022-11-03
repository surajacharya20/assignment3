// logging fucntions 
const {createLogger,transports,format, level}=require("winston");

const userLogger=createLogger({
    transports:[
        new transports.File({
            filename:"users.log",
            level:"info",
            format:format.combine(format.timestamp(),format.json()),

        }),
    ],
});

module.exports={userLogger};
