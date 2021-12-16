import { combineReducers } from "redux";

const songsReducer = () => {
  /* Fetch: You could simply make a fetch to an end point to 
    retrieve the data.  Instead of hardcoding */
  return [
    { title: "No Scrubs", duration: "4:05" },
    { title: "Macarena", duration: "2:30" },
    { title: "All Star", duration: "3:15" },
    { title: "I Want it That Way", duration: "1:45" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//Combiine all the Reducers, so connect can dispatch the object to all of them
// to update the state.
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});