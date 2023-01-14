import roleModel from "../models/roleModel";

export const postRoleController = async (req, res) => {
    const fromData = req.body
    const roleData = new roleModel(fromData);
    try {
        const data = await roleData.save()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}

export const getRoleController= async(req, res)=>{
    try {
        const data = await roleModel.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
    }
}