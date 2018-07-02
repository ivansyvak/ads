import { Int4Array } from './array';

async function main() {
  let arr = new Int4Array(3);

  arr.set(0, 1);
  arr.set(1, 2);
  arr.set(2, 3);

  arr.forEach(console.log);
}

main();
