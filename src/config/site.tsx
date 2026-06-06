export const site = {
    languages: ["ru", "en"],
    defaultLang: "ru",

    dictionary: {
        ru: {
            title: `projectyard> `,
            descr: "Кладбище проектов",
            buryProject: 'Похоронить проект',
            searchPlaceholder: 'Найти проект',
        },
        en: {
            buryProject: 'Bury a project',
            title: `projectyard> `,
            descr: "Project graveyard",
            searchPlaceholder: 'Search projects',
        }
    }
};

export type Lang = keyof typeof site.dictionary;