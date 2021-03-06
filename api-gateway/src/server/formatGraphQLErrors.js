import _ from "loadsh";

const formatGraphQLErrors = error => {
    const errorDetails = _.get(error, "originalError.response.body");
    try {
        if (errorDetails) return JSON.parse(errorDetails);
    } catch (e) {}
    return error;
};

export default formatGraphQLErrors;