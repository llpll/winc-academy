//Bestand functions.test.js:
const verifyPassword = require('./verify-password')

test('Check string verification', () => {
  expect(verifyPassword.isNotNull('asdasd')).toBeTruthy();
  expect(verifyPassword.isNotNull('')).toBeFalsy();
  expect(verifyPassword.isNotNull(null)).toBeFalsy();
  expect(verifyPassword.isNotNull({})).toBeFalsy();
});

test('Check password has correct length', () => {
  expect(verifyPassword.hasRightLength('123456')).toBeTruthy();
  expect(verifyPassword.hasRightLength('0123456789')).toBeFalsy();
});

test('Check password has an uppercase', () => {
  expect(verifyPassword.hasUpperCaseCharacter('asAsd')).toBeTruthy();
  expect(verifyPassword.hasUpperCaseCharacter('asdads')).toBeFalsy();
});

test('Check password has a lowercase', () => {
  expect(verifyPassword.hasLowerCaseCharacter('AAsaAA')).toBeTruthy();
  expect(verifyPassword.hasLowerCaseCharacter('AAAAA')).toBeFalsy();
});

test('Check password has a digit', () => {
  expect(verifyPassword.hasDigit('AAs2A2A')).toBeTruthy();
  expect(verifyPassword.hasDigit('AAAAA')).toBeFalsy();
});

test('Test passwords', () => {
  let validPasswords = ['s', 'Aasd', 'sA21s'];
  validPasswords.forEach(function(password){
    expect(verifyPassword.verifyPassword(password)).toBeTruthy();
  });

  let invalidPasswords = ['sasdasdadsadss', 'AAAA', 'A', ''];
  invalidPasswords.forEach(function(password){
    expect(verifyPassword.verifyPassword(password)).toBeFalsy();
  });
});