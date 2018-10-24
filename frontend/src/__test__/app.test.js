import App from '../app';

describe('<App />', () => {
  it('should use HeaderBox and MainBox', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
