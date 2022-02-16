
class LocalStorageService {

  setLocalStrogae = (key, value) => {
    window.localStorage.setItem(key, value);
  }

  getLocalStrogae = (key) => {
    return window.localStorage.getItem(key);
  }
}

export default new LocalStorageService();