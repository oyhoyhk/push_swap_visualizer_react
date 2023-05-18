export function createRandomNumber(count: number) {
  const result = [];
  const created = new Array(count + 1).fill(false);

  while (result.length < count) {
    const num = Math.floor(Math.random() * count) + 1;

    if (created[num]) continue;
    result.push(num);
    created[num] = true;
  }
  return result.join(" ");
}

export const colorChange = (
  start: number[],
  end: number[],
  index: number,
  maxIndex: number
) => {
  const r = interpolate(start[0], end[0], index / maxIndex);
  const g = interpolate(start[1], end[1], index / maxIndex);
  const b = interpolate(start[2], end[2], index / maxIndex);
  const color = `rgb(${r}, ${g}, ${b})`;

  // Apply the color to your desired element
  // For example:
  return color;
};

const interpolate = (start: number, end: number, percent: number) => {
  return start + Math.round((end - start) * percent);
};
