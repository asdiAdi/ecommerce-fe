import { getTest } from "@/api/product";

export default async function test2() {
  const x = await getTest();

  console.log(x);

  return <div></div>;
}
