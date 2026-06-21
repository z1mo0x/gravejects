import { Icon, SkullIcon } from '@phosphor-icons/react';
import { LucideIcon } from 'lucide-react'
import Image from 'next/image';
import React from 'react'

type Props = {
    variant?: "grave" | "glow" | 'icon' | 'default',
    iconLeft?: LucideIcon | Icon;
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const CustomButton = ({ variant = 'default', iconLeft: IconLeft, children, className, ...props }: Props) => {

    if (variant === 'grave') {
        return (
            <button className={`${className} relative grave-button cursor-pointer max-w-95 mx-auto px-8 py-4 flex gap-2.5 justify-center items-center`}
                {...props}>
                <Image src={'/button-bg.png'} fill alt='фон кнопки' className='-z-1' />
                {!IconLeft ?
                    <SkullIcon size={30} weight='duotone' className='text-primary/75' />
                    :
                    <IconLeft weight='duotone' color='white' className="size-6 duration-100" />
                }
                <span className='z-2 text-lg font-bold'>
                    {children}
                </span>
            </button>
        )
    }
    if (variant === 'icon') {
        return (
            <button className={`${className} bg-background btn-icon cursor-pointer uppercase unbounded border rounded-lg border-border flex gap-2.5 items-center px-8 py-4`}
                {...props}>
                {IconLeft && <IconLeft className="size-6 duration-100" />}
                {children}
            </button>
        )
    }

    return (
        <button className={`${className}  cursor-pointer`} {...props}>
            {children}
        </button>
    )

}

export default CustomButton;