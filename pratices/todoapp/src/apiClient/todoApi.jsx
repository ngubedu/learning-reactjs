// import axios from 'axios';
// import { STATUS_CODE } from '../constants';
import axiosClient from "./axiosClient";

const studentApis = {
  /**
   * Add a new student
   * @param {object} student
   */
  add: async (student) => {
    try {
      const response = await axiosClient.post("/students", student);
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

  //  Get a list of students
  getAll: async () => {
    try {
      const response = await axiosClient.get("/students");
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // Update by id
  edit: async (data) => {
    try {
      const response = await axiosClient.patch("/students/", data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  /**
   * Update a student
   * @param {object} student
   */
  update: async (student) => {
    // Require id to process further
    if (!student.id) throw new Error("Missing id in student object");

    try {
      const response = await axiosClient.patch(
        `/students/${student.id}`,
        student
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  },

  // async remove(id) {
  //   // Remove student item in list
  //   const url = `students/${id}/`;
  //   const response = await axiosClient.delete(url);
  //   return response;
  // },

  /**
   * Remove a student by id
   * @param {object} studentId
   */
  delete: async (studentId) => {
    try {
      const response = await axiosClient.delete(`/students/${studentId}`);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
};

export default studentApis;
