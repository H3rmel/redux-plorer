export const addBookTrip = (trip) => {
  return {
    type: "ADD_BOOKTRIP",
    trip,
  };
};

export const removeBookTrip = (id) => {
  return {
    type: "REMOVE_BOOKTRIP",
    id,
  };
};
