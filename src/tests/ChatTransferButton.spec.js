import React from 'react'
import ChatTransferButton from '../ChatTransferButton'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Actions } from '@twilio/flex-ui'
 
Enzyme.configure({ adapter: new Adapter() });

jest.mock('@twilio/flex-ui')
jest.mock('flex-plugin')

describe('Chat Transfer Button', () => {
  let subject;

  beforeEach(() => {
    subject = Enzyme.mount(<ChatTransferButton />);
  })

  it('calls show directory when clicked', () => {
    subject.simulate('click');
    expect(Actions.invokeAction).toHaveBeenCalledWith('ShowDirectory')
  })
})