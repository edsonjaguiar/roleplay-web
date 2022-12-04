import notFound from '@/assets/notFound.json';
import Link from 'next/link';
import { CaretCircleLeft } from 'phosphor-react';
import ReactLottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
    },
};

export default function PageNotFound() {
    return (
        <div className="flex items-center justify-center gap-20">
            <div className="hidden lg:block lg:visible">
                <ReactLottie
                    options={{ animationData: notFound, ...defaultOptions }}
                    width={500}
                    height={500}
                />
            </div>

            <div className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-red-500 sm:text-8xl">
                    Error 404!
                </h1>
                <p className="text-sm mt-4 text-center text-gray-600 sm:text-base">
                    Eita, parece que página que você requisito não foi
                    encontrada 🤖
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
