const { CLASH_ROYALE_API_KEY } = process.env;

const CLASH_ROYALE_API_URL = "https://api.clashroyale.com/v1";
const CLASH_ROYALE_API_OPTIONS = {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${CLASH_ROYALE_API_KEY}`,
    },
};

module.exports = {
    CLASH_ROYALE_API_URL,
    CLASH_ROYALE_API_OPTIONS,
};
