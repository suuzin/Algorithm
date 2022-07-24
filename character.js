function solution(s) {
  const result = s
    .toUpperCase()
    .split(" ")
    .map((item) => {
      return Array.from(item).map((a, i) =>
        i % 2 === 1 ? a.toLowerCase() : a
      );
    });
  return [...result].join(" ").split(",").join("");
}
