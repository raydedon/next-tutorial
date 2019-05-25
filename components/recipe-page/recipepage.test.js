import React from 'react';
import {shallow} from 'enzyme';
import {RecipePage} from './RecipePage';

describe('<RecipeCard />', () => {
	it('RecipeCard component should have "recipe-detail" classname', () => {
		const wrapper = shallow(<RecipePage />);
		expect(wrapper.find('div').first().hasClass('recipe-detail')).toEqual(true)
	});
});