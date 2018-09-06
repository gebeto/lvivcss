const STORAGE_KEY = 'lvivcssapp';
export const getState = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
export const setState = state => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));