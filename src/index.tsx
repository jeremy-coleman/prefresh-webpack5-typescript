require("preact/devtools")

import { h, render } from 'preact';
import { App } from './App';

let app_root_element = document.getElementById("root");
//document.body

render(<App />, app_root_element);
