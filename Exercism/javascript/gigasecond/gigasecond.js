//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  const GIGA_TO_MS = Math.pow(10, 9) * 1000;

  const dateInMs = date.getTime();

  const futureDate = dateInMs + GIGA_TO_MS;

  return new Date(futureDate);
};
