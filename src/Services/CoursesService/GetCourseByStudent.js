import axios from "axios";
import { API_BASE_URL } from '../Config';

const GetCoursebyStudent = async (studentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/Course/GetCoursebyStudent`, {
      params: { studentId }  // Correct usage of params
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching course data:", error);
    throw error;
  }
};

export default GetCoursebyStudent;
