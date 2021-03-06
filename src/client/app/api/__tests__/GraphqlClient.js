import 'babel-polyfill';
import client from './../GraphqlClient';

test('postBetaEntry', async () => {
  const params = {
    companyName: "リレーションズ株式会社",
    applicantLastName: "太郎",
    applicantFirstName: "山田",
    applicantDepartment: "sales",
    email: "taro@xxx.com",
    phoneNumber: "03-1234-5678",
    businessType: "lifestyle",
    rangeOfNumbers: "small1"
  };
  const result = await client.postBetaEntry(params);
  const postBetaEntry = result.payload.postBetaEntry;
  expect(postBetaEntry.companyName).toBe(params.companyName);
});

test('getBetaEntries', async () => {
  const result = await client.getBetaEntries({});
  const betaEntries = result.payload.betaEntries;
  expect(betaEntries).not.toBeNull();
});
