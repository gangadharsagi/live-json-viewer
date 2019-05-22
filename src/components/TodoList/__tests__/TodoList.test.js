import 'jsdom-global/register';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TodoList } from '../TodoList';

Enzyme.configure({ adapter: new Adapter() });

describe('TodoList', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <TodoList />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
