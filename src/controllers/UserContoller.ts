import { Request, Response } from "express";

type User = {
    name: string;
    email: string;
};

export const getUsers = (req: Request, res: Response) => {
    const users: Array<User> = [
        {
            name: "Andika",
            email: "andikapp1998@gmail.com"
        },
        {
            name: "putra",
            email: "putrapp1998@gmail.com"
        },
        {
            name: "Permana",
            email: "permanapp1998@gmail.com"
        }
    ];

    // Mengirimkan respon dengan data pengguna
    return res.json(users)
};
