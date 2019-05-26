import {shallow} from 'enzyme';
import Layout from './Layout';
import {expect} from 'chai';
import Head from './Head';
import Header from './Header';
import Footer from './Footer';


describe('<Layout />', () => {
	it('should render Layout component', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.find('div.app-container').length).to.equal(1);
	});
	
	it('should render Head component', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.find(Head).length).to.equal(1);
	});
	
	it('should render Header component', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.find(Header).length).to.equal(1);
	});
	
	it('should render Footer component', () => {
		const wrapper = shallow(<Layout />);
		expect(wrapper.find(Footer).length).to.equal(1);
	});
	
	it('should render children', () => {
		const DummyComp = ({id}) => id;
		const wrapper = shallow(<Layout><DummyComp id={1} /></Layout>);
		
		expect(wrapper.find(DummyComp).length).to.equal(1);
	});
});