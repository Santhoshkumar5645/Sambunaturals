export const ScrolltoTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

export async function getTokenCall() {
    try {
        const url = process.env.REACT_APP_SERVER_BASE_URL + '/auth/get-token';
      const response = await fetch(url); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error('Network response was not ok');
        
      }

      const data = await response.json();
     return data
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }