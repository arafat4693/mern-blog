export function formatComment(c: string, initialValue: string): string {
  if (initialValue && c.startsWith(`${initialValue}`)) {
    return c
  } else if (initialValue && !c.startsWith(`${initialValue}`)) {
    return `${initialValue} ${c}`
  } else {
    return c
  }
}

export function getErrMsg(err: any) {
  return (
    (err.response && err.response.data && err.response.data.message) ||
    err.message ||
    err.toString()
  )
}
