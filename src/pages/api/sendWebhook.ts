import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const { method } = req;
        const { answerName, answerHistory, answerRDM, answerVDM } = req.body;

        const session = await getSession({ req });

        const message = {
            embeds: [
                {
                    title: 'White List',
                    color: 7506394,
                    thumbnail: {
                        url: 'https://media.discordapp.net/attachments/882683832980111410/1048834645141229568/m.jpg',
                    },
                    fields: [
                        {
                            name: 'Menção',
                            value: `<@${session?.user.idUser}>`,
                        },
                        {
                            name: 'Username',
                            value: session?.user.username,
                        },
                        {
                            name: 'Username Roblox',
                            value: answerName,
                        },
                        {
                            name: 'História',
                            value: answerHistory,
                        },
                        {
                            name: 'O que é RDM?',
                            value: answerRDM,
                        },
                        {
                            name: 'O que é VDM?',
                            value: answerVDM,
                        },
                    ],
                },
            ],
        };

        const URL = process.env.NEXTAUTH_DISCORD_WEBHOOK_URL;

        switch (method) {
            case 'POST':
                axios.post(URL as string, message, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                break;

            default:
                res.status(405).end(`Method ${method} not allowed`);
                break;
        }
    } catch (error) {
        res.status(500).json(error);
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
};
