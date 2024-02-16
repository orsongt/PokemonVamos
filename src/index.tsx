// import * as ReactDOM from "react-dom";
import { App } from "./App";

// ReactDOM.render(<App />, document.getElementById('root') as HTMLElement);

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}