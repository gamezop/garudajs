/* 
  Contains all the interfaces used in the project.
*/


export interface IConnectionConfig {
  socketUrl: string;
  playerId: string;
}

export interface IJoinRoom {
  maxPlayers?: number;
  matchId?: string;
}

export interface IMatchSendInfo {
  player_count: number; 
  player_id: string;
  room_name: string;
  match_id?: string;
}
