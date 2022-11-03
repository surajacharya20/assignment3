const User=require("../model/User");
const logger=require("../configuration/logger");
const input=require("../service/input");

//getting all the users
const getAllUsers=async(req,res,next)=>{
    let users;
    try
    {
        users=await User.find();

    }catch(err)
    {
        logger.userLogger.log("error","error in getting user list");
        return next(err);
    }
    logger.userLogger.log("error","error in getting the user list");

    if(!users){
        logger.userLogger.log("error","error in getiing users list");
        res.status(500).json({message:"server error"});
        logger.userLogger.log("error","error in fecthing the list of users");

    }
    else
    {
        logger.userLogger.log("info","retrived user list");
        return res.status(200).json({users});
    }
};


//post request

const addUser=async(req,res,next)=>{
    const{name,password}=req.body;
    if(
        !name &&
         name.trim() == "" &&
        !password &&
        password.length > 6 
    ){
        return res.status(422).json({message:"invalid Data"});
    }
    
    let user;
    try
    {
        const userName=req.body.name;
        const checking=input(userName);

        if(checking){
            logger.userLogger.log("info","checking");
    }
    user=new User({
        name,
        password,
    });
    user=await user.save();
}
catch(err){
    return next(err);

}
logger.userLogger.log("error","error in adding user");

if(!user)
{
    res.status(500).json({message:"unable to save"});
    logger.userLogger.log("error","error adding users");

}
else
{
    logger.userLogger.log("info","user added successfully");
    return res.status(201).json({user});
}
};

//update of the user 

const updateUser=async(req,res,next)=>{
    const id=req.params.id;
    const{name,password}=req.body;
    if(
        !name &&
        name.trim()==""&&
        !password && 
        password.length>6
    )
    {
        logger.userLogger.log("error","error in data");

        return res.status(422).json({message:"error in data"});
        }

        let user;
        try
        {
            user=await User.findByIdAndUpdate(id,{name,password});

        }
        catch(err)
        {
            logger.userLogger.log("error","error in updating the user");

            return next(err);
        }
        if(!user)
        {
            logger.userLogger.log("error","error in updating the user");
            return res.status(500).json({message:"not able to update user"});

        }
        else
        {
            logger.userLogger.log("info","updated user successfully");
            return res.status(200).json({message:"user updated successfully"});

        }
    };
exports.getAllUsers=getAllUsers;
exports.addUser=addUser;
exports.updateUser=updateUser;