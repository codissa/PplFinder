import React , {useState} from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Favorites } from "pages";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar";

const AppRouter = () => {
    const [favorites, setFavorites]= useState([]);
    const addFavorite = favorite => {
        if (!favorites.some(alreadyFavorite => alreadyFavorite.email == favorite.email)){
            setFavorites([...favorites,favorite]);
        }
        else{
            setFavorites(favorites.filter((current) => current.email !== favorite.email));
        }

    console.log(favorites);}
  return (
    <ThemeProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/Home" render={() => (
              <Home addFavorite={addFavorite}  />
          )} />
            <Route  path="/Favorites" render={() => (
                <Favorites favoriteUser={favorites} />
            )} /> />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;
