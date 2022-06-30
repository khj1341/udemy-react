import React, { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
  const { userFavorites, totalFavorites } = useContext(FavoritesContext);

  let content;
  if (totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some?</p>;
  } else {
    content = <MeetupList meetups={userFavorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
};

export default FavoritesPage;
