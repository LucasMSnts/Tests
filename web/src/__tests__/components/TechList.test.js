import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('Tech List component', () => {
    it('should be able to add new tech', () => {
        const { getByText, getByTestId, getByLabelText } = render(<TechList />);

        //debug(); // ver como fica a pagina (html)

        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
        fireEvent.submit(getByTestId('tech-form'));

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByLabelText('Tech')).toHaveValue('');
    });
});