import React from 'react';
import '../css/style.css';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/Main.jsx';

ReactDOM.render(
 <BrowserRouter>
<Main/>	
</BrowserRouter>
  ,
  document.getElementById('root')
);