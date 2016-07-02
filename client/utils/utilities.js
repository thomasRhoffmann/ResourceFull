const utility = {
  checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      var error = new Error(res.statusText);
      error.res = res;
      throw error;
    }
  },

  parseJSON(res) {
    return res.json();
  },
};

export default utility;