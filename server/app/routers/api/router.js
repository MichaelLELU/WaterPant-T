const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
// userRouter
const userRouter = require("./user/router");

router.use("/user", userRouter);

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

// plantRouter

const plantRouter = require("./plant/router");

router.use("/plant", plantRouter);

const wateringRouter = require("./watering/router");

router.use("/watering", wateringRouter);

const solarRouter = require("./solar/router");

router.use("/solar", solarRouter);

/* ************************************************************************* */

module.exports = router;
