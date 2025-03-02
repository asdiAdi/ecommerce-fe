export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function truncate(str: string, num = 24): string {
  return `${str.slice(0, num).trim()}${num}...`;
}
