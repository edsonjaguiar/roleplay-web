type Props = {
    type?: 'PRIMARY' | 'SECONDARY';
    button?: 'SUBMIT' | 'BUTTON';
    children: React.ReactNode;
    onClick?: (event: any) => void;
};

export default function Button({
    type = 'PRIMARY',
    button = 'BUTTON',
    children,
    ...onClick
}: Props) {
    return (
        <button
            type={button === 'SUBMIT' ? 'submit' : 'button'}
            className={
                type === 'SECONDARY'
                    ? 'px-7 py-3 font-medium border bg-pink-500 text-white rounded-full'
                    : 'px-7 py-3 font-medium border border-pink-500 text-pink-500 rounded-full'
            }
            {...onClick}
        >
            {children}
        </button>
    );
}
