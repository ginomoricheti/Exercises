//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (name) => {
  if (
    name === '' ||
    name === undefined ||
    name === null
  ) return 'One for you, one for me.';

  return `One for ${name}, one for me.`;
};
