const isAdmin = (req, res, next) => {
    if(req.headers.isadmin){
        next();
    }else{
        res.status(401).json({message: 'No tiene autorizacion'});
    }
}

export default isAdmin;