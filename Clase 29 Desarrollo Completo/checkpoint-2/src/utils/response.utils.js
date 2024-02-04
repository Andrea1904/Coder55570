export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
  };
  
  export class HttpError {
    constructor(description, status = 500, details = null) {
      this.description = description;
      this.status = status;
      this.details = details;
    }
  }
  
  export const successResponse = (payload) => {
    return {
      success: true,
      payload
    }
  };
  
  export const errorResponse = (description, error = null) => {
    return {
      success: false,
      description,
      details: error
    }
  }