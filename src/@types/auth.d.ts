import 'next-auth';

declare module 'next-auth' {
    interface User {
        idUser: number;
        username: string;
    }

    interface Session {
        user: User;
    }
}
