import {Router} from 'express';
import {noteController} from '../controllers/NoteController.js';

export const route = new Router();

route.post('/create_note', noteController.createNote);
