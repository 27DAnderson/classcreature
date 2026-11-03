export function createInventoryController(container) {
  return {
    home(req, res) {
      res.render('pages/inventory', {
        title: 'Inventory',
        features: container.config.features,
      });
    },
  };
}