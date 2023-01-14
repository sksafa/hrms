import userModel from "../models/userModel";

export const postUserController = async (req, res) => {
    const fromData = req.body
    const roleData = new userModel(fromData);
    try {
        const data = await roleData.save()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

export const getUserController= async(req, res)=>{
    try {
        const data = await userModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}