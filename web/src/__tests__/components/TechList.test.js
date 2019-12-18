import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('Tech List component', () => {
    beforeEach(() => {
        localStorage.clear();
    })

    it('should be able to add new tech', () => {
        const { getByText, getByTestId, getByLabelText } = render(<TechList />);

        //debug(); // ver como fica a pagina (html)

        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
        fireEvent.submit(getByTestId('tech-form'));

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByLabelText('Tech')).toHaveValue('');
    });

    it('should store techs in storage', () => {
        let { getByTestId, getByLabelText, getByText } = render(<TechList />);

        fireEvent.change(getByLabelText('Tech'), { target: { value: 'Node.js' } });
        fireEvent.submit(getByTestId('tech-form'));

        cleanup();

        ({ getByTestId, getByLabelText, getByText } = render(<TechList />));

        expect(localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['Node.js']));
        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
    });
});