const api = "/api";

module.exports = {
  frontendPaths: {

  },
  backendPaths: {
    assets: {
      base: `/assets`
    },
    stocks: {
      base: `${api}/stocks`
    },
    clients: {
      base: `${api}/clients`
    },
    applications: {
      base: `${api}/applications`,
      agreement: {
        base: `${api}/applications/agreement`
      }
    }
  }
};