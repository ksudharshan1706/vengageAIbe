const Event = require("../model/Event");
const router = require("express").Router();
const moment = require("moment");

router.post("/create-event", async (req, res) => {
  const event = Event(req.body);
  await event.save();
  res.status(201).json(event);
});

router.get("/get-event", async (req, res) => {
  console.log(req.query);
  const events = await Event.find({
    start: { $gte: moment(req.query.start).toDate() },
    end: { $lte: moment(req.query.end).toDate() },
  });
  res.status(201).json(events);
});

module.exports = router;
