
//Auth
export const LoginApi = "http://localhost:5000/auth/login"
export const SignUpApi = "http://localhost:5000/auth/signup"
export const authGoogle = "http://localhost:5000/auth/google"
export const authFaceBook = "http://localhost:5000/auth/facebook"

//Assets
// export const account = "http://localhost:5000/asset/create"
// export const account = "http://localhost:5000/asset/create"
export const assetTypeApi = (assetType) => `http://localhost:5000/asset/${assetType}/all`
export const assetIdApi = (assetId) =>`http://localhost:5000/asset/${assetId}/id`



// User
export const userDetailUrl = "http://localhost:5000/user/details"
