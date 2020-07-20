import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './index';
import { textSpanContainsPosition, isExportDeclaration } from 'typescript';

Enzyme.configure({ adapter: new Adapter() });

describe('header', () => {
    test('it renders', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    test('it has an h1 tag', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('h1').length).toBe(1);
    });
});