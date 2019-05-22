import * as React from 'react';
import { TodoItem } from '../TodoItem';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('TodoItem', () => {
  it('should render component', () => {
    const Wrapper = shallow(
      <TodoItem />,
    );
    const expected = Wrapper.exists();
    const result = true;
    expect(expected).toEqual(result);
  });
});
