import React from 'react';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas del archivo getGifs', () => {

    test('Debe traer 10 elementos', async () => {

        const gifs = await getGifs('kiss');

        expect(gifs.length).toBe(10);

    })

    test('No debe traer elementos', async () => {

        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);

    })

})
