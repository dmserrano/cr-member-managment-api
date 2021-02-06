const { getRequest } = require("./api");
const { CLASH_ROYALE_API_URL, CLASH_ROYALE_API_OPTIONS } = require("../constants/api");

const getClanDataByTagName = async (clanTag) => {
    const response = await getRequest(
        `${CLASH_ROYALE_API_URL}/clans/%23${clanTag}`,
        CLASH_ROYALE_API_OPTIONS,
    );
    console.log({ response });
};

module.exports = {
    getClanDataByTagName,
};
