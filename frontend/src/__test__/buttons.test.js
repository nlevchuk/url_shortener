import Button, { ShortenButton, CopyButton, ResetButton } from '../buttons';

describe('<Button />', () => {
  it('should not have name', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button')).not.toHaveText;
  });

  it('should have name', () => {
    const wrapper = shallow(<Button value='TEST' />);
    expect(wrapper.find('button')).toHaveText('TEST');
  });

  it('should not have id', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find('button#open-world')).not.toExist();
  });

  it('should have id', () => {
    const wrapper = shallow(<Button id='open-world' />);
    expect(wrapper.find('button#open-world')).toExist();
  });
});

describe('<ShortenButton />', () => {
  it('shoule render Button with props value=SHORTEN', () => {
    const wrapper = shallow(<ShortenButton onClick={() => {}} />)
    expect(wrapper).toHaveProp('value', 'SHORTEN');
  });
});

describe('<CopyButton />', () => {
  it('shoule render Button with props value=COPY', () => {
    const wrapper = shallow(<CopyButton onClick={() => {}} />)
    expect(wrapper).toHaveProp('value', 'COPY');
  });
});

describe('<ResetButton />', () => {
  it('shoule render Button with props value=X', () => {
    const wrapper = shallow(<ResetButton onClick={() => {}} />)
    expect(wrapper).toHaveProp('value', 'X');
  });
});
