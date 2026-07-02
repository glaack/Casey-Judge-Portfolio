// Local image imports for Uncanny Valley thesis
import facialRig from "../../imports/facial-rig.png";
import facialTrackingChimps1 from "../../imports/facial-tracking-chimps-1.png";
import facialTrackingChimps2 from "../../imports/facial-tracking-chimps-2.png";
import facialTrackingHumans from "../../imports/facial-tracking-humans.png";
import femaleFinal70 from "../../imports/female-final-70.png";
import femaleOriginal from "../../imports/female-original.png";
import femaleRatingLaptop from "../../imports/female-rating-laptop.jpg";
import femaleRatingScreen from "../../imports/female-rating-screen.png";
import femaleTestPercentages from "../../imports/Female-TestPercentages.png";
import polarExpressCreepy from "../../imports/polar_express_creepy.jpg";
import thesisHero from "../../imports/Thesis-Hero.png";
import thesisHeader from "../../imports/Thesis-Header.png";
import uncannyValleyRobot from "../../imports/uncanny-valley-robot.jpeg";
import valleyGraph from "../../imports/Valley-Graph-Not-Transparent.png";
import maleStartScreen from "../../imports/Male_StartScreen.png";
import maleVideo from "../../imports/Male_Video.png";
import results1 from "../../imports/results_1.png";
import results21Rating from "../../imports/results_2.1.png";
import results21Response from "../../imports/results-2.1.png";

// Local image imports for Unseen Media case study
import unseenImage36 from "../../imports/Image_36.png";
import unseenNotes1 from "../../imports/notes_1.png";
import unseenNotes2 from "../../imports/notes_2.png";
import huntAKiller from "../../imports/Hunt-A-Killer.png";
import umMindMap from "../../imports/UM-MindMap.png";
import umDyatlov1 from "../../imports/UM-Dyatlov-1.png";
import umDyatlov2 from "../../imports/UM-Dyatlov-2.png";
import umEvent1 from "../../imports/UM-Event-1.png";
import umEvent2 from "../../imports/UM-Event-2.png";
import umEvent3 from "../../imports/UM-Event-3.png";
import umEvent4 from "../../imports/UM-Event-4.png";
import umEnvelope from "../../imports/UM-Envelope.jpg";
import umScrambled from "../../imports/UM-full_scrambled_reduced.png";
import umUnscrambled from "../../imports/UM-full_unscrambled_reduced.png";
import umTabletopAR1 from "../../imports/UM-TabletopAR1.png";
import umTabletopAR2 from "../../imports/UM-TabletopAR2.png";
import umTabletopAR3 from "../../imports/UM-TabletopAR3.png";
import umTabletopAR4 from "../../imports/UM-TabletopAR4.png";
import umAR1 from "../../imports/UM-AR-1.png";
import umAR2 from "../../imports/UM-AR-2.png";
import umAR3 from "../../imports/UM-AR-3.png";
import umInstagram from "../../imports/instagram.png";
import umAgentPortal from "../../imports/agent-portal.png";

// Local image imports for Pedesis case study
import pededisLogo from "../../imports/Pedesis-logo-final.png";
import pededisWireframes from "../../imports/Pedesis-Wireframes-2.png";
import pededisNotes1 from "../../imports/Notes1.png";
import pededisNotes2 from "../../imports/Notes2.png";
import pededisDesktop from "../../imports/DesktopSite.png";
import pedesisMobile from "../../imports/MobileSite.jpeg";

// Section types for flexible case study content
export type SectionType =
  | {
      type: "text";
      heading: string;
      content: string | string[];
    }
  | { type: "list"; heading: string; items: string[]; variant?: "numbered" | "bullet" }
  | {
      type: "image";
      url: string;
      caption?: string;
      layout?: "full" | "half" | "third";
      objectFit?: "cover" | "contain";
      imageBg?: string;
    }
  | {
      type: "image-grid";
      images: Array<{ url: string; caption?: string }>;
      columns?: 2 | 3 | 4;
      layout?: "default" | "device";
      imageHeight?: string;
      widths?: string[];
    }
  | {
      type: "callout";
      heading: string;
      content: string;
      variant?: "default" | "success" | "warning";
    }
  | { type: "divider" }
  | { type: "quote"; text: string; author?: string }
  | { type: "youtube"; videoId: string; caption?: string }
  | { type: "placeholder"; labels: string[]; columns?: 2 | 3 }
  | { type: "external-link"; url: string; label: string; description: string };

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  medium: string;
  password?: string;
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
    subtitle:
      "A research study exploring how digitally produced eyes trigger the uncanny valley effect",
    medium: "Research Paper",
    year: "2018",
    duration: "16 weeks",
    role: "Researcher",
    methods: [
      "Experiment Design",
      "3D Animation",
      "Image Compositing",
      "Subjective Rating Scales",
      "Statistical Analysis",
    ],
    imageUrl: thesisHeader,
    accentColor: "#5BBF45",
    tags: ["Master's Thesis", "Research Design", "Academic"],
    featured: true,
    sections: [
      {
        type: "text",
        heading: "Overview",
        content: [
          "I've long been fascinated by the uncanny valley concept and its theoretical foundations. Theorists propose that the uncanny valley is a disgust of human-like, but not-quite-human figures that stems from survival instinct — an avoidance mechanism tied to cues of death or disease.",
          "I explored facial perception research to identify a specific pain point in artificial faces likely to trigger this response, then designed an experiment to test my hypothesis.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: uncannyValleyRobot, caption: "An early example of the uncanny valley: a humanoid robot" },
          { url: polarExpressCreepy, caption: "An uncanny character from The Polar Express" },
        ],
        columns: 2,
        imageHeight: "320px",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Uncanny Valley",
        content:
          "The theory proposes that as artificial human renderings approach realism, they reach a point that triggers strongly negative emotional responses. The phenomenon was originally proposed by roboticist Masahiro Mori in 1970; the term \"uncanny valley\" was introduced through a Jasia Reichardt translation in 1978.",
      },
      {
        type: "image",
        url: valleyGraph,
        caption: "Mori's original uncanny valley graph — familiarity plotted against human likeness",
        layout: "full",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Facial Perception",
        content: [
          "Research shows that humans fixate on the eye region 40% of the time when viewing a forward-facing face (Janik et al., 1978). Chimpanzee eye-tracking studies (Hirata et al., 2010) confirmed this pattern extends across species — attention centered on the eyes even when faces were rotated or inverted.",
          "I hypothesized that if emotional connection flows primarily through the eyes, then eyes alone may be sufficient to trigger the uncanny valley response.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: facialTrackingChimps1, caption: "Chimp face variants used in eye-tracking research" },
          { url: facialTrackingChimps2, caption: "Heatmaps showing attention distribution on chimp faces" },
        ],
        columns: 2,
      },
      {
        type: "image",
        url: facialTrackingHumans,
        caption: "Eye-tracking data on human faces and 3D facial landmark tracking",
        layout: "full",
      },
      { type: "divider" },
      {
        type: "callout",
        heading: "Hypothesis",
        content: "Digitally produced eyes alone can trigger the uncanny valley effect.",
        variant: "success",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Experiment",
        content:
          "Participants rated images on a 5-point scale ranging from \"I HATE this\" to \"This is human.\" Eleven stimuli were created by morphing real video footage with a 3D uncanny digital human model at varying degrees of digital eye opacity.",
      },
      {
        type: "image-grid",
        images: [
          { url: femaleRatingLaptop, caption: "Rating interface with printed 5-point scale" },
          { url: femaleRatingScreen, caption: "The p5.js rating application" },
        ],
        columns: 2,
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Asset Production",
        content:
          "Eleven test stimuli were produced by morphing original stock footage with a 3D facial rig built in Autodesk Maya at increments from 10% to 100% digital eye opacity.",
      },
      {
        type: "image-grid",
        images: [
          { url: femaleOriginal, caption: "Original stock footage" },
          { url: facialRig, caption: "Facial rig in Autodesk Maya" },
          { url: femaleFinal70, caption: "70% digital eye opacity" },
        ],
        columns: 3,
        widths: ["35%", "30%", "35%"],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Experiment 1",
        content:
          "A local browser app built with p5.js displayed 11 looped 8-second videos in random order. Participants clicked one of five buttons to rate each clip — from \"I HATE this; this is not human\" to \"This is a human.\" A printed scale was placed over the keyboard; only the trackpad was used to navigate.",
      },
      {
        type: "image",
        url: femaleTestPercentages,
        caption: "All 11 female test stimuli — original through 100% digital eye opacity",
        layout: "full",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Experiment 2",
        content:
          "Experiment 2 used male stock footage to account for gender bias. Two updates were made to the app: response time (time between image load and button click) was now logged, and a start screen was added so participants were not exposed to the first stimulus during instructions.",
      },
      {
        type: "image-grid",
        images: [
          { url: maleStartScreen, caption: "Start screen added for Experiment 2" },
          { url: maleVideo, caption: "Male stimulus in the rating interface" },
        ],
        columns: 2,
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Data Analysis",
        content: [
          "Ratings were converted to numerical values, averaged per image, and graphed against Mori's original uncanny valley curve. A notable pattern emerged: responses to earlier images in a session trended toward neutral, likely due to comparison effects from preceding stimuli.",
          "Experiment 2 introduced a response-time graph. Individual data sheets showed higher response times and more neutral ratings on first-viewed images which were expected to balance out across averaged trials.",
        ],
      },
      {
        type: "image",
        url: results1,
        caption: "Experiment 1 — Average Perceived Uncanniness vs. % Opacity",
        layout: "full",
      },
      {
        type: "image-grid",
        images: [
          { url: results21Rating, caption: "Experiment 2 — Average Rating vs. % Opacity" },
          { url: results21Response, caption: "Experiment 2 — Average Response Time vs. % Opacity" },
        ],
        columns: 2,
      },
      { type: "divider" },
      {
        type: "list",
        heading: "Outcomes & Findings",
        items: [
          "Digital eyes triggered the uncanny valley effect in both rounds of testing",
          "The uncanny turning point began at approximately 20% digital opacity",
          "At 70% digital opacity, responses were overwhelmingly negative in both image sets",
          "Fast response times indicated the eye region alone drove judgment of uncanniness without requiring full facial analysis",
        ],
      },
      {
        type: "callout",
        heading: "Conclusion",
        content: "There was sufficient evidence to support the claim.",
        variant: "success",
      },
    ],
  },
  {
    id: "unseen-media",
    title: "Unseen Media",
    subtitle: "Tabletop gaming reimagined with augmented reality technology",
    medium: "AR Tabletop Game",
    year: "2017–2021",
    duration: "5 years",
    role: "Product Designer & Researcher",
    methods: [
      "Customer Discovery",
      "User Testing",
      "Prototyping",
      "Competitive Analysis",
    ],
    imageUrl: unseenImage36,
    accentColor: "#5BBF45",
    tags: [
      "Immersive Technology",
      "AR/VR",
      "Product Design",
      "Gaming",
      "User Research",
    ],
    featured: true,
    sections: [
      {
        type: "text",
        heading: "Overview",
        content: [
          "Unseen Media was an initiative to integrate augmented reality into tabletop mystery games. Players received a ship-to-home box of physical clues to investigate the death of \"Charlotte Depsi,\" combined with web-based AR tools and an agent profile system for tracking progress through the narrative.",
          "The concept originated as an escape room AR idea in mid-2017. After conducting 100+ customer interviews, we pivoted to a mail-to-home format to overcome the location and time constraints of physical venues and reach a broader market.",
          "The project was selected for NYU's Fall 2017 Prototyping Fund, NYC Media Lab's inaugural XR Startup Bootcamp, the XR Beta Residency Program at RLab (Brooklyn Navy Yard), and Augmented Reality Expo 2019 in Santa Clara.",
        ],
      },
      {
        type: "youtube",
        videoId: "2iB-f2j0Ems",
        caption: "Unseen Media product demo video",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "My Role",
        content: "I served as product designer and researcher, where I conducted customer interviews, lead competitive analysis, designed AR interfaces, and iterated on the physical and digital product based on playtesting feedback.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Customer Discovery",
        content: [
          "We conducted 100+ interviews with potential customers to understand what they wanted from a mystery game experience. Our original escape room concept showed strong interest but limited scalability - testing quickly revealed that at-home mystery games had far better market reach.",
          "Interview notes were synthesized to identify the core values driving purchase decisions.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: unseenNotes1, caption: "Customer interview notes" },
          { url: unseenNotes2, caption: "Individual participant profile" },
        ],
        columns: 2,
        widths: ["45%", "55%"],
      },
      {
        type: "callout",
        heading: "Customer Values Identified",
        content: "**Convenience**, **cost**, and **story** emerged as the three factors customers cared about most.",
        variant: "success",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Early Prototypes",
        content: "Our early prototypes were designed to observe how users navigate semi-linear storylines through puzzles, and how they engage with AR elements embedded in a physical game.",
      },
      {
        type: "list",
        heading: "Key Learnings",
        items: [
          "Augmented reality elements required hand-holding for users encountering the technology for the first time",
          "Puzzle design needed to prevent players from skipping ahead in the story sequence",
          "Overly frustrating puzzles caused disengagement from the experience",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Competitive Analysis",
        content: "I played through Hunt A Killer, The Mysterious Package Company, and Breakout Games to understand established conventions and identify gaps in the market.",
      },
      {
        type: "list",
        heading: "Competitive Findings",
        items: [
          "Games use web and social platforms to extend the story into reality",
          "Physical components initiate the experience while clues span multiple mediums",
          "Password walls and code unlocks keep players from skipping too far ahead",
          "Tangible objects provide satisfying interaction that pure digital cannot replicate",
        ],
      },
      {
        type: "image",
        url: huntAKiller,
        caption: "Hunt A Killer subscription box game pieces",
        layout: "full",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Designing for Augmented Reality",
        content: [
          "AR was a emerging medium that many players encountered it for the first time through this product. Designing for it meant building intuitive interfaces and also actively educating users about AR within the experience itself.",
          "Our design principles were: keep interactions simple, offer liberal on-screen text instructions whenever in doubt, and remind players that spatial movement — not just pinching to zoom — is possible in AR.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Prototype: The Dyatlov Files",
        content: [
          "Based on customer discovery insights, we built a story-driven prototype around a real event: the Dyatlov Pass Incident, in which nine hikers mysteriously died in the Russian wilderness in 1959.",
          "An extensive mind map was built to link puzzle interactions to story beats, and early game piece prototypes were developed and tested.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: umMindMap, caption: "Mind map — Dyatlov story paths and puzzle connections" },
          { url: umDyatlov1, caption: "Early Dyatlov Files physical game piece prototypes" },
        ],
        columns: 2,
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Testing",
        content: "We ran unmoderated gameplay sessions at RLab events with a diverse mix of participants: AR/VR enthusiasts, students, casual gamers, and entrepreneurs.",
      },
      {
        type: "list",
        heading: "Findings",
        items: [
          "Story elements drove high engagement throughout the session",
          "Tactile puzzle components were universally appealing",
          "The Unity app excluded players with older phones due to compatibility issues",
          "Web-based elements were navigated easily by most users",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: umEvent4, caption: "Demo session at RLab, Brooklyn Navy Yard" },
          { url: umEvent3, caption: "Demo session at R/GA Hudson Yards office" },
        ],
        columns: 2,
        widths: ["35%", "65%"],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Iteration",
        content: "Extensive playtesting surfaced three clear areas requiring redesign before we could move to the next prototype.",
      },
      {
        type: "list",
        heading: "Key Takeaways",
        items: [
          "Envelope and paper materials felt cheap and undermined the premium experience",
          "AR didn't fit the historical 1950s Russian setting — the technology felt anachronistic",
          "Players wanted more hands-on interactive elements and less reading",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: umEnvelope, caption: "Dyatlov Files — outer envelope" },
          { url: umDyatlov2, caption: "Dyatlov Files — box contents spread on tabletop" },
        ],
        columns: 2,
        widths: ["33%", "67%"],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Interface Mockups for AR",
        content: [
          "Designing AR wireframes presented unique challenges wherein traditional static wireframing couldn't capture spatial interaction and motion. This required heavier visual communication and close collaboration with developers.",
          "A key principle was to draw from real-world names and metaphors (hacking tools, scanning devices) to ease users into unfamiliar AR interactions before introducing more abstract ones.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: umScrambled, caption: "Scanning scrambled documents" },
          { url: umUnscrambled, caption: "Documents unscrambled" },
        ],
        columns: 2,
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Prototype Two: Charlotte Depsi",
        content: [
          "We moved to a higher-fidelity boxed prototype, commissioned a professional writer for a more compelling mystery narrative, and partnered with 8th Wall to deliver web-based AR on any device which eliminated the Unity compatibility issues entirely.",
          "This version added multiple web puzzles, an Instagram profile for fictional character Angelica Greenstone, and the DSF Agency Agent Portal for tracking case progress.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: umAR1, caption: "Scan recognized" },
          { url: umAR2, caption: "Tap to place" },
          { url: umAR3, caption: "3D model placed" },
        ],
        columns: 3,
      },
      {
        type: "image-grid",
        images: [
          { url: umInstagram, caption: "Instagram profile — Angelica Greenstone" },
          { url: umAgentPortal, caption: "DSF Agency Agent Portal web interface" },
        ],
        columns: 2,
        widths: ["57%", "43%"],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Feedback from Demos and Conferences",
        content: [
          "Through RLab connections we participated in multiple NYC AR/VR community events, running observed playtesting sessions at Halloween Play 2019 and other demos. A key lesson was that we needed to separate excitement about the technology from genuine product evaluation.",
          "Our preferred method became unmoderated, closely observed sessions followed by in-depth interviews.",
        ],
      },
      {
        type: "list",
        heading: "Key Learnings",
        items: [
          "Users defaulted to pinch-to-zoom rather than physically moving closer to AR objects",
          "Framing AR tools as CSI-style hacking devices significantly enhanced enjoyment",
          "Identified partnership opportunities with licensed content providers and educational institutions",
          "A help modal was essential as users frequently needed guidance mid-AR-interaction",
          "Clear written prompts consistently outperformed implicit navigational cues",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: umEvent1, caption: "Unseen Media demo table at Halloween Play 2019" },
          { url: umEvent2, caption: "Wider demo area at Halloween Play 2019" },
        ],
        columns: 2,
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Final Product",
        content: [
          "The final Charlotte Depsi mystery box shipped to players' homes, enabling small groups to work through physical clues, web puzzles, and AR experiences to solve the case.",
          "91% of players completed the experience start to finish — a strong signal that the integration of physical and digital elements created genuine engagement.",
        ],
      },
      {
        type: "image",
        url: unseenImage36,
        caption: "Final Charlotte Depsi mystery box contents",
        layout: "full",
      },
    ],
  },
  {
    id: "pedesis",
    title: "Pedesis",
    subtitle:
      "An e-commerce website for pandemic PPE",
    medium: "E-Commerce Website",
    year: "2020",
    duration: "24 weeks",
    role: "UX Researcher & Project Manager",
    methods: [
      "Competitive Analysis",
      "User Testing",
      "Prototyping",
      "Client Research",
    ],
    imageUrl: pededisDesktop,
    accentColor: "#5BBF45",
    tags: ["UX Research", "E-Commerce", "Healthcare"],
    featured: true,
    sections: [
      {
        type: "image",
        url: pededisLogo,
        layout: "half",
        objectFit: "contain",
        imageBg: "#ffffff",
        caption: "Pedesis brand identity",
      },
      {
        type: "text",
        heading: "Overview",
        content: [
          "Pedesis is a healthcare brand that promotes happy, healthy lifestyles through the recommendation of science-backed methods and products. They approached me in early 2020 to build an e-commerce site selling PPE to both individuals and hospitals.",
          "The project required balancing a trustworthy medical brand aesthetic with a modern, approachable feel — while meeting demanding technical requirements including bilingual content management and bulk ordering support.",
        ],
      },
      {
        type: "text",
        heading: "My Role",
        content:
          "I served as a UX researcher and project manager. I led competitive research, facilitated user testing sessions, synthesized findings, and coordinated platform decisions with the client and development team.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Understanding the Client's Needs",
        content: [
          "The client had clear brand aspirations: the site needed to feel trustworthy, caring, science-rooted, and modern. They wanted a healthcare palette without feeling sterile or overly clinical.",
          "Functionally, the requirements were demanding: cross-country e-commerce capability, a bilingual CMS supporting both English and Chinese, and the ability to handle both single-item purchases and large bulk orders from one system.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Research",
        content:
          "I conducted a competitive analysis of healthcare and PPE e-commerce sites to establish design conventions and identify differentiation opportunities.",
      },
      {
        type: "list",
        heading: "Competitive Analysis Findings",
        items: [
          "Blue dominates healthcare branding for its associations with calm, trust, and reliability",
          "Non-Amazon platforms share similar layout conventions — familiar patterns reduce friction",
          "Traditional elements like serif fonts and sidebars are common across the space",
          "Bulk-order brands typically route customers directly to a contact/quote workflow rather than cart",
        ],
      },
      {
        type: "text",
        heading: "Platform Selection",
        content:
          "Shopify and Square were evaluated but both lacked adequate Chinese-language support. Webflow met both the bilingual CMS requirement and the client's preference for a low-technical-skill admin experience — making it the clear choice.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Early Prototypes",
        content:
          "Low-fidelity wireframes were developed and reviewed with the client before user testing. They covered the full site architecture: product listing, product detail, cart, checkout, about, and contact pages.",
      },
      {
        type: "image",
        url: pededisWireframes,
        caption:
          "Low-fidelity wireframes used for client review and user testing",
        layout: "full",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Additional Page Requirements",
        content:
          "Through client conversations, I documented a detailed spec for what product cards and individual product pages needed to surface.",
      },
      {
        type: "list",
        heading: "Product Card",
        variant: "bullet",
        items: ["Product image", "Quantity per order", "Price"],
      },
      {
        type: "list",
        heading: "Product Page",
        variant: "bullet",
        items: [
          "Stock count and masks per box / sealed bag",
          '"Information at a glance" summary block',
          "FDA/CDC specifications and MSDN number",
          "Certifications with watermarks and ISO numbers",
          "Sizing variations and additional information",
          "Terms & conditions / no-refund policy",
          "Related Products section and multi-product care package support",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "User Testing",
        content:
          "Testing sessions revealed a clear pattern: users were overwhelmed by information density and struggled with navigation. I documented findings directly during sessions to capture nuance.",
      },
      {
        type: "image-grid",
        images: [
          {
            url: pededisNotes1,
            caption: "Session notes — navigation issues",
          },
          {
            url: pededisNotes2,
            caption: "Session notes — product card feedback",
          },
        ],
        columns: 2,
      },
      {
        type: "list",
        heading: "Key Takeaways",
        items: [
          "Product cards had too much information — simplify and move detail to individual product pages",
          "Side navigation felt confusing and visually inconsistent with healthcare expectations",
          "Moving navigation to the bottom improved mobile wayfinding significantly",
          "Search was deemed low-priority given the small product catalog",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Final Product",
        content: [
          "The final site launched on Webflow with full bilingual support, a streamlined product catalog, and a clean checkout flow tested to work smoothly across devices.",
          "The redesigned navigation and simplified product cards directly addressed the top user testing pain points.",
        ],
      },
      {
        type: "image-grid",
        images: [
          { url: pedesisMobile, caption: "Mobile view" },
          { url: pededisDesktop, caption: "Desktop view" },
        ],
        columns: 2,
        layout: "device",
      },
    ],
  },
  {
    id: "vfx-software",
    title: "UX Research for VFX Software",
    subtitle:
      "Ongoing UX research for professional VFX tooling",
    medium: "Professional Software",
    year: "2022–Present",
    duration: "Ongoing",
    role: "UX Research Consultant",
    methods: [
      "Contextual Inquiry",
      "Expert Interviews",
      "Workflow Mapping",
      "Heuristic Evaluation",
      "Think-Aloud Sessions",
      "Stakeholder Alignment",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1619097647550-0fe7f031c18b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwdmlzdWFsJTIwZWZmZWN0cyUyMHByb2R1Y3Rpb24lMjBjb2xvciUyMGdyYWRpbmclMjBkYXJrfGVufDF8fHx8MTc4MjMzNDYzMnww&ixlib=rb-4.1.0&q=80&w=1080",
    accentColor: "#5BBF45",
    tags: ["VFX Software", "Expert Users", "Embedded Research", "Enterprise"],
    featured: true,
    sections: [
      {
        type: "callout",
        heading: "Confidentiality Notice",
        content:
          "My current work is covered by a non-disclosure agreement. Project names, client details, specific findings, and deliverables cannot be shared. What follows describes my role, approach, and the nature of the work in general terms.",
        variant: "default",
      },
      {
        type: "external-link",
        url: "https://unity.com/blog/news/welcome-weta-digital",
        label: "Unity — Welcome, Weta Digital",
        description: "One of the few public representations of the tools I work on.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Overview",
        content: [
          "I work as an embedded UX research consultant across a portfolio of professional software tools built for visual effects artists — people who create the imagery behind major feature films, streaming series, and commercial productions. These are tools used daily by some of the most technically sophisticated users in any industry.",
          "Rather than being attached to a single product team, I operate as an internal consultant — moving across projects based on where research expertise will have the greatest impact. This means I'm often parachuting into work mid-stream, orienting quickly, and delivering clear direction under time pressure.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "The Domain",
        content: [
          "VFX production software occupies a rare position in the software landscape: the users are world-class experts. Artists and technical directors working at this level have spent years, often decades, building deep fluency with their tools. They have strong opinions, well-established workflows, and little patience for friction.",
          "The cost of a bad design decision in this context isn't just frustration — it's lost hours on productions where time is measured in thousands of dollars per day. This makes research here both high-stakes and uniquely rewarding. When a change lands well, it improves the working lives of people doing some of the most skilled craft work in the industry.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "My Role",
        content: [
          "I function as an in-house UX consultant — not embedded in a single team, but available across multiple concurrent projects. This requires earning trust quickly with different groups of stakeholders, calibrating my research approach to widely varying timelines and contexts, and knowing when to go deep versus when to synthesize fast and move on.",
          "In practice, this looks like: joining a product team early in discovery to help frame the right research questions; running sessions with artists directly; synthesizing findings into clear, actionable direction for designers and engineers; and returning later to evaluate whether that direction held up.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Designing for Expert Users",
        content: [
          "Most UX norms are built around general users — people who are learning a product, may use it infrequently, and need to be guided. Expert users are different in almost every meaningful way: they have years of muscle memory, they've already optimized their environment around their existing workflow, they'll immediately notice when something familiar has been moved, and they'll form a strong opinion about why.",
          "Research with expert users requires a different posture. You're not just observing — you're trying to understand a practice. The goal is to earn enough trust that someone with 15 years of experience will tell you where the real friction is, not just what they think you want to hear.",
        ],
      },
      { type: "divider" },
      {
        type: "text",
        heading: "What I Bring",
        content:
          "Across engagements I draw on contextual inquiry to observe artists working in their natural environment, expert interviews to surface latent needs and surface-level workarounds, workflow mapping to identify where tools break down across a production pipeline, heuristic evaluation to quickly assess new features before they reach users, and think-aloud sessions to watch decision-making in real time. The method always follows the question — not the other way around.",
      },
      { type: "divider" },
      {
        type: "text",
        heading: "Why This Work Matters",
        content: [
          "The VFX industry is undergoing significant technological change — AI-assisted tooling, cloud-based pipelines, and real-time rendering are reshaping how productions are made. The professionals navigating this shift are being asked to adapt rapidly, often with tools that weren't designed with their existing workflows in mind.",
          "Good research in this space doesn't just make software easier to use — it helps ensure that the people who do this work aren't left behind by the tools meant to serve them.",
        ],
      },
    ],
  },
];