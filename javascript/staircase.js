function staircase(steps) {
  for (let i = 1; i <= steps; i++) {
      process.stdout.write(`${" ".repeat(steps - i)}${"#".repeat(i)}\n`);
  }
}
