const jwt = require('jsonwebtoken');

module.exports = (req,res)=>{
    res.send('Hello World');
    if(req.body.password === process.env.password){
        const token = jwt.sign({
            userId:1,
        }, process.env.SECRET);

        res.json({
            token,
        });
    } else {
        res.status(401).send('Wrong Password')
    }
}