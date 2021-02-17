const error = (res, message, status = 500) => {
  res.status(status).json(getFailedPayload(message));
};

const duplicate = (res, message, status = 409) => {
  res.status(status).json(getFailedPayload(message));
};

const unauthorized = (res, message) => {
  error(res, message, 401);
};

const forbidden = (res, message) => {
  error(res, message, 403);
};

const notFound = (res, message) => {
  error(res, message, 404);
};

const redirect = (res, url) => {
  res.redirect(url);
};

const success = (res, data) => {
  res.status(200).json(getSuccessPayload(data));
};

const getSuccessPayload = (data) => {
  return data;
};

const getFailedPayload = (message) => {
  return message;
};

module.exports = {
  error,
  duplicate,
  forbidden,
  getSuccessPayload,
  getFailedPayload,
  notFound,
  redirect,
  success,
  unauthorized,
};
