import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './pokemon';


class Pokedex extends React.Component {
    render() {
        const {title,pokemons} = this.props;
    return( 
        <div className ='pokedex'>
            <div className ='title-container'>
            {pokemons.map(
            pokemon => <Pokemon key={pokemon.id} pokemon ={pokemon} />) }
            </div>
        </div> 
    )
    };

static defaultProps = {
    title:PropTypes.string,
  }
}
  Pokedex.propTypes = {
      title:PropTypes.string,
      pokemons:PropTypes.arrayOf(PropTypes.object).isRequired 

};

export default Pokedex ;
