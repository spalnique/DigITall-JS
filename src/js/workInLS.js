const prefixKey = ''; // Prefix is needed to make your keys unique in LS,  as another library may have the same key

export const getLS = key => {
  try {
    const lsValue = localStorage.getItem(
      `${prefixKey ? `${prefixKey}_` : ''}${key}`
    );
    if (lsValue) {
      return JSON.parse(lsValue);
    }
    throw new Error(`I do not find ${prefixKey ? `${prefixKey}_` : ''}${key}`);
  } catch (error) {
    console.warn('[getLS]: ', error);
    return null;
  }
};

// const cart = getLS("cart");

export const setLS = (key, value) => {
  try {
    value === null
      ? localStorage.removeItem(`${prefixKey ? `${prefixKey}_` : ''}${key}`)
      : localStorage.setItem(
          `${prefixKey ? `${prefixKey}_` : ''}${key}`,
          JSON.stringify(value)
        );
  } catch (error) {
    console.warn('[setLS]: ', error);
    return null;
  }
};

// ===== end work in localeStorage ===== //
