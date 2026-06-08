import { Archive, Home, Plus, Skull, Star } from "lucide-react";

export const site = {
    languages: ["ru", "en"],

    navItems: [
        { key: "cemetery", path: "" },
        { key: "recentlyBuried", path: "/recently-buried" },
        { key: "hallOfFame", path: "/hall-of-fame" },
        { key: "archive", path: "/archive" },
        { key: "buryProject", path: "/bury" },
    ],

    dictionary: {
        ru: {
            title: `projectyard> `,
            descr: "Кладбище проектов",
            buryProject: 'Похоронить проект',
            searchPlaceholder: 'Найти проект',
            cemetery: "Кладбище",
            recentlyBuried: "Недавние похороны",
            hallOfFame: "Зал славы",
            archive: "Архив",
        },
        en: {
            buryProject: 'Bury a project',
            title: `projectyard> `,
            descr: "Project graveyard",
            cemetery: "Cemetery",
            recentlyBuried: "Recently buried",
            hallOfFame: "Hall of Fame",
            archive: "Archive",
            searchPlaceholder: 'Search projects',
        }
    }
};

export const navItems = [
    {
        key: "cemetery",
        path: "",
        icon: Home,
    },
    {
        key: "recentlyBuried",
        path: "/recently-buried",
        icon: Skull,
    },
    {
        key: "hallOfFame",
        path: "/hall-of-fame",
        icon: Star,
    },
    {
        key: "archive",
        path: "/archive",
        icon: Archive,
    },
    {
        key: "buryProject",
        path: "/bury",
        icon: Plus,
    },
] as const;

export type Lang = keyof typeof site.dictionary;