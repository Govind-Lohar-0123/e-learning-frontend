import { STORAGE_KEYS } from '../const';

export function removeRole() {
  localStorage.removeItem(STORAGE_KEYS.USER_ROLE);
}

export function setRole(role) {
  localStorage.setItem(STORAGE_KEYS.USER_ROLE,role);
}

export function setAccessToken(accessToken) {
  localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
}

export function removeAccessToken() {
  localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
}
