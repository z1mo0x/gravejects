export function formatDateTime(date?: string | null, lang?: string) {
    if (!date) return 'No data';

    if (lang === 'ru') {
        return new Intl.DateTimeFormat('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(new Date(date));
    }
    else {
        return new Intl.DateTimeFormat('en-US', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(new Date(date));
    }

}