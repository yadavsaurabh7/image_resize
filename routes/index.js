const express = require('express');
var router = express.Router();
var productSearch = require('../controllers/productSearch')
var imageProcessing = require('../controllers/imageProcessing')
var userAuthentication = require('../controllers/userAutentication')

router.get('/',(req,res)=>{
    res.send('yes we are listening');
})

router.get('/search',productSearch.searchByTerm);
router.post('/upload',imageProcessing.upload);
router.post('/register',userAuthentication.register);

module.exports = router;