import { DEEZER_SET_ALBUM } from "../actions";

const initialState = {
  albumsByArtist: {}, // Cambia da 'results' a 'albumsByArtist', che sarà un oggetto
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEEZER_SET_ALBUM:
      const { artist, albums } = action.payload;
      return {
        ...state,
        albumsByArtist: {
          ...state.albumsByArtist,
          [artist]: albums, // Assegna gli album all'artista specifico
        },
      };
    default:
      return state;
  }
};

export default albumReducer;
