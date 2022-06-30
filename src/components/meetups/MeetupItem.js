import React, { useContext } from "react";

import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MeetupItem.module.css";

function MeetupItem({ meetup: { id, image, title, address, description } }) {
  const { addFavorites, removeFavorites, itemIsFavorite } =
    useContext(FavoritesContext);

  const isFavorite = itemIsFavorite(id);

  const toggleFavoritesStatusHandler = () => {
    if (isFavorite) {
      return removeFavorites(id);
    }
    return addFavorites({
      id,
      title,
      image,
      address,
      description,
    });
  };
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {isFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
