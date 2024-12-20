import axios from "axios";

const fetchData = async () => {
  try {
    const username = import.meta.env.VITE_API_USERNAME;
    const password = import.meta.env.VITE_API_PASSWORD;
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    // Encrypt the Basic Auth credentials
    const encodedCredentials = btoa(`${username}:${password}`);

    const response = await axios.get(baseUrl, {
      headers: {
        Authorization: `Basic ${encodedCredentials}`,
      },
    });

    // Find the patient "Jessica Taylor"
    const jessicaTaylor = response.data.find(
      (patient) => patient.name === "Jessica Taylor"
    );

    // Create a summary for all patients
    const patientsSummary = response.data.map(
      ({ name, gender, age, profile_picture }) => ({
        name,
        gender,
        age,
        profile_picture,
      })
    );

    return { patientsSummary, jessicaTaylor };
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err; // Rethrow error if needed
  }
};

export default fetchData;
