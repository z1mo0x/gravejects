'use client'

import { motion } from 'framer-motion'
import React, { memo } from 'react'

function Blink() {
    return (
        <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity }}
        >_</motion.span>
    )
}

export default memo(Blink)