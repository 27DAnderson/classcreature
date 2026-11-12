export function createPetController(container) {
  return {
    inventory(req, res) {
      res.render('pages/inventory', {
        title: 'Inventory',
        features: container.config.features,
      });
    },
    egg(req, res) {
      res.render('pages/egg', {
        title: 'Egg',
        features: container.config.features,
      });
    },
    creature(req, res) {
      res.render('pages/creature', {
        title: 'Creature',
        features: container.config.features,
      });
    },
    shop(req, res) {
      res.render('pages/shop', {
        title: 'Shop',
        features: container.config.features,
      });
    },
    stats(req, res) {
      res.render('pages/stats', {
        title: 'Stats',
        features: container.config.features,
      });
    },
    laboratory(req, res) {
      res.render('pages/laboratory', {
        title: 'Laboratory',
        features: container.config.features,
      });
    },
  };
}