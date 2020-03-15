const objToUrlParams = obj => {
  return Object.keys(obj)
    .reduce((acc, k) => {
      let value = obj[k];
      // if (Array.isArray(value)) {
      //   value = value.join(",");
      // }
      return value ? [...acc, `${k}=${encodeURIComponent(obj[k])}`] : acc;
    }, [])
    .join("&");
};

module.exports = {
  objToUrlParams
};
