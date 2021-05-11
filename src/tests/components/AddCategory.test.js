import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory";


describe('Pruebas al componente AddCategory', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });


    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Debe cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', { target: { value: value } });

        const p = wrapper.find('p');

        expect(p.text()).toBe(value);

    })

    test('No debe postear la información del submit', () => {
        const form = wrapper.find('form');
        const event = { preventDefault: () => { } }

        form.simulate('submit', event);

        expect(setCategories).not.toHaveBeenCalled();

    })

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value: value } });

        const form = wrapper.find('form');
        const event = { preventDefault: () => { } }
        form.simulate('submit', event);

        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toEqual('');
    })


})
