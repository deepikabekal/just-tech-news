const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes); //when combined with the index.js file in the api folder the route becomes /api/user/

//if we make a request to any endpoint that doesn't exist, we'll receive a 404 error 
router.use((req, res) => {
    res.status(404).end();
  });
  
module.exports = router;