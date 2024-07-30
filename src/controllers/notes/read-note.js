import { z } from "zod";
import { readNote } from "../../models/read-note.js";
import { deleteNote } from "../../models/delete-note.js";

const readNoteSchema = z.object({
    id: z.string().length(8),
})

export async function readNoteController(req, res, next) {
    try {
        const { id } = readNoteSchema.parse(req.params);
    
        const note = await readNote({ id })
    
        if (!note) {
            return res.status(404).send({ error: 'Note not found' });
        }
    
        if (note.burnAfter) {
            await deleteNote({ id })
        }
        return res.type('txt').send(note.content);
    } catch (err) {
        next(err)
    }
}