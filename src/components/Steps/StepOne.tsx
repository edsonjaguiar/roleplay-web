import Form from '../Form';

type FieldsData = {
    answerName: string;
    answerHistory: string;
};

type Props = FieldsData & {
    updateFields: (fields: Partial<FieldsData>) => void;
};

export default function StepOne({
    answerName,
    answerHistory,
    updateFields,
}: Props) {
    return (
        <Form>
            <label className="mb-5 font-semibold text-sm">
                Qual o nome do seu personagem?
            </label>
            <input
                placeholder="Digite aqui o nome do seu personagem"
                required
                minLength={4}
                maxLength={15}
                className="resize-none px-4 py-4 h-10 border-2 border-gray-200 bg-gray-100 outline-none text-sm placeholder:font-medium"
                value={answerName}
                onChange={(e) => {
                    updateFields({ answerName: e.target.value });
                }}
            />

            <label className="mb-5 font-semibold text-sm mt-5">
                Nos conte sua história de Roleplay
            </label>
            <textarea
                placeholder="Digite aqui sua história de Roleplay"
                required
                minLength={10}
                maxLength={400}
                className="resize-none px-4 py-4 h-36 border-2 border-gray-200 bg-gray-100 outline-none text-sm placeholder:font-medium"
                value={answerHistory}
                onChange={(e) => {
                    updateFields({ answerHistory: e.target.value });
                }}
            />
        </Form>
    );
}
