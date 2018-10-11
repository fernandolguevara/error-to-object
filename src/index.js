import isError from '@propellerheads/is-error';
import serializeError from '@propellerheads/serialize-error';

function errorToObject(error) {
  if (!isError(error)) {
    throw new Error('the param \'error\' must be an instance of Error.');
  }
  try {
    const serializedErr = serializeError(error);
    const errorObj = JSON.parse(serializedErr);
    if (!errorObj.stack || !errorObj.message || !errorObj.name) {
      errorObj.message = error.message;
      errorObj.stack = error.stack;
      errorObj.name = error.name;
    }
    return errorObj;
  } catch (unusedErr) {
    return { name: error.name, message: error.message, stack: error.stack };
  }
}

export default errorToObject;
