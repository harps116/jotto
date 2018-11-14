import React from 'react';
import { findByAttr } from './testUtils';
import { shallow } from "enzyme";
import Congrats from '../Congrats';

const setup = (props={}) => {
    return shallow(<Congrats {...props}/>)
}
test('renders without error', () => {
    const wrapper = setup();
    const component = findByAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` is false', () => {
    const wrapper = setup({success: false});
    const component = findByAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
})

test('renders non-empty congrats message on `success` prop being true', () => {
    const wrapper = setup({ success: true });
    const component = findByAttr(wrapper, 'congrats-message');
    expect(component.text()).not.toBe(''); 
})
