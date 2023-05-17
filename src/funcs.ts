export function createRandomNumber(count: number) {
  const result = [];
  const created = new Array(count + 1).fill(false);

  while (result.length < 500) {
    const num = Math.floor(Math.random() * 500) + 1;

    if (created[num]) continue;
    result.push(num);
    created[num] = true;
  }
  return result.join(" ");
}
