import { formatText } from '../formatText';

describe('formatText', () => {
  it('should return formatted text', () => {
    const mockJson = '<br /> sample';
    const expected = formatText(mockJson);
    const result = '&lt;br /&gt; sample';
    expect(expected).toEqual(result);
  });
});
