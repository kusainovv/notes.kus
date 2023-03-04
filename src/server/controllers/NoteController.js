import {NoteModel} from '../models/Note.js';

class NoteController {
	async createNote(req) {
		const note = new NoteModel({message: req.body.data});
		note.save();
	}
}

export const noteController = new NoteController();
