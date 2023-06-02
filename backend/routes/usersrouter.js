const usercontroller=require('../controllers/userscontroller.js');

const router=require('express').Router();

router.post('/addusers',usercontroller.addusers);

router.get('/displayusers',usercontroller.displayusers);

module.exports=router;