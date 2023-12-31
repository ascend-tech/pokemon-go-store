const IP='localhost:5000'
//Auth
export const LoginApi = `http://${IP}/auth/login`
export const SignUpApi = `http://${IP}/auth/signup`

// export const authGoogle = `http://${IP}/auth/google`
export const authFaceBook = `http://${IP}/auth/facebook`




//Assets
// export const account = "http://${IP}/asset/create"
// export const account = "http://${IP}/asset/create"
export const assetTypeApi = (assetType) => `http://${IP}/asset/${assetType}/all`
export const assetIdApi = (assetId) =>`http://${IP}/asset/${assetId}/id`



// User
export const userDetailUrl = `http://${IP}/user/details`


// Favourite
export const addFavApi = (favId) => `http://${IP}/asset/favourite/add?assetId=${favId}`
export const removeFavApi = (favId) => `http://${IP}/asset/favourite/remove?assetId=${favId}`
export const allFavApi =  `http://${IP}/asset/favourite`

// Payments
export const createOrder = `http://${IP}/transaction/order`
export const verifyOrder = `http://${IP}/transaction/verify`
export const mannualTransaction = `http://${IP}/transaction/manual`

//BUY
export const buyAsset =(assetId)=> `http://${IP}/transaction/asset/${assetId}` 

// Bought Asset buy

export const boughtAsset = `http://${IP}/asset/bought` 
export const bouAssetById  =(assetId)=> `http://${IP}/asset/bought/${assetId}` 