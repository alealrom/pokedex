import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardPokemon } from '../src/CardPokemon';
import '@testing-library/jest-dom';
import 'isomorphic-fetch';

describe('should get data from API', function(){
    beforeEach(function(){
        render(<CardPokemon/>);
    })

    test('should be exist a field for the name of the pokemon', function(){
        let pokemonName = screen.getByLabelText('pokemonName');

        expect(pokemonName).toBeDefined();
    })

    test('should be exist a field for the image of the pokemon', function(){
        let pokemonImage = screen.getByLabelText('pokemonImage');

        expect(pokemonImage).toBeDefined();
    })

    test('should be exist a field for the number of the pokemon', function(){
        let pokemonNumber = screen.getByLabelText('pokemonNumber');

        expect(pokemonNumber).toBeDefined();
    })

    test('should be exist a field for experience of the pokemon', function(){
        let pokemonEXP = screen.getByLabelText('pokemonEXP');

        expect(pokemonEXP).toBeDefined();
    })

    test('should be exist a field for type of the pokemon', function(){
        let pokemonType = screen.getByLabelText('pokemonType');

        expect(pokemonType).toBeDefined();
    })

    test('shouls be exist a field for hability of the pokemon', function(){
        let pokemonHability = screen.getByLabelText('pokemonHability');

        expect(pokemonHability).toBeDefined();
    })

    test('should be exist a field for height of the pokemon', function(){
        let pokemonHeight = screen.getByLabelText('pokemonHeight');

        expect(pokemonHeight).toBeDefined();
    })

    test('should be exist a field for weight of the pokemon', function(){
        let pokemonWeight = screen.getByLabelText('pokemonWeight');

        expect(pokemonWeight).toBeDefined();
    })

})