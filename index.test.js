const fs = require('node:fs');
const { render } = require('./index');

describe('render', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    const mockDate = new Date(2024, 6, 1);
    jest.setSystemTime(mockDate);
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render', async () => {
    const jsonResume = fs.readFileSync('./tests/fixtures/test-resume.json');
    const resume = JSON.parse(jsonResume);
    const output = await render(resume);
    expect(output).toBeDefined();
    expect(output).toMatchSnapshot();
  });
});
