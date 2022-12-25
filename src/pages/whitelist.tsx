import Button from '@/components/Button';
import Loading from '@/components/Loading';
import StepOne from '@/components/Steps/StepOne';
import StepThree from '@/components/Steps/StepThree';
import StepTwo from '@/components/Steps/StepTwo';
import useMultistepForm from '@/hooks/useMultistepForm';
import axios from 'axios';
import { signIn, useSession } from 'next-auth/react';
import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FormData = {
    answerName: string;
    answerHistory: string;
    answerRDM: string;
    answerVDM: string;
};

const INITIAL_DATA: FormData = {
    answerName: '',
    answerHistory: '',
    answerRDM: '',
    answerVDM: '',
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
    ]);

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!isLastStep) return nextQuestion();

        setData({
            answerName: '',
            answerHistory: '',
            answerRDM: '',
            answerVDM: '',
        });
        toast('White List enviada!', {
            autoClose: 2000,
            type: 'success',
        });

        try {
            await axios.post('/api/sendWebhook', {
                answerName: data.answerName,
                answerHistory: data.answerHistory,
                answerRDM: data.answerRDM,
                answerVDM: data.answerVDM,
            });
        } catch (error) {
            toast(error as string, {
                autoClose: 2000,
                type: 'error',
            });
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
