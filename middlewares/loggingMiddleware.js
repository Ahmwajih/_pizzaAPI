'use strict';

module.exports = (req, res, next) => {
    const { method, url, body, query, params } = req;
    const logMessage = `
        Method: ${method}
        URL: ${url}
        Body: ${JSON.stringify(body)}
        Query: ${JSON.stringify(query)}
        Params: ${JSON.stringify(params)}
    `;
    console.log(logMessage);
    next();
};