/* Anonymous paper metadata and experimental content. */

export const PAPER_TITLE =
  "OpenWAM: An Open, Modular Exploration Towards Systematic World–Action Model Pretraining";

/* Split form for the page header: the name carries the brand wordmark, the
 * subtitle carries the descriptive half. Keep both in sync with PAPER_TITLE. */
export const PAPER_NAME = "OpenWAM";
export const PAPER_SUBTITLE =
  "An Open, Modular Exploration Towards Systematic World–Action Model Pretraining";

export const ABSTRACT = `World–Action Models inherit world knowledge from video-generative priors, and channel it into executable control signals through embodied experience. Existing systems, however, are monolithic: the generative backbone, visual representation, architecture, information flow, inference procedure, and training data are tightly coupled, obscuring which design choices matter and why. We introduce OpenWAM, an open research stack that turns world–action pretraining into a controlled experimental program. OpenWAM-Infra factorizes the WAM design space into composable modules with unified training, inference, deployment, and evaluation. On this substrate, OpenWAM-Study examines three questions through controlled experiments: what to inherit, how world and action learning interact, and how their synergy scales; and distills three principles: upstream knowledge transfers through a sufficiently capable generative backbone and a compact, information-rich latent space; world–action synergy requires dedicated action capacity, explicit world-to-action information flow, and synchronized joint denoising; and embodied pretraining principally improves out-of-domain generalization, with one-stage co-training over egocentric and robot data integrating world coverage and action grounding. Composing these principles, we build OpenWAM-α, an open WAM pretrained on roughly 6,400 hours of egocentric human and robot data and evaluated across simulation and real-world benchmarks. Across the eight simulation benchmarks and the real-robot experiments, which together span embodiments from single-arm and bimanual manipulation to dexterous hands, OpenWAM-α delivers consistently excellent performance, sustaining its top-tier standing from simulation to the physical world. This review release provides the infrastructure, evaluation protocols, and data recipes; policy weights are not included.`;

/* The three pillars, color-coded exactly as in Figure 1 of the paper. */
export const PILLARS = [
  {
    id: "infra",
    name: "OpenWAM-Infra",
    color: "#E0342A",
    tagline: "A modular infrastructure for world–action modeling",
    body: "Factorizes the WAM design space into composable modules (dataloaders, encoders, backbones, architectures, attention masks) behind one trainer, one policy server, and one evaluation protocol spanning simulation and real robots.",
    facts: [
      "4 visual encoders",
      "5 video backbones",
      "6 architecture variants",
      "4 attention masks",
    ],
  },
  {
    id: "study",
    name: "OpenWAM-Study",
    color: "#62A932",
    tagline: "Design principles for world–action synergy",
    body: "Six controlled questions: architecture, backbone, visual representation, video↔action interaction, pretraining recipe, denoising strategy. Each is tested under the conditions the previous one established.",
    facts: [
      "Q1 Architecture",
      "Q2 Backbone",
      "Q3 Representation",
      "Q4 Interaction",
      "Q5 Data recipe",
      "Q6 Denoising",
    ],
  },
  {
    id: "alpha",
    name: "OpenWAM-α",
    color: "#1B6FD4",
    tagline: "From principles to a pretrained model",
    body: "The recipe instantiated at scale on egocentric human and robot data through a unified action space, then evaluated across eight simulation benchmarks and three real-robot platforms.",
    facts: [
      "518M frames (≈6,400 h)",
      "80-D unified action space",
      "8 simulation benchmarks",
      "3 real-robot platforms",
    ],
  },
] as const;

/* Findings 1-3, transcribed from Sections 4.1-4.3. */
export const FINDINGS = [
  {
    n: 1,
    question: "What world knowledge should a WAM inherit?",
    text: "A WAM inherits upstream world knowledge most effectively through a sufficiently capable generative backbone and a compact, information-rich visual representation space. Reconstructive encoders are not the only option; representation encoders with dimension compression are also performant.",
  },
  {
    n: 2,
    question: "How can we create synergy between world and action learning?",
    text: "World–action synergy requires explicit world-to-action information flow during training, and synchronized joint denoising at inference.",
  },
  {
    n: 3,
    question: "How can this synergy be scaled across domains?",
    text: "Embodied pretraining primarily expands OOD generalization. Robot trajectories preserve action grounding, egocentric video broadens transfer, and one-stage co-training integrates both effectively. At pretrained scale, mutual world–action visibility is consistently preferred.",
  },
] as const;

/* Table 3: the recipe accumulated by OpenWAM-Study. */
export const RECIPE = [
  {
    stage: "Inherit",
    finding:
      "Capable video backbones and compact representation latents transfer the strongest upstream priors.",
    carried: "Wan2.2-TI2V-5B; compact latent",
  },
  {
    stage: "Interact",
    finding:
      "Dedicated action capacity and world-to-action visibility are necessary; synchronized denoising performs best.",
    carried: "Dual joint self-attention; synchronized denoising",
  },
  {
    stage: "Consolidate",
    finding:
      "Embodied pretraining primarily improves OOD generalization and consistently favors mutual visibility.",
    carried: "One-stage ego + robot co-training; mutual visibility",
  },
] as const;

/* Headline numbers for the performance band. Real-robot figures are the
 * overall averages from Tables 7-8; simulation figures come from the Figure 1
 * radar. */
export const HEADLINE_STATS = [
  {
    label: "RoboDojo bimanual, real robot",
    value: "37.6 / 24.4",
    unit: "score / SR",
    note: "vs 22.9 / 12.8 for π0.5, the next best",
  },
  {
    label: "Simulation coverage",
    value: "8",
    unit: "benchmarks",
    note: "nine leaderboards across five embodiment categories",
  },
  {
    label: "Pretraining data",
    value: "6,400",
    unit: "hours",
    note: "518M frames, 70% robot / 30% egocentric human",
  },
] as const;

export const CLIP_BASE = "/videos/rollouts";

export const FILM = {
  src: "/videos/overview.mp4",
  poster: "/videos/overview-poster.jpg",
} as const;

/* Real-robot rollouts.
 *
 * Clips are the evaluation recordings at full length; the sources live outside
 * the repo. Each is re-encoded at its native resolution with a capped bitrate,
 * audio dropped, two-second keyframes so the scrubber can seek, and the moov
 * atom moved to the front so a clip starts playing before it has finished
 * downloading. Only fixed-camera views are shown — wrist cameras ride on the
 * arm, and close-ups are a different kind of shot that reads oddly in a row of
 * standard views.
 *
 * Aspect is per group: the RoboDojo rigs record 4:3, everything else 16:9.
 * A single grid aspect would crop the action out of frame. */

const SA_TASKS = [
  { id: "M", title: "Hang M" },
  { id: "chili_drawer", title: "Chili into drawer" },
  { id: "cup", title: "Hang cup" },
  { id: "jenga", title: "Jenga" },
  { id: "jenga_drawer", title: "Jenga into drawer" },
  { id: "ring", title: "Stack rings" },
] as const;

/* Scene camera only. The wrist view rides on the arm, so it is not a fixed
   camera position and does not belong beside the other rows. */
const SINGLE_ARM_CLIPS = SA_TASKS.map((t) => ({
  src: `sa-${t.id}-scene`,
  title: t.title,
}));

/* The successful RoboDojo runs, four per platform. */
const BIMANUAL_CLIPS = [
  ...["cover_blocks", "insert_tubes", "pack_and_pour_fruit", "store_in_safe"].map(
    (t) => ({ src: `bi-x5-${t}`, title: t.replace(/_/g, " "), platform: "ARX X5" })
  ),
  ...["fill_pen_holder", "put_objects_into_basket", "stack_bowls", "stand_up_bottles"].map(
    (t) => ({ src: `bi-piper-${t}`, title: t.replace(/_/g, " "), platform: "Piper" })
  ),
  ...["cap_pen", "disassemble_lego", "pack_objects_into_backpack", "sweep_blocks"].map(
    (t) => ({ src: `bi-piperx-${t}`, title: t.replace(/_/g, " "), platform: "Piper X" })
  ),
];

const DX_TASK_TITLES: Record<string, string> = {
  badminton: "Collect shuttlecocks",
  bottle: "Twist off bottle cap",
  cloth: "Put away clothes",
  tower: "Stack toy tower",
};

/* Suffix marks the evaluation setting: `id` is in-distribution, the rest are
 * the OOD variations reported in Table 8. */
const DX_CONDITIONS: Record<string, string> = {
  id: "in-distribution",
  id2: "in-distribution",
  background: "OOD background",
  layout: "OOD layout",
  light: "OOD lighting",
  obj: "OOD object",
};

const DEXTEROUS_CLIPS = [
  "badminton_background", "badminton_id", "badminton_layout", "badminton_light",
  "bottle_background", "bottle_id", "bottle_layout", "bottle_light", "bottle_obj",
  "cloth_background", "cloth_id", "cloth_layout", "cloth_light", "cloth_obj",
  "tower_id", "tower_layout", "tower_light",
].map((name) => {
  const [task, cond] = name.split("_");
  return {
    src: `dx-${name}`,
    title: DX_TASK_TITLES[task] ?? task,
    platform: DX_CONDITIONS[name.slice(task.length + 1)] ?? cond,
  };
});

/* Tiles per view is derived from the clip aspect so that every row lands on
 * roughly the same tile height — 4:3 at four across is 197px tall, 16:9 at
 * three is 200px. The dexterous row is the exception: its clips are the
 * high-resolution ones, so it keeps two across and runs taller, which is the
 * point of them.
 */
export const ROLLOUT_GROUPS = [
  {
    id: "single-arm",
    perView: 4,
    label: "Single-arm gripper",
    note: "Six tasks, each from the fixed scene camera.",
    aspect: "4 / 3",
    clips: SINGLE_ARM_CLIPS,
  },
  {
    id: "bimanual",
    perView: 4,
    label: "Bimanual \u2014 RoboDojo",
    note: "Successful runs across the three bimanual platforms, four each. OpenWAM-\u03B1 averages 37.6 score / 24.4 SR over all eighteen tasks, against 22.9 / 12.8 for the next best.",
    aspect: "4 / 3",
    clips: BIMANUAL_CLIPS,
  },
  {
    id: "dexterous",
    perView: 2,
    label: "Dexterous hand",
    note: "An embodiment that never appears in the pretraining mixture: 21 hand DoF on top of a 6-DoF end-effector pose. In-distribution runs alongside each OOD variation.",
    /* 1280x720 as recorded. Two across gives a 560px-wide tile, so the source
       is still oversampled at display size and stays sharp full-screen. */
    aspect: "16 / 9",
    clips: DEXTEROUS_CLIPS,
  },
] as const;
