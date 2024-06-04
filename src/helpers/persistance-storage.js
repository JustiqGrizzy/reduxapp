export const setItem = (key, item) => {
  try {
    localStorage.setItem(key, item);
  } catch (error) {
    console.log("Error in saving data");
  }
};
export const getItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.log("Error in getting data");
  }
};
