import React from 'react';
import { render, screen } from '@testing-library/react';
import { Footer } from '../src/Footer';
import '@testing-library/jest-dom';

describe('should be exist a footer', function(){
    beforeEach(function(){
        render(<Footer/>);
    })

    test('should be exist a text of "challenge by" attribution', function(){
        const textChallengeBy = screen.getByText('Challenge by');

        expect(textChallengeBy).toHaveTextContent('Challenge by');
    })

    test('should be exist a text of "coded by" attribution', function(){
        const textCodedBy = screen.getByText('Coded by');

        expect(textCodedBy).toHaveTextContent('Coded by');
    })

    test('should be exist a two url attribution', function(){
        const URLsAttribution = screen.getAllByRole('link');

        expect(URLsAttribution.length).toBe(2);
    })   
})