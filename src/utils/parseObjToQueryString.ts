export function parseObjToQueryString<T>(obj: T) {
  return JSON.stringify(obj)
    .replace(/({|})/g, "")
    .replaceAll(":", "=")
    .replaceAll('"', "")
    .replaceAll(",", "&");
}
