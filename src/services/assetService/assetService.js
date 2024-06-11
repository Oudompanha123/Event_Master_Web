//get all service
export const getAllAssetService = async ( )=>{
    const res = await fetch('');
    const assetData = res.json();
    return assetData;
}
//get asset by ID


