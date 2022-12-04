import aboutIllustration from '@/assets/about-illustration.png';
import homeIllustration from '@/assets/home-illustration.png';
import teamIllustrationOne from '@/assets/team-image1.png';
import Button from '@/components/Button';
import Section from '@/components/Section';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';
import { StarFour } from 'phosphor-react';

export default function Home() {
    const { data: session } = useSession();

    const copyToClipBoard = async () => {
        await navigator.clipboard.writeText('Kadu#9909');
        alert('Texto copiado!');
    };

    return (
        <>
            <Section>
                <div className="text-sm">
                    <span className="flex text-pink-500">
                        <StarFour size={18} weight="bold" className="mr-2" />
                        Season V1.
                    </span>
                    <h1 className="text-3xl leading-snug font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-700 mb-8 lg:text-5xl lg:leading-snug lg:whitespace-pre">
                        {`Miami Roleplay, o\nmelhor do Roblox`}
                    </h1>
                    <p className="text-gray-600 mb-8 text-base lg:whitespace-pre">
                        {`Miami City é um jogo focado na vida real (Roleplay), com\numa experiência única.`}
                    </p>

                    {session ? (
                        ''
                    ) : (
                        <Button type="SECONDARY" onClick={() => signIn()}>
                            Login com Discord
                        </Button>
                    )}
                </div>

                <div>
                    <Image
                        src={homeIllustration}
                        alt="Home illustration"
                        width={420}
                        height={420}
                        priority
                    />
                </div>
            </Section>

            <Section type="NORMAL">
                <div className="flex-1">
                    <Image
                        src={aboutIllustration}
                        alt="About illustration"
                        width={520}
                        height={520}
                    />
                </div>

                <div className="flex-1">
                    <h2 className="text-4xl text-orange-600 font-bold mb-8">
                        Sobre
                    </h2>
                    <p className="text-gray-600 mb-8 text-base text-justify">
                        Miami Roleplay consiste em você criar uma vida,
                        trabalhar pra ganhar sua grana e comprar as coisas
                        necessárias. Além disso, você escolhe o que quer ser,
                        como ser criminoso onde você rouba coisas para ganhar
                        dinheiro, ou ser policial para proteger a cidade e fazer
                        ações, ou também você trabalha honesto ou vira corrupto,
                        não quebre a economia.
                    </p>
                </div>
            </Section>
            <Section type="NORMAL">
                <div>
                    <h2 className="text-4xl text-orange-600 font-bold mb-8">
                        Fundador
                    </h2>

                    <div className="flex flex-col items-center">
                        <div className="mb-5">
                            <Image
                                src={teamIllustrationOne}
                                alt="About illustration"
                                width={120}
                                height={120}
                            />
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl text-slate-800 font-bold">
                                Carlos
                            </h4>
                            <button
                                className="text-gray-600 font-medium"
                                onClick={copyToClipBoard}
                            >
                                <span className="text-blue-500">@</span>
                                Kadu#9909
                            </button>
                        </div>
                    </div>
                </div>
            </Section>

            {session ? (
                ''
            ) : (
                <Section type="NORMAL">
                    <div className="text-center">
                        <p className="mb-2 text-2xl text-pink-700 font-bold">
                            Wow, você chegou até aqui!
                        </p>
                        <p className="mb-2 text-base text-gray-600 font-medium">
                            isso significa que você se interessou pelo nosso
                            conteúdo, só resta uma coisa a se fazer...
                        </p>

                        <Button type="SECONDARY" onClick={() => signIn()}>
                            Login com Discord
                        </Button>
                    </div>
                </Section>
            )}
        </>
    );
}
