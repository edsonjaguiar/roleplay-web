import Button from '@/components/Button';
import Loading from '@/components/Loading';
import StepEight from '@/components/Steps/StepEight';
import StepFive from '@/components/Steps/StepFive';
import StepFour from '@/components/Steps/StepFour';
import StepNine from '@/components/Steps/StepNine';
import StepOne from '@/components/Steps/StepOne';
import StepSeven from '@/components/Steps/StepSeven';
import StepSix from '@/components/Steps/StepSix';
import StepTen from '@/components/Steps/StepTen';
import StepThree from '@/components/Steps/StepThree';
import StepTwo from '@/components/Steps/StepTwo';
import useMultistepForm from '@/hooks/useMultistepForm';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import Router from 'next/router';
import { FormEvent, useState } from 'react';

type FormData = {
    answerName: string;
    answerHistory: string;
    answerRDM: string;
    answerVDM: string;
    answerAntLoveLife: string;
    answerPowerGaming: string;
    answerCombatLogging: string;
    answerMetaGame: string;
    answerDarkRP: string;
    answerSafeZone: string;
};

const INITIAL_DATA: FormData = {
    answerName: '',
    answerHistory: '',
    answerRDM: '',
    answerVDM: '',
    answerAntLoveLife: '',
    answerPowerGaming: '',
    answerCombatLogging: '',
    answerMetaGame: '',
    answerDarkRP: '',
    answerSafeZone: '',
};

export default function WhiteList() {
    const { data: session, status } = useSession();

    const [data, setData] = useState(INITIAL_DATA);

    const updateFields = (fields: Partial<FormData>) => {
        setData((prev) => {
            return { ...prev, ...fields };
        });
    };

    const {
        steps,
        currentStepIndex,
        step,
        nextQuestion,
        backQuestion,
        isFirstStep,
        isLastStep,
    } = useMultistepForm([
        <StepOne key={1} {...data} updateFields={updateFields} />,
        <StepTwo key={2} {...data} updateFields={updateFields} />,
        <StepThree key={3} {...data} updateFields={updateFields} />,
        <StepFour key={4} {...data} updateFields={updateFields} />,
        <StepFive key={5} {...data} updateFields={updateFields} />,
        <StepSix key={6} {...data} updateFields={updateFields} />,
        <StepSeven key={7} {...data} updateFields={updateFields} />,
        <StepEight key={8} {...data} updateFields={updateFields} />,
        <StepNine key={9} {...data} updateFields={updateFields} />,
        <StepTen key={10} {...data} updateFields={updateFields} />,
    ]);

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!isLastStep) return nextQuestion();

        const messageData = {
            embeds: [
                {
                    title: 'White List',
                    color: 7506394,
                    thumbnail: {
                        url: 'https://images-ext-2.discordapp.net/external/-ZRYobxbzYnZQKCEpnc3IwleVv5DAsIZGLifJfDI0IM/https/cdn.discordapp.com/icons/993542056930717707/016eee00e7e7dc9b3888ac5ab369f709.png',
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
                            value: data.answerName,
                        },
                        {
                            name: 'História',
                            value: data.answerHistory,
                        },
                        {
                            name: 'O que é RDM?',
                            value: data.answerRDM,
                        },
                        {
                            name: 'O que é VDM?',
                            value: data.answerVDM,
                        },
                        {
                            name: 'O que é Power Gaming?',
                            value: data.answerPowerGaming,
                        },
                        {
                            name: 'O que é Combat Logging?',
                            value: data.answerCombatLogging,
                        },
                        {
                            name: 'O que é Dark RP?',
                            value: data.answerDarkRP,
                        },
                        {
                            name: 'O que é Meta Gaming?',
                            value: data.answerMetaGame,
                        },

                        {
                            name: 'O que é Safe Zone?',
                            value: data.answerSafeZone,
                        },
                    ],
                },
            ],
        };

        Router.push('/');
        alert(
            'Para você saber se passou ou não, entre na comunidade do Discord!'
        );

        try {
            await axios.post('/api/sendWebhook', {
                messageData,
            });
        } catch (error) {
            console.log(error);
        }
    };

    if (status === 'loading') {
        return <Loading />;
    }

    if (status === 'unauthenticated') {
        return (
            <div className="flex flex-col h-[100vh] w-full items-center justify-center text-center">
                <p className="mb-2 text-2xl text-pink-700 font-bold">
                    Acesso negado!
                </p>
                <p className="mb-2 text-base text-gray-600 font-medium">
                    É necessário que você esteja logado!
                </p>

                <Button type="SECONDARY" onClick={() => signIn()}>
                    Login com Discord
                </Button>
            </div>
        );
    }

    return (
        <form
            className="flex h-[100vh] w-full items-center justify-center"
            onSubmit={onSubmit}
        >
            <div className="p-5 bg-white shadow-2xl w-[600px]">
                <h1 className="text-center text-pink-700 font-bold mb-8 text-3xl">
                    White List
                </h1>

                <span className="text-gray-500 font-medium">
                    Pergunta {currentStepIndex + 1} de {steps.length}
                </span>

                {step}

                <div className="space-x-4">
                    {!isFirstStep && (
                        <Button type="SECONDARY" onClick={backQuestion}>
                            Voltar
                        </Button>
                    )}

                    <Button type="SECONDARY" button="SUBMIT">
                        {isLastStep ? 'Confirmar envio' : 'Próximo'}
                    </Button>
                </div>
            </div>
        </form>
    );
}
