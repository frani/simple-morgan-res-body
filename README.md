# simple-morgan-res-body

A middleware that made simple to get your res-content-body for your morgan use

# Install

using NPM
```
npm install simple-morgan-res-body
```

or using yanr
```
yarn add simple-morgan-res-body
```

# Usage & Api

```javascript

const express = require('express')
const morgan = require('morgan')
const morgenResBody = require('simple-morgan-res-body')

const app = express()
/**
 * By default response content is set in res.contentBody
 * but you can change it with the key name that you want
*/
app.use(morgenResBody('contentBody'))

morgan.token('res-body', (req,res) => res.contentBody)

/**
 * Then setup morgan format
*/
app.use(morgan(':res-body'));
```
