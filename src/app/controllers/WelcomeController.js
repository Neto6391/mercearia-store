class WelcomeController {
  async index(req, res) {
    return res.json({
      message: 'Welcome Controller MerceariaStore',
    });
  }
}

export default new WelcomeController();
