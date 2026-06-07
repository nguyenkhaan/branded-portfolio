import StackIcon from "tech-stack-icons"

export default function TechItem({
    name , icon 
}: {
    name : string, icon : string
}) {
    return (
        <div className="flex-col gap-6 hover:bg-active-border transition-all duration-300 border flex items-center justify-center border-border p-10">
            <StackIcon className='w-10 h-10 opacity-80' variant='dark' name={icon} />
            <span className="text-text-secondary font-space font-md tracking-tight text-lg">{name}</span>  
            
        </div>
    )
}