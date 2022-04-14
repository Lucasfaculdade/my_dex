import React, { useContext } from 'react';
import FavoriteContext from '../Function/PkFavorites';
import logo from '../data/pokedex.png';


const NavBar = () => {
    const { favoritePokemons } = useContext(FavoriteContext);
    const btn = document.querySelector('#refresh');
    return (
        <div>
            <nav>
                <button className="pagina-refresh">
                    <img alt="pokedex-logo"
                        src={logo}
                        className="navbar-img"/> 
                </button>
                <button className='navbar-fav'>{favoritePokemons.length} Pokemons Favoritos </button>
            </nav>
        </div>
    );
};

export default NavBar;