import { delay } from "@/utils/common";

export const getTest = async () => {
  const data = await fetch("https://reqres.in/api/users/2");
  return await data.json();
};

export const getProductCart = async (): Promise<CartType[]> => {
  await delay(1000);
  return [
    {
      id: "B09B96TG33",
      img_url: "https://m.media-amazon.com/images/I/71C3lbbeLsL._AC_UL320_.jpg",
      title:
        "Echo Dot (5th generation, 2022 release) | Big vibrant sound Wi-Fi and Bluetooth smart speaker with Alexa | Charcoal",
      price: 21.99,
      quantity: 4,
    },
    {
      id: "B01HTH3C8S",
      img_url: "https://m.media-amazon.com/images/I/61c5rSxwP0L._AC_UL320_.jpg",
      title:
        "Anker Soundcore mini, Super-Portable Bluetooth Speaker with 15-Hour Playtime, 66-Foot Bluetooth Range, Wireless Speaker with Enhanced Bass, Noise-Cancelling Microphone, for Outdoor, Travel, Home",
      price: 23.99,
      quantity: 4,
    },
    {
      id: "B09B8YWXDF",
      img_url: "https://m.media-amazon.com/images/I/61j3SEUjMJL._AC_UL320_.jpg",
      title:
        "Echo Dot (5th generation, 2022 release) | Big vibrant sound Wi-Fi and Bluetooth smart speaker with Alexa | Deep Sea Blue",
      price: 21.99,
      quantity: 4,
    },
  ];
};
