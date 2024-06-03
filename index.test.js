const fs = require('node:fs');
const { render } = require('./index');

describe('render', () => {
  it('should render', async () => {
    const jsonResume = fs.readFileSync('./tests/fixtures/test-resume.json');
    const resume = JSON.parse(jsonResume);
    const output = await render(resume);
    expect(output).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});
