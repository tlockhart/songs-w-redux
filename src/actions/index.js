// Action Creator
export const selectSong = (song) => {
    //Return an action
    return {
        // Required
        type: 'SONG_SELECTED',
        payload: song
    };
};

