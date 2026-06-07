import StackIcon from "tech-stack-icons"

export default function TechItem({
    name , icon 
}: {
    name : string, icon : string
}) {
    return (
        <div className="flex min-h-36 flex-col items-center justify-center gap-4 border border-border p-6 transition-all duration-300 sm:min-h-40 sm:gap-5 sm:p-8 lg:hover:bg-active-border">
            <StackIcon className='h-9 w-9 opacity-80 sm:h-10 sm:w-10' variant='dark' name={icon} />
            <span className="text-center font-space text-base tracking-tight text-text-secondary sm:text-lg">{name}</span>  
            
        </div>
    )
}
