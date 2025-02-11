export const getTest = async () => {
  const data = await fetch("https://reqres.in/api/users/2");
  return await data.json();
};
