const { getClanDataByTagName, getClanRiverRaceLog } = require("../services/clashRoyale");

const handleGetRiverRaceData = async ({
    params: {
        clanTag = "",
    },
}, res) => {
    try {
        const [clanTagData, riverRaceLog] = await Promise.all([
            getClanDataByTagName(clanTag),
            getClanRiverRaceLog(clanTag),
        ]);

        res.json({ ...clanTagData, ...riverRaceLog });
    } catch (error) {
        res.status(500).json("Could not fetch river race data.");
    }
};

module.exports = {
    handleGetRiverRaceData,
};
