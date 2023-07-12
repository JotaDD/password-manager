const validateNonEmptyRegex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/;

const regexV = /^(?=.*\d)(?=.*[a-zA-Z)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,16}$/;

const haveMoreThanEightCharacters = /^.{8,}$/;
const haveUpToSixteenCharacters = /^.{0,16}$/;
const haveNumbersAndLetters = /^(?=.*[a-zA-Z])(?=.*\d).*$/;
const haveSomeSpecialCharacters = /^.*[!@#$%^&*(),.?":{}|<>].*$/;

export {
  haveMoreThanEightCharacters,
  haveNumbersAndLetters,
  haveUpToSixteenCharacters,
  haveSomeSpecialCharacters,
  validateNonEmptyRegex,
  regexV,
};
