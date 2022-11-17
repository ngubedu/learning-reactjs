import axiosClient from "./axiosClient";
const productApis = {
  add: async (product) => {
    try {
      const response = await axiosClient.post("/products", product);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async () => {
    try {
      const response = await axiosClient.get("/products");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default productApis;
