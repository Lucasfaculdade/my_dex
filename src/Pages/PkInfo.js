import './info.css';
import PkData from './PkData';
import NavBar from '../Pagedex/NavBar';
import backgroundImage from '../data/pattern.png';
import React from 'react';
import { FavoriteProvider } from '../Function/PkFavorites';


function PkInfo() {
    
    return(
        <FavoriteProvider>
            <div className="App" style={{background: `url(${backgroundImage})`}}>
                <NavBar />
            </div>
            <PkData
			 
            />
        </FavoriteProvider>
    );
}
export default PkInfo;