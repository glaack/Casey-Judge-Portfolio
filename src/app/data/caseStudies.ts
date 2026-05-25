// Section types for flexible case study content
export type SectionType =
  | { type: "text"; heading: string; content: string | string[] }
  | { type: "list"; heading: string; items: string[] }
  | { type: "image"; url: string; caption?: string; layout?: "full" | "half" | "third" }
  | { type: "image-grid"; images: Array<{ url: string; caption?: string }>; columns?: 2 | 3 }
  | { type: "callout"; heading: string; content: string; variant?: "default" | "success" | "warning" }
  | { type: "divider" }
  | { type: "quote"; text: string; author?: string };

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  duration: string;
  role: string;
  methods: string[];
  imageUrl: string;
  accentColor: string;
  tags: string[];
  featured: boolean;
  // Custom sections for flexible content
  sections: SectionType[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "uncanny-valley-thesis",
    title: "Eye Appearance and the Uncanny Valley",
    subtitle: "A research study exploring how digitally produced eyes trigger the uncanny valley effect",
    category: "Master's Thesis",
    year: "2018",
    duration: "16 weeks",
    role: "Lead Researcher",
    methods: ["Experimental Design", "Image Morphing", "Subjective Rating Scales", "Statistical Analysis"],
    imageUrl:
      "https://images.unsplash.com/photo-1483519173755-be893fab1f46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZXllJTIwY2xvc2UlMjB1cCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5NjM2MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#5BBF45",
    tags: ["Research Design", "Academic"],
    featured: true,
    sections: [
      {
        type: "text",
        heading: "Overview",
        content: [
          "I've long been fascinated by the uncanny valley concept and its theoretical foundations. Theorists propose that the uncanny valley is a disgust of human-like, but not-quite-human figures that stems from survival instinct. I explored facial perception studies to identify specific aspects of artificial faces that may trigger this response.",
          "From there, I explored my hypothesis via experimentation."
        ]
          },
      {
        type: "image-grid",
        images: [
          {
            url: "https://images.unsplash.com/photo-1593376893114-1aed528d80cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90JTIwZmFjZSUyMHVuY2Fubnl8ZW58MXx8fHwxNzc5NjM2MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            caption: "Creepy-looking robot"
          },
          {
            url: "https://images.unsplash.com/photo-1634909924531-4daae117dbc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxodW1hbm9pZCUyMHJvYm90JTIwZmFjZSUyMHVuY2Fubnl8ZW58MXx8fHwxNzc5NjM2MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            caption: "Character from The Polar Express"
          }
        ],
        columns: 2
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Uncanny Valley",
        content: "The uncanny valley theory states that as artificial human renderings approach realism, they trigger negative responses. First proposed by Masahiro Mori in 1970 and translated by Jasia Reichardt in 1978, this phenomenon describes the emotional response to nearly-human entities."
      },
      {
        type: "image",
        url: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBoJTIwY2hhcnR8ZW58MXx8fHwxNzc5NjM2MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
        caption: "Graph showing uncanny valley effect curve",
        layout: "full"
      },
      { type: "divider" },
      {
        type: "callout",
        heading: "Hypothesis",
        content: "Digitally produced eyes alone can trigger the uncanny valley effect.",
        variant: "success"
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Methods",
        content: "I created eleven test images by morphing real human video footage with 3D models in Autodesk Maya at varying opacity levels. Two experiments were conducted using a custom p5.js web application where participants rated 8-second looped videos on a five-point scale."
      },
      {
        type: "image-grid",
        images: [
          {
            url: "https://images.unsplash.com/photo-1530707114297-4af4b3cafe16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxkaWdpdGFsJTIwZXllJTIwY2xvc2UlMjB1cCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc5NjM2MDcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            caption: "Original stock footage"
          },
          {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBoJTIwY2hhcnR8ZW58MXx8fHwxNzc5NjM2MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
            caption: "3D facial rig in Maya"
          },
          {
            url: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGdyYXBoJTIwY2hhcnR8ZW58MXx8fHwxNzc5NjM2MDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
            caption: "70% digital morph"
          }
        ],
        columns: 3
      },
      { type: "divider" },
      {
        type: "list",
        heading: "Outcomes & Impact",
        items: [
          "Digital eyes triggered the uncanny valley effect in both experiments with statistical significance",
          "Turning point of perceived uncanniness began around 20% digital opacity",
          "Responses became overwhelmingly negative at 70% digital opacity",
          "Rapid response times indicated eyes as the primary evaluation point for human-likeness"
        ]
      },
      {
        type: "quote",
        text: "There was sufficient evidence to support the claim."
      }
    ]
  },
  {
    id: "unseen-media",
    title: "Unseen Media",
    subtitle: "Tabletop gaming reimagined with augmented reality technology",
    category: "Immersive Tech",
    year: "2017-2021",
    duration: "5 years",
    role: "Product Designer",
    methods: ["Customer Discovery", "User Testing", "Prototyping", "Competitive Analysis"],
    imageUrl:
      "https://images.unsplash.com/photo-1585504198199-20277593b94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwdGFibGV0b3AlMjBnYW1lJTIwYm9hcmR8ZW58MXx8fHwxNzc5NjQzNDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#5BBF45",
    tags: ["AR/VR", "Product Design", "Gaming", "User Research"],
    featured: true,
    sections: [
      {
        type: "text",
        heading: "Overview",
        content: [
          "This was an initiative to integrate augmented reality technology into tabletop board games. The end product was a mystery-themed game that was mailed to players' homes. The game combined physical clues with web-based augmented reality tools and an agent profile system for tracking progress.",
          "This concept evolved from an escape room idea in mid-2017. After conducting 100+ customer interviews, we pivoted to address the limitations of location and time constraints by delivering the experience directly to customers' homes.",
          "The project participated in several notable programs: NYU's Fall 2017 Prototyping Fund, NYC Media Lab's inaugural XR Startup Bootcamp, XR Beta Residency Program at the RLab, and Augmented Reality Expo 2019."
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "My Role",
        content: "I served as a product designer and researcher for this project, conducting extensive user interviews, competitive analysis, and iterative prototyping."
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Customer Discovery",
        content: [
          "I helped conduct over 100 interviews with potential customers, taking extensive notes on their feedback and preferences. This research phase was critical in understanding what users actually wanted from a mystery game experience.",
          "Our findings indicated that the original escape room concept lacked adequate market scalability. Testing revealed a strong preference for at-home mystery games with AR integration."
        ]
      },
      {
        type: "callout",
        heading: "Customer Values Identified",
        content: "Convenience, Cost, and Story emerged as the three primary factors that would drive customer decisions.",
        variant: "success"
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Early Prototypes",
        content: "The purpose of our early prototypes was to observe how users would interact with semi-linear storylines through a series of puzzles, and how they would engage with AR elements integrated into the physical game."
      },
      {
        type: "list",
        heading: "Key Learnings",
        items: [
          "AR elements required clear guidance and instruction for users unfamiliar with the technology",
          "Puzzle design needed to prevent players from skipping ahead in the story sequence",
          "Overly frustrating elements caused players to disengage from the experience"
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Competitive Analysis",
        content: "I played through similar products including Hunt A Killer, The Mysterious Package Company, and Breakout to understand what worked well in the market."
      },
      {
        type: "list",
        heading: "Competitive Findings",
        items: [
          "Web and social media integration brings narrative into the physical realm effectively",
          "Physical components initiate experiences while clues span multiple mediums",
          "Non-linear narrative discovery with password/code progression locks creates engagement",
          "Tangible objects provide satisfying interaction that pure digital cannot replicate"
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Designing for Augmented Reality",
        content: [
          "AR was an emerging medium at the time, and most users had limited familiarity with it. This required designing not just intuitive interfaces, but also providing user education throughout the experience.",
          "Our design principles prioritized simplicity, provided liberal onscreen text instructions, and included consistent reminders about spatial movement possibilities."
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Prototype: The Dyatlov Files",
        content: [
          "Based on customer discovery insights, we focused on creating a story-driven experience. The team selected a true crime narrative leveraging the Dyatlov Pass Incident, where nine hikers mysteriously died in Russia.",
          "This prototype allowed us to map out complex interactions and discoveries while testing early game piece concepts."
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Testing",
        content: "We conducted unmoderated gameplay sessions at RLab events with diverse participants including AR/VR enthusiasts, students, casual gamers, and entrepreneurs."
      },
      {
        type: "list",
        heading: "User Testing Findings",
        items: [
          "High engagement with narrative elements",
          "Strong appeal of tactile puzzle components",
          "Unity App had compatibility limitations with older phones",
          "Web elements were navigated easily by most users"
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Iteration",
        content: "Analysis of playtesting sessions revealed specific issues that required redesign."
      },
      {
        type: "list",
        heading: "Key Takeaways",
        items: [
          "Envelope and paper materials felt inexpensive and detracted from the premium experience",
          "AR integration felt mismatched with the historical 1950s setting",
          "Players preferred hands-on interactive elements over reading text"
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Interface Mockups for AR",
        content: [
          "Designing AR experiences presented unique communication challenges. Traditional wireframing had limitations when conveying spatial and interactive elements.",
          "I emphasized visual communication methods and close collaboration with developers to ensure the AR interfaces felt grounded in real-world metaphors and interactions. As user familiarity with AR increases, we expected these interfaces could become more simplified and abstract."
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Prototype Two: Charlotte Depsi",
        content: [
          "We transitioned to a higher-fidelity boxed prototype and hired a professional writer to craft a more compelling mystery narrative. We partnered with 8th Wall to create web-based AR experiences accessible on any device, eliminating the compatibility issues from our first prototype.",
          "This version included multiple web elements, interactive puzzles, and an Agent Portal for tracking progress through the mystery."
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Feedback from Demos and Conferences",
        content: [
          "Through RLab connections, we became involved with the NYC AR/VR community and conducted multiple conference demonstrations and playtesting sessions. An important insight was learning to separate excitement about the technology from actual product evaluation.",
          "Our preferred testing methodology became unmoderated, closely-observed sessions followed by in-depth interviews."
        ]
      },
      {
        type: "list",
        heading: "User Testing Insights",
        items: [
          "Users defaulted to 'pinch to zoom' gestures instead of spatial movement in AR",
          "CSI-style hacking tool framing significantly enhanced enjoyment",
          "Identified partnership opportunities with licensed content and educational institutions",
          "Help modals were essential for guiding users through AR elements",
          "Written prompts proved superior to implicit next-step instructions"
        ]
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Final Product",
        content: [
          "The final product was a ship-to-home box enabling small groups to experience the Charlotte Depsi mystery narrative. Players worked through physical clues, web-based puzzles, and AR elements to solve the mystery.",
          "Our success metric was compelling: 91% of players completed the entire experience, with consistently positive feedback about the integration of physical and digital elements."
        ]
      }
    ]
  },
  {
    id: "healthcare-dashboard",
    title: "Clinical Dashboard Research for ICU Teams",
    subtitle: "Reducing cognitive load for nurses managing critical patient data under pressure",
    category: "VFX Software",
    year: "2023",
    duration: "18 weeks",
    role: "Senior UX Researcher",
    methods: ["Ethnographic Observation", "Expert Interviews", "Cognitive Walkthrough", "Heuristic Evaluation"],
    imageUrl:
      "https://images.unsplash.com/photo-1645684922842-87793d0b25df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGlnaXRhbCUyMGhlYWx0aCUyMHBhdGllbnQlMjBleHBlcmllbmNlfGVufDF8fHx8MTc3Njc4Nzk0M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#5BBF45",
    tags: ["Healthcare", "Ethnography", "Safety", "Enterprise"],
    featured: true,
    sections: [
      {
        type: "text",
        heading: "Overview",
        content: "A healthcare technology company needed to redesign their ICU monitoring dashboard for nursing staff. High cognitive load and poor information hierarchy were contributing to alert fatigue — a genuine patient safety concern."
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Challenge",
        content: "The research environment was uniquely constrained: sessions had to happen in live ICU units with strict time limits per nurse, and the stakes of getting the design wrong were life-critical. Ethics approval alone took 8 weeks."
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Process",
        content: "Over 10 weeks of ethnographic observation across two hospital sites, I documented 400+ hours of nursing workflows. Expert interviews with 16 nurses and 8 attending physicians revealed critical gaps between what the system showed and what clinical decisions required. A cognitive walkthrough of 5 key scenarios identified 23 usability failures."
      },
      { type: "divider" },
      {
        type: "list",
        heading: "Outcomes & Impact",
        items: [
          "Defined a new information architecture reducing visible alerts by 60%",
          "Alarm fatigue incidents reduced by 28% in 3-month pilot",
          "Research directly contributed to FDA 510(k) submission documentation",
          "Published case study presented at HFES 2023 Annual Meeting"
        ]
      }
    ]
  },
  {
    id: "ecommerce-checkout",
    title: "E-Commerce Checkout Optimization",
    subtitle: "A mixed-methods investigation into cart abandonment at the moment of decision",
    category: "Immersive Tech",
    year: "2022",
    duration: "8 weeks",
    role: "UX Researcher",
    methods: ["A/B Testing Analysis", "Session Replay Analysis", "Intercept Surveys", "Jobs-to-be-Done Interviews"],
    imageUrl:
      "https://images.unsplash.com/photo-1757301714935-c8127a21abc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMGludGVyZmFjZSUyMHdpcmVmcmFtZXxlbnwxfHx8fDE3NzY3ODc5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#5BBF45",
    tags: ["E-Commerce", "Conversion", "Mixed Methods", "B2C"],
    featured: false,
    sections: [
      {
        type: "text",
        heading: "Overview",
        content: "A mid-size e-commerce retailer had a 71% cart abandonment rate — well above the industry average. I led a mixed-methods study to pinpoint the friction points and evaluate competing hypotheses about why users were dropping off."
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Challenge",
        content: "Stakeholders disagreed sharply on the root cause: engineering suspected technical performance issues, marketing blamed lack of discount codes, and product pointed to a confusing multi-step checkout. My job was to let the data arbitrate."
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Process",
        content: "I analyzed 3 months of session replay recordings (600+ sessions coded) and triangulated with intercept surveys catching users at the moment of abandonment. JTBD interviews with 20 recent completers and 20 abandoners revealed dramatically different mental models about 'commitment' in the purchase flow."
      },
      { type: "divider" },
      {
        type: "list",
        heading: "Outcomes & Impact",
        items: [
          "Identified 'guest checkout visibility' as the #1 abandonment driver (not shipping cost)",
          "A redesigned guest checkout entry point reduced abandonment by 18%",
          "Shipping cost concern was #7 on the list — refuted the discount-first hypothesis",
          "Research shifted roadmap priorities, saving ~$200K in planned promo spend"
        ]
      }
    ]
  },
];