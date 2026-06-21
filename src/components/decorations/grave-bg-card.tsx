import { memo } from "react";

type Props = {
    children: React.ReactNode;
}

const GraveBgCard = ({ children, className }: Props & React.HTMLAttributes<'div'>) => {
    return (
        <div className={`${className} stone-texture-dark   rounded-2xl p-5`}>
            <div className="stone-border rounded-2xl" />
            {children}
        </div>
    )
}

export default memo(GraveBgCard);