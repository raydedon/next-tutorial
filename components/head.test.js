import {shallow} from 'enzyme';
import Head from './Head';
import {expect} from 'chai';

describe('<Head />', () => {
	it('should render title', () => {
		const title = 'random-text';
		const wrapper = shallow(<Head title={title} />);
		expect(wrapper.find('title').text()).to.equal(title);
	});
	
	it('should render description', () => {
		const description = 'random-text';
		const wrapper = shallow(<Head description={description} />);
		expect(wrapper.find('meta[name="description"]').first().prop('content')).to.equal(description);
	});
});
