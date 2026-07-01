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
    quotes: {
        login: 'user@projectyard:~$ auth',
        login_under: '> git commit -m "another ghost in the repo"',
        sign_up: 'user@projectyard:~$ sign up',
        sign_up_under: '> git commit -m "new soul joined the graveyard"',
        user_profile: '> git log --author=gravekeeper',

    },

    dictionary: {
        ru: {
            title: `projectyard> `,
            descr: "Кладбище проектов",
            buryProject: 'Похоронить проект',
            searchPlaceholder: 'Найти проект',
            cemetery: "Кладбище",
            recentlyBuried: "Недавние похороны",
            randomGrave: "Рандомная могила",
            hallOfFame: "Зал славы",
            archive: "Архив",
            quote: "Кажый проект заслуживает покоя.",
            hero: {
                title: {
                    text: "Каждый проект заслуживает",
                    span: 'покой'
                },
                descr: "Кладбище для open-source проектов, которые не достигли своего завершения. Спасибо им. Пусть покоятся с миром или найдут новый хост."
            },
            auth: {
                common: {
                    email: "Email",
                    password: "Пароль",
                    confirmPassword: "Повторите пароль",
                    newPassword: "Новый пароль",
                    loading: "Загрузка...",
                    or: "или",
                    backToLogin: "Вернуться ко входу",
                    exit: 'Покинуть',
                    login_github: "Войти через GitHub"
                },

                login: {
                    metaTitle: "Вход",
                    title: "Войти в склеп",
                    description: "Получите доступ к архивным проекта, оставленным на вечное хранение, и сделайте свой вклад!",
                },
            },
            bury: {
                meta: {
                    title: 'Похоронить проект',
                    description: 'Выберите репозиторий, который хотите сохранить в цифровом кладбище ProjectYard.',
                },

                header: {
                    breadcrumb: 'projectyard> bury --import_repo _',
                },

                page: {
                    title: 'Похоронить проект',
                    subtitle: 'Выберите репозиторий, который хотите сохранить, в цифровом кладбище ProjectYard.',
                },

                repository: {
                    title: 'Импорт GitHub-репозитория',
                    label: 'Ссылка на GitHub-репозиторий',
                    placeholder: 'https://github.com/user/repository',
                    hintIdle: '> ожидание ссылки на репозиторий...',
                    hintLoading: '> получаем данные репозитория...',
                    hintSuccess: '> репозиторий найден и готов к захоронению',
                    hintError: '> не удалось получить данные репозитория',
                },

                actions: {
                    importRepository: 'Импортировать',
                    chooseFromGithub: 'Выбрать из GitHub',
                    buryProject: 'Похоронить проект',
                    bury: 'Похоронить',
                    returnToYard: 'Вернуться во двор',
                    openGithub: 'Открыть GitHub',
                    changeRepository: 'Выбрать другой',
                    abortBurial: 'Отменить захоронение',
                },

                preview: {
                    title: 'Предпросмотр репозитория',

                    emptyTitle: 'Репозиторий не выбран',
                    emptyText: 'Импортируйте GitHub-репозиторий, чтобы начать ритуал захоронения.',
                    emptyTerminal: 'echo "ожидаем наследие..."',

                    detectedLabel: 'Найденный репозиторий',
                    readyLabel: 'Готов к захоронению',

                    fields: {
                        language: 'Основной язык',
                        stars: 'Звёзды',
                        lastActivity: 'Последняя активность',
                        status: 'Статус',
                        owner: 'Владелец',
                        repository: 'Репозиторий',
                    },

                    suggestedStatus: 'Предполагаемый статус',
                },

                notice: {
                    title: 'Безопасное действие',
                    text: 'Вы сможете отменить действие до запуска финальной сцены захоронения.',
                },

                status: {
                    abandoned: {
                        label: 'заброшен',
                        icon: 'skull',
                    },
                    archived: {
                        label: 'архивирован',
                        icon: 'archive',
                    },
                    resurrected: {
                        label: 'воскрешён',
                        icon: 'sprout',
                    },
                    unfinished: {
                        label: 'не завершён',
                        icon: 'hammer',
                    },
                    unknown: {
                        label: 'неизвестно',
                        icon: 'question',
                    },
                },

                validation: {
                    required: 'Вставьте ссылку на GitHub-репозиторий.',
                    invalidUrl: 'Введите корректную ссылку на GitHub.',
                    githubOnly: 'Поддерживаются только ссылки на GitHub.',
                    notFound: 'Репозиторий не найден.',
                    privateRepo: 'Этот репозиторий закрыт или недоступен.',
                    importFailed: 'Не удалось импортировать репозиторий. Попробуйте ещё раз.',
                },

                loading: {
                    importing: 'Импортируем репозиторий...',
                    preparing: 'Подготавливаем захоронение...',
                    checking: 'Проверяем последние следы активности...',
                },

                scene: {
                    title: 'Сцена захоронения',
                    preparation: 'Подготовка ритуала...',
                    lowering: 'Проект опускается в архив...',
                    burial: 'Закрываем цифровую могилу...',
                    silence: 'Тишина...',
                    certificate: 'Сертификат захоронения готов',
                    share: 'Поделиться наследием',
                },
            },
            stats: {
                buried: 'Похоронено проектов',
                archived: 'Архивировано проектов',
                stars: 'Собрано звезд',
                last_activity: 'Последняя активность',
            }
        },
        en: {
            buryProject: 'Bury a project',
            title: `projectyard> `,
            descr: "Project graveyard",
            cemetery: "Cemetery",
            recentlyBuried: "Recently buried",
            hallOfFame: "Hall of Fame",
            randomGrave: "Random grave",
            archive: "Archive",
            quote: "Because every project deserves a peaseful rest.",
            searchPlaceholder: 'Search projects',
            hero: {
                title: {
                    text: "Every project deserves a",
                    span: 'REST'
                },
                descr: "A cemetery for open-source projects that have reached their end of life. Thank them. Remember them. Let them rest in piece or find a new host."
            },
            auth: {
                common: {
                    email: "Email",
                    password: "Password",
                    confirmPassword: "Confirm password",
                    newPassword: "New password",
                    loading: "Loading...",
                    or: "or",
                    backToLogin: "Back to login",
                    exit: 'Leave the Yard',
                    login_github: "Continue with GitHub"
                },

                login: {
                    metaTitle: "Login",
                    title: "Return to the graveyard",
                    description: "Log in to keep archiving forgotten projects and repositories.",
                },
            },
            bury: {
                meta: {
                    title: 'Bury a Project',
                    description: 'Choose a repository you want to preserve in the digital graveyard of ProjectYard.',
                },

                header: {
                    breadcrumb: 'projectyard> bury --import_repo _',
                },

                page: {
                    title: 'Bury a Project',
                    subtitle: 'Choose the repository you want to preserve before it is laid to rest.',
                },

                repository: {
                    title: 'Import GitHub Repository',
                    label: 'GitHub repository URL',
                    placeholder: 'https://github.com/user/repository',
                    hintIdle: '> waiting for repository link...',
                    hintLoading: '> fetching repository metadata...',
                    hintSuccess: '> repository found and ready for burial',
                    hintError: '> failed to fetch repository metadata',
                },

                actions: {
                    importRepository: 'Import Repository',
                    chooseFromGithub: 'Choose from GitHub',
                    buryProject: 'Bury Project',
                    bury: 'Bury',
                    returnToYard: 'Return to Yard',
                    openGithub: 'Open GitHub',
                    changeRepository: 'Change Repository',
                    abortBurial: 'Abort Burial',
                },

                preview: {
                    title: 'Repository Preview',

                    emptyTitle: 'No repository selected',
                    emptyText: 'Import a GitHub repository to begin the burial process.',
                    emptyTerminal: 'echo "awaiting legacy..."',

                    detectedLabel: 'Detected Repository',
                    readyLabel: 'Ready for burial',

                    fields: {
                        language: 'Main language',
                        stars: 'Stars',
                        lastActivity: 'Last activity',
                        status: 'Status',
                        owner: 'Owner',
                        repository: 'Repository',
                    },

                    suggestedStatus: 'Suggested status',
                },

                notice: {
                    title: 'Safe action',
                    text: 'You can still cancel before the final burial scene begins.',
                },

                status: {
                    abandoned: {
                        label: 'abandoned',
                        icon: 'skull',
                    },
                    archived: {
                        label: 'archived',
                        icon: 'archive',
                    },
                    resurrected: {
                        label: 'resurrected',
                        icon: 'sprout',
                    },
                    unfinished: {
                        label: 'unfinished',
                        icon: 'hammer',
                    },
                    unknown: {
                        label: 'unknown',
                        icon: 'question',
                    },
                },

                validation: {
                    required: 'Paste a GitHub repository URL.',
                    invalidUrl: 'Enter a valid GitHub URL.',
                    githubOnly: 'Only GitHub repository links are supported.',
                    notFound: 'Repository not found.',
                    privateRepo: 'This repository is private or unavailable.',
                    importFailed: 'Failed to import repository. Please try again.',
                },

                loading: {
                    importing: 'Importing repository...',
                    preparing: 'Preparing burial...',
                    checking: 'Checking the last traces of activity...',
                },

                scene: {
                    title: 'Burial Scene',
                    preparation: 'Preparing the ritual...',
                    lowering: 'Lowering the project into the archive...',
                    burial: 'Sealing the digital grave...',
                    silence: 'Silence...',
                    certificate: 'Burial certificate is ready',
                    share: 'Share the legacy',
                },
            },
            stats: {
                buried: 'Projects buried',
                archived: 'Repos archived',
                stars: 'Stars collected',
                last_activity: 'Last activity',
            }
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