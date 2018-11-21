import MainBox, { OriginalLink } from '../main-box';
import Input from '../input';
import Button, { ShortenButton, CopyButton, ResetButton } from '../buttons';

jest.mock('../requests');

describe('<MainBox />', () => {
  const url = 'https://heroku.com';
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<MainBox />);
  });

  it('should display shorten button', () => {
    expect(wrapper.find(ShortenButton)).toExist();
  });

  it('should call alert when press on shorten button with empty input', () => {
    window.alert = jest.fn();
    expect(wrapper.find(Input)).not.toHaveValue();
    expect(window.alert).not.toHaveBeenCalled();

    // console.log(wrapper.debug());
    wrapper.find(ShortenButton).simulate('click');

    expect(window.alert).toHaveBeenCalled();
  });

  it('should display copy button', async () => {
    expect(wrapper.find(CopyButton)).not.toExist();

    wrapper.find(Input).simulate('change', { target: { value: url }});
    await wrapper.find(ShortenButton).simulate('click');
    await wrapper.update();

    expect(wrapper.find(CopyButton)).toExist();
  });

  it('should display reset button', async () => {
    expect(wrapper.find(ResetButton)).not.toExist();

    wrapper.find(Input).simulate('change', { target: { value: url }});
    await wrapper.find(ShortenButton).simulate('click');
    await wrapper.update();

    expect(wrapper.find(ResetButton)).toExist();
  });

  it('should display original link box', async () => {
    expect(wrapper.find(OriginalLink)).not.toExist();

    wrapper.find(Input).simulate('change', { target: { value: url }});
    await wrapper.find(ShortenButton).simulate('click');
    await wrapper.update();

    expect(wrapper.find(OriginalLink)).toExist();
  });

  it('should call alert when press on copy button', async () => {
    window.alert = jest.fn();
    expect(window.alert).not.toHaveBeenCalled();

    wrapper.find(Input).simulate('change', { target: { value: url }});
    await wrapper.find(ShortenButton).simulate('click');
    await wrapper.update();

    expect(window.alert).not.toHaveBeenCalled();

    await wrapper.find(CopyButton).simulate('click');

    expect(window.alert).toHaveBeenCalled();
  });

  it('should reset everything when press on reset button', async () => {
    wrapper.find(Input).simulate('change', { target: { value: url }});
    await wrapper.find(ShortenButton).simulate('click');
    await wrapper.update();

    await wrapper.find(ResetButton).simulate('click');

    expect(wrapper.find(Input)).not.toHaveValue();
    expect(wrapper.find(ShortenButton)).toExist();
    expect(wrapper.find(ResetButton)).not.toExist();
    expect(wrapper.find(CopyButton)).not.toExist();
    expect(wrapper.find(OriginalLink)).not.toExist();
  });
});
