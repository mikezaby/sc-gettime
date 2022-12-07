import { getTime } from '../src/node.js';

const intervalId = setInterval(() => {
  console.log(getTime());
}, 1000);

await new Promise((resolve) => setTimeout(resolve, 10 * 1000));
clearInterval(intervalId);
