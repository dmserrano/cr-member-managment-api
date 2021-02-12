const { getRequest } = require("./api");
const { CLASH_ROYALE_API_URL, CLASH_ROYALE_API_OPTIONS } = require("../constants/api");

const formatClanDataResponse = ({
    clanScore,
    clanWarTrophies,
    members,
    memberList,
    name,
    tag,
}) => ({
    clanScore,
    clanWarTrophies,
    members,
    memberList,
    name,
    tag,
});

const formatClanRiverRaceLog = ({
    items,
}) => ({
    riverRaceLog: items,
});

const getClanDataByTagName = async (clanTag) => {
    const response = await getRequest(
        `${CLASH_ROYALE_API_URL}/clans/%23${clanTag}`,
        CLASH_ROYALE_API_OPTIONS,
    );

    return formatClanDataResponse(response);
};

const getClanRiverRaceLog = async (clanTag) => {
    const response = await getRequest(
        `${CLASH_ROYALE_API_URL}/clans/%23${clanTag}/riverracelog`,
        CLASH_ROYALE_API_OPTIONS,
    );

    return formatClanRiverRaceLog(response);
};

module.exports = {
    getClanDataByTagName,
    getClanRiverRaceLog,
};
