import React from 'react';
import Navbar from '../components/Navbar';
import PokemonList from '../components/PokemonList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <h1>Bienvenu sur la page d'accueil</h1>
            <PokemonList />
        </div>
    );
};

export default Home;