"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const asset_1 = require("../types/models/asset");
const assetSchema = new mongoose_1.Schema({
    media: {
        type: Object,
    },
    assetType: {
        type: String,
        enum: asset_1.AssetTypes,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    info: {
        type: mongoose_1.Schema.Types.Mixed,
    },
    available: {
        type: Boolean,
        default: true,
    },
    soldTo: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'user',
    },
    transaction: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'transaction',
    },
}, { timestamps: true });
const assetModel = (0, mongoose_1.model)('asset', assetSchema);
exports.default = assetModel;
//# sourceMappingURL=asset.js.map