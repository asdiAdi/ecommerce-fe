import { API_URL } from "@/constants/env";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type PayloadValues = string | number | boolean;

// interface ApiRequestProps {
//   method: HttpMethod;
//   endpoint: string;
//   params?: Record<string, string>;
//   payload?: Record<string, PayloadValues| Array<PayloadValues>>;
// }

export const apiRequest = async <T>(
  method: HttpMethod = "GET",
  endpoint = "",
  params?: Record<string, string>,
  payload?: Record<string, PayloadValues | Array<PayloadValues>>,
): Promise<T> => {
  // Build query string for GET requests
  const queryString = new URLSearchParams(params).toString();
  const url = `${API_URL}/${endpoint}${queryString ? `?${queryString}` : ""}`;

  console.log(url, API_URL, endpoint, queryString);

  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (payload) options.body = JSON.stringify(payload);

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};
