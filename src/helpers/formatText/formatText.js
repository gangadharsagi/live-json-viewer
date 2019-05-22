/**
 * This helper is used to format the text and will return the updated value
 *
 * @param {string} json - json in string format
 * @returns {string} - updated data
 */
export const formatText = (json) => {
  const data = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return data.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, match => {
    let type = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        type = 'key';
      } else {
        type = 'string';
      }
    } else if (/true|false/.test(match)) {
      type = 'boolean';
    } else if (/null/.test(match)) {
      type = 'null';
    }
    return '<span class="' + type + '">' + match + '</span>';
  });
};
