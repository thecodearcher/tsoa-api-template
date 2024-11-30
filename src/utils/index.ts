export const formatResponse = (data: any, message: string = "success") => {
  return {
    message,
    data,
  };
};
