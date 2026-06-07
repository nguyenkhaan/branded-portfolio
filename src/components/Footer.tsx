import { contacts } from '../bases/me.constant';

export default function Footer() {
    return (
        <footer className="w-full border-t border-t-border text-text-secondary">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-6 text-sm font-space uppercase sm:px-6 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:text-base">
                <span className="leading-relaxed">© 2026 Make with Cloudian 💙 Cloud</span>
                <ul className='ml-0 flex flex-wrap items-center gap-x-5 gap-y-3'>
                    {contacts.map((contact, index) => {
                        return (
                            <a href = {contact.link} target='_blank' rel="noreferrer" key={index}>
                                <span className="underline transition-all duration-500 lg:hover:text-text">
                                    {contact.name}
                                </span>
                            </a>
                        );
                    })}
                </ul>
            </div>
        </footer>
    );
}
