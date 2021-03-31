const Joi = require("joi");
const db = require("./connection");

const UserSchema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

const users = db.get("users");

function getAllUsers(obj) {
    return users.findOne(obj);
}

function create(message) {
    console.log(UserSchema);
    const result = Joi.validate(message, UserSchema);
    if (result.error == null) {
        message.created = new Date();
        return users.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAllUsers,
};
