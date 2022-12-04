import React from 'react';

interface Props {
    children: React.ReactNode;
    type?: 'NORMAL' | 'REVERSE';
}

export default function Section({ children, type = 'REVERSE' }: Props) {
    return (
        <section className="h-full max-h-[640px] mb-8 xl:mb-24 px-2 py-4 sm:px-4 mt-20 lg:mt-28">
            <div
                className={
                    type === 'NORMAL'
                        ? 'container flex gap-12 flex-col items-center justify-around mx-auto lg:flex-row'
                        : 'container flex gap-12 flex-col-reverse items-center justify-around mx-auto lg:flex-row'
                }
            >
                {children}
            </div>
        </section>
    );
}
