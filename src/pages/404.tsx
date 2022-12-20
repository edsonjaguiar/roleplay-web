import Image from 'next/image';
import Link from 'next/link';
import { CaretCircleLeft, Robot } from 'phosphor-react';

import notFound from '@/assets/notFound.svg';

export default function PageNotFound() {
    return (
        <div className="flex items-center justify-center gap-20">
            <div className="hidden xl:block">
                <Image
                    src={notFound}
                    alt="Not Found image"
                    width={400}
                    height={400}
                />
            </div>

            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-red-500 sm:text-8xl">
                    Error 404!
                </h1>
                <p className="flex items-center text-sm mt-4 text-center text-gray-600 sm:text-base">
                    Eita, parece que página que você requisito não foi
                    encontrada! <Robot size={24} weight="bold" />
                </p>

                <Link
                    href="/"
                    className="mt-8 text-sm uppercase text-white font-bold p-4 rounded bg-pink-700 flex items-center justify-center gap-[10px]"
                >
                    <CaretCircleLeft size={24} />
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
    );
}
