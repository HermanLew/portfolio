import type { CaseStudy } from "./case-studies";

type CaseStudyOverride = Partial<
  Omit<
    CaseStudy,
    | "slug"
    | "info"
    | "intro"
    | "challengeSolution"
    | "industryContext"
    | "shaping"
    | "engagementLoop"
    | "constraints"
    | "scaling"
    | "designSystem"
    | "impact"
    | "learnings"
  >
> & {
  info?: CaseStudy["info"];
  intro?: Partial<CaseStudy["intro"]>;
  challengeSolution?: Partial<CaseStudy["challengeSolution"]>;
  industryContext?: Partial<CaseStudy["industryContext"]>;
  shaping?: Partial<CaseStudy["shaping"]>;
  engagementLoop?: Partial<CaseStudy["engagementLoop"]>;
  constraints?: Partial<CaseStudy["constraints"]>;
  scaling?: Partial<CaseStudy["scaling"]>;
  designSystem?: Partial<CaseStudy["designSystem"]>;
  impact?: Partial<CaseStudy["impact"]>;
  learnings?: Partial<CaseStudy["learnings"]>;
};

const ruCaseStudyOverrides: Record<string, CaseStudyOverride> = {
  "green-supermarket": {
    title: "Платформа розничных операций",
    eyebrow: "Кейс",
    role: "Product Design Lead",
    summary:
      "Как инициатива по замене сканеров превратилась в масштабируемую операционную платформу для задач, инвентарных процессов, исполнения в магазинах и управленческой видимости на 900+ локациях.",
    info: [
      { label: "клиент", value: "LOTUS'S" },
      { label: "год", value: "2025" },
      { label: "роль", value: "Product Design Lead" },
      { label: "масштаб", value: "900+ магазинов" },
      { label: "платформа", value: "Android + desktop" },
      { label: "фокус", value: "Product Strategy, IA, Design Leadership" },
    ],
    intro: {
      label: "ВВЕДЕНИЕ / РОЛЬ",
      text:
        "Операционная retail-платформа, которая связывает задачи сотрудников, сканирование, инвентарные workflows и менеджерский контроль в одну цельную модель работы.",
      roleItems: [
        { area: "Роль", principle: "Product Design Lead" },
        { area: "Скоуп", principle: "Retail operations platform" },
        { area: "Пользователи", principle: "Сотрудники магазинов, менеджеры, операционные команды" },
      ],
    },
    challengeSolution: {
      challenge:
        "Первичный запрос выглядел как замена выделенных handheld-сканеров. Discovery показало более глубокую операционную проблему: команды магазинов зависели от разрозненных инструментов, несвязанных workflows и ограниченной видимости ежедневной работы.",
      solution:
        "Мы переосмыслили инициативу как платформенную трансформацию. Вместо копирования поведения сканера в телефоне продукт объединил управление задачами, сканирование, инвентарные workflows и операционный контроль в общей мобильной архитектуре.",
    },
    industryContext: {
      label: "БИЗНЕС-ПРОБЛЕМА",
      headline:
        "Проблема была не в железе. Проблема была в том, как организована операционная работа.",
      journey: [
        { label: "Замена сканеров" },
        { label: "Фрагментация workflows" },
        { label: "Потребности ролей" },
        { label: "Архитектура платформы" },
        { label: "Операционная видимость" },
        { label: "Масштабируемая основа" },
      ],
      text:
        "Ежедневное исполнение было разделено между разными инструментами. Сотрудники переключали контекст, чтобы закрывать рутинные задачи, а менеджеры видели отдельные процессы, но не общую операционную картину. По мере добавления новых workflows сложность росла быстрее, чем платформа могла ее поддерживать.",
      visualLabel: "Диаграмма трансформации: от замены сканера к операционной платформе",
    },
    shaping: {
      label: "DISCOVERY INSIGHTS",
      headline: "Discovery изменило продукт: от scanner app к операционной системе.",
      paragraphs: [
        "Мы изучали полные store journeys, а не отдельные экраны: как сотрудники начинают смену, получают задачи, сканируют товары, решают исключения и возвращаются к следующему приоритету.",
        "Четыре вывода сформировали платформу: сканирование было частью более крупных workflows, ролям нужны разные модели работы, сотрудникам важнее направление действий, чем персональная аналитика, а единые паттерны масштабируются лучше локально оптимизированных экранов.",
      ],
      artifacts: [
        {
          title: "Сканирование в контексте",
          description: "Встроили сканирование в task flows, а не вынесли его в отдельный полноэкранный режим.",
        },
        {
          title: "Role-based модели",
          description: "Разделили execution queues для сотрудников и oversight dashboards для менеджеров.",
        },
        {
          title: "Action-oriented home",
          description: "Поставили текущую работу и store-level KPI выше ретроспективной персональной статистики.",
        },
        {
          title: "Переиспользуемые workflows",
          description: "Стандартизировали повторяющиеся паттерны, сохранив гибкость бизнес-правил.",
        },
      ],
      feature: {
        title: "Продуктовая стратегия сместилась от набора tools к operating model.",
        description:
          "Целью стали одно устройство, одно приложение и одна операционная платформа: система, которая может принимать новые workflows без роста когнитивной нагрузки для команд магазинов.",
      },
    },
    engagementLoop: {
      label: "ОПЕРАЦИОННАЯ МОДЕЛЬ",
      headline: "Платформа была организована вокруг того, как работа разворачивается в течение смены.",
      loop: [
        { label: "Начать смену" },
        { label: "Увидеть приоритеты" },
        { label: "Выполнить задачу" },
        { label: "Использовать tools" },
        { label: "Обновить статус" },
        { label: "Улучшить performance" },
      ],
      text:
        "Мы разделили срочную системную работу и операции, которые сотрудник запускает сам. Tasks стали основной точкой входа, а сканирование, inventory checks, price verification и logistics tools остались доступными внутри flow.",
      slides: [
        {
          title: "North Star на главном экране",
          text:
            "Customer Happiness и Daily Revenue стали общими операционными индикаторами, помогая сотрудникам связывать ежедневное исполнение с бизнес-результатом.",
          visualLabel: "Экран performance и приоритетов магазина",
          image: "/images/projects/green-supermarket/5.png",
        },
        {
          title: "Задачи раньше навигации",
          text:
            "Сотрудники попадали в приоритизированную очередь, а не в общий menu, снижая усилие на понимание того, что важно прямо сейчас.",
          visualLabel: "Приоритизированная очередь исполнения",
          image: "/images/projects/green-supermarket/6.png",
        },
        {
          title: "Операционные tools внутри workflows",
          text:
            "Сканирование, inventory checks, печать этикеток и price verification стали шагами работы, а не отдельными направлениями.",
          visualLabel: "Встроенное сканирование и inventory workflow",
          image: "/images/projects/green-supermarket/7.png",
        },
        {
          title: "Manager oversight by exception",
          text:
            "Менеджеры получили dashboard, сфокусированный на распределении нагрузки, узких местах и нерешенных операционных проблемах вместо шума raw activity.",
          visualLabel: "Операционный dashboard менеджера",
          image: "/images/projects/green-supermarket/8.png",
        },
      ],
    },
    principles: [
      { area: "Home", principle: "Показывать то, что требует внимания сейчас" },
      { area: "Scanning", principle: "Сохранять операционный контекст видимым" },
      { area: "Roles", principle: "Подстраивать модель под ответственность" },
      { area: "Workflows", principle: "Стандартизировать паттерны до масштабирования" },
    ],
    constraints: {
      label: "ОГРАНИЧЕНИЯ И ЛИДЕРСТВО",
      headline: "Продукт должен был улучшить операции, не ломая текущую работу.",
      paragraphs: [
        "Как Product Design Lead, я формировал продуктовую архитектуру, фасилитировал discovery, связывал продуктовые решения с бизнес-целями и помогал переводить дизайн-дискуссии от вкусовых предпочтений к операционной эффективности.",
        "Самая сильная дизайн-работа происходила внутри ограничений: legacy-процессы нельзя было полностью пересобрать, бизнес-KPI должны были оставаться видимыми, а AI-assisted automation нужно было отложить до момента, когда организация будет готова ее поддержать.",
      ],
      table: [
        { constraint: "Legacy hardware mindset", response: "Переосмыслили работу вокруг платформенной стратегии" },
        { constraint: "Загруженный shop floor", response: "Приоритизировали короткие flows и ясные task states" },
        { constraint: "Разные роли", response: "Спроектировали разные entry models для сотрудников и менеджеров" },
        { constraint: "Существующие процессы", response: "Поддержали текущие операции, оставив пространство для упрощения позже" },
        { constraint: "Будущая автоматизация", response: "Подготовили архитектуру для AI-assisted workflows без преждевременных AI-фич" },
      ],
    },
    scaling: {
      label: "АРХИТЕКТУРА ПЛАТФОРМЫ",
      headline: "Масштабируемая структура для операционной работы.",
      text:
        "Вместо организации продукта вокруг изолированных фич мы определили операционные домены, которые дали пользователям и продуктовым командам общую mental model. Это упростило обучение, поддержку и развитие платформы.",
      slides: [
        {
          title: "Core domains",
          text: "Dashboard, Tasks, Operations, Inventory, Scanning, Performance, Notifications и Profile дали каждому workflow понятное место в системе.",
          visualLabel: "Архитектура платформы из восьми доменов",
          image: "/images/projects/green-supermarket/10.png",
        },
        {
          title: "Переиспользуемые interaction patterns",
          text: "Повторяющиеся паттерны исполнения были стандартизированы, чтобы новые операционные workflows добавлялись без переобучения сотрудников на каждый процесс.",
          visualLabel: "Переиспользуемый workflow pattern",
          image: "/images/projects/green-supermarket/11.png",
        },
        {
          title: "Основа дизайн-системы",
          text: "Общие компоненты и interaction rules для Android и desktop снизили неоднозначность реализации и поддержали единый операционный опыт.",
          visualLabel: "Дизайн-система retail operations",
          image: "/images/projects/green-supermarket/12.png",
        },
        {
          title: "Готовность к автоматизации",
          text: "Архитектура была подготовлена к будущей process automation и AI-assisted operations без преждевременного добавления разрозненных AI-функций.",
          visualLabel: "Готовность к автоматизации",
          image: "/images/projects/green-supermarket/13.png",
        },
      ],
    },
    impact: {
      label: "РЕЗУЛЬТАТЫ",
      bullets: [
        "Объединили scanner replacement, task management, inventory workflows и операционные процессы в одно платформенное направление.",
        "Заложили масштабируемую продуктовую архитектуру для rollout на 900+ магазинов.",
        "Создали общий дизайн-язык и delivery process, который можно было передать команде клиента.",
        "Определили основу для будущей process automation и AI-assisted retail operations.",
      ],
      metrics: [
        { value: "900+", label: "магазинов в scope rollout" },
        { value: "120+", label: "production-ready screens" },
        { value: "8", label: "операционных доменов" },
        { value: "1", label: "единая platform foundation" },
      ],
    },
    learnings: {
      headline: "Ключевые выводы",
      bullets: [
        "Продуктовая архитектура влияет дольше, чем отдельные интерфейсные решения.",
        "Discovery особенно ценно, когда оно меняет исходный brief и продуктовую стратегию.",
        "Операционные продукты должны следовать тому, как выполняется работа, а не тому, как устроены внутренние системы.",
        "Самые масштабируемые решения балансируют потребности пользователей, бизнес-приоритеты и организационную готовность.",
      ],
    },
  },
};

function mergeStudy(study: CaseStudy, override: CaseStudyOverride): CaseStudy {
  const shaping = { ...study.shaping, ...override.shaping };

  return {
    ...study,
    ...override,
    intro: { ...study.intro, ...override.intro },
    challengeSolution: { ...study.challengeSolution, ...override.challengeSolution },
    industryContext: { ...study.industryContext, ...override.industryContext },
    shaping: {
      ...shaping,
      feature: {
        ...study.shaping.feature,
        ...override.shaping?.feature,
      },
    },
    engagementLoop: { ...study.engagementLoop, ...override.engagementLoop },
    constraints: { ...study.constraints, ...override.constraints },
    scaling: { ...study.scaling, ...override.scaling },
    designSystem: { ...study.designSystem, ...override.designSystem },
    impact: { ...study.impact, ...override.impact },
    learnings: { ...study.learnings, ...override.learnings },
  };
}

export function localizeCaseStudy(study: CaseStudy, locale: string): CaseStudy {
  if (locale !== "ru") return study;

  const override = ruCaseStudyOverrides[study.slug];
  return override ? mergeStudy(study, override) : study;
}
