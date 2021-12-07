/** Aqui van las peticiones al server */
import axios from "axios";

const isProduction = false;

const URL_BASE = isProduction ? "URL_API" : "http://localhost:3000/api/";

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export const getData = async (url) => {
  try {
    const response = await axios.request({
      url,
      method: "GET",
      baseURL: URL_BASE,
      headers,
    });
    return { success: true, info: response.data };
  } catch (err) {
    console.error(err);
    return { success: false, info: err.message };
  }
};

export const postData = async (url, data) => {
  try {
    const response = await axios.request({
      url,
      baseURL: URL_BASE,
      method: "POST",
      data,
      headers,
    });
    return { success: true, info: response.data };
  } catch (err) {
    console.error(err);
    return { success: false, info: err.message };
  }
};

export const putData = async (url, data) => {
  try {
    const response = await axios.request({
      url,
      baseURL: URL_BASE,
      method: "PUT",
      data,
      headers,
    });
    return { success: true, info: response.data };
  } catch (err) {
    console.error(err);
    return { success: false, info: err.message };
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.request({
      url,
      baseURL: URL_BASE,
      method: "DELETE",
      headers,
    });
    return { success: true, info: response.data };
  } catch (err) {
    console.error(err);
    return { success: false, info: err.message };
  }
};
