import { shallowMount } from '@vue/test-utils';
import Home from "../../src/components/Home.vue"

describe('Home.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Home);
    })

    it('should display an image', () => {
        let expected = true;
        let element = wrapper.find('img')

        expect(element.exists()).toBe(expected)
    })

    it('should have an h1', () => {
        let element = wrapper.find('h1')
        expect(element.exists()).toBe(true)
    })
})
