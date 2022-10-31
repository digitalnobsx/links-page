import React from 'react';
import 'primereact/resources/themes/saga-purple';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import { Avatar } from 'primereact/avatar';
import PrimeReact from 'primereact/api';


function App () {
  const data = {
    name: 'Itoro Joseph',
    image: 'http://github.com/digitalnobsx',
    links: [
      {
        name: "Twitter",
        url: "http://twitter.com/digitalnobsx",
        icon: "twitter",
      },
      {
        name: "Zuri Team",
        url: "https://training.zuri.team/",
        icon: "",
      },
    ]
  }
  return <div className="App">App</div>;
}

export default App;
