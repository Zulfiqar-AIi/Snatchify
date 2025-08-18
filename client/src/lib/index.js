export const getData = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} - ${response.statusText}`);
    }

    // Check if response is actually JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text();
      console.log("Response is not JSON:", text);
      throw new Error("Server returned non-JSON response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error while fetching data:", error);
    
    // Return empty array or default value instead of throwing
    // This prevents your app from crashing
    return [];
  }
};