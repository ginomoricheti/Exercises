// src/types/types.ts
export interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  
  // For TV Shows:
  name: string;
  first_air_date: string;
}
