// URL regex found online
// https://stackoverflow.com/a/5717133
// modified slightly
export const isURL = (str) => {
  var pattern = new RegExp('^(https?:\\/\\/)'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '.*$','i'); // fragment locator
  return !!pattern.test(str);
}