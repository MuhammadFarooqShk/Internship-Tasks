module.exports = reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send('Provide Age to Continue!');
    }
    else if(req.query.age < 18){
        res.send('You are Under Age!!!');
    }
    else{
        next();
    }
};