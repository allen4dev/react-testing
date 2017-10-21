import uuid from 'uuid';

const fixtures = {
  getTrack() {
    return {
      id: uuid(),
      created_at: new Date().toString(),
      title: 'Track title',
      artwork_url: `https://i1.sndcdn.com/artworks-${uuid()}.jpg`,
      user: {
        avatar_url: `https://i1.sndcdn.com/avatars-${uuid()}-large.jpg`,
        id: uuid(),
        uri: `https://api.soundcloud.com/users/${uuid()}`,
        username: 'allen4dev',
      },
    };
  },

  getTracks(n) {
    let tracks = {};

    while (n-- > 0) {
      const newTrack = this.getTrack();
      tracks = { ...tracks, [newTrack.id]: newTrack };
    }

    return tracks;
  },

  createResponse(n) {
    const tracks = this.getTracks(n);

    return {
      entities: { tracks },
      result: Object.keys(tracks),
    };
  },
};

export default fixtures;
