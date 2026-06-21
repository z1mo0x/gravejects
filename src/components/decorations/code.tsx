import { memo } from "react";

type Props = {
    children: React.ReactNode;
}

const CodeWrap = ({ children }: Props) => {
    return (
        <div className="px-4 py-2 border-border text-[14px] border rounded-lg code-glow">
            {children}
        </div>
    )
}

export default memo(CodeWrap);