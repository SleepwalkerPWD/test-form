export const VALUES_TO_SERVER = 'VALUES_TO_SERVER';

export const valuesToServer = (values) => {
  return {
    type: VALUES_TO_SERVER,
    payload: {
      values
    },
  };
}
