import mongoose, { Schema, model } from 'mongoose';
import { AuthTypes, IUser, OauthCredentials } from '../types/models/user';

const oauthCredentials = new Schema<OauthCredentials>(
	{
		accessToken: { type: String },
		refreshToken: { type: String },
	},
	{ _id: false },
);

const userSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
		},
		password: {
			type: String,
		},
		authType: {
			type: String,
			enum: AuthTypes,
		},
		profilePhoto: {
			type: String,
			default:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/768px-Windows_10_Default_Profile_Picture.svg.png?20221210150350',
		},
		oauthCredentials: oauthCredentials,
		credits: {
			type: Number,
			default: 0,
		},
		favourites: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'asset',
			},
		],
		assets: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'asset',
			},
		],
	},
	{ timestamps: true },
);

const userModel = model<IUser>('user', userSchema);

export default userModel;
