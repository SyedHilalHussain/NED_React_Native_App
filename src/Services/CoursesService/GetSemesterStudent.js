import axios from "axios";
import { API_BASE_URL } from '../Config';

const GetSemesterStudent = async (studentId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/Semester/GetSemesterStudent`, {
      params: { studentId }  // Correct usage of params
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching Semester data:", error);
    throw error;
  }
};

export default GetSemesterStudent;
