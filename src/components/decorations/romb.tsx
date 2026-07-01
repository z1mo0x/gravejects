import { cn } from "@/lib/utils"
import { memo } from "react"

function Romb({ className }: { className?: string }) {
    return (
        <div className={`${className} flex gap-5 items-center`}>
            <div className="grow h-px bg-border"></div>
            <div className="w-4 h-4 border-2 rotate-45 border-border"></div>
            <div className="grow h-px bg-border"></div>
        </div>
    )
}

export default memo(Romb);