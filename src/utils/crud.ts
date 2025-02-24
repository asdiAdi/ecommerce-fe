import { API_URL } from "@/constants/env";
import { MetaQueryType } from "@/schemas/MetaSchema";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type PayloadValues = string | number | boolean | null | undefined | Date;

export type QueryType<T extends MetaQueryType = {}> = T;

export const makeSearchParams = <T extends MetaQueryType>(
  endpoint: string,
  query: T,
) => {
  // Build query string for GET requests
  const queryString = new URLSearchParams(
    Object.entries(query).reduce(
      (acc, [key, value]) => {
        if (value !== undefined && value !== null) {
          acc[key] = String(value); // Convert all values to strings
        }
        return acc;
      },
      {} as Record<string, string>,
    ),
  ).toString();

  return `/${endpoint}${queryString ? `?${queryString}` : ""}`;
};

export const apiRequest = async (
  method: HttpMethod = "GET",
  endpoint = "",
  payload?: Record<string, PayloadValues | Array<PayloadValues>>,
  options?: RequestInit,
) => {
  const url = `${API_URL}/${endpoint}`;

  const _options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  };

  if (payload) _options.body = JSON.stringify(payload);

  try {
    const response = await fetch(url, _options);
    if (!response.ok) throw new Error(`Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("API Request Failed:", error);
    throw error;
  }
};
