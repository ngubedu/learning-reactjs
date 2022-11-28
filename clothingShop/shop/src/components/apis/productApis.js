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
  delete: async (productID) => {
    try {
      const response = await axiosClient.delete(`/products/${productID}`);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default productApis;
