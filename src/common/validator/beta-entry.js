function validateBetaEntry(values) {
  const errors = {};
  const requiredFields = ['email', 'phoneNumber', 'companyName', 'applicantDepartment'];

  requiredFields.forEach(fieldName => {
    if (!values[fieldName]) {
      errors[fieldName] = '必須項目です';
    }
  });

  if (!values.applicantLastName) {
    errors.applicantLastName = '姓は必須項目です';
  }
  if (!values.applicantFirstName) {
    errors.applicantFirstName = '名は必須項目です';
  }
  if (!values.businessType || values.businessType === '0') {
    errors.businessType = '選択してください';
  }
  if (!values.rangeOfNumbers || values.rangeOfNumbers === '0') {
    errors.rangeOfNumbers = '選択してください';
  }

  return errors;
}

module.exports = validateBetaEntry;
