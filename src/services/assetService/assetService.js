import { POST } from "@/app/api/auth/[...nextauth]/route";

//get all service
export const getAllAssetService = async () => {
  const res = await fetch(
    "http://34.124.203.109:8081/api/assets?offset=1&limit=8",
    {
      // cache: "no-store",
      next: { tags: ["asset"] },
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgxNTQ4MjksImV4cCI6MTcxOTAxODgyOX0.xgs8CVSKZebDu0P6ArIuIreJDOIeQ23lDnyPukoacIE",
        "Content-Type": "application/json",
      },
    }
  );
  const assetData = res.json();
  return assetData;
};
export const insertAssetService = async (newAsset) => {
  console.log("new asset", newAsset);
  const res = await fetch("http://34.124.203.109:8081/api/assets/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgxNzcxMjgsImV4cCI6MTcxOTA0MTEyOH0.KJICqnn_rvJsG2GiTtXI19tr4Z4lC126cJQae9ro7VE",
    },
    body: JSON.stringify(newAsset),
  });
  const data = await res.json();
  console.log("data", data);
  return data;
};
