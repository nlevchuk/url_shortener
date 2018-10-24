import HeaderBox from '../header-box';

describe('<HeaderBox />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<HeaderBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
