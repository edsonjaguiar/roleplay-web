import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    try {
        const { method } = request;
        const body = JSON.stringify(request.body.messageData);

        const URL = process.env.NEXTAUTH_DISCORD_WEBHOOK_URL;

        switch (method) {
            case 'POST':
                axios.post(URL as string, body, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                break;

            default:
                response.status(405).end(`Method ${method} not allowed`);
                break;
        }
    } catch (error) {
        response.status(500).json(error);
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
};
