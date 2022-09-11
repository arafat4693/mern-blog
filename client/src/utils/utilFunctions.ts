import { MongoArticle } from "./types"

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

export function formatDate(d: Date) {
  return new Date(d).toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function articlesWithPagination(
  articles: MongoArticle[],
  quantity: number
) {
  const totalPages = Math.ceil(articles.length / quantity)
  const articlesByPages = Array(totalPages)
    .fill(0)
    .map((_, i) => articles.slice(quantity * i, quantity * (i + 1)))
  return articlesByPages
}

export function formateImg(url: string | undefined) {
  return url ? url : "/images/guest.webp"
}
