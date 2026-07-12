export type CaseJourneyStep = {
  label: string;
};

export type CaseArtifact = {
  title: string;
  description: string;
  image?: string;
};

export type CaseSlide = {
  title: string;
  text: string;
  visualLabel: string;
  image?: string;
};

export type CasePrinciple = {
  area: string;
  principle: string;
};

export type CaseConstraint = {
  constraint: string;
  response: string;
};

export type CaseMetric = {
  value: string;
  label: string;
};

export type CaseInfoItem = {
  label: string;
  value: string;
  href?: string;
};

export type CaseStudy = {
  slug: string;
  sectionOrder?: CaseSectionKey[];
  title: string;
  eyebrow: string;
  year: string;
  role: string;
  tags: string[];
  summary: string;
  cover: string;
  info: CaseInfoItem[];
  intro: {
    label: string;
    text: string;
    roleItems: CasePrinciple[];
  };
  challengeSolution: {
    challenge: string;
    solution: string;
    image?: string;
  };
  industryContext: {
    label: string;
    headline: string;
    journey: CaseJourneyStep[];
    text: string;
    visualLabel: string;
    image?: string;
  };
  shaping: {
    label: string;
    headline: string;
    paragraphs: string[];
    artifacts: CaseArtifact[];
    feature: CaseArtifact;
  };
  engagementLoop: {
    label: string;
    headline: string;
    loop: CaseJourneyStep[];
    text: string;
    display: "snap" | "visual";
    slides: CaseSlide[];
    image?: string;
    visualLabel?: string;
  };
  principles: CasePrinciple[];
  constraints: {
    label: string;
    headline: string;
    paragraphs: string[];
    table: CaseConstraint[];
    image?: string;
  };
  scaling: {
    label: string;
    headline: string;
    text: string;
    display: "horizontal";
    slides: CaseSlide[];
    image?: string;
    visualLabel?: string;
  };
  designSystem: {
    label: string;
    headline: string;
    text: string;
    visuals: string[];
    enabled: boolean;
  };
  impact: {
    label: string;
    bullets: string[];
    metrics: CaseMetric[];
  };
  learnings: {
    headline: string;
    bullets: string[];
  };
};

export type CaseSectionKey =
  | "challengeSolution"
  | "industryContext"
  | "shaping"
  | "engagementLoop"
  | "constraints"
  | "scaling"
  | "impact"
  | "learnings";

export const caseStudies: CaseStudy[] = [
  {
    slug: "bi-club",
    title: "BI Club - Loyalty app",
    eyebrow: "Case Study",
    year: "2025",
    role: "Lead Product Designer",
    tags: ["LOYALTY", "MOBILE", "UX/UI"],
    summary:
      "Joining the project as a Lead Product Designer, I redesigned the loyalty experience for a real estate developer, shaped the product logic across rewards, partners, and resident services, and created a scalable app structure to support long-term customer engagement after property purchase.",
    cover: "/images/projects/bi-club/cover.png",
    info: [
      { label: "url", value: "BI Club" },
      { label: "client", value: "Bi Group" },
      { label: "year", value: "2025" },
      { label: "role", value: "Product Design Lead" },
      { label: "timeframe", value: "3 Week" },
    ],
    intro: {
      label: "INTRO / ROLE",
      text:
        "This page is structured as a reusable case study template. Each section is independent, content-driven and ready to support different product stories without changing the visual hierarchy.",
      roleItems: [
        { area: "Role", principle: "Lead Product Designer" },
        { area: "Focus", principle: "Product logic, UX architecture, systems" },
        { area: "Output", principle: "Flows, prototypes, components, product decisions" },
      ],
    },
    challengeSolution: {
      challenge:
        "Acquiring new customers in real estate is increasingly expensive, while relationships with homeowners often end shortly after the property purchase. The existing loyalty program offered discounts for repeat apartment purchases, but provided little value in everyday life, resulting in low engagement, infrequent returns and limited opportunities to build long-term customer loyalty.",
      solution:
        "Rather than creating another coupon app, we redesigned loyalty as a resident ecosystem. By connecting rewards, partner offers and everyday services into a single mobile experience, we created a scalable platform that keeps customers engaged long after the purchase and strengthens their relationship with the developer.",
      image: "/images/projects/bi-club/case/challenge-solution.png",
    },
    industryContext: {
      label: "INDUSTRY CONTEXT",
      headline:
        "Traditional loyalty starts with the next purchase. We focused on the entire ownership journey instead.",
      journey: [
        { label: "Acquire customer" },
        { label: "Purchase property" },
        { label: "Move in" },
        { label: "Daily living" },
        { label: "Partner services" },
        { label: "Repeat purchase" },
      ],
      text:
        "For developers, the apartment sale is not the end of the customer relationship - it is the beginning of a longer ownership journey. BI Club was designed to create value between rare property transactions.",
      visualLabel: "Ownership journey diagram",
      image: "/images/projects/bi-club/case/industry-context.png",
    },
    shaping: {
      label: "PRODUCT DISCOVERY",
      headline: "Shaping the Product",
      paragraphs: [
        "Building BI Club meant defining not only the interface, but the product itself. While the client's marketing team conducted customer research, our role was to translate those insights into a product strategy and validate which concepts deserved to become part of the experience.",
        "Working closely with the Product Manager, I explored multiple product directions through user flows and interactive prototypes before committing to development. Every major decision was reviewed with stakeholders, allowing us to validate assumptions, align on priorities and refine the product vision.",
        "One of the biggest changes was abandoning a complex multi-level gamification system in favor of a simpler loyalty model based on repeat property purchases. By removing unnecessary mechanics and focusing on everyday value, we created a product that was easier to understand, more scalable and better aligned with both user expectations and business goals.",
      ],
      artifacts: [
        { title: "Research insights", description: "Customer needs and product opportunities." },
        { title: "User flows", description: "Core paths before UI commitment." },
        { title: "Interactive prototypes", description: "Concept validation and stakeholder alignment." },
        { title: "Stakeholder reviews", description: "Decision-making cadence and product priorities." },
      ],
      feature: {
        title: "Loyalty without unnecessary complexity",
        description:
          "Instead of introducing multiple reward tiers and gamified progression, we focused on a transparent loyalty model based on repeat property purchases. The simplified mechanics reduced cognitive load while preserving long-term motivation.",
        image: "/images/projects/bi-club/engagement/1-home.png",
      },
    },
    engagementLoop: {
      label: "ENGAGEMENT MODEL",
      headline: "The product was designed around a behavioral loop.",
      loop: [
        { label: "Home" },
        { label: "Tasks" },
        { label: "Survey" },
        { label: "Reward" },
        { label: "Partner Offers" },
        { label: "Return" },
      ],
      text:
        "The product was designed around a simple behavioral loop: encourage users to return regularly, complete meaningful activities and immediately realize the value of earned rewards.",
      display: "snap",
      slides: [
        {
          title: "Home as the entry point",
          text:
            "The home screen surfaced the next relevant action instead of acting as a dashboard. Users could immediately see available tasks, rewards and partner offers, reducing the time to first interaction.",
          visualLabel: "Home screen mockup",
          image: "/images/projects/bi-club/engagement/1-home.png",
        },
        {
          title: "Guiding users toward engagement",
          text:
            "Tasks became the primary engagement mechanic. Their structure prioritized clarity, making it easy to understand the required action, expected reward and completion status.",
          visualLabel: "Task list screen",
          image: "/images/projects/bi-club/engagement/2-task.png",
        },
        {
          title: "Frictionless survey completion",
          text:
            "Surveys were designed to minimize cognitive load through short flows and clear progress indicators, increasing completion without adding unnecessary interaction.",
          visualLabel: "Survey screen",
          image: "/images/projects/bi-club/engagement/3-survey.png",
        },
        {
          title: "Immediate reward",
          text:
            "Rewards were delivered immediately after task completion, creating a direct connection between effort and outcome while reinforcing the habit loop.",
          visualLabel: "Reward screen",
          image: "/images/projects/bi-club/engagement/4-reward.png",
        },
        {
          title: "Turning rewards into value",
          text:
            "Instead of treating points as an abstract balance, the product immediately directed users toward relevant partner offers, helping them convert rewards into tangible everyday value.",
          visualLabel: "Partner offers screen",
          image: "/images/projects/bi-club/engagement/5-partners.png",
        },
      ],
    },
    principles: [
      { area: "Home", principle: "Reduce time to first action" },
      { area: "Tasks", principle: "Make the next action obvious" },
      { area: "Survey", principle: "Minimize completion friction" },
      { area: "Reward", principle: "Reinforce desired behavior immediately" },
      { area: "Partners", principle: "Convert virtual rewards into real value" },
    ],
    constraints: {
      label: "DESIGNING WITHIN CONSTRAINTS",
      headline: "New experience, existing ecosystem.",
      paragraphs: [
        "Creating a new product from scratch wasn't an option. BI Club had to fit into the existing BI ecosystem, preserving established business logic while delivering a significantly more modern user experience.",
        "One of the main challenges was working within the client's existing design system. Rather than replacing it, we evolved the visual language through carefully selected improvements, making the product feel lighter and more contemporary while remaining consistent with the rest of the ecosystem.",
        "The business also relied on an existing loyalty model based on repeat property purchases. Instead of redesigning the mechanics entirely, we preserved the original progression system and built new engagement layers around it, allowing everyday interactions to complement-not replace-the core loyalty program.",
        "From a technical perspective, the application was embedded inside the existing BI super app. This required extending shared navigation and container components, closely collaborating with backend engineers and defining technical requirements for platform improvements throughout the project.",
      ],
      table: [
        { constraint: "Existing Design System", response: "Evolved instead of replaced" },
        { constraint: "Legacy loyalty model", response: "Extended instead of redesigned" },
        { constraint: "Super App container", response: "Adapted navigation architecture" },
        { constraint: "Backend dependencies", response: "Defined product and technical requirements" },
        { constraint: "Multiple stakeholders", response: "Weekly reviews and alignment" },
      ],
      image: "/images/projects/bi-club/case/constraints.png",
    },
    scaling: {
      label: "SCALING THE PRODUCT",
      headline: "From core loop to engagement platform.",
      text:
        "Once the core loyalty experience was established, the product evolved with additional engagement mechanics designed to increase return frequency and long-term retention. Instead of introducing isolated features, every new mechanic extended the same behavioral loop and reinforced everyday interaction with the product.",
      display: "horizontal",
      slides: [
        {
          title: "Daily Engagement",
          text:
            "A daily spin mechanic introduced a recurring entry point on the home screen. Users received one free attempt each day, with additional spins available through the in-app currency, encouraging regular visits without interrupting the core experience.",
          visualLabel: "Daily spin mechanic",
          image: "/images/projects/bi-club/scaling/wheel.png",
        },
        {
          title: "Campaign Participation",
          text:
            "Seasonal prize campaigns were integrated into the existing reward system, giving users another meaningful way to participate while increasing engagement during promotional periods.",
          visualLabel: "Campaign module",
          image: "/images/projects/bi-club/scaling/draw.png",
        },
        {
          title: "Referral Growth",
          text:
            "The referral program extended acquisition beyond paid channels by rewarding existing residents for inviting new users, turning loyal customers into advocates while keeping the experience consistent with the overall loyalty ecosystem.",
          visualLabel: "Referral flow",
          image: "/images/projects/bi-club/scaling/refer.png",
        },
      ],
    },
    designSystem: {
      label: "DESIGN SYSTEM",
      headline: "Built to scale with new mechanics, partners and campaigns.",
      text:
        "The interface was designed as a modular system. Reusable cards, offer templates, task states, reward components and navigation patterns allowed the team to add new mechanics without redesigning the product from scratch.",
      visuals: [
        "Component grid",
        "Cards",
        "Task states",
        "Offer cards",
        "Reward cards",
        "Navigation / container patterns",
      ],
      enabled: false,
    },
    impact: {
      label: "IMPACT",
      bullets: [
        "Converted the loyalty experience into an active post-purchase engagement channel",
        "Connected loyalty mechanics with manager meetings, app adoption and resident activity",
        "Created a scalable model for future campaigns, referrals and partner services",
      ],
      metrics: [
        { value: "68K+", label: "active loyalty participants" },
        { value: "58%", label: "conversion to active participant" },
        { value: "3.3K+", label: "new manager meeting requests" },
        { value: "15K+", label: "Big App downloads" },
      ],
    },
    learnings: {
      headline: "What I learned",
      bullets: [
        "The strongest loyalty mechanics were not the most complex ones. The product worked better when rewards, tasks and services were tied to everyday resident value.",
        "A reusable engagement loop gave the team a clearer way to scale new mechanics without turning the product into a collection of disconnected features.",
        "The project required constant alignment between business, marketing, product, design and engineering. Weekly reviews helped protect decision quality and keep stakeholders moving in the same direction.",
        "Working inside an existing ecosystem was less about replacing legacy logic and more about extending it carefully, so the new experience could feel modern without breaking business continuity.",
        "For me, the key takeaway was that senior product design impact comes from shaping the system around the interface: product logic, team alignment, implementation constraints and long-term scalability.",
      ],
    },
  },
  {
    slug: "uchi-ru",
    sectionOrder: [
      "challengeSolution",
      "shaping",
      "scaling",
      "engagementLoop",
      "constraints",
      "scaling",
      "impact",
      "learnings",
    ],
    title: "UCHI.RU - Engagement Ecosystem",
    eyebrow: "Case Study",
    year: "2020",
    role: "Product Designer",
    tags: ["EDTECH", "ENGAGE", "GAMIFI"],
    summary:
      "Joining Uchi.ru as a Product Designer, I worked on engagement systems that helped one of the largest EdTech platforms compete not only with other educational products, but with games for children's daily attention. Instead of shipping isolated gamification features, we built a connected engagement ecosystem that encouraged children to return every day while keeping learning at the center.",
    cover: "/images/projects/uchi/case/core.png",
    info: [
      { label: "client", value: "UCHI.RU" },
      { label: "year", value: "2020" },
      { label: "role", value: "Product Designer" },
      { label: "focus", value: "Gamification, LiveOps, UX, Growth" },
      { label: "audience", value: "Students 6-10, parents, teachers" },
    ],
    intro: {
      label: "INTRO / ROLE",
      text:
        "Engagement systems for a large EdTech product, designed to support retention, learning motivation and subscription growth.",
      roleItems: [
        { area: "Client", principle: "UCHI.RU" },
        { area: "Focus", principle: "Gamification, LiveOps, UX, Growth" },
        { area: "Audience", principle: "Students 6-10, parents, teachers" },
      ],
    },
    challengeSolution: {
      challenge:
        "Traditional educational products struggle to compete for children's daily attention. Lessons alone rarely create long-term habits when users spend most of their free time in games such as Roblox, Minecraft and Brawl Stars.",
      solution:
        "Rather than adding disconnected features, we designed an engagement ecosystem where progression, seasonal events, leaderboards, cosmetics and rewards reinforced each other while keeping educational outcomes as the primary goal.",
      image: "/images/projects/uchi/case/challenge-alt.png",
    },
    industryContext: {
      label: "COMPETITIVE ENVIRONMENT",
      headline:
        "The real competitor was not another EdTech platform - it was children's entertainment.",
      journey: [],
      text:
        "The objective was to create reasons to return between lessons without turning the product into a game.",
      visualLabel: "Competitive environment visual placeholder",
    },
    shaping: {
      label: "PRODUCT STRATEGY",
      headline: "Product Strategy",
      paragraphs: [
        "The work extended beyond UI design. Together with product managers we explored engagement loops, monetization opportunities, retention mechanics and LiveOps systems.",
        "Every feature was evaluated as part of a larger behavioral system rather than an isolated release.",
      ],
      artifacts: [],
      feature: {
        title: "Engagement systems, not isolated releases.",
        description:
          "The product strategy connected progression, rewards, seasonal activity and monetization into one repeatable system, so each new mechanic could reinforce the same engagement behavior.",
        image: "/images/projects/uchi/case/product-strategy.png",
      },
    },
    engagementLoop: {
      label: "BEHAVIOR LOOP",
      headline: "Every mechanic reinforced the same behavioral loop.",
      loop: [
        { label: "Daily learning" },
        { label: "Earn currency" },
        { label: "Unlock cosmetics" },
        { label: "Participate in seasonal events" },
        { label: "Improve ranking" },
        { label: "Return tomorrow" },
      ],
      text:
        "Daily learning -> earn currency -> unlock cosmetics -> participate in seasonal events -> improve ranking -> return tomorrow. The system was designed so mechanics supported each other instead of competing for attention.",
      display: "visual",
      slides: [],
      image: "/images/projects/uchi/case/loop.png",
      visualLabel: "Uchi.ru behavioral engagement loop",
    },
    principles: [],
    constraints: {
      label: "DESIGN CONSTRAINTS",
      headline: "Playful mechanics inside an educational context.",
      paragraphs: [
        "The product had to feel engaging for children while staying understandable for young students, acceptable for parents and consistent with the existing learning platform. It also had to account for teachers, who act as administrators in the learning process, and parents, who supervise the child's experience and renew subscriptions. The service worked as a connected triangle: teachers recommend the product, children learn and return, and parents decide whether the value is strong enough to keep paying.",
      ],
      table: [
        {
          constraint: "Children aged 6-10",
          response: "Simple, playful interactions with low cognitive load",
        },
        {
          constraint: "Existing platform",
          response: "Extended design system instead of replacing it",
        },
        {
          constraint: "Educational context",
          response: "Gamification supported learning rather than distracting from it",
        },
        {
          constraint: "LiveOps cadence",
          response: "Reusable event framework and scalable UI patterns",
        },
        {
          constraint: "Business goals",
          response: "Balanced engagement, retention and subscription growth",
        },
      ],
      image: "/images/projects/uchi/case/design-constraints.png",
    },
    scaling: {
      label: "ENGAGEMENT ECOSYSTEM",
      headline: "From learning platform to engagement ecosystem.",
      text:
        "Instead of shipping isolated gamification features, the product evolved into a connected system of recurring engagement mechanics.",
      display: "horizontal",
      slides: [
        {
          title: "Marathon",
          text:
            "Seasonal competitions with refreshed visual identity, leaderboards and homepage promotion created recurring participation and increased subscription revenue.",
          visualLabel: "Marathon placeholder",
          image: "/images/projects/uchi/case/marathon.png",
        },
        {
          title: "Student Room",
          text:
            "A customizable room gave children long-term progression through collectible cosmetics purchased with earned in-product currency, increasing repeat visits.",
          visualLabel: "Student Room placeholder",
          image: "/images/projects/uchi/case/room.png",
        },
        {
          title: "Quiz Experience",
          text:
            "A previously underperforming acquisition game was redesigned with competition, scarcity and stronger progression to improve premium conversion.",
          visualLabel: "Quiz Experience placeholder",
          image: "/images/projects/uchi/case/quiz.png",
        },
      ],
    },
    designSystem: {
      label: "DESIGN SYSTEM",
      headline: "",
      text: "",
      visuals: [],
      enabled: false,
    },
    impact: {
      label: "OUTCOMES",
      bullets: [
        "ARPU increased through Marathon events.",
        "Student Room increased monthly active usage.",
        "Improved premium conversion through redesigned quiz experience.",
        "Higher participation in seasonal events.",
        "Scalable engagement framework for future LiveOps releases.",
      ],
      metrics: [
        { value: "+16%", label: "ARPU through Marathon events" },
        { value: "+4%", label: "monthly active usage from Student Room" },
        { value: "Premium", label: "conversion focus through quiz redesign" },
      ],
    },
    learnings: {
      headline: "Key Learnings",
      bullets: [
        "Children return because they anticipate progression, not only educational content.",
        "Connected systems outperform isolated gamification features.",
        "Cosmetic rewards are effective when earned through meaningful activity.",
        "LiveOps extends product lifespan without redesigning the core experience.",
        "Behavior design should reinforce learning, never replace it.",
      ],
    },
  },
  {
    slug: "green-supermarket",
    sectionOrder: [
      "challengeSolution",
      "industryContext",
      "shaping",
      "engagementLoop",
      "constraints",
      "scaling",
      "impact",
      "learnings",
    ],
    title: "Retail Operations Platform",
    eyebrow: "Case Study",
    year: "2025",
    role: "Product Design Lead",
    tags: ["RETAIL OPS", "MOBILE", "SYSTEMS"],
    summary:
      "Turning a scanner replacement initiative into a scalable operating platform for store execution, inventory workflows, task management, and manager visibility across 900+ retail locations.",
    cover: "/images/projects/green-supermarket/1.png",
    info: [
      { label: "client", value: "LOTUS'S" },
      { label: "year", value: "2025" },
      { label: "role", value: "Product Design Lead" },
      { label: "scale", value: "900+ stores" },
      { label: "platform", value: "Android + desktop" },
      { label: "focus", value: "Product Strategy, IA, Design Leadership" },
    ],
    intro: {
      label: "INTRO / ROLE",
      text:
        "A retail operations platform designed to connect employee tasks, scanning, inventory workflows, and manager oversight in one coherent operating model.",
      roleItems: [
        { area: "Role", principle: "Product Design Lead" },
        { area: "Scope", principle: "Retail operations platform" },
        { area: "Users", principle: "Store employees, managers, operations teams" },
      ],
    },
    challengeSolution: {
      challenge:
        "The visible request was to replace dedicated handheld scanners. Discovery revealed a deeper operational problem: store teams depended on fragmented tools, disconnected workflows, and limited visibility to complete everyday work.",
      solution:
        "We reframed the initiative as a platform transformation. Instead of recreating scanner behavior on a phone, the product unified task management, scanning, inventory workflows, and operational oversight within a shared mobile architecture.",
      image: "/images/projects/green-supermarket/2.png",
    },
    industryContext: {
      label: "BUSINESS PROBLEM",
      headline:
        "The challenge was not hardware. It was the way operational work was organized.",
      journey: [
        { label: "Scanner replacement" },
        { label: "Workflow fragmentation" },
        { label: "Role-specific needs" },
        { label: "Platform architecture" },
        { label: "Operational visibility" },
        { label: "Scalable foundation" },
      ],
      text:
        "Daily execution was split across separate tools. Employees switched context to finish routine tasks, while managers could see individual processes but not the full operational picture. As new workflows were added, complexity grew faster than the platform could support.",
      visualLabel: "Transformation diagram: scanner replacement to operational platform",
      image: "/images/projects/green-supermarket/3.png",
    },
    shaping: {
      label: "DISCOVERY INSIGHTS",
      headline: "Discovery changed the product from a scanner app into an operating system.",
      paragraphs: [
        "We studied complete store journeys rather than isolated interface moments: how employees start a shift, receive tasks, scan products, resolve exceptions, and return to the next priority.",
        "Four insights shaped the platform: scanning was part of larger workflows, roles needed different operating models, employees needed direction more than personal analytics, and consistent patterns would scale better than locally optimized screens.",
      ],
      artifacts: [
        {
          title: "Scanning in context",
          description: "Embedded scanning into task flows instead of treating it as a full-screen mode.",
        },
        {
          title: "Role-based models",
          description: "Separated associate execution queues from manager oversight dashboards.",
        },
        {
          title: "Action-oriented home",
          description: "Prioritized current work and store-level KPIs over retrospective personal stats.",
        },
        {
          title: "Reusable workflows",
          description: "Standardized recurring patterns while keeping business rules flexible.",
        },
      ],
      feature: {
        title: "The product strategy shifted from tools to operating model.",
        description:
          "The goal became one device, one application, and one operational platform: a system that could absorb new workflows without increasing cognitive load for store teams.",
        image: "/images/projects/green-supermarket/4.png",
      },
    },
    engagementLoop: {
      label: "OPERATIONAL MODEL",
      headline: "The platform was organized around how work unfolds during a shift.",
      loop: [
        { label: "Start shift" },
        { label: "See priorities" },
        { label: "Execute task" },
        { label: "Use operational tools" },
        { label: "Update store status" },
        { label: "Improve performance" },
      ],
      text:
        "We separated urgent system-initiated work from employee-initiated operations. Tasks became the primary entry point, while scanning, inventory checks, price verification, and logistics tools stayed available inside the flow.",
      display: "snap",
      slides: [
        {
          title: "North Star on the home screen",
          text:
            "Customer Happiness and Daily Revenue became shared operational indicators, helping employees connect daily execution with business performance.",
          visualLabel: "Store performance and priority dashboard placeholder",
          image: "/images/projects/green-supermarket/5.png",
        },
        {
          title: "Tasks before navigation",
          text:
            "Associates entered a prioritized queue instead of a generic menu, reducing the effort needed to understand what mattered now.",
          visualLabel: "Prioritized execution queue placeholder",
          image: "/images/projects/green-supermarket/6.png",
        },
        {
          title: "Operational tools inside workflows",
          text:
            "Scanning, inventory checks, label printing, and price verification became steps inside work rather than separate destinations.",
          visualLabel: "Embedded scanning and inventory workflow placeholder",
          image: "/images/projects/green-supermarket/7.png",
        },
        {
          title: "Manager oversight by exception",
          text:
            "Managers received a dashboard focused on workload distribution, bottlenecks, and unresolved operational issues instead of raw activity noise.",
          visualLabel: "Manager operational dashboard placeholder",
          image: "/images/projects/green-supermarket/8.png",
        },
      ],
    },
    principles: [
      { area: "Home", principle: "Show what requires attention now" },
      { area: "Scanning", principle: "Keep operational context visible" },
      { area: "Roles", principle: "Match the model to responsibility" },
      { area: "Workflows", principle: "Standardize patterns before scaling" },
    ],
    constraints: {
      label: "CONSTRAINTS & LEADERSHIP",
      headline: "The product had to improve operations without disrupting them.",
      paragraphs: [
        "As Product Design Lead, I shaped the product architecture, facilitated discovery, aligned product decisions with business goals, and helped move design discussions from interface preferences toward operational efficiency.",
        "The strongest design work happened inside constraints: legacy processes could not all be redesigned, business KPIs had to stay visible, and AI-assisted automation had to wait until the organization was ready to support it.",
      ],
      table: [
        { constraint: "Legacy hardware mindset", response: "Reframed the work around platform strategy" },
        { constraint: "Busy shop floor", response: "Prioritized short flows and clear task states" },
        { constraint: "Role differences", response: "Designed separate entry models for associates and managers" },
        { constraint: "Existing processes", response: "Supported current operations while leaving room to simplify later" },
        { constraint: "Future automation", response: "Prepared the architecture for AI-assisted workflows without forcing premature features" },
      ],
      image: "/images/projects/green-supermarket/9.png",
    },
    scaling: {
      label: "PLATFORM ARCHITECTURE",
      headline: "A scalable structure for operational work.",
      text:
        "Instead of organizing the product around isolated features, we defined operational domains that gave users and product teams a shared mental model. This made the platform easier to learn, maintain, and extend.",
      display: "horizontal",
      slides: [
        {
          title: "Core domains",
          text: "Dashboard, Tasks, Operations, Inventory, Scanning, Performance, Notifications, and Profile gave every workflow a clear place in the system.",
          visualLabel: "Eight-domain platform architecture placeholder",
          image: "/images/projects/green-supermarket/10.png",
        },
        {
          title: "Reusable interaction patterns",
          text: "Recurring execution patterns were standardized so new operational workflows could be added without retraining employees on every process.",
          visualLabel: "Reusable workflow pattern placeholder",
          image: "/images/projects/green-supermarket/11.png",
        },
        {
          title: "Design system foundations",
          text: "Shared components and interaction rules across Android and desktop reduced implementation ambiguity and supported a consistent operational experience.",
          visualLabel: "Retail operations design system placeholder",
          image: "/images/projects/green-supermarket/12.png",
        },
        {
          title: "Automation readiness",
          text: "The architecture was prepared for future process automation and AI-assisted operations without adding disconnected AI features too early.",
          visualLabel: "Automation readiness placeholder",
          image: "/images/projects/green-supermarket/13.png",
        },
      ],
    },
    designSystem: {
      label: "DESIGN SYSTEM",
      headline: "",
      text: "",
      visuals: [],
      enabled: false,
    },
    impact: {
      label: "OUTCOMES",
      bullets: [
        "Unified scanner replacement, task management, inventory workflows, and operational processes into one platform direction.",
        "Established a scalable product architecture prepared for company-wide rollout across 900+ stores.",
        "Created a shared design language and delivery process that could be transferred to the client team.",
        "Defined a foundation for future process automation and AI-assisted retail operations.",
      ],
      metrics: [
        { value: "900+", label: "stores in rollout scope" },
        { value: "120+", label: "production-ready screens delivered" },
        { value: "8", label: "operational domains defined" },
        { value: "1", label: "unified platform foundation" },
      ],
    },
    learnings: {
      headline: "Key Learnings",
      bullets: [
        "Product architecture has a longer-lasting impact than individual interface decisions.",
        "Discovery is most valuable when it challenges the original brief and changes the product strategy.",
        "Operational products should follow how work is performed, not how internal systems are organized.",
        "The most scalable solutions balance user needs, business priorities, and organizational readiness.",
      ],
    },
  },
  {
    slug: "omega-finance",
    sectionOrder: [
      "challengeSolution",
      "industryContext",
      "shaping",
      "engagementLoop",
      "constraints",
      "scaling",
      "impact",
      "learnings",
    ],
    title: "Omega Finance - AI Banking App",
    eyebrow: "Case Study",
    year: "2024",
    role: "Product Designer",
    tags: ["BANKING", "AI", "MOBILE"],
    summary:
      "A modern banking experience for a smaller financial institution, using AI-assisted personalization to help users understand spending, optimize budgets and act on relevant financial insights.",
    cover: "/images/projects/omega-finance/1.png",
    info: [
      { label: "client", value: "Omega Finance" },
      { label: "year", value: "2024" },
      { label: "role", value: "Product Designer" },
      { label: "focus", value: "AI Personalization, Banking UX, Spend Optimization" },
      { label: "platform", value: "Mobile banking" },
    ],
    intro: {
      label: "INTRO / ROLE",
      text:
        "A mobile banking concept designed to make everyday finances clearer, more personal and easier to control through contextual AI insights.",
      roleItems: [
        { area: "Domain", principle: "Retail banking" },
        { area: "Focus", principle: "Personalization, budgets, insights" },
        { area: "Users", principle: "Everyday banking customers" },
      ],
    },
    challengeSolution: {
      challenge:
        "Smaller banks often struggle to compete with modern fintech products. Users expect fast transactions, simple money management and proactive help, while traditional banking apps still feel static and account-centered.",
      solution:
        "We reframed the app around personalized financial guidance. Instead of showing balances and transactions only, the experience surfaces spending patterns, budget risks, relevant actions and AI-generated explanations that help users make better decisions.",
      image: "/images/projects/omega-finance/2.png",
    },
    industryContext: {
      label: "INDUSTRY CONTEXT",
      headline:
        "Modern banking is shifting from account access to proactive financial assistance.",
      journey: [
        { label: "Open app" },
        { label: "Review balance" },
        { label: "Understand spending" },
        { label: "Get AI insight" },
        { label: "Adjust budget" },
        { label: "Take action" },
      ],
      text:
        "For many users, a banking app is no longer just a place to transfer money. It is expected to explain what happened, predict what might happen next and help users act before small financial issues become stressful.",
      visualLabel: "AI banking journey map",
      image: "/images/projects/omega-finance/3.png",
    },
    shaping: {
      label: "PRODUCT STRATEGY",
      headline: "From transaction history to personal finance guidance.",
      paragraphs: [
        "The product strategy focused on turning raw financial data into meaningful guidance. The app needed to explain spending, identify anomalies, suggest budget adjustments and help users understand upcoming cash-flow pressure.",
        "AI was treated as a support layer, not a decorative feature. Every AI-generated prompt had to be contextual, explainable and connected to a clear next action.",
      ],
      artifacts: [
        {
          title: "Spending taxonomy",
          description: "Grouped transactions into categories that could support insights and budgets.",
        },
        {
          title: "AI insight rules",
          description: "Defined when the system should suggest, warn or stay quiet.",
        },
        {
          title: "Action model",
          description: "Connected each insight to a practical banking action.",
        },
      ],
      feature: {
        title: "Personalization that earns trust.",
        description:
          "The interface was designed to make AI feel useful and transparent: users see why an insight appeared, what data it refers to and what they can do next.",
        image: "/images/projects/omega-finance/4.png",
      },
    },
    engagementLoop: {
      label: "FINANCIAL GUIDANCE LOOP",
      headline: "The product was designed around a simple money-management loop.",
      loop: [
        { label: "Check balance" },
        { label: "Review insight" },
        { label: "Understand impact" },
        { label: "Adjust budget" },
        { label: "Automate action" },
        { label: "Return with confidence" },
      ],
      text:
        "The guidance loop helps users move from passive checking to active control: check balance -> review insight -> understand impact -> adjust budget -> automate action -> return with confidence.",
      display: "snap",
      slides: [
        {
          title: "Personalized financial home",
          text:
            "The home screen combines balance, upcoming payments and the most relevant insight instead of forcing users to inspect multiple sections.",
          visualLabel: "Personalized banking home screen",
          image: "/images/projects/omega-finance/5.png",
        },
        {
          title: "AI spend insights",
          text:
            "Insights explain unusual spending, category changes and potential budget pressure in plain language.",
          visualLabel: "AI spending insight screen",
          image: "/images/projects/omega-finance/6.png",
        },
        {
          title: "Budget optimization",
          text:
            "Users can convert insights into actions: adjust limits, move money, schedule reminders or create saving rules.",
          visualLabel: "Budget optimization screen",
          image: "/images/projects/omega-finance/7.png",
        },
      ],
    },
    principles: [
      { area: "Home", principle: "Show the next meaningful financial signal" },
      { area: "AI", principle: "Explain why an insight appears" },
      { area: "Budgets", principle: "Turn awareness into action" },
      { area: "Trust", principle: "Keep users in control of automation" },
    ],
    constraints: {
      label: "DESIGN CONSTRAINTS",
      headline: "AI had to feel useful, explainable and safe.",
      paragraphs: [
        "Banking personalization must balance proactive guidance with trust. The product needed clear permissions, transparent explanations and conservative recommendations so users understood that AI supports decisions rather than making them silently.",
      ],
      table: [
        { constraint: "Financial trust", response: "Explainable AI prompts and clear source context" },
        { constraint: "Small-bank ecosystem", response: "Modern UX without breaking core banking logic" },
        { constraint: "Sensitive data", response: "Permission-led personalization and privacy-first language" },
        { constraint: "Daily usage", response: "Short, actionable insights instead of long reports" },
      ],
      image: "/images/projects/omega-finance/8.png",
    },
    scaling: {
      label: "SCALING THE PRODUCT",
      headline: "A banking platform that can learn with the user.",
      text:
        "The same insight system can scale from spending analysis into savings, credit, subscriptions, family budgets and merchant recommendations.",
      display: "horizontal",
      slides: [
        {
          title: "Predictive cash-flow",
          text: "Upcoming bills, income patterns and spending trends can be combined into simple forecasts.",
          visualLabel: "Predictive cash-flow screen",
          image: "/images/projects/omega-finance/9.png",
        },
        {
          title: "Smart budgets",
          text: "Budgets can adapt to user behavior while keeping every recommendation transparent and editable.",
          visualLabel: "Smart budget adjustment screen",
          image: "/images/projects/omega-finance/10.png",
        },
        {
          title: "Contextual offers",
          text: "Relevant banking products can appear only when they solve a real user need, not as generic promotion.",
          visualLabel: "Cash-flow warning screen",
          image: "/images/projects/omega-finance/11.png",
        },
      ],
    },
    designSystem: {
      label: "DESIGN SYSTEM",
      headline: "",
      text: "",
      visuals: [],
      enabled: false,
    },
    impact: {
      label: "EXPECTED IMPACT",
      bullets: [
        "Modernized the mobile banking experience.",
        "Created a clear AI personalization layer.",
        "Improved user understanding of spending and budgets.",
        "Prepared the app for future financial guidance scenarios.",
      ],
      metrics: [
        { value: "+XX%", label: "insight engagement" },
        { value: "+XX%", label: "budget feature usage" },
        { value: "-XX%", label: "time to understand spending" },
      ],
    },
    learnings: {
      headline: "Key Learnings",
      bullets: [
        "AI in banking should reduce uncertainty, not add magic.",
        "Personalization works better when every recommendation explains itself.",
        "A smaller bank can feel modern by focusing on clarity, trust and practical guidance.",
      ],
    },
  },
  {
    slug: "grabr",
    sectionOrder: [
      "challengeSolution",
      "shaping",
      "scaling",
      "constraints",
      "impact",
      "learnings",
    ],
    title: "GRABR - Building Trust in Cross-Border Commerce",
    eyebrow: "Case Study",
    year: "2019",
    role: "Product Designer",
    tags: ["MARKET", "ECOM", "GMV"],
    summary:
      "Joining Grabr as a Product Designer, I helped redesign the core commerce experience for a marketplace connecting buyers with international travelers. My responsibility extended beyond interface design: I worked on reducing friction throughout the order journey, increasing user trust, establishing a scalable design system, and improving operational efficiency through internal products.",
    cover: "/images/projects/grabr/case/payment-placeholder.png",
    info: [
      { label: "role", value: "Product Designer" },
      { label: "domain", value: "Cross-border marketplace" },
      { label: "focus", value: "Product Strategy, Checkout, Trust, Design Systems" },
      { label: "markets", value: "Brazil, Argentina, Russia" },
      { label: "users", value: "Buyers, travelers, operations" },
      { label: "scope", value: "End-to-end commerce experience" },
    ],
    intro: {
      label: "INTRO / ROLE",
      text:
        "A marketplace redesign focused on trust, checkout clarity, design system foundations and internal operational efficiency.",
      roleItems: [
        { area: "Domain", principle: "Cross-border marketplace" },
        { area: "Focus", principle: "Product Strategy, Checkout, Trust, Design Systems" },
        { area: "Users", principle: "Buyers, travelers, operations" },
      ],
    },
    challengeSolution: {
      challenge:
        "The ordering flow had evolved organically over time. Users faced long forms, inconsistent UI patterns, limited mobile optimization and weak trust signals during the most critical decision-making moments.",
      solution:
        "Instead of redesigning individual screens, we restructured the entire service around a single principle: reduce uncertainty before asking users for commitment. Every interaction - from checkout to payment - was redesigned to increase clarity, transparency and confidence.",
      image: "/images/projects/grabr/case/process-image.png",
    },
    industryContext: {
      label: "PRODUCT CHALLENGE",
      headline:
        "International commerce had to feel trustworthy before users were asked to commit.",
      journey: [],
      text:
        "Unlike traditional e-commerce, Grabr required customers to trust an unknown traveler with purchasing and transporting a product across borders. Every step - product selection, payment, delivery and communication - introduced uncertainty.",
      visualLabel: "Product challenge visual placeholder",
    },
    shaping: {
      label: "PRODUCT STRATEGY",
      headline: "Product Strategy",
      paragraphs: [
        "The redesign focused on four strategic objectives: reduce cognitive load during order creation, increase confidence before payment, build reusable product foundations instead of one-off solutions, and align customer-facing experiences with internal operational workflows.",
      ],
      artifacts: [],
      feature: {
        title: "Trust is a product strategy, not a visual feature.",
        description:
          "The product direction treated trust as a system of decisions across checkout architecture, pricing transparency, traveler credibility, payment clarity and operational tooling.",
        image: "/images/projects/grabr/case/service-blueprint.png",
      },
    },
    engagementLoop: {
      label: "SERVICE BLUEPRINT",
      headline: "Every redesign decision targeted moments of hesitation.",
      loop: [
        { label: "Customer discovers product" },
        { label: "Creates order" },
        { label: "Validates product" },
        { label: "Reviews pricing" },
        { label: "Chooses traveler" },
        { label: "Payment" },
        { label: "Delivery" },
        { label: "Order completion" },
      ],
      text:
        "Customer discovers product -> creates order -> validates product -> reviews pricing -> chooses traveler -> payment -> delivery -> order completion. Each redesign decision targeted one or more moments where users typically experienced hesitation or uncertainty.",
      display: "visual",
      slides: [],
    },
    principles: [],
    constraints: {
      label: "DESIGN CONSTRAINTS",
      headline: "Designing for cross-border trust and operational scale.",
      paragraphs: [
        "The experience had to account for localized payments, fraud perception, growing product complexity, mobile usage growth and operational needs behind the marketplace. We also relied on a data-driven working rhythm: there was no dedicated product manager, so the team collectively split priorities between analytics, business development, design and engineering. Developers contributed important technical vision, and this close collaboration helped the platform evolve efficiently without losing product focus.",
      ],
      table: [
        { constraint: "Cross-border payments", response: "Localized payment patterns and transparent pricing" },
        { constraint: "High fraud perception", response: "Layered trust signals throughout checkout" },
        { constraint: "Growing product complexity", response: "Unified design language through a design system" },
        { constraint: "Mobile usage growth", response: "Mobile-first responsive architecture" },
        { constraint: "Operational scale", response: "Reusable internal tooling" },
      ],
      image: "/images/projects/grabr/case/team.png",
    },
    scaling: {
      label: "CORE PRODUCT DECISIONS",
      headline: "Reusable foundations instead of isolated redesigns.",
      text:
        "The work connected customer-facing commerce improvements with internal product infrastructure, creating a more scalable base for future marketplace growth.",
      display: "horizontal",
      slides: [
        {
          title: "Rebuilding Checkout Architecture",
          text:
            "Reorganized a fragmented ordering process into a progressive, e-commerce-inspired flow with clearer information hierarchy and predictable decision points.",
          visualLabel: "Checkout architecture placeholder",
          image: "/images/projects/grabr/case/checkout.png",
        },
        {
          title: "Designing for Trust",
          text:
            "Introduced contextual trust signals including verified travelers, transparent pricing, delivery guarantees, installment information and social proof to reduce perceived risk.",
          visualLabel: "Trust signals placeholder",
          image: "/images/projects/grabr/case/safety.png",
        },
        {
          title: "Mobile-first Commerce",
          text:
            "Created adaptive components and responsive patterns prioritizing mobile traffic while maintaining consistency across platforms.",
          visualLabel: "Mobile commerce placeholder",
          image: "/images/projects/grabr/case/mobile.png",
        },
        {
          title: "Design System as Product Infrastructure",
          text:
            "Migrated legacy Sketch assets into a centralized Figma design system, enabling scalable component reuse, faster delivery and stronger visual consistency.",
          visualLabel: "Design system placeholder",
          image: "/images/projects/grabr/case/design-system.png",
        },
        {
          title: "Internal Platform",
          text:
            "Designed inventory and catalog management tools that allowed marketing and operations teams to create collections without engineering involvement, reducing operational bottlenecks.",
          visualLabel: "Internal platform placeholder",
          image: "/images/projects/grabr/case/internal-systems.png",
        },
      ],
    },
    designSystem: {
      label: "DESIGN SYSTEM",
      headline: "",
      text: "",
      visuals: [],
      enabled: false,
    },
    impact: {
      label: "BUSINESS IMPACT",
      bullets: [
        "Lower cognitive load throughout checkout.",
        "Higher confidence before payment.",
        "Consistent cross-platform purchasing experience.",
        "Shared design system accelerated delivery.",
        "Internal tooling reduced manual operational work.",
        "Reusable components simplified future product development.",
        "Established scalable UX foundations instead of isolated redesigns.",
        "Unified customer and internal product experiences under one design language.",
      ],
      metrics: [
        { value: "Customer", label: "lower cognitive load and higher checkout confidence" },
        { value: "Ops", label: "internal tooling reduced manual work" },
        { value: "System", label: "reusable foundations for future product development" },
      ],
    },
    learnings: {
      headline: "Key Learnings",
      bullets: [
        "Trust is a product strategy, not a visual feature.",
        "Great commerce UX minimizes uncertainty before asking for commitment.",
        "Design systems become valuable only when they accelerate product delivery.",
        "Internal products deserve the same design quality as customer-facing experiences.",
        "Scalable product thinking creates more long-term value than isolated interface improvements.",
      ],
    },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
