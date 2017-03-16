import hoxy from 'hoxy';
import uniqid from 'uniqid';

import { ipcRenderer as ipc } from 'electron';

const PROXY_PORT = 8888;

class ProxyManager {
  constructor() {
    this.proxy = undefined;
    this.createProxy();
  }

  createProxy() {
    this.proxy = hoxy.createServer().listen(PROXY_PORT, () => {
      console.log('is listening');
    });
    ['request', 'request-sent', 'response', 'response-sent']
    .forEach((phase) => {
      this.proxy.intercept(phase, (req, resp, cycle) => {
        cycle.data(phase, Date.now());
      });
    });

    this.proxy.intercept({ phase: 'response', as: 'string' }, this.onResponseListener);
    this.proxy.intercept({ phase: 'request', as: 'string' }, this.onRequestListener);
  }

  onResponseListener(request, response) {
    console.log('------- RESPONSE ');
    console.log(request.started);
    console.log(response._data.statusCode);
    console.log(response.string);
    console.log(request.url);
    console.log('id ' + request.id);
    ipc.send('new-request', { enabled: 'gg' });
  }

  onRequestListener(request, response) {
    console.log('------- REQUEST  ');
    request.started = new Date().getTime();
    request.id = uniqid();
    console.log(request.started);
    console.log(response._data.statusCode);
    console.log(request.string);
    console.log(request.url);
  }
}

export default function createProxyManager() {
  return new ProxyManager();
}
