export const storeLocally = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data");
  }
};
