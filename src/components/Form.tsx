interface Props {
    type?: 'TWOCOLUMNS';

    questionOne: string;
    questionTwo?: string;

    placeholderOne: string;
    placeholderTwo?: string;
}

export default function Form({
    type,
    questionOne,
    questionTwo,
    placeholderOne,
    placeholderTwo,
}: Props) {
    return (
        <div className="mb-8">
            <div className="flex flex-col mb-8">
                <label className="mb-5 font-semibold text-sm">
                    {questionOne}
                </label>

                <input
                    placeholder={`Digite aqui ${placeholderOne}`}
                    required
                    className="resize-none px-4 py-4 h-10 border-2 border-gray-200 bg-gray-100 outline-none text-sm placeholder:font-medium"
                />
            </div>

            <div className="flex flex-col">
                <label className="mb-5 font-semibold text-sm">
                    {questionTwo}
                </label>

                <textarea
                    placeholder={`Digite aqui ${placeholderTwo}`}
                    required
                    className="resize-none px-4 py-4 h-36 border-2 border-gray-200 bg-gray-100 outline-none text-sm placeholder:font-medium"
                />
            </div>
        </div>
    );
}
