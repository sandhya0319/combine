const db=require('../models');

const transaction=db.transaction;

const addtransaction=async(req,res)=>{
    console.log("====",{...req.body})
    const t=await db.sequelize.transaction();
    try {
        const adddata=await transaction.create({
          ...req.body
        });
        res.send(adddata);
        await t.commit();
        
    } catch (error) {
        console.log(error);
        await t.rollback();
    }
}
const displaytransaction=async(req,res)=>{
    const t=await db.sequelize.transaction();
    try {
        const data=await transaction.findAll({});
        res.send(data);
        await t.commit();
        
    } catch (error) {
        console.log(error);
        await t.rollback();
    }
}


module.exports={
    addtransaction,
    displaytransaction,

}