import { Router } from 'express';
import { createWebController } from '#controllers/web-controller.js';
import { createInventoryController } from '#controllers/inventory-controller.js';
import { requireAuthentication } from '#middleware/auth.js';

export function createWebRouter(container) {
  const router = Router();
  const controller = createWebController(container);
  const inventoryController = createInventoryController(container);
  router.get('/', controller.home);
  router.get('/example', requireAuthentication(), controller.example);
  router.get('/inventory', inventoryController.home)
  return router;
}
