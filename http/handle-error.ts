import { AxiosError } from 'axios';

/**
 * Generate Error data.
 * 
 * @param {object|string} error 
 * @returns {object}
 */
function handleError(error: AxiosError): {} {
  let statusCode = error.response ? error.response.status : null;
  let theError = {
    status: statusCode,
    message: error?.message,
    response: error?.response,
    request: error?.request,
    error: {
      ...error
    }
  }
  return theError
}

export default handleError