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
    return `rgb(${r}, ${g}, ${b})`;
};

const interpolate = (start: number, end: number, percent: number) => {
    return start + Math.round((end - start) * percent);
};

export const doReverseOperation = (cmd: string, left: number[], right: number[]) => {
    let tmp = -1;
    switch (cmd) {
        case "sa":
            [left[left.length - 2], left[left.length - 1]] = [
                left[left.length - 1],
                left[left.length - 2],
            ];
            break;
        case "sb":
            [right[right.length - 2], right[right.length - 1]] = [
                right[right.length - 1],
                right[right.length - 2],
            ];
            break;
        case "ss":
            [left[left.length - 2], left[left.length - 1]] = [
                left[left.length - 1],
                left[left.length - 2],
            ];
            [right[right.length - 2], right[right.length - 1]] = [
                right[right.length - 1],
                right[right.length - 2],
            ];
            break;
        case "rra":
            tmp = left.pop() as number;
            left.unshift(tmp);
            break;
        case "rrb":
            tmp = right.pop() as number;
            right.unshift(tmp);
            break;
        case "rrr":
            tmp = left.pop() as number;
            left.unshift(tmp);
            tmp = right.pop() as number;
            right.unshift(tmp);
            break;
        case "ra":
            tmp = left.shift() as number;
            left.push(tmp);
            break;
        case "rb":
            tmp = right.shift() as number;
            right.push(tmp);
            break;
        case "rr":
            tmp = left.shift() as number;
            left.push(tmp);
            tmp = right.shift() as number;
            right.push(tmp);
            break;
        case "pb":
            tmp = right.pop() as number;
            left.push(tmp);
            break;
        case "pa":
            tmp = left.pop() as number;
            right.push(tmp);
            break;
        default:
    }
};
export const doOperation = (cmd: string, left: number[], right: number[]) => {
    let tmp = -1;
    switch (cmd) {
        case "sa":
            [left[left.length - 2], left[left.length - 1]] = [
                left[left.length - 1],
                left[left.length - 2],
            ];
            break;
        case "sb":
            [right[right.length - 2], right[right.length - 1]] = [
                right[right.length - 1],
                right[right.length - 2],
            ];
            break;
        case "ss":
            [left[left.length - 2], left[left.length - 1]] = [
                left[left.length - 1],
                left[left.length - 2],
            ];
            [right[right.length - 2], right[right.length - 1]] = [
                right[right.length - 1],
                right[right.length - 2],
            ];
            break;
        case "ra":
            tmp = left.pop() as number;
            left.unshift(tmp);
            break;
        case "rb":
            tmp = right.pop() as number;
            right.unshift(tmp);
            break;
        case "rr":
            tmp = left.pop() as number;
            left.unshift(tmp);
            tmp = right.pop() as number;
            right.unshift(tmp);
            break;
        case "rra":
            tmp = left.shift() as number;
            left.push(tmp);
            break;
        case "rrb":
            tmp = right.shift() as number;
            right.push(tmp);
            break;
        case "rrr":
            tmp = left.shift() as number;
            left.push(tmp);
            tmp = right.shift() as number;
            right.push(tmp);
            break;
        case "pa":
            tmp = right.pop() as number;
            left.push(tmp);
            break;
        case "pb":
            tmp = left.pop() as number;
            right.push(tmp);
            break;
        default:
    }
};