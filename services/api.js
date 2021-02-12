const request = require("request-promise");

const { FIXIE_URL, NODE_ENV } = process.env;

const fixieRequest = request.defaults({ proxy: FIXIE_URL });
const requestMethod = NODE_ENV === "production" ? fixieRequest : request;

const getRequest = async (url = "", options = {}) => {
    const response = await requestMethod(url, options);
    return JSON.parse(response);
};

module.exports = {
    getRequest,
};
