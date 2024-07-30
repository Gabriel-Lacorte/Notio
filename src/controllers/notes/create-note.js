import { z } from "zod";
import { createNote } from "../../models/create-note.js"

const createNoteSchema = z.object({
    content: z.string().min(1),
    burnAfter: z.boolean(),
})

export async function createNoteController(req, res, next) {
    try {
        const { content, burnAfter } = createNoteSchema.parse(req.body);
    
        const { id } = await createNote({ content, burnAfter })

        return res.status(201).json({ noteId: id });
    } catch (err) {
        next(err)
    }

};