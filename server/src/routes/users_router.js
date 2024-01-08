const { Router }= require('express')
const router = Router();
const {Users}= require('../controllers/Users')
const {DetailsPersonal}= require('../controllers/DetailsPersonal')
const {DetailsUser}= require('../controllers/DetailsUser')




router.get('/users', Users);
 router.get('/user', DetailsPersonal); 
 router.get('/user/:userId', DetailsUser); 


 




module.exports = router 