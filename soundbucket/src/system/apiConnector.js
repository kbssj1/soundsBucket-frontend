import axios from "axios";
var qs = require('qs');

class apiConnector {

  async apiPost (url, data, params) {
    url = process.env.REACT_APP_API_KEY + url;
    try {
      const response = await axios.post(url, qs.stringify(data), {withCredentials: false});
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }

  async apiGet (url, params) {
    url = process.env.REACT_APP_API_KEY + url;
    try {
      const response = await axios.get(url, {withCredentials: false});
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }

  async apiPut (url, data, params) {
    url = process.env.REACT_APP_API_KEY + url;
    try {
      const response = await axios.put(url, data, {params: params});
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }

  async apiDelete (url, params) {
    url = process.env.REACT_APP_API_KEY + url;
    try {
      const response = await axios.delete(url, {params: params});
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }

  async fileUpload (url, formData) {
    url = process.env.REACT_APP_API_KEY + url;
    try {
      const response = await axios.post(url, formData, {
        withCredentials: false,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      return response.data;
    }
    catch (error) {
      throw error;
    }
  }

}

export default new apiConnector();