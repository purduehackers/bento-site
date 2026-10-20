// Names, titles, and summaries adapted from src/assets/brochure.png (April 11, 2026).
// Timestamps come from the linked speaker pages; do not infer times for other talks.
export interface Talk {
  id: string;
  title: string;
  speaker: string;
  summary: string;
  links: { label: string; href: string }[];
  start?: number;
  timestamp?: string;
}
export const recordingUrl = "https://www.youtube.com/watch?v=6tqaLtKiJJQ";
export const talks: Talk[] = [
  {
    id: "qter",
    title: "Overcomplicating Qter’s Computer Vision for Fun and Profit",
    speaker: "Henry Rovnyak",
    summary: "Computer vision for a robot that solves Rubik’s cubes.",
    links: [
      {
        label: "Project website",
        href: "https://qter.dev/",
      },
    ],
  },
  {
    id: "birds",
    title: "BIRDS",
    speaker: "Kurt Khaustov",
    summary:
      "An exploration of ornithomancy and whether birds can predict the outcome of a BENTO presentation.",
    links: [],
  },
  {
    id: "lasertag",
    title: "Lasertag",
    speaker: "Julian Triveri",
    summary: "Misadventures in turning the world into a laser tag arena.",
    links: [
      {
        label: "Exhibited at spill",
        href: "https://spill.purduehackers.com/#lasertag",
      },
    ],
  },
  {
    id: "djing",
    title: "DJing from Scratch",
    speaker: "Hazel Roeder",
    summary:
      "Modern DJing and its techniques, explained from a software engineer’s perspective.",
    links: [],
  },
  {
    id: "varibad",
    title: "VariBAD: Variational Bayes-Adaptive Deep RL via Meta-Learning",
    speaker: "John Zeng",
    summary:
      "Exploring unknown environments in reinforcement learning, with applications to robotics and recommendation systems.",
    links: [],
  },
  {
    id: "animal-rights",
    title: "Why Animal Rights Are So Important",
    speaker: "Samuel Rogers",
    summary:
      "A talk about animal rights and their connections to the environment and individual choices.",
    links: [],
  },
  {
    id: "gifts",
    title: "How to give good gifts to anyone",
    speaker: "Kartavya Vashishtha",
    summary: "Ideas for choosing thoughtful gifts.",
    links: [],
  },
  {
    id: "door-opener",
    title: "Door-Opener & Ada-Pusher",
    speaker: "Eric Park",
    summary:
      "How the door-opening experience at Hack Night was improved with new hardware and software.",
    links: [
      {
        label: "Talk & slides",
        href: "https://ericswpark.com/pages/purdue/hackers/presentations/bento/",
      },
      {
        label: "Detailed retrospective",
        href: "https://blog.purduehackers.com/posts/door-opener-2",
      },
    ],
    start: 6420,
    timestamp: "1:47:00",
  },
  {
    id: "gradient-descent",
    title: "Large stepsizes in gradient descent",
    speaker: "Alexandre Sauquet",
    summary: "Understanding unstable convergence in deep learning.",
    links: [],
  },
  {
    id: "predictive-coding",
    title: "Hebb and Flow: An Intro to Predictive Coding",
    speaker: "Jack Hogan",
    summary:
      "An exploration of predictive coding networks and how they compare with other neural-network techniques.",
    links: [
      {
        label: "Jack’s account of BENTO",
        href: "https://www.jackhogan.me/blog/from-tiny-seed-to-towering-sequoia",
      },
    ],
    start: 5562,
    timestamp: "1:32:42",
  },
  {
    id: "drones",
    title: "How to Make Drones Fly Themselves",
    speaker: "Reid Jacobsen",
    summary:
      "Lessons from using machine-learning algorithms to fly simulated drones autonomously between two points.",
    links: [],
  },
  {
    id: "mac-gaming",
    title: "You shouldn’t buy a MacBook for gaming—or should you?",
    speaker: "Aditya Gandhi",
    summary:
      "Porting Windows games to macOS and Linux through translation or emulation.",
    links: [],
  },
  {
    id: "quantum",
    title: "Quantum Acromathics: do small balls wave through walls?",
    speaker: "Ishan Goel",
    summary:
      "Exploring quantum mechanics through mathematics, GPU computing, and visualizations.",
    links: [],
  },
  {
    id: "crazy-english",
    title: "The Crazy English Method",
    speaker: "Basant Sharma",
    summary:
      "An account of an English-learning method and its influence in China.",
    links: [],
  },
  {
    id: "nugget",
    title: "iOS PosterBoard and Nugget",
    speaker: "Josh Irizarry",
    summary:
      "How iOS handles wallpapers and how Nugget uses its hidden capabilities.",
    links: [],
  },
];
