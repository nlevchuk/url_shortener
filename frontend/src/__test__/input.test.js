import Input from '../input';

describe('<Input />', () => {
  it('should set onChange event', () => {
    const wrapper = shallow(
      <Input url='https://heroku.com' onChange={() => {}} readOnly={false} />
    );
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });

  it('should set readOnly input', () => {
    const wrapper = shallow(
      <Input url='https://heroku.com' onChange={() => {}} readOnly={true} />
    );
    // console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});
