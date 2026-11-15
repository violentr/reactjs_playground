export const storeLocally = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};
