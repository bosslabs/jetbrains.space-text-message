const process = require('process');
const cp = require('child_process');
const path = require('path');

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_SPACE_URL'] = 'example.com';
  process.env['INPUT_ACCESS_TOKEN'] = 'test';
  process.env['INPUT_CHANNEL_ID'] = '123test';
  process.env['INPUT_MESSAGE'] = 'test message';
  const ip = path.join(__dirname, 'index.js');
  console.log(cp.execSync(`node ${ip}`, {env: process.env}).toString());
})
