

exports.message1 = async () => {
    try {
        // const data = message.find()
        return `here all the data from the database appear`;

    } catch (error) {
        console.error("Error saving message:", error);
        throw error; // Rethrow the error to be caught in the controller
    }
};