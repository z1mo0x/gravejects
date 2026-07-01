import { Code2Icon } from 'lucide-react';
import React, { memo } from 'react'

type Props = {
    language_name?: string | null;
    className?: string;
};

const languageIconMap: Record<string, string> = {
    TypeScript: 'typescript',
    JavaScript: 'javascript',
    CSS: 'css3',
    HTML: 'html5',
    PHP: 'php',
    Python: 'python',
    Java: 'java',
    Go: 'go',
    Rust: 'rust',
    C: 'c',
    'C++': 'cplusplus',
    'C#': 'csharp',
    Ruby: 'ruby',
    Kotlin: 'kotlin',
    Swift: 'swift',
    Dart: 'dart',
    Shell: 'bash',
    Dockerfile: 'docker',
    Vue: 'vuejs',
    React: 'react',
    Next: 'nextjs',
    'Next.js': 'nextjs',
};

function LanguageIcon({ language_name, className }: Props) {
    if (!language_name) {
        return <Code2Icon className={className} />;
    }

    const iconName = languageIconMap[language_name];

    if (!iconName) {
        return <Code2Icon className={className} />;
    }

    return (
        <i
            className={`devicon-${iconName}-plain colored ${className}`}
            aria-hidden="true"
        />
    );
}

export default memo(LanguageIcon);