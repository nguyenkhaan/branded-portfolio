import { contacts } from '../bases/me.constant';

export default function Footer() {
    return (
        <div className="h-30 text-base font-space border-t uppercase text-text-secondary border-t-border w-full right-0 left-0">
            <div className="max-w-7xl flex h-full items-center justify-between w-full mx-auto">
                <span className="">© 2026 Make with Cloudian 💙 Cloud</span>
                <ul className='ml-0 flex items-center gap-6'>
                    {contacts.map((contact, index) => {
                        return (
                            <a href = {contact.link} target='_blank'>
                                <span className="uppercase hover:text-text duration-500 transition-all underline" key={index}>
                                    {contact.name}
                                </span>
                            </a>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
