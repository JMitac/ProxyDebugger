import hoxy from 'hoxy';

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
    this.proxy.intercept('response', (req, resp) => {
      console.log('-------  ');
      console.log(resp._data.statusCode);
      console.log(req.url);
    });
  }
}

export default function createProxyManager() {
  return new ProxyManager();
}
