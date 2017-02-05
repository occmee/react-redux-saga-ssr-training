const Schema = `
scalar Date

schema {
  query: Query,
  mutation: Mutation
}
`;

const Query = `
type Query {
  hello: String
  fetchBetaEntry(id: ID!): BetaEntry
  betaEntries: [BetaEntry]
}
`;

const Mutation = `
type Mutation {
  postBetaEntry(input: BetaEntryInput): BetaEntry
}
`;

const BetaEntry = `
type BetaEntry {
  id: ID!
  companyName: String
  applicantLastName: String
  applicantFirstName: String
  applicantDepartment: String
  email: String
  phoneNumber: String
  businessType: String
  rangeOfNumbers: String
  status: String
}`;

const BetaEntryInput = `
input BetaEntryInput {
  companyName: String
  applicantLastName: String
  applicantFirstName: String
  applicantDepartment: String
  email: String
  phoneNumber: String
  businessType: String
  rangeOfNumbers: String
}
`;

module.exports = [
  Schema,
  Query,
  Mutation,
  BetaEntry,
  BetaEntryInput
];
