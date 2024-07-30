import { Router } from "express";
import { limiter } from "../middleware/rate-limit.js";
import { readNoteController } from "../controllers/notes/read-note.js";
import { createNoteController } from "../controllers/notes/create-note.js";

const noteRouter = Router();

noteRouter.post('/notes', limiter, createNoteController);
noteRouter.get('/notes/:id', readNoteController);

export { noteRouter };