import 'babel-polyfill';
import {get, post, put, patch} from './http';
require("dotenv").config();

const ENDPOINT = process.env.RRSST_GREPHQL_ENDPOINT;

export default {

  /**
   * オープンβ 申し込み
   * @param params:
   * @returns {any}
   */
  postBetaEntry: async (params) => {
    const body = generatePostBetaEntryBody(params);
    const response = await post(ENDPOINT, body, false);
    if (response.error) {
      return {error: response.error};
    }
    return {payload: response.data};
  },

  getBetaEntries: async (params) => {
    const body = generateBetaEntriesBody(params);
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
function generatePostBetaEntryBody(params) {
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


function generateBetaEntriesBody(params) {
  return {
    query: `
query BetaEntries {
  betaEntries {
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
    variables: {}
  };
}