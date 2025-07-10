//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  const [first, second, ...rest] = colors

  const index1 = COLORS.indexOf(first);
  const index2 = COLORS.indexOf(second);

  const indexMix = `${index1}${index2}`;

  return parseInt(indexMix)
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
