import { createContext, useState } from "react";

const FavoritesContext = createContext({
  userFavorites: [],
  totalFavorites: 0,
  addFavorites: (favoriteMeetup) => {},
  removeFavorites: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavorites = (favoriteMeetup) => {
    setUserFavorites((preData) => preData.concat(favoriteMeetup));
  };

  const removeFavorites = (meetupId) => {
    setUserFavorites((preData) =>
      preData.filter((meetup) => meetup.id !== meetupId)
    );
  };

  const itemIsFavorite = (meetupId) =>
    userFavorites.some((meetup) => meetup.id === meetupId);

  const context = {
    userFavorites,
    totalFavorites: userFavorites.length,
    addFavorites,
    removeFavorites,
    itemIsFavorite,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
