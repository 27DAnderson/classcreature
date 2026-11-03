import { Router } from 'express';
import { createInventoryController } from '#controllers/web-controller.js'
import { requireAuthentication } from '#middleware/auth.js';

export function createWebRouter(container) {
  const router = Router();
  const controller = createInventoryController(container);
  router.get('/', controller.home);
  router.get('/example', requireAuthentication(), controller.example);
  return router;
}
