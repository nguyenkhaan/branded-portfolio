export default function VisualCard({
    url 
} : { 
    url : string 
}) {
    return (
        <div className='group relative aspect-[4/5] w-full overflow-hidden cursor-pointer'>
            <img
                src={url}
                className='h-full w-full object-cover transition-all duration-700 lg:grayscale lg:group-hover:scale-110 lg:group-hover:grayscale-0'
            />

            <div className='absolute inset-0 bg-black/35 opacity-100 transition-all duration-700 lg:opacity-0 lg:group-hover:opacity-100'></div>
            <div className='absolute left-4 bottom-4 opacity-100 transition-all duration-700 lg:opacity-0 lg:group-hover:opacity-100'>
                <p className='font-space text-xs tracking-wider text-text-secondary'>Dreamspace</p>
                <p className='font-syne text-base font-semibold tracking-wider text-text sm:text-lg'>Mono</p>
            </div>
        </div>
    )
}
