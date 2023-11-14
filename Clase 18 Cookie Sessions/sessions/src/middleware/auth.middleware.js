function auth (req,res,next){
   /* if( req.session?.email=== '1' && req.session?.admin){
        return next ()
    }

    return res.status( 401).send (' User no esta autorizado')*/

    if(req.session?.isAdmin){
        return next ()
    }
    return res.status( 401).send (' User no esta autorizado')


}
export default auth