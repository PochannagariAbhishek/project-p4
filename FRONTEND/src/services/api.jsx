import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Replace with your real API endpoint

// Create an Axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to store Auth Token
const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("token", token);
  } else {
    delete api.defaults.headers.common["Authorization"];
    localStorage.removeItem("token");
  }
};

// ✅ AUTHENTICATION: Login & Signup
export const login = async (email, password) => {
  try {
    console.log('request recieved')
    const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Login failed";
  }
};

export const signup = async (name, email, password) => {
  try {
    const response = await api.post("/auth/signup", { name, email, password });
    setAuthToken(response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Signup failed";
  }
};

export const logout = () => {
  setAuthToken(null);
};

// ✅ BUDGET CRUD OPERATIONS
export const getBudget = async () => {
  try {
    const response = await api.get("/budget");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch budget";
  }
};

export const addBudget = async (budgetData) => {
  try {
    const response = await api.post("/budget", budgetData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to add budget";
  }
};

export const updateBudget = async (id, updatedData) => {
  try {
    const response = await api.put(`/budget/${id}`, updatedData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to update budget";
  }
};

export const deleteBudget = async (id) => {
  try {
    await api.delete(`/budget/${id}`);
  } catch (error) {
    throw error.response?.data || "Failed to delete budget";
  }
};

// ✅ TRANSACTION HISTORY CRUD OPERATIONS
export const getTransactionHistory = async () => {
  try {
    const response = await api.get("/history");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to fetch history";
  }
};

export const addTransaction = async (transactionData) => {
  try {
    const response = await api.post("/history", transactionData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to add transaction";
  }
};

export const deleteTransaction = async (id) => {
  try {
    await api.delete(`/history/${id}`);
  } catch (error) {
    throw error.response?.data || "Failed to delete transaction";
  }
};

// ✅ SETTINGS - UPDATE USER PROFILE
export const updateUserSettings = async (settingsData) => {
  try {
    const response = await api.put("/settings", settingsData);
    return response.data;
  } catch (error) {
    throw error.response?.data || "Failed to update settings";
  }
};

export default api;
