import {shallow} from 'enzyme';
import {Favourite} from './Favourite';

describe('<Favourite />', () => {
	it('renders solid heart for favourite <Favourite /> components', () => {
		const wrapper = shallow(<Favourite favourite={true} />);
		expect(wrapper.find('i.fa-heart').hasClass('fas')).toEqual(true);
	});
	
	it('renders empty heart for favourite <Favourite /> components', () => {
		const wrapper = shallow(<Favourite />);
		expect(wrapper.find('i.fa-heart').hasClass('far')).toEqual(true);
	});
	
	it('onClick calls the toggleFavourite method', () => {
		const toggleFavourite = jest.fn();
		const event = {
			preventDefault: () => {},
			stopPropagation: () => {}
		};
		const wrapper = shallow(<Favourite toggleFavourite={toggleFavourite} />);
		wrapper.simulate('click', event);
		expect(toggleFavourite.mock.calls.length).toEqual(1);
	});
	
	it('onClick calls the toggleFavourite method with the desired id', () => {
		const toggleFavourite = jest.fn();
		const event = {
			preventDefault: () => {},
			stopPropagation: () => {}
		};
		const wrapper = shallow(<Favourite toggleFavourite={toggleFavourite} id="random-text-id" />);
		wrapper.simulate('click', event);
		expect(toggleFavourite).toBeCalledWith('random-text-id');
	});
});