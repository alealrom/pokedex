import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '../src/Header';
import '@testing-library/jest-dom';

describe('should be exist a header', function(){
    beforeEach(function(){
        render(<Header/>);
    })

    test('should be exist a img', function(){
        const img = screen.getByRole('img');

        expect(img).toBeDefined();
    })

    test('should be exist a page title', function(){
        const title = screen.getByRole('heading');

        expect(title).toBeDefined();
        })
})