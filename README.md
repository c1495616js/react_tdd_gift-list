## Init

```
npm i -D enzyme jest-cli enzyme-adapter-react-16
```

### Configure

`setupTests.js` in `src` folder.
```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

### BDD
![](https://i.imgur.com/BXmjmKL.png)

## Coverage

```
npm run test -- --coverage
```

## Folder under Test

In `package.json`
```
 "jest": {
    "collectCoverageFrom": [
      "src/**/*.js",
      "!src/index.js"
    ]
  }
```