
export function execute(text: string, regex: string, flags: string, results: string[]): void {
  const re = new RegExp(regex, flags);

  let result = null;

  while ((result = re.exec(text)) !== null) {
    for (const [index, x] of result.entries()) {
      if (results.length <= index) {
        results[index] = x;
      } else {
        results[index] += ` ${x}`;
      }
    }
  }
}
