import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Index} from '../pages/index';
import Layout from "../components/Layout";
import GenericList from "../components/generic-list/GenericList";
import RecipeCard from "../components/recipe-card/RecipeCard";

describe('<Index />', () => {
	it('should render Layout component', () => {
		const wrapper = shallow(<Index />);
		expect(wrapper.find(Layout).length).to.equal(1);
	});
	
	it('should render GenericList component', () => {
		const wrapper = shallow(<Index />);
		expect(wrapper.find(GenericList).length).to.equal(1);
	});
	
	it('should render RecipeCard component', () => {
		const recipes = {
			1: {id: '1', description: 'desc-1'},
			2: {id: '2', description: 'desc-2'}
		};

		const wrapper = shallow(<Index recipes={recipes} />);
		expect(wrapper.find(GenericList).first().prop('list').length).to.equal(2);
	});
});