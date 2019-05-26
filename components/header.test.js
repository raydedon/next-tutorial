import {shallow, mount} from 'enzyme';
import {Header} from './Header';
import {expect} from 'chai';
import Link from 'next/link'

describe('<Header />', () => {
	it('should render Link component', () => {
		const wrapper = mount(<Header />);
		expect(wrapper.contains(Link)).to.equal(true);
	});
	
	it('should render number of favourites', () => {
		const favourites = {1: true, 2: true};
		const wrapper = shallow(<Header favourites={favourites} />);
		expect(wrapper.find('i').first().text().trim()).to.equal('2');
	});
});
