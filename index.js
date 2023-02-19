const _setResContentBody = (res, send, propName) => (content) => {
  res[propName] = content;
  res.send = send;
  res.send(content);
};

/**
 * Asign contentBody to an assecible variable
 * @dev main functionality to this is make posible to make res.body accesible 
 * from anyway. Posible to combine with morgan and make res-body loggeable.
 * for example can follow next code:
 * ```js
 * app.use(setResContentBody(''))
 * morgan.token('res-body', (req,res) => JSON.stringify(res.contentBody));
 * ```
 * or in other case you can change propName
 * ```js
 * app.use(setResContentBody('niceBody'))
 * morgan.token('res-body', (req,res) => JSON.stringify(res.niceBody));
 * ```
 * @param {string} propName propierty name on res object 
 * @returns 
 */
const setResContentBody = (propName) => (req, res, next) => {
  if(!propName) propName = 'contentBody'
  res.send = _setResContentBody(res, res.send, propName);
  next();
};

module.exports = setResContentBody;
