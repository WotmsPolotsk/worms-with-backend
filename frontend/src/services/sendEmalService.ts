import axios from "axios";

export const sendEmalService = async (
  data: Array<{ label: string; value: string }>
) => {
  const response = await axios.post("/api", {
    data,
  });

  return response.data.message;
};
