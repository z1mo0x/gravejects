'use client'

import { InfinityIcon, SkullIcon } from "@phosphor-icons/react";


const SkullDivider = () => {
    return (
        <div className="flex items-center justify-center gap-4 py-4">
            <div className="flex-1 relative">
                <div className="line-left bg-stone h-px  w-full bg-linear-to-r from-transparent via-primary/50 to-primary/10"></div>
                <InfinityIcon className="size-5 absolute top-1/2 -translate-y-1/2 right-0 " />
            </div>
            <SkullIcon
                size={22}
                weight="duotone"
                className="text-primary/70 code-glow"
            />
            <div className="flex-1 relative">
                <InfinityIcon className="size-5 absolute top-1/2 -translate-y-1/2 left-0" />
                <div className="line-right bg-stone h-px w-full  bg-linear-to-l from-transparent via-primary/50 to-primary/10"></div>
            </div>
        </div>
    )
}

export default SkullDivider;