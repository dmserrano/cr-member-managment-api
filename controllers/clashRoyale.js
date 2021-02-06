const { getClanDataByTagName } = require("../services/clashRoyale");

const handleGetRiverRaceData = async ({
    params: {
        clanTag = "",
    },
}, res) => {
    try {
        const response = await getClanDataByTagName(clanTag);
        res.json({ test: "" });
    } catch (error) {
        console.log(error);
        res.status(500).json("Could not fetch river race data.");
    }
};

module.exports = {
    handleGetRiverRaceData,
};
