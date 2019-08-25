const appKey = 'lvivcssapp';

export const getLocalState = () => JSON.parse(localStorage.getItem(appKey)) || {};
export const setLocalState = (state) => localStorage.setItem(appKey, JSON.stringify(state));