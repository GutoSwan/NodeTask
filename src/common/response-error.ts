export const sendError = (data) => {
  console.log(data);
  return {
    status: 'erro',
    message: data.message,
    code: data.status || 400,
  };
};
