const userModel = require('../models/user.model.server');

createUser = user => {
    return userModel.create(user);
};

findAllUsers = () => {
  return userModel.find();
};

findUserById = userId =>
    userModel.findById(userId);

findByUsername = username =>
    userModel.findOne({username: username});

updateUser = (uid, user) => {
    return userModel.update({_id: uid}, {$set: user})
};

deleteUser = userId => {
    return userModel.remove({_id: userId});
};

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    findByUsername,
    updateUser,
    deleteUser
};