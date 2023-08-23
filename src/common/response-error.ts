export const sendError = (data) => {
  return {
    status: 'erro',
    message: data.message,
    code: data.status,
  };
};
