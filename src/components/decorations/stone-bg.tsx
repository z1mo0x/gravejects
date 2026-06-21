

import Image from 'next/image';
import React from 'react'

function StoneBg({ children, className }: React.HtmlHTMLAttributes<'div'>) {
    return (
        <>
            <Image alt='Фон для блока' src={'/stone-bg.png'} fill className={`${className} z-0 object-cover pointer-events-none  object-center`} />
            <div className='relative z-1'>
                {children}
            </div>
        </>
    )
}

export default StoneBg; 