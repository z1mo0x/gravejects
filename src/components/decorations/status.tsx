'use client'

import { Dictionary, useLang } from '@/contexts/lang/langContext';
import React, { memo } from 'react'
import {
    ArchiveBoxIcon,
    HammerIcon,
    QuestionIcon,
    SkullIcon,
} from '@phosphor-icons/react';
import { SproutIcon } from 'lucide-react';

type StatusKey = keyof Dictionary['bury']['status'];
type StatusIconKey = Dictionary['bury']['status'][StatusKey]['icon'];

type Props = {
    value: keyof Dictionary['bury']['status'];
}
const statusIcons: Record<StatusIconKey, React.ElementType> = {
    skull: SkullIcon,
    archive: ArchiveBoxIcon,
    sprout: SproutIcon,
    hammer: HammerIcon,
    question: QuestionIcon,
};

function StatusTag({ value }: Props) {
    const { t } = useLang()
    const statuses = t.bury.status;
    const status = statuses[value];
    const Icon = statusIcons[status.icon];

    return (
        <div className='flex gap-1.5 text-[16px] font-normal bg-primary/5
         items-center border border-primary p-1.5 text-primary 
         rounded-lg'>
            <Icon size={20} />
            {status.label}
        </div>
    )
}

const StatusComponent = memo(StatusTag);

StatusComponent.displayName = 'StatusTag';

export default StatusComponent;