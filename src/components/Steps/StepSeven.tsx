import Form from '../Form';

type FieldsData = {
    answerCombatLogging: string;
};

type Props = FieldsData & {
    updateFields: (fields: Partial<FieldsData>) => void;
};

export default function StepSeven({
    answerCombatLogging,
    updateFields,
}: Props) {
    return (
        <Form>
            <label className="mb-5 font-semibold text-sm">
                O que é Combat Logging (CL)?
            </label>
            <textarea
                placeholder="Digite aqui o significado de Combat Logging (CL)"
                required
                minLength={10}
                maxLength={400}
                className="resize-none px-4 py-4 h-36 border-2 border-gray-200 bg-gray-100 outline-none text-sm placeholder:font-medium"
                value={answerCombatLogging}
                onChange={(e) => {
                    updateFields({ answerCombatLogging: e.target.value });
                }}
            />
        </Form>
    );
}