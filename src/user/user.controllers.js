const User = require("./user.model");

//CREATE - post - accepts req.body
exports.addUser = async (req, res) => {
  try {
    await User.sync();
    await User.create(req.body);
    console.log("Added to database");
    res.status(200).send({ message: "success" }); // needed or will time out.
  } catch (error) {
    res
      .status(418)
      .send({ message: "Adding user went wrong. Check server logs." });
  }
};

//READ - get - accepts req.body
exports.getUsers = async (req, res) => {
  try {
    const userList = await User.findAll();
    console.log("Successfully read database.");
    res.status(200).send({ userList });
  } catch (error) {
    console.log(error);
    res
      .status(418)
      .send({ message: "Reading database went wrong. Check server logs." });
  }
};

//UPDATE - PUT accept req.body
exports.updateEmailFromUsername = async (req, res) => {
  try {
    await User.update(
      { username: req.body.username },
      { where: { email: req.body.email } }
    );
    console.log({ username: req.body.username }, { email: req.body.email });
    console.log("Username updated.");
    res.status(200).send({ message: "Success" }); // needed or will tiem out. Got to send it.
  } catch (error) {
    console.log(error);
    res
      .status(418)
      .send({ message: "Reading database went wrong. Check server logs." }); //response if fails.
  }
};
//DELETE - DELETE doesn't accept req.body - need params.
exports.deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { username: req.params.username } });
    res.status(200).send({ message: "success - user deleted from database" }); // needed or will time out. like return statement.
  } catch (error) {
    res.status(500).send({ message: "Check server logs" });
  }
};
