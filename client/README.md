# Project Binar chapter8

# Cara buat Routing

1.  `npm install react-router-dom`
2.  Kita perlu import si Providernya (BrowserRouter dari react-router-dom) bisa dinamain ulang jadi Router jadi importnya macem gini

```js
import { BrowserRouter as Router } from 'react-router-dom';
```

3. kita pake si Router tadi yang udah di import terserah mau dimana, tapi biasanya dipake di Root dari si project alias di `index.js`

4. Setup file Router terserah mau dimulai dari App.jsx tadi atau mau mulai bikin baru di file AppRoutes.jsx dimana nanti isinya yang pasti perlu import si Routes dan Route untuk menjelaskan ada Rute apa saja yang tersedia di client

```js
import { Routes, Route } from 'react-router-dom';
import Page from './sipagenya';

// cara pakenya
...
<>
  <Routes>
    <Route path="/" element={ <Page />}>
  </Routes>
</>
...
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
