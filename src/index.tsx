import { App } from "./App";
import { Workbox } from 'workbox-window';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
              console.log('Service Worker registrado con éxito:', registration);
          })
          .catch(error => {
              console.error('Error al registrar el Service Worker:', error);
          });
  });
}