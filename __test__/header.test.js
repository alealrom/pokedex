import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/Header';
import '@testing-library/jest-dom';

describe('should be exist a header', function(){

    test('should be exist a img', function(){
        render(<Header/>);

        const img = screen.getByRole('img');

        expect(img).toBeDefined();
    })

    test('should be exist a page title', function(){
        render(<Header />);

        const title = screen.getByText('Pokédex');

        expect(title).toHaveTextContent('Pokédex');
        })
})