function solution(s) {
    return /^[0-9]+$/.test(s) && [4,6].includes(s.length);
}