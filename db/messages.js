const Joi = require("joi");
const db = require("./connection");

const quesSchema = Joi.object().keys({
    ques1: Joi.string().max(500).required(),
    ques2: Joi.string().max(500).required(),
    ques3: Joi.string().max(500).required(),
});

const messages = db.get("messages");

function getAll() {
    return messages.find();
}

function create(message) {
    const result = Joi.validate(message, quesSchema);
    if (result.error == null) {
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(result.error);
    }
}

module.exports = {
    create,
    getAll,
};
