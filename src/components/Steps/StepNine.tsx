import Form from '../Form';

type FieldsData = {
    answerDarkRP: string;
};

type Props = FieldsData & {
    updateFields: (fields: Partial<FieldsData>) => void;
};

export default function StepNine({ answerDarkRP, updateFields }: Props) {
    return (
        <Form>
            <label className="mb-5 font-semibold text-sm">
                O que é Dark RP?
            </label>
            <textarea
                placeholder="Digite aqui o significado de Dark RP"
                required
                minLength={10}
                maxLength={400}
                className="resize-none px-4 py-4 h-36 border-2 border-gray-200 bg-gray-100 outline-none text-sm placeholder:font-medium"
                value={answerDarkRP}
                onChange={(e) => {
                    updateFields({ answerDarkRP: e.target.value });
                }}
            />
        </Form>
    );
}
