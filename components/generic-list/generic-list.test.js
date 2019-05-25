import React from 'react';
import {shallow, mount} from 'enzyme';
import GenericList from './GenericList';

describe('<GenericList />', () => {
	it('GenericList component should render empty if list is empty', () => {
		const wrapper = shallow(<GenericList />);
		expect(wrapper.isEmptyRender()).toBe(true);
	});
	
	it('GenericList component should have "generic-list" classname', () => {
		const list = [{id: 1}, {id: 2}];
		const wrapper = shallow(<GenericList list={list} />);
		expect(wrapper.find('div').first().hasClass('generic-list')).toEqual(true)
	});
	
	it('GenericList component should have className which is sent as prop', () => {
		const list = [{id: 1}, {id: 2}];
		const classText = 'some-random-text';
		const wrapper = shallow(<GenericList list={list} className={classText} />);
		expect(wrapper.find('div.generic-list').hasClass(classText)).toEqual(true)
	});
	
	it('GenericList component should render list components', () => {
		const list = [{id: 1}, {id: 2}];

		const DummyComp = ({id}) => id;
		
		const wrapper = mount(<GenericList list={list} ItemComp={DummyComp} />);
		expect(wrapper.find(DummyComp).length).toEqual(list.length);
	});
});