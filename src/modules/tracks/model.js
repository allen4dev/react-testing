import { schema } from 'normalizr';

export const INITIAL_STATE = {
  entities: {},
  results: [],
};

export const trackSchema = new schema.Entity('tracks');
export const trackListSchema = [trackSchema];
