export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-400 to-pink-700">
            <div className="text-center p-5 text-white font-bold">
                <p className="text-base">
                    Miami Roleplay &copy; 2022 By{' '}
                    <a
                        href="https://github.com/edsonjaguiar"
                        target="_blank"
                        className="underline underline-offset-8 hover:text-zinc-200 transition-colors"
                        rel="noreferrer"
                    >
                        Edson
                    </a>
                </p>
            </div>
        </footer>
    );
}
