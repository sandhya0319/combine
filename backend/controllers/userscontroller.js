const db=require('../models');

const register=db.register;

const addusers=async(req,res)=>{
    console.log("====",{...req.body})
    const t=await db.sequelize.transaction();
    try {
        const adddata=await register.create({
          ...req.body
        });
        res.send(adddata);
        await t.commit();
        
    } catch (error) {
        console.log(error);
        await t.rollback();
    }
}
const displayusers=async(req,res)=>{
    const t=await db.sequelize.transaction();
    try {
        const data=await register.findAll({});
        res.send(data);
        await t.commit();
        
    } catch (error) {
        console.log(error);
        await t.rollback();
    }
}


module.exports={
    addusers,
    displayusers,

}