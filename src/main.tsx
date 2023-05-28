import App from "./App";
import { inject } from "@vercel/analytics";
import "./index.css";
import { hydrate, render } from 'react-dom';
import DummyApp from "./DummyApp";

inject();

const rootElement = document.getElementById('root');
if (rootElement && rootElement.hasChildNodes()) {
    console.log('hydrate')
    hydrate(<DummyApp />, rootElement);
} else {
    console.log('hi')
    render(<App/>, rootElement);
}