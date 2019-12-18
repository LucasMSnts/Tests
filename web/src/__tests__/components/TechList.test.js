import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('Tech List component', () => {
    it('should be able to add new tech', () => {
        const { getByText, getByTestId, debug } = render(<TechList />);

        debug(); // ver como fica a pagina (html)

        fireEvent.click(getByText('Adicionar'));

        debug();

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    });
});