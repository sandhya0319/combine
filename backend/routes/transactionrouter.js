const transactioncontroller=require('../controllers/transactioncontroller');

const router=require('express').Router();

router.post('/addtransaction',transactioncontroller.addtransaction);

router.get('/displaytransaction',transactioncontroller.displaytransaction);

module.exports=router;