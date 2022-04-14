import React, { useState, useEffect } from 'react';
import {getPokemonData, getPokemons, searchPokemon} from '../Function/api';
import './pagedex.css';
import NavBar from './NavBar';
import Searchbar from './SearchBar';
import { FavoriteProvider } from '../Function/PkFavorites';
import backgroundImage from '../data/pattern.png';
import Pokedex from './Pokedex';

const favoritesKey = 'f';
function Pagedex() {
  
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState();
    const [pokemons, setPokemons] = useState([]);
    const [favorites, setFavorites] = useState([]); 

    const itensPerPage = 25;
    const fetchPokemons = async () => {
        try{
            setLoading(true);
            setNotFound(false);
            const data = await getPokemons(itensPerPage, itensPerPage * page);
            const promises = data.results.map(async (pokemon) =>{
                return await getPokemonData(pokemon.url);
            });

            const results = await Promise.all(promises);
            setPokemons(results);
            setLoading(false);
            setTotalPages(Math.ceil(data.count / itensPerPage));
        }catch (error) {
            console.log('fethPokemons error: ', error);
        }
    };

    const loadFavoritePokemons = () =>{
        const pokemons = JSON.parse(window.localStorage.getItem(favoritesKey))|| [];
        setFavorites(pokemons);
    }; 
    useEffect(() => {
        loadFavoritePokemons() ; 
    }, []);

    useEffect(() => {
        fetchPokemons();
    }, [page]);

    const updateFavoritePokemons = (name) => {
        const updatedFavorites = [...favorites];
        const favoriteIndex = favorites.indexOf(name);
        if(favoriteIndex >= 0){
            updatedFavorites.splice(favoriteIndex, 1);
        }else {
            updatedFavorites.push(name);
        }
        window.localStorage.setItem(favoritesKey, JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    const onSearch = async (pokemon) => {
        if(!pokemon){
            return fetchPokemons();
        }
        setLoading(true);
        setNotFound(false);
        const result = await searchPokemon(pokemon);
        if(!result){
            setLoading(true);
            setNotFound(false);
        } else {
            setPokemons([result]);
            setPage(0);
            setTotalPages();
        }
        setLoading(false);
    };

    return(
        <FavoriteProvider
     
            value={{
                favoritePokemons: favorites, 
                updateFavoritePokemons: updateFavoritePokemons, 
            }}
        >
            <div className="App" style={{background: `url(${backgroundImage})`}}>
                <NavBar />
                <Searchbar onSearch={onSearch}/>
                {notFound ? (
                    <div class-name="not-found-text"> Aparentemente ele meteu essa ?! </div>
                ) : 
                    (<Pokedex
                        pokemons={pokemons}
                        loading={loading}
                        page={page}
                        setPage={setPage}
                        totalPages={totalPages}
                    />)}
            </div>
        </FavoriteProvider>
    );
}
export default Pagedex;