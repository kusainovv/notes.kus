import mongoose from 'mongoose';

const NoteSchema = {
	text: {type: String, required: true},
};

export const NoteModel = mongoose.model('Note', NoteSchema);
