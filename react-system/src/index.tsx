import './public-path';
import React from 'react';
// import ReactDOM from 'react-dom'; //react 17
import {createRoot} from 'react-dom/client'; // react 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function render(props) {
  const { container } = props;
  // ReactDOM.render(<App />, container ? container.querySelector('#root') : document.querySelector('#root'));
    createRoot(document.getElementById('root')).render( <App />)
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  // ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
  createRoot(document.getElementById('root')).render( <App />)

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
