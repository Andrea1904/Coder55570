import {errorResponse,HTTP_STATUS} from '../utils/response.utils.js'

const errorMiddleware= (error,req,res,next)=>{
    const messageError =error.description || error.message || ' No hubo error conocido'
    const detailError= error.description ? null : error
 const reponse =errorResponse(messageError,detailError)
  res
    .status(error.status || HTTP_STATUS.SERVER_ERROR)
    .json(reponse)
}

export default errorMiddleware 