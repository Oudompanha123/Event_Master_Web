import { POST } from "@/app/api/auth/[...nextauth]/route";
import { Asset } from "next/font/google";

//get all service
export const getAllAssetService = async () => {
  const res = await fetch(`${process.env.API_URL}assets?offset=1&limit=8`, {
    // cache: "no-store",
    next: { tags: ["asset"] },
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgzMjc2NzgsImV4cCI6MTcxOTE5MTY3OH0.fq369v09aj5v8_091WSpTAKWEwnrLFHKjHTFTgq0JTE",
      "Content-Type": "application/json",
    },
  });
  const assetData = await res.json();
  return assetData;
};
//insert Asset
export const insertAssetService = async (newAsset) => {
  //console.log("new asset", newAsset);
  const res = await fetch(`${process.env.API_URL}assets/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgzMjc2NzgsImV4cCI6MTcxOTE5MTY3OH0.fq369v09aj5v8_091WSpTAKWEwnrLFHKjHTFTgq0JTE",
    },
    body: JSON.stringify(newAsset),
  });
  const data = await res.json();
  console.log("data", data);
  return data;
};

//delete asset by id
export const deleteAssetService = async (id) => {
  // console.log("asset id x", id);
  const res = await fetch(`${process.env.API_URL}assets/delete/${id}`, {
    method: "DELETE",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgzMjc2NzgsImV4cCI6MTcxOTE5MTY3OH0.fq369v09aj5v8_091WSpTAKWEwnrLFHKjHTFTgq0JTE",
    },
  });
  const data1 = await res.json();
  //console.log("first", data1);
  return data1;
};

//update asset
export const updateAssetService = async (id, newAsset) => {
  //console.log("id,asset" ,id ,newAsset);
  const res = await fetch(`${process.env.API_URL}assets/update/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgzMjc2NzgsImV4cCI6MTcxOTE5MTY3OH0.fq369v09aj5v8_091WSpTAKWEwnrLFHKjHTFTgq0JTE",
    },
    body: JSON.stringify(newAsset),
  });
  const data = await res.json();
  console.log("response", data);
  return data;
};

//search asseet by name
export const searchAssetByName = async (name) => {
  console.log("data service", name);
  const res = await fetch(
    `${process.env.API_URL}assets/search?name=${name}&offset=1&limit=8`,
    {
      next: { tags: ["asset"] },
       method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiUk9MRV9BRE1JTiIsIm9yZ2FuaXphdGlvbiI6eyJvcmdJZCI6NDEsIm9yZ05hbWUiOiJObyBOYW1lIiwiY29kZSI6IlI1aUlaViIsImFkZHJlc3MiOiJObyBBZGRyZXNzIiwibG9nbyI6IiJ9LCJvcmdJZCI6NDEsIm1lbWJlcklkIjo1OSwic3ViIjoiYnJvc25ob2VtMjAyMkBnbWFpbC5jb20iLCJpYXQiOjE3MTgzMjc2NzgsImV4cCI6MTcxOTE5MTY3OH0.fq369v09aj5v8_091WSpTAKWEwnrLFHKjHTFTgq0JTE",
      },
      body: JSON.stringify(name),
    }
  );
  const data = await res.json();
  console.log("respone",data);
  return data;
};
