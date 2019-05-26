import {shallow} from 'enzyme';
import {expect} from 'chai';
import {Recipes} from '../pages/recipes';
import Layout from "../components/Layout";
import RecipePage from "../components/recipe-page/RecipePage";

describe('<Recipe />', () => {
	it('should render Layout component', () => {
		const wrapper = shallow(<Recipes />);
		expect(wrapper.find(Layout).length).to.equal(1);
	});

	it('should render RecipePage component', () => {
		const wrapper = shallow(<Recipes />);
		expect(wrapper.find(RecipePage).length).to.equal(1);
	});
});
