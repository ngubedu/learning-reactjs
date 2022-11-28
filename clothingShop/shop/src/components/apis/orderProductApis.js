import axiosClient from "./axiosClient";
const orderProductApis = {
  add: async (orderProduct) => {
    try {
      const response = await axiosClient.post("/orderProduct", orderProduct);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  getAll: async () => {
    try {
      const response = await axiosClient.get("/orderProduct");
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  // put: async (orderProduct) => {
  //   // Require id to process further
  //   try {
  //     const response = await axiosClient.put(
  //       `/orderProduct/${orderProduct.id}`,
  //       orderProduct
  //     );
  //     return response;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  delete: async (orderID) => {
    try {
      const response = await axiosClient.delete(`/orderProduct/${orderID}`);
      return response;
    } catch (error) {
      console.log(error);
      alert("Cannot connect to API.");
    }
  },
};

export default orderProductApis;
