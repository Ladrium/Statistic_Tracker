export const get = <T>(url: RequestInfo, options?: RequestInit) => {
  let data: T | null = null;
  let error: string | null = null;

  fetch(url, options)
    .then(res => res.json())
    .then(json => data = json)
    .catch(error => error = error)

  return { data, error }
}