import { prisma } from "../db/prisma.js";

export async function readNote({ id }) {
    try {
        const note = await prisma.note.findFirst({
            where: {
                id,
            }
        });

        return note
    } catch (err) {
        console.log(err)
        return err
    }
}