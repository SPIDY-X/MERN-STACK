import Users from "../model/userModel.js";

export const create = async(req, res) =>{
    try{
        const newUser = new Users(req.body);
        const { email } = newUser;

        const userExist = await Users.findOne({email})
        if(userExist) {
            return res.status(400).json({message: "User already exists."});
        }
        const saveData = await newUser.save();
      
        res.status(200).json({message: "User created sucessfully"});
    }   
    catch (error) {
        res.status(500).json({ errorMessage: error.message});
    }
    
};

export const getAllUser = async(req, res) =>{
    try {
        const userData = await Users.find();
        if (!userData || userData.length === 0) {
            return res.status(404).json({message:"User data not found"});
        }
        res.status(200).json(userData);
    } 
    catch (error) {
        res.status(500).json({ errorMessage: error.message});
    }
};

export const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await Users.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user not found." });
        }
        res.status(200).json(userExist)
    }
    catch (error){
        res.status(500).json({ errorMessage: error.message});
    }
};

export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await Users.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user not found." });
        }
        const updatedUser = await Users.findByIdAndUpdate(id, req.body, {
            new:true
        });
        
        res.status(200).json({message: "User Updated sucessfully"});

    }
    catch (error){
        res.status(500).json({ errorMessage: error.message});
    }
};

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await Users.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user not found." });
        }
        await Users.findByIdAndDelete(id)
        res.status(200).json({ message: "user deleted sucessfully" })
    }
    catch (error){
        res.status(500).json({ errorMessage: error.message});
    }
};