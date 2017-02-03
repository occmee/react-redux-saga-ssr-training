import 'babel-polyfill';
import {get, post, put, patch} from './http';

const ENDPOINT = 'http://localhost:3000/graphql'; // FIXME: should use .env ?

export default {

  /**
   * オープンβ 申し込み
   * @param params:
   * @returns {any}
   */
  postBetaEntry: async (params) => {
    const body = generateBetaEntryBody(params);
    const response = await post(ENDPOINT, body, false);
    if (response.error) {
      return {error: response.error};
    }
    return {payload: response.data};
  }
};

/**
 *
 * @param params
 * @returns {{query: *, variables: {input: {}}}}
 */
function generateBetaEntryBody(params) {
  return {
    query: `
mutation PostBetaEntry($input: BetaEntryInput) {
  postBetaEntry(input: $input) {
    id
    companyName
    applicantLastName
    applicantFirstName
    applicantDepartment
    email
    phoneNumber
    businessType
    rangeOfNumbers
  }
}`,
    variables: {
      input: {
        ...defaultBetaEntryVariables,
        ...params
      }
    }
  };
}
const defaultBetaEntryVariables = {
  companyName: "",
  applicantLastName: "",
  applicantFirstName: "",
  applicantDepartment: "",
  email: "",
  phoneNumber: "",
  businessType: "",
  rangeOfNumbers: ""
};
