import { ZodError } from "zod";

export const errorHandler = (err, req, res, next) => {
    if (err instanceof ZodError) {
        return res.status(400).send({ message: "Invalid Parameters", issues: err.format() })
    }

    return res.status(500).send({ message: "Internal Server Error" })
}