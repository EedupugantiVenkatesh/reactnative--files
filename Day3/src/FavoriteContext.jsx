import React, { createContext, useState } from 'react';

const FavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favoriteContacts, setFavoriteContacts] = useState([]);

  const addToFavorites = (contact) => {
    setFavoriteContacts((prevFavorites) => [...prevFavorites, contact]);
  };

  const removeFromFavorites = (contact) => {
    setFavoriteContacts((prevFavorites) =>
      prevFavorites.filter((item) => item.recordID !== contact.recordID)
    );
  };

  const isFavorite = (contact) => {
    return favoriteContacts.some((item) => item.recordID === contact.recordID);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteContacts,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteContext, FavoriteProvider };
