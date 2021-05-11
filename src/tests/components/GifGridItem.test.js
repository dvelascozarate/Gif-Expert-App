import { shallow } from 'enzyme'
import React from 'react'
import { GifGridItem } from '../../components/GifGridItem'

describe('Pruebas al componente GitGridItem', () => {

    const title = 'Hulk'
    const url = 'https://media2.giphy.com/media/aS8ypUweGOXMA/giphy-downsized-medium.gif?cid=a8e6cbe4ly1k6i5op9j5yom7q2yvco00nzk45ax0gb3p06tk&rid=giphy-downsized-medium.gif&ct=g'

    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Debe mostrar correctamente el componente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar el titulo', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    });

    test('Debe mostrar la imagen', () => {
        const img = wrapper.find('img');
        expect(img.prop('src').trim()).toBe(url);
        expect(img.prop('alt').trim()).toBe(title);
    })

    test('El contenedor tiene que tener la clase animate__backInRight', () => {
        const div = wrapper.find('div');
        expect(div.prop('className').trim()).toContain('animate__backInRight');
    })


})
