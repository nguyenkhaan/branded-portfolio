export default function VisualCard({
    url 
} : { 
    url : string 
}) {
    return (
        <div className='group w-fit h-[80%] relative overflow-hidden cursor-pointer'>
          

            <img src={url} className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700' />
       
            <div className='inset-0 bg-black/50 absolute opacity-0 group-hover:opacity-100 transition-all duration-700'></div>
            <div className='absolute opacity-0 group-hover:opacity-100 transition-all duration-800 left-4 bottom-4'>
                <p className='text-xs font-md text-text-secondary font-space tracking-wider'>Dreamspace</p>
                <p className='text-base font-semibold font-syne text-text tracking-wider'>Mono</p>
            </div>
        </div>
    )
}
