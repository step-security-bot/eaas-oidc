import { Hono } from 'hono';
import { etag } from 'hono/etag';
import { logger } from 'hono/logger';
import { Bindings } from './types';

const app = new Hono<{ Bindings: Bindings }>();

app.use('*', etag());

app.use('*', async (c, next) => {
	if (Number(c.env.LOGGING) == 1) {
		app.showRoutes();
		return await logger()(c, next);
	} else {
		return next();
	}
});

export default app;
