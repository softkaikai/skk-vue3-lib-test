import { add, addName} from "../tempFn";
import { mount } from '@vue/test-utils';
import AddComponent from '../Add.vue';


describe('tempFn.ts', () => {
    it('AddComponent', () => {
        const wrapper = mount(AddComponent, {props: {name: 'kaikai'}})
        expect(wrapper.findAll('div')).toHaveLength(4)
    })
    it('add', () => {
        expect(add(1, 2)).toBe(3)
    })

    it('addName', () => {
        expect(addName('kaikai', '1')).toBe('kaikai1');
    })
})
