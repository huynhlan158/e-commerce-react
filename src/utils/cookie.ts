export enum StorageKeys {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export function setCookie(cname: string, cvalue: string) {
  const d = new Date();
  d.setTime(d.getTime() + 31536000 * 1000);
  const expires = '; expires=' + d.toUTCString();
  document.cookie =
    cname + '=' + cvalue + '; path=/' + expires + '; max-age=31536000';
}

export function getCookie(cname: string) {
  let name = cname + '=';
  let ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(cname: string) {
  document.cookie =
    cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC' + '; path=/';
}
