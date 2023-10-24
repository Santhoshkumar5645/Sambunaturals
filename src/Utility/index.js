export const ScrolltoTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export async function getTokenCall() {
  try {
    const url = process.env.REACT_APP_SERVER_BASE_URL + "/auth/get-token";
    const response = await fetch(url); // Replace with your API endpoint
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    console.log(response, "get response");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}

export const Loader = () => {
  return (
    <div className="bg-black/20 z-50 fixed inset-0 flex justify-center items-center">
      <div className=" rounded-lg  flex justify-center items-center w-full md:py-10    h-auto  relative ">
       
              {/* <!-- Outer Ring--> */}
              <div class="w-16 h-16 rounded-full animate-spin
                    border-2 border-solid border-green-800 border-t-transparent"></div>
           
      </div>
    </div>
  );
};
