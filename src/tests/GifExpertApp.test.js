import { shallow } from 'enzyme';
import React from 'react';
import { GifExpertApp } from '../GifExpertApp';

describe('Pruebas para el componente GifExpertApp', () => {

    test('Debe mostrar el componente correctamente', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe mostrar una lista de categorías', () => {

        const defaultCategories = ['Hulk', 'Spiderman'];

        const wrapper = shallow(<GifExpertApp defaultCategories={defaultCategories} />);

        expect(wrapper.find('GifGrid').length).toBe(defaultCategories.length);

    })

})
