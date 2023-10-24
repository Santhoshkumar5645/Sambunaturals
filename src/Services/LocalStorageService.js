export class LocalStorageService {


    /**
     * Set Items - LocalStorage
     * @param {*} key 
     * @param {*} value 
     */
    static setItem(key, value) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // Handle error (e.g., local storage not supported or quota exceeded)
        console.error('Error setting item in local storage:', error);
      }
    }
  
    /**
     * Get Items - LocalStorage
     * @param {*} key 
     * @returns 
     */
    static getItem(key) {
      try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
      } catch (error) {
        // Handle error (e.g., local storage not supported)
        console.error('Error getting item from local storage:', error);
        return null;
      }
    }
  
    /**
     * Remove Items - LocalStorage
     * @param {*} key 
     */
    static removeItem(key) {
      try {
        localStorage.removeItem(key);
      } catch (error) {
        // Handle error (e.g., local storage not supported)
        console.error('Error removing item from local storage:', error);
      }
    }
  }
  
  