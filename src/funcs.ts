export function createRandomNumber(count: number) {
    return "248 284 97 430 271 247 62 287 327 21 52 163 323 478 5 84 296 423 262 267 292 481 319 46 405 114 105 489 230 437 134 197 377 54 451 407 389 65 269 335 74 268 169 358 498 85 345 431 392 220 57 436 383 207 83 384 160 101 152 162 142 252 143 180 439 333 341 461 146 79 309 318 295 470 457 224 111 279 1 278 256 469 159 136 325 357 214 231 463 453 155 210 474 433 82 7 379 156 219 130 283 324 449 26 399 13 190 273 330 217 441 135 419 491 382 448 428 148 200 75 115 31 33 395 121 15 49 237 66 471 302 290 168 464 462 486 311 39 339 29 59 374 369 482 131 44 244 102 297 396 320 454 89 24 342 375 261 58 422 402 167 25 119 288 92 228 45 93 96 398 361 127 275 67 317 418 145 301 236 460 61 343 151 192 182 372 427 364 28 81 242 487 149 459 227 438 378 17 466 36 312 212 420 277 48 387 401 293 305 70 249 2 186 285 154 14 106 352 434 493 424 479 116 213 38 37 435 390 8 266 484 254 322 408 452 259 353 472 187 331 447 362 55 274 371 373 240 403 499 315 88 444 468 492 221 355 166 77 238 409 170 56 118 68 86 91 112 445 175 255 360 161 414 332 337 165 264 32 153 109 23 347 157 291 350 147 94 497 349 177 11 195 42 425 223 272 289 140 128 363 473 270 71 308 246 229 199 204 235 410 245 348 328 251 122 10 232 443 110 380 314 480 150 310 198 450 3 4 80 87 483 16 356 313 222 176 125 253 60 258 211 404 183 22 281 9 394 500 241 260 188 164 412 206 98 307 386 50 393 172 64 421 299 189 99 391 72 103 193 496 120 338 194 34 415 132 225 184 354 303 286 104 6 178 239 280 63 417 276 365 233 51 171 53 265 124 346 40 406 432 218 257 209 426 413 78 368 263 334 376 203 490 47 476 329 30 117 344 133 388 381 234 113 41 304 107 475 456 215 205 27 495 467 137 226 138 12 370 397 69 100 411 18 488 294 201 340 144 43 321 174 108 366 458 216 158 139 429 400 351 336 446 477 95 416 494 173 485 440 455 20 141 208 123 326 129 367 181 126 465 196 316 90 306 359 35 185 442 19 76 250 300 243 73 202 179 282 385 298 191";
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