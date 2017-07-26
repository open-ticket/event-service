const Event = require("./models/Event");

const createEvent = async ctx => {
  try {
    ctx.body = await Event.query().insert(ctx.request.body);
  } catch (err) {
    ctx.throw(500, err.message);
  }
};

const getAllEvents = async ctx => {
  try {
    ctx.body = await Event.query();
  } catch (err) {
    ctx.throw(500, err.message);
  }
}

const getEvent = async ctx => {
  ctx.assert(ctx.params.id, 400, "No id provided");

  try {
    ctx.body = await Event.query()
    .findOne("id", ctx.params.id);

    if (!ctx.body) {
      ctx.status = 404;
      throw new Error("No event found");
    }
  } catch (err) {
    if (err.message.match("invalid input syntax")) {
      ctx.throw(400, err.message);
    } else {
      ctx.throw(500, err.message);
    }
  }
}

module.exports = {
  createEvent,
  getAllEvents,
  getEvent
};
