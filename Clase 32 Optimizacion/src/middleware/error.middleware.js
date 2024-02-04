import TypesError from '../utils/typesError.js'

export default(error,req,res,next)=>{
    switch(error.code) {
        case TypesError.INFO_TYPES:
            res.send({ status: 'error', error: error.name})
            break

        case TypesError.INVALID_CONEXION:
            res.send({ status: 'error', error: error.name})
            break
         default:
            res.send({ status: 'error', error: 'Error not found'})
    }
}