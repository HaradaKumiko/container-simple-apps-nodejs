import UniqueValidator from "mongoose-unique-validator";
import mongoose from 'mongoose';


const animeSchema = mongoose.Schema({
    anime : {type: String, required: [true, 'Anime Title Required'], unique: true},
});

animeSchema.plugin(UniqueValidator, { message: '{PATH} has already taken' })

animeSchema.virtual('id').get(function() {
    return this._id.toHexString();
})

animeSchema.set('toJSON', {
    virtuals: true
})

const AnimeModel = mongoose.model('Anime', animeSchema)

export default AnimeModel;