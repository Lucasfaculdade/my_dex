import React from 'react';
import Pagination from '../Function/Pagination';

import Pokemon from './Pokemon';

const Pokedex = (props) => {
    const {pokemons, loading, page, setPage ,totalPages} = props;
    const onUpClickHandler = () => {
        if(page > 0){
            setPage(page-1);
        }
    };
    const onDownClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1);
        }
    };
    return (
        <div>
            <div className="pokedex-header">
                <button className="filtro">Todos</button>
                <button className="filtro_gen1">GEN I</button>
                <button className="filtro_gen2">GEN II</button>
                <button className="filtro_gen3">GEN III</button>
                <button className="filtro_gen4">GEN IV</button>
                <button className="filtro_gen5">GEN V</button>       
            </div>
            {loading ? (
                <div>Carregando, aguarde um momento.....</div>
            ) : ( 
                <div className="pokedex-grid">
                    {pokemons && pokemons.map((pokemon, index)=>{
                        return(
                            <Pokemon key={index} pokemon={pokemon}/>
                        );
                    })}
                </div>
            )}
            <div className="pokedex-baseboard">
                <Pagination
                    page={page+1}
                    totalPages={totalPages}
                    onUpClick={onUpClickHandler}
                    onDownClick={onDownClickHandler}
                />
            </div>
        </div>
    );
};

export default Pokedex;