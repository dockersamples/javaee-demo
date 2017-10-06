
const isPwdHost = window.location.host.indexOf("pwd") === 0;

export const API_HOST = (isPwdHost) ?
    window.location.host.replace("-80.host", "-8080.host") : 
    window.location.host + ":8080";