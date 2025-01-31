function trimEndString(string: string): string {
  if (string.length <= 25) {
    return string;
  }
  return string.slice(0, 25) + "...";
}

export default trimEndString;