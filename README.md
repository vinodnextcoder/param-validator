# param-validator-node
**A small parameter validation library**

The purpose of this library is to easily check that the Missing parameter in node.js

# Basic examples
```js

const { checkRequiredMissingParam } = require ('param-validator-node');
const requestPayload = { email: 'test@gmail.com' };
const checkRequiredParamm = ['name'];
const Validator = checkRequiredMissingParam(requestPayload, checkRequiredParamm);
//throws errro Missing param [name]

```

- [Installation](#installation)
- [Documentation](#documentation)
- [Changelog](#changelog)
- [License](#license)

## Installation

```
npm i param-validator-node
```

Also make sure that you have Node.js 8 or newer in order to use it.



## License

MIT License
