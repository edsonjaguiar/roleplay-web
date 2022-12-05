type Props = {
    children: React.ReactNode;
};

export default function Form({ children }: Props) {
    return (
        <div className="mb-8">
            <div className="flex flex-col">{children}</div>
        </div>
    );
}
