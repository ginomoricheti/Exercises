//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const EARTH_YEAR_IN_SECONDS = 31557600; // 365.25 días * 24hs * 60min * 60seg

const PLANET_TIME = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter:	11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

export const age = (planet, seconds) => {
  const ageInEarth = seconds / EARTH_YEAR_IN_SECONDS;
  if (!PLANET_TIME.hasOwnProperty(planet)) throw new Error('not a planet');
  return Number((ageInEarth / PLANET_TIME[planet]).toFixed(2));
};
