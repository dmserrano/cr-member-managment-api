const { getClanDataByTagName, getClanRiverRaceLog } = require("../services/clashRoyale");

const handleGetRiverRaceData = async ({
    params: {
        clanTag = "",
    },
}, res, next) => {
    try {
        const [clanTagData, riverRaceLog] = await Promise.all([
            getClanDataByTagName(clanTag),
            getClanRiverRaceLog(clanTag),
        ]);

        res.json({ ...clanTagData, ...riverRaceLog });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    handleGetRiverRaceData,
};
