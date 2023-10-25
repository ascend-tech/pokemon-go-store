const IP='23.23.49.32/api'
//Auth
export const LoginApi = `http://${IP}/auth/login`
export const SignUpApi = `http://${IP}/auth/signup`
export const authGoogle = `http://${IP}/auth/google`
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