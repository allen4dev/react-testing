import uuid from 'uuid';

const fixtures = {
  getPlaylist() {
    return {
      id: uuid(),
      title: 'Playlist title',
    };
  },

  getPlaylists(n) {
    let playlists = {};

    while (n-- > 0) {
      const newPlaylist = this.getPlaylist();
      playlists = { ...playlists, [newPlaylist.id]: newPlaylist };
    }

    return playlists;
  },

  createResponse(n) {
    const playlists = this.getPlaylists(n);

    return {
      entities: { playlists },
      result: Object.keys(playlists),
    };
  },
};

export default fixtures;
