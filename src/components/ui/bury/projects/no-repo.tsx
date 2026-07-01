import { useLang } from '@/contexts/lang/langContext';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { memo } from 'react'

type Props = {}

function NoRepository({ }: Props) {
    const { t } = useLang();

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5 }}
            className="relative z-10">
            <div className="flex mt-5 justify-center">
                <Image src={'/icons/icon-code-graveyard.png'} width={150} height={150} alt={t.bury.preview.title} />
            </div>
            <div className="text-center mt-5 unbounded font-bold text-2xl">{t.bury.preview.emptyTitle}</div>
            <div className="text-center unbounded text-[14px] max-w-100 mx-auto mt-2.5">{t.bury.preview.emptyText}</div>
        </motion.div>
    )
}

const EmptyRepository = memo(NoRepository);

EmptyRepository.displayName = 'NoRepository';

export default EmptyRepository;