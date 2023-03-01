const URI = "http://localhost:8000";

export default {
  async FetchUser() {
    try {
      let response = await fetch(URI + "http://localhost:8000/api/app/user/");
      let responseJsonData = await response.json();
      return responseJsonData;
    } catch (e) {
      console.log(e);
    }
  },
};
