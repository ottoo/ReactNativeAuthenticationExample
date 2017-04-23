/* eslint-disable */

export default function loggerMiddleware() {
  return next => action => {
    if (process.env.NODE_ENV !== 'production') {
      const { type, payload, meta } = action;

      console.log(type);
      console.log('Payload:', payload);
      console.log('Meta:', meta);
    }

    return next(action);
  };
}
