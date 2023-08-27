const messageService = require("../Service/userService");

exports.seeMessage = async (req, res) => {
    try {
        const savedMessage = await messageService.message1();

        res.status(201).send(savedMessage);
    } catch (error) {
        console.error("Controller error:", error);
        res
            .status(500)
            .send({ message: "An error occurred while sending the message." });
    }
};