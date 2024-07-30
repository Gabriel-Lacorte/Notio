import { prisma } from "../db/prisma.js";

export async function createNote({ content, burnAfter }) {
    try {
        const note = await prisma.note.create({
            data: {
                content,
                burnAfter,
            }
        });

        return note
    } catch (err) {
        console.log(err)
        return err
    }
}