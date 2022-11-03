const { loggers } = require("winston");
const emptyValueChecker=require("../service/input");

describe("mongo name validation ",()=>{
    loggers.info("started testing");

    test("check for the string ",()=>{

        expect(emptyValueChecker("xyz")).toEqual(true);
    });

    test("to check the string is empty",()=>{
        expect(emptyValueChecker(" ")).toEqual(false);
    });
});