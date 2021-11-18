const { Router } = require("express");
const {
  addUser,
  getUsers,
  updateEmailFromUsername,
  deleteUser,
} = require("./user.controllers");
const userRouter = Router(); /// assign to const to access with dotnotation. Name related to concern. Take note of capital R.

//CREATE
userRouter.post("/user", addUser);

//READ
userRouter.get("/user", getUsers);

//UPDATE
userRouter.put("/user", updateEmailFromUsername);

//DELETE
userRouter.delete("/user/:username", deleteUser); //anythign after user is consider req.params.username colon variable name is express parameter.

module.exports = userRouter;
