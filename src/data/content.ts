export type ContentData = {
    hero: {
        title: string;
        description: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    about: {
        title: string;
        description: string;
        linkedinParams: string;
    };
    services: {
        title: string;
        subtitle: string;
        items: {
            id: string;
            title: string;
            description: string; // Short summary
            bullets: string[]; // NEW: 3 outcome bullets
            details: {
                title: string;
                content: string;
            }[];
        }[];
    };
    pricing: {
        title: string;
        description: string;
        cta: string;
        docUrl: string;
    };
    reviews: {
        title: string;
        subtitle: string;
        items: {
            name: string;
            role: string;
            content: string;
            category: "Resume" | "LinkedIn" | "Career" | "Coaching" | "Job Search"; // NEW: Category
            isHighlight?: boolean; // NEW: Highlight flag
            originalLang?: "ru" | "en";
        }[];
    };
    contact: {
        title: string;
        header: string;
        subHeader: string;
        emailValue: string;
        telegramValue: string;
        description: string;
        telegram: string;
        email: string;
        linkedin: string;
        disclaimer: string;
        soleTrader: string;
        madeBy: string;
        authorName: string;
        authorUrl: string;
    };
    ui: {
        readMore: string;
        close: string;
    };
};

export const content: { en: ContentData; ru: ContentData } = {
    en: {
        hero: {
            title: "Resume, LinkedIn and Career Advice",
            description: "Professional recruitment services. Stand out in today's competitive job market with a tailored resume and optimized LinkedIn profile.",
            ctaPrimary: "Contact me",
            ctaSecondary: "View Pricing",
        },
        about: {
            title: "About Me",
            description: "I have been a Recruitment Leader and People Manager for years. My goal is to help you navigate your career path, whether you need a resume overhaul, LinkedIn optimization, or strategic career advice. I can share the management approach that makes the team happy and motivates them bring results we all need.",
            linkedinParams: "Connect on LinkedIn",
        },
        services: {
            title: "My Services",
            subtitle: "Comprehensive solutions to help you achieve your career goals.",
            items: [
                {
                    id: "resume",
                    title: "Resume Services",
                    description: "Custom templates, goal-oriented rewriting, and ATS optimization.",
                    bullets: ["ATS-Optimized", "Custom Template", "Goal-Oriented"],
                    details: [
                        {
                            title: "Custom Template",
                            content: "Simple and easily modified template that won't get wrecked when you edit. This resume will get flawlessly parsed into any company's candidate database."
                        },
                        {
                            title: "Goal-oriented",
                            content: "We'll define your goals and highlight your resume the way it responds to the employer's needs. Considering your location-based requirements."
                        },
                        {
                            title: "Free Edits",
                            content: "After the job is done, I'll edit your resume for free whenever you want to add or replace something."
                        }
                    ]
                },
                {
                    id: "linkedin",
                    title: "LinkedIn Profile",
                    description: "Optimization, visibility strategies, and SSI improvement.",
                    bullets: ["Profile Audit", "SSI Growth", "Visibility Strategy"],
                    details: [
                        {
                            title: "What is LinkedIn",
                            content: "I'll explain what LinkedIn can do for you in terms of highlighting you as a candidate or looking for useful connections; you'll learn how to become more visible and approachable."
                        },
                        {
                            title: "Not a Resume",
                            content: "There you go. LinkedIn profile is not a resume and has its own unique perks. LinkedIn is a professional social network and continuously leads you straight to your goal whereas a resume just sits there in your folder."
                        },
                        {
                            title: "Every Block Matters",
                            content: "I'll explain how to add and edit new blocks, and how they influence your profile performance."
                        },
                        {
                            title: "SSI: Social Selling Index",
                            content: "SSI is what makes you alive and running on LinkedIn. It depends on loads of factors and your profile performance - posts, reposts, reactions, recommendations, skills, experience and other artefacts have their own \"weight\" and can generously improve your SSI if you know how and when to act."
                        }
                    ]
                },
                {
                    id: "career-counselling",
                    title: "Career Counselling",
                    description: "Navigating burnout, salary negotiation, and career changes.",
                    bullets: ["Salary Negotiation", "Burnout Recovery", "Career Clarity"],
                    details: [
                        {
                            title: "You Want Improvements",
                            content: "Let's talk about what you want from your current job or employer: new title, new salary, new responsibilities, leadership etc. How to ask for it, how to sell yourself, and to whom. Let's see if you are actually ready for it, and if not - what to do then."
                        },
                        {
                            title: "You are Burned Out",
                            content: "A syndrome of the 21st century. Unlike most people think, you are more likely to burn out when you have a dream job, when you love what you do, when you are excited for your results and your team. When you are unhappy with your job - you normally get stressed, and then you act. When you are happy, you tend to not notice the signs of stress for a loooong time until it's too late to act because the excitement and results drive you faster and further despite the tiredness. Think you are burned out? Let me give you examples of how to carefully and ecologically recover."
                        },
                        {
                            title: "I Don't Know What I Want",
                            content: "Probably the most common request lately. You are not sure your job fulfils you. You are not tired but not happy either. You want a change but not sure where to look. You had a long break and now you may consider something new or you think you lost expertise and not sure an employer will want you? Let's see what fulfils you and how to gain your confidence back."
                        },
                        {
                            title: "Any Other Question - Let's Chat!",
                            content: "Work takes 1/3 of our grown up lives, there are so many things you may want help with. Or maybe you just want to vent about something, get human support and reassurance? Let's chat!"
                        }
                    ]
                },
                {
                    id: "interview-prep",
                    title: "Interview Preparation",
                    description: "Mock interviews, question interpretation, and confidence building.",
                    bullets: ["Mock Interview", "Q&A Strategy", "Confidence Boost"],
                    details: [
                        {
                            title: "Gain Confidence",
                            content: "Meeting new people can be stressful, especially when your new job depends on it. Every interview is full of unknown questions, and you may be not ready for it. It's okay. I'll become your \"random recruiter\" who'll ask you all these questions and explain what I want to hear and how it is better to answer."
                        },
                        {
                            title: "So Many Questions",
                            content: "We'll discuss your experience, your motivation, your soft skills. But what about you? Most definitely you have questions too: let me tell you how to ask them and how to interpret the answers."
                        },
                        {
                            title: "Show Me The Money",
                            content: "Salary Expectations is a Holy Grail of every interview. Recruiters tend to not tell candidates the numbers, candidates don't want to tell their in case they could ask for more. I'll help you ask about the salary cap, and explain how to the interviewer tell about your own expectations."
                        }
                    ]
                },
                {
                    id: "job-search",
                    title: "Job Search",
                    description: "Strategy, sources, application support, and list of options.",
                    bullets: ["Search Strategy", "20+ Job Leads", "Application Support"],
                    details: [
                        {
                            title: "What You Want",
                            content: "I'll investigate your requirements for the new job, and use them when searching for the opportunities. We'll discuss the employers, the industry, the role, leadership, skills, work schedule and everything else you look for."
                        },
                        {
                            title: "Different Sources",
                            content: "I'll utilize as many sources as I can when looking for opportunities, depending on the location and the industry. Not just LinkedIn or Indeed even though most jobs still live there."
                        },
                        {
                            title: "List Of Options",
                            content: "At the end you'll get a spreadsheet with at least 20 live jobs and links to apply. If I find more - I'll add them for free, the goal is to make you happy not to hide some options from you."
                        },
                        {
                            title: "I Will Apply!",
                            content: "Yes, in addition to the above, if you wish - I will apply for most of the jobs myself. Just a sidebar, sometimes it takes up to 20 minutes to apply for a single job on a company's website. Sometimes it's not just \"upload you resume and press Apply\", there may be too many fields to fill in, should you never skip any=)"
                        }
                    ]
                },
                {
                    id: "coaching-recruiters",
                    title: "Coaching Recruiters",
                    description: "Sourcing strategies, process optimization, and team leadership.",
                    bullets: ["Sourcing Tactics", "Process Optimization", "Leadership Skills"],
                    details: [
                        {
                            title: "Recruitment Process",
                            content: "We'll discuss the sourcing strategies and resources, where you look for candidates; I'll review your messaging and communication approach. We'll see on which stage of the recruitment process your candidates drop, and how to retain them. I'll remind you why it is important to maintain your own recruiter's brand and network."
                        },
                        {
                            title: "Partnering With Hiring Managers",
                            content: "Unlike most think, your job starts not after you receive a request. One of the cornerstones is to establish rapport with your hiring managers. You both are professionals with the same goal: fulfil the role with someone who will bring value to the business. Gain trust, discuss the variables, give them feedback and request changes, get their feedback quick, let them vent and help them make final decision."
                        },
                        {
                            title: "Recruitment Tools",
                            content: "Let's see what means or software you use to process candidates, and improve their speed and efficiency. Have you ever reported the hiring results? Let's improve the reporting too: highlight results that managers really need to make their decisions and skip the details that mislead them."
                        },
                        {
                            title: "Leading the Recruitment Team",
                            content: "I have been a Recruitment Leader and People Manager for years. I can share the management approach that makes the team happy and motivates them bring results we all need. How to set goals, manage process and tasks, how to communicate with your peers and how to manage their performance and professional development. As a leader, you will also partner with other managers and I may help establish that connection."
                        }
                    ]
                },
                {
                    id: "hr-process",
                    title: "HR Process Management",
                    description: "Onboarding, performance review, reporting, and process creation.",
                    bullets: ["Onboarding", "Performance Review", "Reporting"],
                    details: [
                        {
                            title: "HR Process Management",
                            content: "There are so many things HRs do: Onboarding, Performance Review and Talent Development, Exit Process, Reporting, Measuring Happiness and more. You are given tasks you don't know how to approach? Or maybe the company has no process and you need to create all of it? Let me help."
                        }
                    ]
                }
            ]
        },
        pricing: {
            title: "Transparent Pricing",
            description: "Find detailed pricing for all services in the dedicated document.",
            cta: "Check Pricing",
            docUrl: "https://docs.google.com/document/d/1a5ooTWCqF0J_4cnvqiKEofFd21G9f5APk-TzVbc9JH0/edit?usp=sharing"
        },
        reviews: {
            title: "Client Reviews",
            subtitle: "Stories from people I've worked with.",
            items: [
                {
                    name: "Tim",
                    role: "PR Manager",
                    content: "I highly recommend Valentina as a career and recruitment advisor. She helps with resumes and mock interviews, giving valuable insights that build confidence.",
                    category: "Career",
                    isHighlight: false
                },
                {
                    name: "Andrey",
                    role: "Senior Software Engineer",
                    content: "Valentina has an incredible talent for transforming resumes into powerful career tools. She strategically rewrites them to highlight strengths, optimize for ATS systems, and align perfectly with industry expectations.",
                    category: "Resume",
                    isHighlight: true
                },
                {
                    name: "Polina",
                    role: "Startup co-founder",
                    content: "Her career advice and LinkedIn profile optimization strategies genuinely work and help professionals stand out among many others.",
                    category: "LinkedIn",
                    isHighlight: false
                },
                {
                    name: "Tetiana",
                    role: "Agile Coach",
                    content: "She is a real professional! Valentina knows exactly how to make a professional profile and CV. My CV has become much better and more understandable.",
                    category: "Resume",
                    isHighlight: false
                },
                {
                    name: "Artem",
                    role: "Software Engineer",
                    content: "Valentina was instrumental in refining my CV, optimizing my LinkedIn profile, and enhancing my job search strategy. Her expert guidance helped me stand out to recruiters.",
                    category: "Job Search",
                    isHighlight: false
                },
                {
                    name: "Albina",
                    role: "Manager",
                    content: "Valentina is the best career consultant. Our communication was very therapeutic. I looked at my experience from different angles and believed in myself!",
                    category: "Career",
                    isHighlight: false
                },
                {
                    name: "Kate",
                    role: "Project Manager",
                    content: "After our meeting, I was inspired, overhauled my resume, made it logical and readable. Softness and delicacy coupled with honesty are definitely your strong qualities.",
                    category: "Resume",
                    isHighlight: false
                },
                {
                    name: "Julia",
                    role: "Product Manager",
                    content: "Valentina is a fantastic recruiter and also a great psychologist. Her support during a difficult period in my career was invaluable. Professional, insightful, and genuinely caring.",
                    category: "Career",
                    isHighlight: true
                }
            ]
        },
        contact: {
            title: "Contact",
            header: "FEEL FREE TO CONTACT ME",
            subHeader: "Follow me on social media",
            emailValue: "valentina.dikanskaia@gmail.com",
            telegramValue: "t.me/vdikanskaya",
            description: "Work takes 1/3 of our grown up lives. Whether you need career help or just want to vent, I'm here.",

            telegram: "Telegram",
            email: "Email Me",
            linkedin: "LinkedIn",
            disclaimer: "Disclaimer: I am not a magician, but I will do my best to help you succeed.",
            soleTrader: "Sole Trader.",
            madeBy: "Site by",
            authorName: "Konstantin Kott",
            authorUrl: "https://www.linkedin.com/in/kkhalyushev/"
        },

        ui: {
            readMore: "Read Details",
            close: "Close"
        }
    },
    ru: {
        hero: {
            title: "Резюме, LinkedIn и Карьерные Консультации",
            description: "Профессиональные услуги рекрутера. Выделитесь на современном рынке труда с помощью индивидуального резюме и оптимизированного профиля LinkedIn.",
            ctaPrimary: "Связаться",
            ctaSecondary: "Узнать цены",
        },
        about: {
            title: "Обо мне",
            description: "Я много лет работаю руководителем в рекрутменте. Моя цель — помочь вам в развитии карьеры, будь то переработка резюме, оптимизация LinkedIn или стратегические карьерные советы.",
            linkedinParams: "Подписаться",
        },
        services: {
            title: "Мои услуги",
            subtitle: "Комплексные решения для вашей карьеры.",
            items: [
                {
                    id: "resume",
                    title: "Резюме (CV)",
                    description: "Индивидуальные шаблоны, переписывание под цели и оптимизация для ATS.",
                    bullets: ["Оптимизация для ATS", "Индивидуальный шаблон", "Ориентация на цель"],
                    details: [
                        {
                            title: "Удобный шаблон",
                            content: "Простой и легко редактируемый шаблон, который не 'поедет' при правках. Такое резюме идеально считывается любой базой кандидатов (ATS)."
                        },
                        {
                            title: "Ориентация на цель",
                            content: "Мы определим ваши цели и подсветим в резюме то, что отвечает потребностям работодателя. Учитывая специфику вашей локации."
                        },
                        {
                            title: "Бесплатные правки",
                            content: "После завершения работы я бесплатно отредактирую ваше резюме, если вы захотите что-то добавить или заменить."
                        }
                    ]
                },
                {
                    id: "linkedin",
                    title: "Профиль LinkedIn",
                    description: "Оптимизация, стратегии видимости и улучшение индекса SSI.",
                    bullets: ["Аудит профиля", "Рост индекса SSI", "Стратегия видимости"],
                    details: [
                        {
                            title: "Что такое LinkedIn",
                            content: "Я объясню, что LinkedIn может дать вам как кандидату и для поиска полезных контактов; вы узнаете, как стать заметнее и доступнее для рекрутеров."
                        },
                        {
                            title: "Это не резюме",
                            content: "Именно так. Профиль LinkedIn — это не резюме, у него свои уникальные фишки. Это профессиональная соцсеть, которая постоянно ведет вас к цели, пока резюме просто лежит в папке."
                        },
                        {
                            title: "Каждый блок важен",
                            content: "Я расскажу, как добавлять и редактировать новые блоки, и как они влияют на эффективность вашего профиля."
                        },
                        {
                            title: "SSI: Social Selling Index",
                            content: "SSI — это то, что делает вас 'живым' в LinkedIn. Он зависит от множества факторов: посты, репосты, реакции, рекомендации, навыки. Всё это имеет свой 'вес' и может значительно улучшить SSI, если знать, как и когда действовать."
                        }
                    ]
                },
                {
                    id: "career-counselling",
                    title: "Карьерное консультирование",
                    description: "Работа с выгоранием, переговоры о зарплате и смена карьеры.",
                    bullets: ["Переговоры о зарплате", "Работа с выгоранием", "Карьерный план"],
                    details: [
                        {
                            title: "Хочу улучшений",
                            content: "Обсудим, чего вы хотите от текущей работы: новую должность, зарплату, обязанности или лидерство. Как попросить об этом, как продать себя и кому. Проверим, действительно ли вы готовы, и если нет — что делать."
                        },
                        {
                            title: "Вы выгорели",
                            content: "Синдром 21 века. Думаете, что выгорели? Я дам примеры экологичного восстановления."
                        },
                        {
                            title: "Не знаю, чего хочу",
                            content: "Самый частый запрос. Работы не радует, но и не утомляет. Давайте найдем то, что вас будет наполнять, и вернем уверенность."
                        },
                        {
                            title: "Любой другой вопрос",
                            content: "Работа занимает 1/3 жизни. Есть много вещей, с которыми нужна помощь. Давайте пообщаемся!"
                        }
                    ]
                },
                {
                    id: "interview-prep",
                    title: "Подготовка к интервью",
                    description: "Пробные интервью (mock), разбор вопросов и уверенность.",
                    bullets: ["Пробное интервью", "Стратегия ответов", "Уверенность"],
                    details: [
                        {
                            title: "Обрести уверенность",
                            content: "Я стану вашим 'случайным рекрутером', задам все вопросы и объясню, что я хочу услышать в ответ."
                        },
                        {
                            title: "Так много вопросов",
                            content: "Мы обсудим опыт, мотивацию, soft skills. Я расскажу, как задавать вопросы и интерпретировать ответы."
                        },
                        {
                            title: "Покажи мне деньги",
                            content: "Зарплатные ожидания. Я помогу узнать 'вилку' и объясню, как грамотно озвучить свои ожидания."
                        }
                    ]
                },
                {
                    id: "job-search",
                    title: "Поиск работы",
                    description: "Стратегия поиска, источники, помощь с откликами и список вакансий.",
                    bullets: ["Стратегия поиска", "20+ Вакансий", "Помощь с откликами"],
                    details: [
                        {
                            title: "Чего вы хотите",
                            content: "Я изучу ваши требования к новой работе и буду использовать их при поиске."
                        },
                        {
                            title: "Разные источники",
                            content: "Я использую максимум источников для поиска, в зависимости от локации и индустрии."
                        },
                        {
                            title: "Список вариантов",
                            content: "В итоге вы получите таблицу с минимум 20 актуальными вакансиями."
                        },
                        {
                            title: "Я откликнусь сама!",
                            content: "Если хотите — я сама откликнусь на большинство вакансий."
                        }
                    ]
                },
                {
                    id: "coaching-recruiters",
                    title: "Коучинг для рекрутеров",
                    description: "Стратегии сорсинга, оптимизация процессов и лидерство.",
                    bullets: ["Тактика сорсинга", "Оптимизация процессов", "Навыки лидерства"],
                    details: [
                        {
                            title: "Процесс рекрутмента",
                            content: "Обсудим стратегии поиска, где искать кандидатов. Проверим ваши письма и стиль общения."
                        },
                        {
                            title: "Работа с менеджерами",
                            content: "Главное — наладить контакт с нанимающим менеджером. Завоюйте доверие."
                        },
                        {
                            title: "Инструменты рекрутмента",
                            content: "Посмотрим, какой софт вы используете. Улучшим отчетность."
                        },
                        {
                            title: "Управление командой",
                            content: "Я поделюсь подходом, который мотивирует команду."
                        }
                    ]
                },
                {
                    id: "hr-process",
                    title: "HR-процессы",
                    description: "Онбординг, Performance Review, отчетность и создание процессов.",
                    bullets: ["Онбординг", "Performance Review", "Отчетность"],
                    details: [
                        {
                            title: "Управление HR-процессами",
                            content: "HR делает так много вещей: Онбординг, Оценка эффективности, Увольнение, Отчетность."
                        }
                    ]
                }
            ]
        },
        pricing: {
            title: "Прозрачные цены",
            description: "Подробный прайс-лист доступен в документе.",
            cta: "Смотреть цены",
            docUrl: "https://docs.google.com/document/d/1a5ooTWCqF0J_4cnvqiKEofFd21G9f5APk-TzVbc9JH0/edit?usp=sharing"
        },
        reviews: {
            title: "Отзывы клиентов",
            subtitle: "Истории людей, с которыми я работала.",
            items: [
                {
                    name: "Tim",
                    role: "PR Manager",
                    content: "Я очень рекомендую Валентину как карьерного консультанта. Она опытный профессионал, очень помогла мне с резюме и дала ценные инсайты на пробном интервью.",
                    category: "Career",
                    isHighlight: false
                },
                {
                    name: "Andrey",
                    role: "Senior Software Engineer",
                    content: "У Валентины невероятный талант превращать резюме в мощный карьерный инструмент. Она стратегически переписывает его, чтобы подчеркнуть сильные стороны и пройти ATS.",
                    category: "Resume",
                    isHighlight: true
                },
                {
                    name: "Polina",
                    role: "Startup co-founder",
                    content: "Её карьерные советы и стратегии для LinkedIn действительно работают и помогают выделиться. Валентина не просто рекрутер, а настоящий эксперт.",
                    category: "LinkedIn",
                    isHighlight: false
                },
                {
                    name: "Tetiana",
                    role: "Agile Coach",
                    content: "Валентина точно знает, как сделать профессиональный профиль и CV. Моё резюме стало намного лучше.",
                    category: "Resume",
                    isHighlight: false
                },
                {
                    name: "Artem",
                    role: "Software Engineer",
                    content: "Валентина сыграла ключевую роль в улучшении моего резюме и стратегии поиска. Её экспертное руководство помогло мне выделиться для рекрутеров.",
                    category: "Job Search",
                    isHighlight: false
                },
                {
                    name: "Albina",
                    role: "Manager",
                    content: "Валентина лучший карьерный консультант. Наше общение было очень терапевтичным. Я поверила в себя!",
                    category: "Career",
                    isHighlight: false
                },
                {
                    name: "Kate",
                    role: "Project Manager",
                    content: "После нашей встречи я вдохновилась, перелопатила всё резюме, сделала его логичным. Мягкость и деликатность — твои сильные качества.",
                    category: "Resume",
                    isHighlight: false
                },
                {
                    name: "Julia",
                    role: "Product Manager",
                    content: "Валентина — фантастический рекрутер и отличный психолог. Её поддержка в трудный период была бесценна.",
                    category: "Career",
                    isHighlight: true
                }
            ]
        },
        contact: {
            title: "Контакты",
            header: "СВЯЖИТЕСЬ СО МНОЙ",
            subHeader: "Подписывайтесь в соцсетях",
            emailValue: "valentina.dikanskaia@gmail.com",
            telegramValue: "t.me/vdikanskaya",
            description: "Работа занимает треть нашей жизни. Нужна помощь с карьерой или просто хотите выговориться? Я здесь.",

            telegram: "Telegram",
            email: "Написать Email",
            linkedin: "LinkedIn",
            disclaimer: "Дисклеймер: Я не волшебник, но я сделаю всё возможное, чтобы помочь вам преуспеть.",
            soleTrader: "ИП / Sole Trader.",
            madeBy: "Сайт от",
            authorName: "Konstantin Kott",
            authorUrl: "https://www.linkedin.com/in/kkhalyushev/"
        },

        ui: {
            readMore: "Подробнее",
            close: "Закрыть"
        }
    }
};
