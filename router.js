const Router = require("koa-router");
const {
  createEvent,
  getAllEvents,
  getEvent
} = require("./handlers");

/**
 * User service router middleware
 * @param  {Koa} app the koa app to define routes for
 * @return {null}    does not return anything, it modifies the app.
*/
module.exports = (app) => {
  const router = new Router();

  router.get("/event", getAllEvents);
  router.post("/event/", createEvent);

  // instance endpoints
  router.get("/event/:id/", getEvent);
  router.post("/event/:id/", ctx => { ctx.throw(501, "Not yet implemented") });
  router.patch("/event/:id/", ctx => { ctx.throw(501, "Not yet implemented") });
  router.delete("/event/:id/", ctx => { ctx.throw(501, "Not yet implemented") });

  router.get(/.*/, ctx => { ctx.throw(404, "Not found")});

  app.use(router.routes())
     .use(router.allowedMethods());
};
