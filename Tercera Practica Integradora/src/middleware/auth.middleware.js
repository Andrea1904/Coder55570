const appyPolicy=(roles)=>{
    return( req ,res, next)=>{
        if(roles[0].toUpperCase()==="PUBLIC") return next()

        if(!req.user) return res.status(401).send( { status: 'Error' ,error: 'Not Autenticado'})
        
        if(!roles.includes(req.user.role.toUpperCase()))
        return res.status(403).send( { status: 'Error' ,error: 'Not Autorizado'})
        
    }
}

export default appyPolicy