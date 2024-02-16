/* eslint-disable no-restricted-globals */

import { precacheAndRoute } from 'workbox-precaching';

const manifest = self.__WB_MANIFEST || [];
precacheAndRoute(manifest);

/* eslint-enable no-restricted-globals */


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
  