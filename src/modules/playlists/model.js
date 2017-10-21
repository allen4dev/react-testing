import { schema } from 'normalizr';

export const INITIAL_STATE = {
  entities: {},
};

export const playlistSchema = new schema.Entity('playlists');
export const playlistListSchema = [playlistSchema];
