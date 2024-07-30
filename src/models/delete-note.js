import { prisma } from "../db/prisma.js";

export async function deleteNote({ id }) {
    try {
        await prisma.note.delete({
            where: {
                id,
            }
        });
    } catch (err) {
        console.log(err)
        return err
    }
}