export function formatComment(c: string, initialValue: string): string {
  if (initialValue && c.startsWith(`${initialValue}`)) {
    return c
  } else if (initialValue && !c.startsWith(`${initialValue}`)) {
    return `${initialValue} ${c}`
  } else {
    return c
  }
}
