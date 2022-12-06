import { Popover } from '@headlessui/react';
import cn from 'clsx';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
    DiscordLogo,
    GameController,
    House,
    List,
    PaperPlaneTilt,
    X,
} from 'phosphor-react';
import { useState } from 'react';
import Button from './Button';

export default function Navbar() {
    const [navbarIsOpen, setNavbarIsOpen] = useState(true);

    const router = useRouter();

    let navLinks = [
        {
            text: 'Início',
            link: '/',
            icon: <House size={22} weight="bold" className="mr-2" />,
        },
        {
            text: 'White List',
            link: '/whitelist',
            icon: <PaperPlaneTilt size={22} weight="bold" className="mr-2" />,
        },
        {
            text: 'Discord',
            link: '', // Link do seu grupo do Discord do jogo
            target: '_blank',
            icon: <DiscordLogo size={22} weight="bold" className="mr-2" />,
        },
        {
            text: 'Jogar',
            link: '', // Link do seu jogo
            target: '_blank',
            icon: <GameController size={22} weight="bold" className="mr-2" />,
        },
    ];

    const { data: session } = useSession();

    return (
        <nav className="border-gray-200 border-2 bottom-4 px-2 py-4 sm:px-4">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <h1>
                    <Link
                        href="/"
                        className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700"
                    >
                        Roleplay Web
                    </Link>
                </h1>

                <div
                    className="lg:hidden cursor-pointer"
                    onClick={() => setNavbarIsOpen(!navbarIsOpen)}
                >
                    {navbarIsOpen ? (
                        <X size={42} weight="bold" />
                    ) : (
                        <List size={42} weight="bold" />
                    )}
                </div>

                <ul
                    className={cn({
                        [navbarIsOpen ? 'top-16 mt-4' : '-top-full']: true,
                        ['bg-white w-full h-64 absolute left-0 border-2 bottom-4 border-t-0 space-y-8 duration-500 lg:static lg:flex lg:items-center lg:space-y-0 lg:bg-transparent lg:w-fit lg:h-0 lg:bottom-0 lg:border-0 md:mt-6 lg:mt-0']:
                            true,
                    })}
                >
                    {navLinks.map((navLink) => {
                        return (
                            <li
                                key={navLink.text}
                                className="ml-8 md:text-md 2xl:text-lg font-medium"
                            >
                                <Link
                                    href={navLink.link}
                                    target={navLink.target}
                                    onClick={() => {
                                        setNavbarIsOpen(false);
                                    }}
                                    className={cn({
                                        ['flex items-center mt-6 lg:mt-0']:
                                            true,
                                        [router.pathname === navLink.link
                                            ? 'underline underline-offset-8'
                                            : 'hover:text-gray-700 transition-colors']:
                                            true,
                                    })}
                                >
                                    {navLink.icon}
                                    {navLink.text}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {session ? (
                    <div className="-mt-3 items-center">
                        <Popover className="relative">
                            <Popover.Button className="border-2 rounded-full p-1 border-pink-600 background-transparent outline-none items-center">
                                <Image
                                    src={session?.user?.image as string}
                                    alt={session?.user?.name as string}
                                    width={42}
                                    height={42}
                                    priority
                                    className="rounded-full"
                                />
                            </Popover.Button>

                            <Popover.Panel className="absolute m-0 left-0 right-0 cursor-pointer text-center font-medium text-gray-700">
                                <a onClick={() => signOut()}>Deslogar</a>
                            </Popover.Panel>
                        </Popover>
                    </div>
                ) : (
                    <a onClick={() => signIn()} className="hidden md:block">
                        <Button onClick={() => signIn()}>
                            Login com Discord
                        </Button>
                    </a>
                )}
            </div>
        </nav>
    );
}
