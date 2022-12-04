import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

const prisma = new PrismaClient();

export const authOptions = {
    adapter: PrismaAdapter(prisma),

    providers: [
        DiscordProvider({
            clientId: process.env.NEXTAUTH_DISCORD_CLIENT_ID as string,
            clientSecret: process.env.NEXTAUTH_DISCORD_CLIENT_SECRET as string,

            authorization: {
                params: {
                    scope: 'identify email',
                },
            },

            profile(profile) {
                return {
                    id: profile.id.toString(),
                    idUser: profile.id,
                    name: profile.username,
                    username: `${profile.username}#${profile.discriminator}`,
                    email: profile.email,
                    image: `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`,
                };
            },
        }),
    ],

    secret: process.env.NEXTAUTH_SECRET,
    debug: true,

    callbacks: {
        async session(session: any) {
            return {
                ...session,
                user: {
                    ...session.user,
                },
            };
        },
    },
};

export default NextAuth(authOptions);
