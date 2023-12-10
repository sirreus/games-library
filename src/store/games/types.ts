export const GAMES = "games";

export interface IGame {
  id: number;
  name: string;
  category: string;
  rating: number;
  activeUsers: number;
  image: string;
}

export interface IGamesStore {
  allGames: IGame[];
  favorites: IGame[];
  error: string;
}
