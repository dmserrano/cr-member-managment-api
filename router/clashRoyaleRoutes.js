const { Router } = require("express");
const { handleGetRiverRaceData } = require("../controllers/clashRoyale");

const router = Router();

const CLASH_ROYALE_ROUTE = {
    path: "/riverrace/:clanTag",
    method: {
        GET: {
            params: {
                clanTag: "string",
            },
        },
    },
};

router.get(CLASH_ROYALE_ROUTE.path, handleGetRiverRaceData);

module.exports = {
    router,

    ROUTES_MAP: {
        [CLASH_ROYALE_ROUTE.path]: CLASH_ROYALE_ROUTE,
    },
};
