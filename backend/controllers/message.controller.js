export const sendMessage = async (req, res) => {
    try{
        const {message} = req.body;
        const {id: receiverId} = req.params.id;
        const senderId = req.user._id;




    } catch (error){
        console.log("Error on send message controller", error.message);
        res.status(500).json({error: "Internal Server Error"});
    }
};