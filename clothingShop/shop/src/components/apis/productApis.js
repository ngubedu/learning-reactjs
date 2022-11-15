import axiosClient from "./axiosClient";

const productApis = {
  // @param {object} student

  add: async (product) => {
    try {
      const response = await axiosClient.post("/product", product);
      return response;
    } catch (error) {
      console.log(error);
    }
    // axiosClient
    //   .post('/students', student)
    //   .then(function (response) {
    //     return response
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  },
  getAll: async () => {
    try {
      const response = await axiosClient.get("/product");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default productApis;
