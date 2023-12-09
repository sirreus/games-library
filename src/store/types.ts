export interface IGame {
  name: string;
  category: string;
  rating: number;
  activeUsers: number;
  image: string;
}

export interface IGameData {
  data: IGame[];
  isFavorite: boolean;
}

export interface IGamesStore {
  data: IGameData[];
}
