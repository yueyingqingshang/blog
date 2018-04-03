/**
 * 用户表结构
 */
import mongoose from 'mongoose';
module.exports = new mongoose.Schema({
	uuername: String,
	password: String,
	type: String
});