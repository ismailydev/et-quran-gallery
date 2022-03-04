import { MdAudiotrack } from "react-icons/md";

const Header = () => {
    return (
        <header className="min-h-[10vh] bg-body text-primary shadow-sm shadow-shadow flex items-center ">
            <div className="w-3/4 mx-auto flex items-center">
                <a className="text-2xl font-nunito" href="/">
                    etQuran
                </a>
                <a
                    className="ml-auto flex gap-2 items-center"
                    href="https://et-quran-player.netlify.app"
                >
                    Go to Player <MdAudiotrack />
                </a>
            </div>
        </header>
    );
};

export default Header;
