//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (dna) => {
  const newRna = [];

  for (let i = 0; i < dna.length; i++) {
    if (dna[i] ===  'G') {
      newRna.push('C');
    } else if (dna[i] ===  'C') {
      newRna.push('G');
    } else if (dna[i] ===  'T') {
      newRna.push('A');
    } else if (dna[i] ===  'A') {
      newRna.push('U');
    } else continue;
  }

  return newRna.join('');
};
