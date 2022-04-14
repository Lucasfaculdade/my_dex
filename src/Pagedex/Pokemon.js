import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import FavoriteContext from '../Function/PkFavorites';

const Pokemon = (props) => {
    const { favoritePokemons, updateFavoritePokemons } = useContext(FavoriteContext);
    const {pokemon} = props;
    const onHearthClick = () =>{
        updateFavoritePokemons(pokemon.name);
    };
    const heart = favoritePokemons.includes(pokemon.name) ? '❤️' : '🖤';
    return (
        <>
            <div className="pokemon-card" >
                <div className="pokemon-image-container">
                    <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
                </div>
                <div className="card-body">
                    <Link className="card-top" to={'/PkInfo'}>
                        <h3>{pokemon.name}</h3>
                        <div>#{pokemon.id}</div>
                    </Link>
                    <div className="card-bottom">
                        <button className="pokemon-hearth-btn" onClick={onHearthClick}>
                            {heart}
                        </button>
                 
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pokemon;