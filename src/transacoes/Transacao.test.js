import React from 'react';
import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import Transacao from './Transacao';

describe('Componente de transação de extrato', () => {
    it('O snapshot do component deve permanecer sempre o mesmo', () => {
        const { container } = render(<Transacao data='08/09/2020' tipo='saque' valor='20'/>)
        expect(container.firstChild).toMatchSnapshot();
    });
    describle('')
});