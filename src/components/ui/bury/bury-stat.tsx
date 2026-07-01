import LanguageIcon from "@/components/decorations/language-icon";
import { Icon } from "@phosphor-icons/react";
import { LucideIcon } from "lucide-react";

type Props = {
    iconLeft?: LucideIcon | Icon | string;
    title?: string;
    value: string | number;
    className?: string;
}

const BuryStat = ({ iconLeft: IconLeft, title, value, className }: Props) => {
    const renderIcon = () => {

        if (!IconLeft) {
            return null;
        }

        if (typeof IconLeft === 'string') {
            return (
                <LanguageIcon
                    language_name={value.toString()}
                    className="text-2xl"
                />
            );
        }

        const IconComponent = IconLeft;

        return (
            <IconComponent
                size={24}
                className="text-stone h-max"
            />
        );
    };

    return (
        <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
            <div className="h-6">
                {renderIcon()}
            </div>
            {
                title && <div className="">{title}: {value}</div>
            }
        </div>
    )
}

export default BuryStat;