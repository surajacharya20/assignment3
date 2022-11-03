const express=require("express");
const {
    getAllUsers,
    addUser,
    updateUser,
}=require("../controller/userCon");

const router=express.Router();

router .get("/",getAllUsers);
router.post("/",addUser);
router.put("/:id",updateUser);


module.exports=router;