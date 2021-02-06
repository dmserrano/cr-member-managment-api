const { Router } = require("express");
const clashRoyaleRouter = require("./clashRoyaleRoutes");

const router = Router();

router.use(clashRoyaleRouter.router);

module.exports = {
    router,

    ROUTES_MAP: {
        ...clashRoyaleRouter.ROUTES_MAP,
    },
};
