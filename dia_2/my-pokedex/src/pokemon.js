import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    render() {
        const {pokemon} = this.props;
        return(
            <div className ='pokemon'>
            <div className ='pokeInfo'>
            <h3>{pokemon.name}</h3>
            <p>{pokemon.type} </p>
            <p>{pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}
            </p>
            </div>
            <div className = 'pokeImg'>
                <img src = {pokemon.image} alt = {pokemon.name}></img> 
            </div>
        </div> 
        )
    }
}

Pokemon.PropTypes = {
    pokemon:PropTypes.shape({
        id:PropTypes.number,
        type:PropTypes.string,
        averageWeight:PropTypes.shape({
            value:PropTypes.number,
            measurementUnit: PropTypes.string
        }),
        image:PropTypes.string,
    }).isRequired,
};

export default Pokemon ;