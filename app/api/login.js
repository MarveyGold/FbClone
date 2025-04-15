import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {ID, Password} = req.body;

        try {
            const user = await prisma.login.create({
                data: {ID, Password},
            });
            res.status(200).json({success: true, user});
        } catch (error) {
            console.error(error);
            res.status(500).json({success: false, error: 'Login Failed'});
        }
    } else{
        res.status(405).json({error: 'Method Error'});
    }
}