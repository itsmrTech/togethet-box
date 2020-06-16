
var schema = mongoose.Schema({
	user:{type:mongoose.SchemaTypes.ObjectId,ref:"User"},
	photos:[String],
	device:{type:mongoose.SchemaTypes.ObjectId,ref:"Device"},

	status:{type:String, enum:["deleted","deactive","active"],default:"active"}
});

schema.plugin(mongooseTimestamp);



export default mongoose.model('Slideshow', schema);