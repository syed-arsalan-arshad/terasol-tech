const User = require("../models/user");
exports.createUser = (req, res, next) => {
  const user = new User({
    userDetails: req.body,
  });
  user
    .save()
    .then((result) => {
      if (result) {
        res.status(201).json({
          data: result,
          message: "User Inserted",
        });
        // console.log(result);
      } else {
        res.status(500).json({
          message: "Something Went Wrong",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.updateUser = (req, res, next) => {
  const _id = req.params.userId;
  User.findById(_id)
    .then((user) => {
      if (user) {
        user.userDetails = req.body;
        return user.save();
      } else {
        res.status(500).json({
          message: "Something Went Wrong",
        });
      }
    })
    .then((userUpdatedRecord) => {
      if (userUpdatedRecord) {
        res.status(200).json({
          userUpdatedRecord: userUpdatedRecord,
          message: "User Record Updated",
        });
      } else {
        res.status(500).json({
          message: "Something Went Wrong",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.fetchAllUser = (req, res, next) => {
  User.find()
    .then((allUser) => {
      if (allUser) {
        res.status(200).json({
          usersData: allUser,
          message: "All User Record",
        });
      } else {
        res.status(500).json({
          message: "Something Went Wrong",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.fetchSingleUser = (req, res, next) => {
  const _id = req.params.userId;
  User.findById(_id)
    .then((user) => {
      if (user) {
        // user.message = "Single USer Fetched";
        // const userDetails = {...user, message: "Single User Record"};
        res.status(200).json({ userData: user, message: "Single User Record" });
      } else {
        res.status(500).json({
          message: "Something Went Wrong",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res, next) => {
  const _id = req.params.userId;
  User.findByIdAndDelete(_id).then((deletedUser) => {
    if (deletedUser) {
      res.status(200).json({
        userData: deletedUser,
        message: "User Deleted",
      });
    } else {
      res.status(500).json({
        message: "Something Went Wrong",
      });
    }
  });
};
