import errorToObject from '../src';

describe('errorToObject', () => {
  it('should throw an error if passed value is not an Error instance', () => {
    try {
      errorToObject(null);
    } catch (error) {
      expect(error.message).toEqual('the param \'error\' must be an instance of Error.');
    }
  });

  it('should convert an Error instance to pojo', () => {
    try {
      throw new Error('error message');
    } catch (error) {
      const errorObj = errorToObject(error);

      expect(errorObj.name).toEqual('Error');
      expect(errorObj.message).toEqual('error message');
      expect(typeof (errorObj.stack)).toEqual('string');
    }
  });
});
