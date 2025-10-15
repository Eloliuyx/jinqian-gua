// src/data/hexagrams.en.ts
import type { HexDatum } from "@/lib/types";

// Index: 0=Kun, 1=Zhen, 2=Kan, 3=Gen, 4=Xun, 5=Li, 6=Dui, 7=Qian
const LIST: HexDatum[] = [
  {
    no: 1,
    name: "Qian (The Creative)",
    guaci: "Creative power. Supreme success. Favorable to perseverance.",
    upper: 7,
    lower: 7,
    yaoci: [
      "Arrogant dragon will have cause to repent.",
      "Flying dragon in the heavens. It furthers one to see the great man.",
      "The superior man works ceaselessly, vigilant even at night—no blame.",
      "Leaping dragon in the abyss—no blame.",
      "Dragon appearing in the field. It furthers one to see the great man.",
      "Hidden dragon. Do not act."
    ],
    guaciPlain: "Heaven symbolizes pure creative energy. When aligned with this force—disciplined, steady, and inspired—great success follows. The key is perseverance grounded in integrity.",
    yaociPlain: [
      "At the height of success, overconfidence leads to downfall. Stay humble and alert.",
      "Power at its fullest—use it for the good of all, guided by wise counsel.",
      "Continuous effort and self-discipline keep success from turning to chaos.",
      "Prepare for advancement but wait for the right moment to rise.",
      "Potential begins to manifest—act with clarity and virtue.",
      "Talent lies dormant; conserve energy until the time is ripe."
    ]
  },
  {
    no: 2,
    name: "Kun (The Receptive)",
    guaci: "Receptive devotion. Supreme success. The perseverance of a mare brings advantage.",
    upper: 0,
    lower: 0,
    yaoci: [
      "Dragons fight in the wild. Their blood is black and yellow.",
      "Yellow skirt brings supreme good fortune.",
      "A sack tied up. No praise, no blame.",
      "Hidden brilliance. Perseverance brings good fortune. One may serve the king, but do not seek recognition.",
      "Straight, square, and great. Without practice, yet nothing remains unfitting.",
      "Treading on frost—hard ice is coming."
    ],
    guaciPlain: "Earth represents receptivity and nourishment. Success comes from humility, patience, and supporting others rather than dominating them.",
    yaociPlain: [
      "When strong and soft forces clash, chaos arises. Avoid conflict and preserve peace.",
      "Humility and integrity bring honor and lasting harmony.",
      "Remain silent and contained; neutrality keeps you safe.",
      "Serve quietly and faithfully without seeking reward.",
      "Be upright, reliable, and steady; natural goodness needs no display.",
      "Small signs foretell larger troubles—correct faults early."
    ]
  },
  {
    no: 3,
    name: "Zhun (Difficulty at the Beginning)",
    guaci: "Difficulty at the beginning works supreme success. It furthers one to persevere.",
    upper: 2,
    lower: 1,
    yaoci: [
      "Horses in retreat. Blood tears flow.",
      "Storing fat—small perseverance brings good fortune; great perseverance brings misfortune.",
      "Riding horses in pursuit. Seeking union—good fortune.",
      "Hunting deer without a guide—better to give up than lose one’s way.",
      "Tangled in mud. Bandits approach.",
      "Hesitation and obstruction. Favorable to remain in place and establish order."
    ],
    guaciPlain: "Beginnings are chaotic. Enduring hardship with patience and faith builds the foundation for future success.",
    yaociPlain: [
      "Even after struggle, setbacks bring pain—stay faithful to your path.",
      "Minor efforts succeed; overreaching brings harm.",
      "Initiative and collaboration lead to progress.",
      "Chasing goals blindly leads to confusion—pause and reassess.",
      "Obstacles and delays test resilience; perseverance will prevail.",
      "Stay grounded and methodical; order emerges from patience."
    ]
  },
  {
    no: 4,
    name: "Meng (Youthful Folly)",
    guaci: "Youthful folly has success. It is not I who seek the young fool; the young fool seeks me.",
    upper: 3,
    lower: 2,
    yaoci: [
      "Beating ignorance. Better to defend than to attack.",
      "Childlike simplicity—good fortune.",
      "Do not take a woman who cannot keep herself. No advantage.",
      "Frustration in ignorance—cause for concern.",
      "Youthful innocence brings good fortune.",
      "Educating the ignorant—good to correct, not to punish."
    ],
    guaciPlain: "Ignorance can become wisdom through humility and learning. True guidance must be sincere and measured.",
    yaociPlain: [
      "Teaching harshly provokes resistance; correct gently.",
      "Humility and willingness to learn bring blessings.",
      "Avoid shallow attachments that distract from learning.",
      "Beware stubborn ignorance; flexibility leads to growth.",
      "Maintain an open, curious mind—innocence can be strength.",
      "Use discipline wisely; education should enlighten, not humiliate."
    ]
  },
  {
    no: 5,
    name: "Xu (Waiting / Nourishment)",
    guaci: "Waiting with sincerity. Perseverance brings good fortune. It furthers one to cross the great water.",
    upper: 2, // Water over Heaven
    lower: 7,
    yaoci: [
      "Entering a cave. Unexpected guests arrive—welcome them with respect.",
      "Waiting with wine and food—perseverance brings good fortune.",
      "Waiting in blood—escape from the pit.",
      "Waiting in mud—bandits arrive.",
      "Waiting on the sand—small talk brings reproach but ends well.",
      "Waiting in the open field—no blame."
    ],
    guaciPlain: "Patience is power. When the time isn’t right, gather strength and prepare quietly; success will come naturally.",
    yaociPlain: [
      "Opportunities arrive unexpectedly—receive them with sincerity.",
      "Trust the process; calm enjoyment signals readiness.",
      "Face danger with composure; you will emerge unharmed.",
      "Beware getting stuck in trivial matters or conflicts.",
      "Small misunderstandings fade when intentions are pure.",
      "Stay open and steady—time will bring what you seek."
    ]
  },
  {
    no: 6,
    name: "Song (Conflict)",
    guaci: "Conflict. Sincere perseverance brings good fortune. Beware of entering into litigation.",
    upper: 7,
    lower: 2,
    yaoci: [
      "Awarded a belt, thrice stripped of it in one morning.",
      "Conflict brings good fortune to the just.",
      "Return home and rest; peace brings safety.",
      "Feeding on ancient virtue—danger but no blame.",
      "Unable to win, retreat avoids misfortune.",
      "Do not pursue the dispute. Small words, final peace."
    ],
    guaciPlain: "Disagreement is natural. Handle conflicts with honesty and restraint; winning is less important than restoring harmony.",
    yaociPlain: [
      "Temporary victories are hollow; pride will strip rewards away.",
      "Justice and integrity triumph even amid strife.",
      "Withdraw before bitterness spreads; peace is wiser.",
      "Uphold principle but avoid obstinacy.",
      "Know when to yield—retreat can be strength.",
      "Let go of contention; reconciliation brings true success."
    ]
  },
  {
    no: 7,
    name: "Shi (The Army)",
    guaci: "The army. Perseverance brings good fortune. The superior man leads with discipline.",
    upper: 0,
    lower: 2,
    yaoci: [
      "A great ruler founds a state; small men must not be employed.",
      "Hunting brings reward; the eldest leads, the younger carries burdens.",
      "The army rests on the left—no blame.",
      "The army with wagons full of corpses—misfortune.",
      "In the midst of the army—good fortune, no blame.",
      "The army marches with order; confusion brings disaster."
    ],
    guaciPlain: "Strength must serve righteousness. True leadership relies on order, integrity, and clear purpose.",
    yaociPlain: [
      "When power is secure, honor the worthy and dismiss the corrupt.",
      "Wise command brings unity and reward; favoritism invites loss.",
      "Discipline and restraint preserve stability.",
      "Misguided leadership leads to tragedy—beware pride.",
      "Serve faithfully; loyalty earns trust and success.",
      "Only through discipline can strength achieve peace."
    ]
  },
  {
    no: 8,
    name: "Bi (Holding Together)",
    guaci: "Holding together brings good fortune. Seek unity sincerely, for it furthers perseverance.",
    upper: 2, // Water over Earth
    lower: 0,
    yaoci: [
      "No head for holding together—misfortune.",
      "Displaying unity openly—good fortune.",
      "Outwardly united, inwardly faithful—good fortune.",
      "Unity with those outside—no blame.",
      "Unity from within—perseverance brings good fortune.",
      "Holding together with trust—no blame; success through sincerity."
    ],
    guaciPlain: "Cooperation and trust create strength. Real unity begins with sincerity, not mere agreement.",
    yaociPlain: [
      "Without leadership or vision, unity collapses.",
      "Visible harmony inspires confidence and success.",
      "True loyalty builds lasting alliances.",
      "Collaboration with others, when just, brings benefit.",
      "Inner alignment ensures collective success.",
      "Mutual trust creates enduring harmony and shared growth."
    ]
  },
];

// Append #9 ~ #16 (EN)
LIST.push(
  {
    no: 9,
    name: "Xiaoxu (Small Accumulating / Taming Power of the Small)",
    guaci: "Small Accumulating: success. Dense clouds—no rain from our western lands.",
    upper: 4, // Wind over Heaven
    lower: 7,
    yaoci: [
      "Already rained, already at rest; virtue is borne on high. A woman’s chastity is in danger; the moon nearly full; the noble one’s campaign is inauspicious.",
      "Trust bound together; wealth shared with the neighbor.",
      "With trust, blood departs and fear recedes; no blame.",
      "The cart’s wheel-spokes come loose; husband and wife turn against each other.",
      "Led back—good fortune.",
      "Returning by one’s own path—what blame? Good fortune."
    ],
    guaciPlain: "Strength is being gathered, not yet released. Progress comes through steady restraint, patient preparation, and cultivating trust rather than forcing results.",
    yaociPlain: [
      "At the peak of pressure, pause. Even with resources in place, timing matters—avoid risky showmanship.",
      "Mutual trust attracts help; wealth grows when shared, not hoarded.",
      "Sincerity calms conflict—fear fades when intentions are clear.",
      "Fraying bonds signal misalignment; repair relationships before pushing forward.",
      "A gentle correction toward the right course brings good outcomes.",
      "Return to your authentic way; small, timely adjustments avert bigger problems."
    ]
  },
  {
    no: 10,
    name: "Lü (Treading / Conduct)",
    guaci: "Treading on the tiger’s tail—it does not bite. Success.",
    upper: 7, // Heaven over Lake
    lower: 6,
    yaoci: [
      "Examine the steps and read the omens; the turning returns to prime good fortune.",
      "Resolute treading; perseverance brings danger.",
      "Treading on the tiger’s tail, anxious yet ending in good fortune.",
      "One-eyed can see; lame can tread. Treading the tiger’s tail, it bites—misfortune. The warrior serves the great ruler.",
      "Treading the level path; the recluse’s perseverance brings good fortune.",
      "Plain treading; going brings no blame."
    ],
    guaciPlain: "Walk carefully in powerful spaces. Good conduct is respectful, aware of risk, and anchored in integrity—then even peril becomes passable.",
    yaociPlain: [
      "At the summit, self-audit. Humility and reflection convert power into lasting good.",
      "Confidence without prudence courts danger—hold firm but don’t overextend.",
      "Caution in the face of power prevents harm; steady nerves bring a good end.",
      "Skill alone isn’t enough; without right timing and role, boldness backfires.",
      "Simple, principled behavior wins trust and safe passage.",
      "Keep it clean and straightforward—no drama, no blame."
    ]
  },
  {
    no: 11,
    name: "Tai (Peace)",
    guaci: "Peace. The small departs, the great approaches. Success.",
    upper: 0, // Earth over Heaven
    lower: 7,
    yaoci: [
      "The city wall falls back into the moat. Do not use the army. Proclaim within your own town—perseverance brings shame.",
      "Emperor Yi gives his younger sister in marriage—blessing and great good fortune.",
      "He flutters down; not enriched by his neighbor; no warnings needed—there is trust.",
      "No level ground not followed by slope; no going not followed by return. Hardship with perseverance: no blame. Do not worry; in eating there is blessing.",
      "He contains the uncultivated; crossing the great river; none are neglected; companions disappear; honor is found in the central path.",
      "Pulling up marsh grass by the roots, each according to its kind—setting out brings good fortune."
    ],
    guaciPlain: "Heaven and Earth connect; channels open. Prosperity flows when leaders stay centered, humble, and attentive to the common good.",
    yaociPlain: [
      "At the top, excess defense turns fortune into loss—lead with restraint.",
      "Right alliances bless everyone; union grounded in virtue multiplies good.",
      "Trust reduces the need for control; quiet grace keeps peace thriving.",
      "Even good times cycle—stay disciplined through ups and downs.",
      "In abundance, include the overlooked; walk the middle path.",
      "Begin by strengthening the roots—good outcomes spread through the whole."
    ]
  },
  {
    no: 12,
    name: "Pi (Standstill / Stagnation)",
    guaci: "Standstill. The great departs, the small approaches. No advantage for the superior man.",
    upper: 7, // Heaven over Earth
    lower: 0,
    yaoci: [
      "Standstill overturned—first standstill, then joy.",
      "Resting in standstill; the great man’s good fortune. ‘It is lost, it is lost!’—tie it to mulberry shoots.",
      "There is mandate—no blame.",
      "He hides his shame.",
      "They bear and support; the small man finds success; the great man is hindered.",
      "Pulling up marsh grass by the roots, each according to its kind. Perseverance brings good fortune and success."
    ],
    guaciPlain: "When values and power are misaligned, the noble withdraws. Maintain integrity, conserve energy, and prepare the turnaround.",
    yaociPlain: [
      "Cycles reverse—endure the stall and welcome renewal without arrogance.",
      "Anchor what matters; tie essentials to what is living and deep-rooted.",
      "Accept a rightful assignment and carry it cleanly.",
      "Own mistakes without excuses; private correction prevents public harm.",
      "In stagnant systems, opportunists thrive—stay principled and patient.",
      "Start small, fix the basics; persistence transforms standstill into progress."
    ]
  },
  {
    no: 13,
    name: "Tongren (Fellowship with Men)",
    guaci: "Fellowship in the open. Success. It furthers to cross the great water. Perseverance furthers.",
    upper: 7, // Heaven over Fire
    lower: 5,
    yaoci: [
      "Fellowship in the open fields—no regret.",
      "Fellowship: first wailing, then laughter. Great leaders meet.",
      "Scaling the wall—he cannot attack; good fortune.",
      "Weapons hidden in the thicket; climbing the high mound—three years, no arising.",
      "Fellowship within the clan—humiliation.",
      "Fellowship at the gate—no blame."
    ],
    guaciPlain: "True community is built in the open—shared purpose without hidden agendas. Cross big waters together; stay true together.",
    yaociPlain: [
      "Wide-open collaboration leaves no lingering regret.",
      "Initial friction yields to trust when great minds align.",
      "Boundaries respected, cooperation prospers without needless conquest.",
      "Paranoia isolates—drop the siege mindset or progress stalls.",
      "Clique-based unity shames the cause—include, don’t exclude.",
      "Begin with openness at your own door; transparency invites allies."
    ]
  },
  {
    no: 14,
    name: "Dayou (Possession in Great Measure)",
    guaci: "Great possession. Supreme success.",
    upper: 5, // Fire over Heaven
    lower: 7,
    yaoci: [
      "From heaven’s aid—good fortune; nothing that does not further.",
      "Trust like a bond, awesome in presence—good fortune.",
      "Not his own exuberance—no blame.",
      "A lord offers it to the Son of Heaven; the small man cannot.",
      "A great carriage to carry it; wherever one goes—no blame.",
      "No mixing with what harms; not a fault. Hardship—no blame."
    ],
    guaciPlain: "Abundance is a test of character. Use wealth to serve; let integrity, not possession, define greatness.",
    yaociPlain: [
      "Grace works through you—use it well.",
      "Authority rests on trust, not display.",
      "Hold prosperity lightly; avoid vanity.",
      "Share power for the common good; ego cannot carry this.",
      "Strength can bear great loads when the axle is just.",
      "Do not intermingle with corruption; endure trials unstained."
    ]
  },
  {
    no: 15,
    name: "Qian (Modesty)",
    guaci: "Modesty creates success. The superior man carries things through.",
    upper: 0, // Earth over Mountain
    lower: 3,
    yaoci: [
      "Proclaimed modesty—good to mobilize the army; campaign against the town and state.",
      "Not enriching oneself with one’s neighbor; good to undertake punitive action; nothing that does not further.",
      "Nothing that does not further; ordering things with modesty.",
      "Laboring modestly—the superior man brings matters to completion; good fortune.",
      "Proclaimed modesty; perseverance brings good fortune.",
      "The modest noble one—good fortune in crossing the great river."
    ],
    guaciPlain: "Modesty is power under control. By lowering the self, one raises the whole; that is why modesty succeeds.",
    yaociPlain: [
      "Openly practice modesty; it authorizes difficult tasks without arrogance.",
      "Decline unfair gain; act firmly for justice.",
      "Lead quietly—tidy the system with grace and restraint.",
      "Persistent, humble effort completes what pride cannot.",
      "Keep modesty visible and steady; it attracts trust.",
      "With modest heart, great crossings become possible."
    ]
  },
  {
    no: 16,
    name: "Yu (Enthusiasm)",
    guaci: "Enthusiasm. It furthers to establish lords and set the army in motion.",
    upper: 1, // Thunder over Earth
    lower: 0,
    yaoci: [
      "Dark enthusiasm; change occurs—no blame.",
      "Chronic illness; one does not die.",
      "From joy comes great gain; do not doubt—friends gather like hairpins.",
      "Gazing upward in delight—regret; delay brings regret.",
      "Armored upon the rock; not the whole day—perseverance brings good fortune.",
      "Proclaiming joy—misfortune."
    ],
    guaciPlain: "Joy is energy. Aim it with purpose. Channel collective spirit into worthy structure, or it disperses into noise.",
    yaociPlain: [
      "When excitement dims, pivot without self-reproach.",
      "Sustained morale outlasts setbacks—keep spirit steady.",
      "Shared celebration attracts allies and opportunity.",
      "Unfocused euphoria wastes time—re-ground before acting.",
      "Disciplined enthusiasm—brief, precise action—brings luck.",
      "Loud hype without substance invites trouble."
    ]
  },
);
// Append #17 ~ #24 (EN)
LIST.push(
  {
    no: 17,
    name: "Sui (Following)",
    guaci: "Following. Great success. Perseverance furthers. No blame.",
    upper: 6, // Dui (Lake)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "Bound and attached—following in chains. The king uses it to offer at the Western Mountain.",
      "Sincere in the beautiful—good fortune.",
      "Following gains; perseverance brings misfortune. With sincerity on the path and clarity—no blame.",
      "Tied to the husband, one loses the child. Following—seeking brings gain; staying correct is beneficial.",
      "Tied to the little boy, one loses the strong man.",
      "Change in office; perseverance brings good fortune. Going out and making connections brings merit."
    ],
    guaciPlain: "To follow is not to submit blindly; it is to align with what is true and timely. Choose the right leader, the right current, and follow with integrity.",
    yaociPlain: [
      "High stakes loyalty—bind yourself to a worthy cause; sacred purpose gives direction.",
      "Let genuine appreciation guide your choice of whom and what to follow—this brings blessing.",
      "If ‘following’ becomes rigid or self-serving, it turns unlucky; sincerity and clarity restore balance.",
      "Commit to virtuous partnership; goals pursued in right relationship flourish.",
      "Do not trail immaturity or comfort; follow strength and character.",
      "When circumstances shift, accept the new role and build good alliances."
    ]
  },
  {
    no: 18,
    name: "Gu (Work on What Has Been Spoiled)",
    guaci: "Work on the decayed. Supreme success. Favorable to cross the great water. Three days before the starting day; three days after.",
    upper: 3, // Gen (Mountain)
    lower: 4, // Xun (Wind)
    yaoci: [
      "Not serving kings and lords—noble in one’s work.",
      "Working on the father’s corruption—praise accrues.",
      "Working on the father’s corruption—going brings disgrace.",
      "Working on the father’s corruption—small remorse, no great blame.",
      "Working on the mother’s corruption—not suitable to persist.",
      "Setting right what the father spoiled. If there is a son, no blame on the departed. Danger, but in the end good fortune."
    ],
    guaciPlain: "Corruption left alone worsens; faced honestly, it can be transformed. True reform requires timing, courage, and care for roots and consequences.",
    yaociPlain: [
      "Choosing independence from corrupt power preserves integrity.",
      "Repairing legacy flaws earns respect; do the hard, thankless work.",
      "Reform done rashly draws reproach—prepare stakeholders first.",
      "Imperfect attempts still matter; keep improving without self-punishment.",
      "Some problems are not yours to fix by force; withdraw and reset.",
      "Heirship means responsibility, not blame—steer the lineage back to health."
    ]
  },
  {
    no: 19,
    name: "Lin (Approach)",
    guaci: "Approach. Great success. Favorable to be steadfast. By the eighth month, there is misfortune.",
    upper: 0, // Kun (Earth)
    lower: 6, // Dui (Lake)
    yaoci: [
      "Sincere approach—good fortune, no blame.",
      "Wise approach—the great ruler’s proper way: good fortune.",
      "Full approach—no blame.",
      "Sweet approach—nothing advantageous; if one becomes concerned, no blame.",
      "Sincere approach—good fortune; nothing unfavorable.",
      "Shared, heartfelt approach—perseverance brings good fortune."
    ],
    guaciPlain: "Drawing near with sincerity opens doors. Prosperity grows when leaders listen and include—yet all seasons turn, so hold success humbly.",
    yaociPlain: [
      "Lead with open heart; transparency disarms suspicion.",
      "Approach with discernment and fairness; this is sovereign behavior.",
      "When the moment is ripe, act openly and without fear.",
      "Charm alone doesn’t sustain progress; add conscience and care.",
      "Sincerity unlocks cooperation everywhere.",
      "Collective goodwill plus steady resolve makes approach enduring."
    ]
  },
  {
    no: 20,
    name: "Guan (Contemplation / Viewing)",
    guaci: "Contemplation. The ablution is made, but not yet the offering; filled with trust, they look up to him.",
    upper: 4, // Xun (Wind)
    lower: 0, // Kun (Earth)
    yaoci: [
      "Contemplating his life—the noble one is without blame.",
      "Contemplating my life—the noble one is without blame.",
      "Viewing the nation’s light—good to be the guest of the king.",
      "Contemplating my life—advance and retreat.",
      "Peering contemplation—favorable for the woman’s perseverance.",
      "Childlike contemplation—the small person has no blame; the noble one is distressed."
    ],
    guaciPlain: "Leadership begins in inner vision. People trust the one whose conduct they can contemplate and find clean, steady, and sincere.",
    yaociPlain: [
      "Assess your pattern of living—integrity makes one unassailable.",
      "Self-reflection precedes right action; know your impact.",
      "Study how a healthy polity shines; serve the common good as honored guest, not owner.",
      "Review your motives before moving; adjust with humility.",
      "Sustained, receptive attention—especially in care roles—brings benefit.",
      "Naïve gazing suits the unformed; the mature must contemplate more deeply."
    ]
  },
  {
    no: 21,
    name: "Shihe (Biting Through)",
    guaci: "Biting Through. Success. It is favorable to administer justice.",
    upper: 5, // Li (Fire)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "Neck fettered—ears cut off. Misfortune.",
      "Bites into dried meat and finds yellow gold. Firm yet perilous—no blame.",
      "Bites into dried lean meat and finds a metal arrow. Hardship in perseverance—good fortune.",
      "Bites into dried meat—meets poison; slight shame, no blame.",
      "Bites through flesh—nose cut off—no blame.",
      "Shoes shackled—toes cut off—no blame."
    ],
    guaciPlain: "When obstacles jam the flow, decisive truth-telling and fair penalties clear the way. Justice must be firm yet measured.",
    yaociPlain: [
      "Harsh punishment at the top signals systemic failure—danger.",
      "Hidden value appears through firm inquiry; act carefully, without greed.",
      "Righteous rigor hits the mark; just difficulty leads to good results.",
      "Expose what is harmful; correct it without vindictiveness.",
      "Law applied impartially may sting, but it keeps order.",
      "Set boundaries early; small corrective pain prevents larger harm."
    ]
  },
  {
    no: 22,
    name: "Bi (Grace / Adornment)",
    guaci: "Grace. Success. It is favorable for small undertakings.",
    upper: 3, // Gen (Mountain)
    lower: 5, // Li (Fire)
    yaoci: [
      "White grace—no blame.",
      "Grace in the hills and gardens; bundles of silk meager—regret, but in the end good fortune.",
      "Graceful like bleached white; the white horse flies—no robbers, a suitor.",
      "Graceful as if moistened; constancy brings good fortune.",
      "Grace the beard.",
      "Grace at the toes; leave the carriage and walk."
    ],
    guaciPlain: "Beauty must serve truth. Ornament is fitting when it expresses inner clarity, not when it masks a hollow core.",
    yaociPlain: [
      "Keep it simple and sincere—purity needs no ornament.",
      "Modest resources, well used, still lead to good ends.",
      "Signals of approach are honorable, not predatory—authentic courtship, not coercion.",
      "Refinement plus steadiness beautifies character.",
      "Don’t over-decorate the surface; attend to the person.",
      "Shed display when action is needed—substance over style."
    ]
  },
  {
    no: 23,
    name: "Bo (Splitting Apart)",
    guaci: "Splitting Apart. It does not further to have somewhere to go.",
    upper: 3, // Gen (Mountain)
    lower: 0, // Kun (Earth)
    yaoci: [
      "The great fruit is not eaten. The noble one gets a carriage; the small man strips his house.",
      "Stringing fish together; favor through the palace women—nothing that does not further.",
      "Peeling the bed to the flesh—misfortune.",
      "Stripping—no blame.",
      "Peeling the bed at the frame—misfortune.",
      "Peeling the bed at the feet—misfortune."
    ],
    guaciPlain: "Structures are failing; the shell remains, the core is gone. Do not advance. Preserve what little is sound, and prepare for renewal elsewhere.",
    yaociPlain: [
      "The wise conserve essentials for the future; the grasping lose even their shelter.",
      "Support from those within the system can briefly help; use it to safeguard virtue.",
      "When stability reaches the flesh, stop—further strain causes harm.",
      "Accept necessary losses without self-blame.",
      "Decay in the framework warns of imminent collapse—withdraw.",
      "Earliest warning signs matter—respond before failure deepens."
    ]
  },
  {
    no: 24,
    name: "Fu (Return)",
    guaci: "Return. Success. Going out and coming in without error. Friends come without blame. On the seventh day comes return. Favorable to have somewhere to go.",
    upper: 0, // Kun (Earth)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "Deluded return—misfortune. Disaster. Using the army brings great defeat; the ruler meets misfortune. For ten years nothing is favorable.",
      "Sincere return—no regret.",
      "Return through the center—one returns alone.",
      "Repeated return—danger, yet no blame.",
      "Restful return—good fortune.",
      "Return from not far—no remorse; great good fortune."
    ],
    guaciPlain: "Return is the turning of the cycle—back to the right path. Renewal comes by correcting course early and warmly welcoming what is wholesome.",
    yaociPlain: [
      "If you return only after deep delusion, fallout is heavy—learn before force is needed.",
      "Sincere recommitment dissolves regret.",
      "The central, solitary choice is often the truest—walk it.",
      "Backsliding happens; awareness prevents real harm.",
      "Quiet, timely resets are blessed.",
      "Notice you’ve strayed and turn back quickly—this brings great good."
    ]
  },
);

// Append #25 ~ #32 (EN)
LIST.push(
  {
    no: 25,
    name: "Wuwang (Innocence / The Unexpected)",
    guaci: "Innocence. Supreme success. Perseverance furthers. If someone is not as he should be, he has misfortune—no advantage in any direction.",
    upper: 7, // Qian (Heaven)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "Innocence brings misfortune in action—no advantage anywhere.",
      "Innocent illness—do not medicate; there is joy.",
      "Innocent calamity—tethered ox is carried off; the wanderer gains, townsfolk suffer.",
      "Persistence is correct—no blame.",
      "Not plowing, one reaps; not clearing, one harvests—advantage in having somewhere to go.",
      "Moving in innocence meets disaster—no advantage."
    ],
    guaciPlain: "Act from sincerity, not calculation. When motives are pure, life moves easily; forcing outcomes or gaming fate breaks the current.",
    yaociPlain: [
      "If you call impulse ‘purity,’ things go badly—don’t confuse want with truth.",
      "Some troubles resolve by letting nature run its course; don’t over-treat what time will heal.",
      "Random loss and random gain happen; keep your conduct clean and don’t take what isn’t yours.",
      "Stay true without stubbornness; correctness is quiet strength.",
      "Align with natural timing—results come without strain.",
      "If you rush under the banner of ‘innocence,’ you court preventable harm."
    ]
  },
  {
    no: 26,
    name: "Daxu (Great Taming / Great Accumulating)",
    guaci: "The great is tamed. Advantage in righteous persistence. Not eating at home—good fortune. Advantage in crossing the great water.",
    upper: 3, // Gen (Mountain)
    lower: 7, // Qian (Heaven)
    yaoci: [
      "Across heaven’s thoroughfare—success.",
      "Tied-off horns of a castrated bull—great good fortune.",
      "Good horses run: perseverance in hardship is beneficial. Train chariots and guards; advantage in having somewhere to go.",
      "The spokes of the cart are taken away.",
      "A calf’s nose-ring—great good fortune.",
      "Danger—advantage in stopping; good for self-cultivation."
    ],
    guaciPlain: "Store power and master yourself. Great strength under discipline becomes capability that benefits all.",
    yaociPlain: [
      "Right path, wide horizon—your effort meets a clear road.",
      "Restrain raw force early; gentled power becomes reliable.",
      "Channel energy into practice and protection; prepare before you go.",
      "If the vehicle can’t carry the load, pause and repair.",
      "Manage appetites and impulses; then strength becomes blessing.",
      "Know when to stop—self-control turns danger into growth."
    ]
  },
  {
    no: 27,
    name: "Yi (Nourishing / The Corners of the Mouth)",
    guaci: "Nourishing. Perseverance brings good fortune. Watch the jaws—what one seeks to fill with it.",
    upper: 3, // Gen (Mountain)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "From nourishment—advance brings danger; good fortune in remaining steadfast; no advantage in crossing the great water.",
      "Turning nourishment upside down—good fortune; crossing the great river brings advantage.",
      "Contrary nourishment—perseverance brings misfortune; for ten years nothing benefits.",
      "Nourishment turned on its head—good fortune; tiger-gaze, coveting—no blame.",
      "Opposing the regular—staying correct brings good fortune; do not cross the great water.",
      "Origin of nourishment—danger but good fortune; advantage in crossing the great water."
    ],
    guaciPlain: "What you feed on shapes you—food, words, media, company. Choose clean inputs and share sustenance wisely.",
    yaociPlain: [
      "If your diet (of ideas or food) is skewed, don’t expand it—stabilize first.",
      "Reform what and how you ‘eat’; bold corrections open new passage.",
      "Persisting in bad inputs poisons outcomes—change now, not years later.",
      "Strong appetite needs strong ethics; intensity without greed avoids blame.",
      "Hold to sound routines; don’t test yourself with unnecessary risks.",
      "Root your life in true nourishment—then big moves become safe."
    ]
  },
  {
    no: 28,
    name: "Daguo (Great Exceeding)",
    guaci: "Great Exceeding. The ridgepole sags. Advantage in having somewhere to go; success.",
    upper: 6, // Dui (Lake)
    lower: 4, // Xun (Wind)
    yaoci: [
      "Crossing over—submerging the head. Misfortune; no blame.",
      "Withered poplar puts forth shoots; old man takes a young wife—no blame, no praise.",
      "The ridgepole buckles—misfortune.",
      "The ridgepole has support—good fortune; there is cause for regret.",
      "Withered poplar blossoms; old woman takes a husband—no praise, no blame.",
      "Crossing greatly—submerging the head. Misfortune; no blame."
    ],
    guaciPlain: "When pressure is extreme, structures strain. Strengthen the center, lighten the load, and act with proportion.",
    yaociPlain: [
      "Overreach leads to wipeout; accept limits and protect life first.",
      "New growth from old wood—realistic but modest gains.",
      "If the core bends, stop—don’t pretend it holds.",
      "Reinforce wisely; you’ll still regret prior excess, but you can stabilize.",
      "Flashy late-season bloom: looks bright, little fruit—don’t expect too much.",
      "Heroic leaps under failing beams end badly—step back."
    ]
  },
  {
    no: 29,
    name: "Kan (The Abysmal / Water)",
    guaci: "Repeated Abyss. Sincerity. The heart is confident. Practice brings success.",
    upper: 2, // Kan (Water)
    lower: 2, // Kan (Water)
    yaoci: [
      "Bound with cords and thorns; three years not obtained—misfortune.",
      "The pit is not full—there is order; no blame.",
      "Coming to the abyss, peril upon peril; do not act.",
      "A jug of wine and a bowl of rice; use earthenware—enter through the window; no blame.",
      "The abyss is not brimful; already leveled—no blame.",
      "Tied with cords and thorns, placed amid briars; three years not obtained—misfortune."
    ],
    guaciPlain: "This is the training in danger. Keep faith, keep discipline, and move only when the footing is real.",
    yaociPlain: [
      "Long entanglement—don’t thrash; conserve strength and learn.",
      "Even in risk, order your steps—small correctness prevents big falls.",
      "Double-danger moments call for stillness; action would sink you.",
      "Simplicity and sincerity open side-doors—humble means work.",
      "A stable channel forms; do not get greedy—just cross safely.",
      "If you keep repeating the same trap, time alone won’t free you—change the pattern."
    ]
  },
  {
    no: 30,
    name: "Li (The Clinging / Fire)",
    guaci: "Clinging. Prosperous and smooth. Perseverance furthers; it is favorable to raise a cow.",
    upper: 5, // Li (Fire)
    lower: 5, // Li (Fire)
    yaoci: [
      "The king uses it to campaign; great victory—no blame.",
      "Tears flow and sighing—good fortune.",
      "Sudden blaze—death, abandonment.",
      "At sunset clinging: do not drum on jars and sing; elders sigh—misfortune.",
      "Yellow clinging—prime good fortune.",
      "Treading carefully—no blame."
    ],
    guaciPlain: "Clarity needs something to cling to—principles, practice, relationships. Light without attachment flickers out.",
    yaociPlain: [
      "Use your clarity for just action; when purpose is right, bold steps succeed.",
      "Emotion rises and clears—let feeling refine, not drown, your insight.",
      "Burn-bright-burn-out: intensity without root collapses.",
      "When light wanes, do not force cheer; tend the flame with sobriety.",
      "Center your brightness in the golden mean—balanced clarity is most auspicious.",
      "Even in light, step mindfully; vigilance keeps you blameless."
    ]
  },
  {
    no: 31,
    name: "Xian (Influence / Wooing)",
    guaci: "Influence. Success. Favorable for perseverance. Taking a maiden in marriage brings good fortune.",
    upper: 6, // Dui (Lake)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "Influence in the jaws and tongue.",
      "Influence in the back—no regret.",
      "Influence in the thighs—holding on to what follows; going brings humiliation.",
      "Constancy brings good fortune; restless going and coming—companions follow your thought.",
      "Influence in the flesh of the back—no regret.",
      "Influence in the cheeks and tongue."
    ],
    guaciPlain: "True influence moves from inner stillness to gentle attraction. It’s resonance, not pressure.",
    yaociPlain: [
      "Mind your words—speech shapes hearts first.",
      "Let tension melt; quiet presence persuades more than force.",
      "Clinging desire makes you chase; dignity is lost—release the grip.",
      "Steady virtue draws allies without striving.",
      "When touch is sincere and moderate, there’s nothing to regret.",
      "Highest influence is refined communication—clear, kind, and timely."
    ]
  },
  {
    no: 32,
    name: "Heng (Duration)",
    guaci: "Duration. Success. No game for the young man. Advantage in being steadfast.",
    upper: 1, // Zhen (Thunder)
    lower: 4, // Xun (Wind)
    yaoci: [
      "Lasting in the way—no blame.",
      "Remorse disappears.",
      "Not lasting in one’s virtue—shame.",
      "No game in hunting—nothing is gained.",
      "Lasting in virtue—woman’s good fortune; man’s misfortune.",
      "Shaking duration—misfortune."
    ],
    guaciPlain: "What endures is paced, centered, and faithful. Duration is not rigidity; it is living consistency.",
    yaociPlain: [
      "Stay with the path that stays with you—constancy without stubbornness.",
      "Clear up second thoughts—commit to the right rhythm.",
      "Inconstancy of character erodes trust—build habits that match your values.",
      "When timing and prey aren’t aligned, don’t force a hunt—conserve energy.",
      "Right roles matter: constancy suits each nature differently; honor natural dispositions.",
      "Restless agitation breaks continuity—stabilize before acting."
    ]
  },
);

// Append #33 ~ #40 (EN)
LIST.push(
  {
    no: 33,
    name: "Dun (Retreat)",
    guaci: "Retreat. Success. In what is small, perseverance furthers.",
    upper: 7, // Qian (Heaven)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "Fat retreat—nothing that does not further.",
      "Excellent retreat—perseverance brings good fortune.",
      "Good retreat—the noble one has good fortune; the small man does not.",
      "Halting retreat. Affliction and danger. Keeping on with petty people and maidservants—good fortune.",
      "Held fast with yellow oxhide—no one can loosen.",
      "Retreat by the tail—danger. Do not have a direction to go."
    ],
    guaciPlain: "Retreat is not defeat; it is strategic preservation. Withdraw from entanglement, keep your dignity, and let your strength regather.",
    yaociPlain: [
      "Withdraw early and fully; a clean exit preserves future options.",
      "A principled step back, held steadily, becomes a wise step forward.",
      "Noble retreat chooses integrity over ego; opportunists can’t use it well.",
      "If retreat is delayed and messy, protect the vulnerable and stabilize first.",
      "Bind yourself to firm limits so temptation cannot drag you back.",
      "When you are the last to leave, risk spikes—don’t push on into danger."
    ]
  },
  {
    no: 34,
    name: "Dazhuang (Great Power)",
    guaci: "Great Power. Advantage in being correct.",
    upper: 1, // Zhen (Thunder)
    lower: 7, // Qian (Heaven)
    yaoci: [
      "Ram butts the fence—cannot retreat, cannot advance. Nothing furthers; hardship then good fortune.",
      "Loses the ram on easy ground—no regret.",
      "Perseverance brings good fortune; regret disappears. The fence breaks—no entanglement; strength at the axle of a great carriage.",
      "The small man uses force; the noble one uses restraint. Perseverance brings danger. A ram butts the fence and tangles its horns.",
      "Perseverance brings good fortune.",
      "Strength in the toes—advancing brings misfortune; yet there is trust."
    ],
    guaciPlain: "Strength is not domination; it is usable energy under moral control. Aim it, limit it, and time it—then it builds, not breaks.",
    yaociPlain: [
      "When brute force meets resistance, stop forcing; seek a new angle.",
      "Let go of small victories that trap you; then there’s nothing to regret.",
      "Repair the load-bearing parts and move with composed power.",
      "Restraint is strength’s steering wheel; raw push entangles you.",
      "Hold to right purpose—strength ripens into benefit.",
      "Power at the extremities is unstable; ground before moving."
    ]
  },
  {
    no: 35,
    name: "Jin (Advance / Progress)",
    guaci: "Progress. The noble one is bright and sincere; good fortune.",
    upper: 5, // Li (Fire)
    lower: 0, // Kun (Earth)
    yaoci: [
      "Advancing with horns; fit to attack a city. Danger but good fortune; no blame; perseverance brings regret.",
      "Regret disappears. Lose or gain—do not worry; going brings good fortune; nothing is unfavorable.",
      "Advancing like a field rat—perseverance brings danger.",
      "All give assent—regret disappears.",
      "Advancing with anxiety; perseverance brings good fortune; receive great blessing from the royal ancestress.",
      "Advancing yet hindered; perseverance brings good fortune. Without trust, still there is abundance; no blame."
    ],
    guaciPlain: "Progress is radiant when rooted in sincerity. Move forward clearly, but don’t let success outpace humility or timing.",
    yaociPlain: [
      "Ambitious thrusts can work—but prolonged aggression invites regret.",
      "Detach from win-loss fixation; walk the right path and luck returns.",
      "Sneaking advancement erodes dignity; choose transparency over cunning.",
      "When the circle aligns, step through—shared assent carries you.",
      "Proceed despite nerves; grace meets earnest effort.",
      "If momentum outstrips trust, pause to rebuild credibility."
    ]
  },
  {
    no: 36,
    name: "Mingyi (Darkening of the Light)",
    guaci: "Darkening of the light. It is beneficial to be steadfast in adversity.",
    upper: 0, // Kun (Earth)
    lower: 5, // Li (Fire)
    yaoci: [
      "Not bright—dark. First ascending to heaven, afterward sinking into the earth.",
      "The Bright One wounded in the left thigh; help with a strong horse—good fortune.",
      "Darkening in the southern hunt—capture the great leader; do not be too hasty in correctness.",
      "Entering the left belly; obtaining the heart of darkened brightness as one goes out of the gate and court.",
      "The darkening of Prince Ji—perseverance is beneficial.",
      "Darkening while flying—wings droop. The noble one on the road, three days without food. If he has somewhere to go, the host murmurs."
    ],
    guaciPlain: "When the world grows hostile to light, hide yours wisely. Protect the flame, act with quiet courage, and wait for dawn.",
    yaociPlain: [
      "Fortunes reverse—accept obscurity without losing inner height.",
      "Wounded integrity heals with strong support; summon stout allies.",
      "Act decisively but not rashly; justice needs timing as well as truth.",
      "Understand the hidden centers of power before you step out.",
      "Hold your virtue like Prince Ji—endure and preserve what is right.",
      "Travel lean and low-profile; hungry but undeterred."
    ]
  },
  {
    no: 37,
    name: "Jiaren (The Family)",
    guaci: "The Family. The woman’s perseverance is beneficial.",
    upper: 4, // Xun (Wind)
    lower: 5, // Li (Fire)
    yaoci: [
      "Trust and dignity—finally good fortune.",
      "The king has a home; have no anxiety—good fortune.",
      "A wealthy household—great good fortune.",
      "A harsh household—regret and danger, yet good. If women and children giggle, in the end there is shame.",
      "No independent aim; centered at the hearth—perseverance brings good fortune.",
      "Order within the home—regret disappears."
    ],
    guaciPlain: "Leadership begins at home. Roles, warmth, and boundaries create a hearth where virtue grows and spreads outward.",
    yaociPlain: [
      "Trust plus appropriate authority brings lasting harmony.",
      "When the center leads with care, the whole house relaxes.",
      "Resources used for shared flourishing magnify blessing.",
      "Firm kindness beats lax indulgence; disorder breeds shame.",
      "Serve the center; humble constancy sustains the family fire.",
      "Clear rules lovingly held remove regret before it starts."
    ]
  },
  {
    no: 38,
    name: "Kui (Opposition)",
    guaci: "Opposition. In small matters, good fortune.",
    upper: 5, // Li (Fire)
    lower: 6, // Dui (Lake)
    yaoci: [
      "Opposed and alone: seeing a pig covered in mud, a cart full of ghosts. First string the bow, then set it down. Not bandits—marriage. Going meets rain—good fortune.",
      "Regret disappears; his clan bites through flesh. Going—what blame?",
      "Opposed and solitary: meeting a great man, mutual trust. Danger, no blame.",
      "Seeing the cart dragged back, the ox halted; the man’s forehead flayed and nose cut. No beginning, but an end.",
      "Meeting the lord in a narrow lane—no blame.",
      "Regret disappears. Lose the horse—do not pursue; it returns. Seeing a bad man—no blame."
    ],
    guaciPlain: "Difference does not require enmity. Clarify purpose, seek the right partner, and let shared rain end the drought.",
    yaociPlain: [
      "Misread signals turn conflict into union—pause, look again, and welcome the cleansing rain.",
      "Cut through confusion with decisive good faith; then proceed.",
      "Find the big soul across the divide; trust bridges danger.",
      "Escalation scars everyone—stop pulling against the cart.",
      "Narrow channels require humility; yield the way to meet rightly.",
      "What’s yours returns when you quit chasing—drop the feud."
    ]
  },
  {
    no: 39,
    name: "Jian (Obstruction)",
    guaci: "Obstruction. The southwest furthers; the northeast does not. Seeing the great man brings good fortune.",
    upper: 2, // Kan (Water)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "Going is obstructed; returning brings greatness—good fortune. Advantage in seeing the great man.",
      "Great obstruction—friends arrive.",
      "Going is obstructed; returning brings connection.",
      "Going is obstructed; returning brings reversal.",
      "The king’s minister is obstructed—through no fault of his own.",
      "Going is obstructed; returning brings praise."
    ],
    guaciPlain: "When the road ahead is blocked, turn toward allies and fundamentals. Seek counsel, regroup, and move when the ground is true.",
    yaociPlain: [
      "Don’t force through; circle back and meet wise help.",
      "Hard times draw real friends—welcome them.",
      "Rejoin the base; reconnection restores flow.",
      "Admit the detour; retreat now saves later progress.",
      "Loyal service suffers setbacks; keep faith without self-blame.",
      "Turning back with grace earns respect."
    ]
  },
  {
    no: 40,
    name: "Jie (Deliverance)",
    guaci: "Deliverance. The southwest furthers. If there is no longer anything where one has to go, return is without blame.",
    upper: 1, // Zhen (Thunder)
    lower: 2, // Kan (Water)
    yaoci: [
      "The duke shoots a falcon on a high wall and takes it—nothing that does not further.",
      "The noble one has deliverance—good fortune. He places trust even in the small person.",
      "Release the big toe—companions arrive in trust.",
      "Carrying a burden yet riding—robbers arrive. Perseverance brings shame.",
      "In the fields, three foxes are taken; one obtains the yellow arrows. Perseverance brings good fortune.",
      "No blame."
    ],
    guaciPlain: "After tension, release. Untie what can be untied, correct what must be corrected, then move lightly with renewed purpose.",
    yaociPlain: [
      "A precise, timely act resolves the whole tangle.",
      "Mercy plus firmness frees the group—trust even small helpers wisely.",
      "Start with the first knot; solidarity follows.",
      "Mixed signals invite predators—drop the showy ride and simplify.",
      "Skill and patience remove the hidden snares—stay steady.",
      "With the pressure gone, don’t invent new problems."
    ]
  },
);

// Append #41 ~ #48 (EN)
LIST.push(
  {
    no: 41,
    name: "Sun (Decrease)",
    guaci: "Decrease. Success. Perseverance furthers. It furthers to undertake something.",
    upper: 3, // Gen (Mountain)
    lower: 6, // Dui (Lake)
    yaoci: [
      "Finished one’s tasks—going swiftly; no blame. Consider decreasing oneself.",
      "Perseverance furthers. Good to undertake something; two small bowls suffice for the offering.",
      "Three travel together—one is lost; one travels alone—finds a companion.",
      "Decreasing faults brings swift joy from others; no blame.",
      "Someone truly increases him—ten pairs of tortoise shells cannot oppose it; great good fortune.",
      "No blame in decreasing oneself to increase others. Perseverance brings good fortune; it furthers to have somewhere to go."
    ],
    guaciPlain: "Give from where there is surplus to where there is need. Trim excess, reduce ego, and reallocate energy to what matters—this creates stability and flow.",
    yaociPlain: [
      "Finish what’s on your plate and lighten your load; voluntary simplicity prevents trouble.",
      "Sincerity over spectacle—small, heartfelt offerings are effective.",
      "Large groups can dilute purpose; a focused alliance succeeds.",
      "Cut a bad habit and you’ll attract glad allies.",
      "Real support arrives when your aim is worthy—accept it humbly.",
      "Decrease self-importance to raise the whole; commit and move."
    ]
  },
  {
    no: 42,
    name: "Yi (Increase)",
    guaci: "Increase. It furthers to undertake something; it furthers to cross the great water.",
    upper: 4, // Xun (Wind)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "It is fitting to use great works—great good fortune; no blame.",
      "Someone truly increases him—ten pairs of tortoise shells cannot oppose it; lasting good fortune. The king offers at the altar—good.",
      "Increase used in times of danger—no blame; with trust, proceed in the middle; report with the jade tablet.",
      "Proceed in the middle; report and rely on the right support; moving the capital brings benefit.",
      "Trustful generosity—ask nothing; great good fortune. Trustful generosity to me—good.",
      "No one increases him; or they strike him. If the heart is unsettled—misfortune."
    ],
    guaciPlain: "Give and grow. Increase flows to what is useful and generous. Act boldly for shared benefit; align with those who multiply good.",
    yaociPlain: [
      "Invest in big, worthy work—fortune favors courageous giving.",
      "When goodness gathers around you, accept it and serve widely.",
      "Use gains to handle hard things; transparency keeps you safe.",
      "Center, report, and partner well; strategic relocation can thrive.",
      "Give without agenda; trust invites blessing.",
      "Greed or agitation reverses growth—steady your heart."
    ]
  },
  {
    no: 43,
    name: "Guai (Break-through / Resoluteness)",
    guaci: "Break-through. Declare the matter at court—truthfully. Danger. Notify one’s own city. Do not resort to arms. It furthers to undertake something.",
    upper: 6, // Dui (Lake)
    lower: 7, // Qian (Heaven)
    yaoci: [
      "No cry—at last misfortune.",
      "Alarm and calling out; at night there is warfare—do not be afraid.",
      "Power in the cheeks—danger. The noble one breaks through alone; meeting rain, one is soaked but without blame.",
      "No skin on the buttocks—movement is hindered. Leading a sheep—regret vanishes; words are not believed.",
      "Stalk grass—resolute; moving in the middle—no blame.",
      "Resolute in the fore-toes—going not appropriate; misfortune."
    ],
    guaciPlain: "Name the truth and clear the channel. Be firm, public, and measured—cut through buildup without brutality.",
    yaociPlain: [
      "If you stay silent, problems harden—speak up or pay later.",
      "Sound the alarm, coordinate calmly; fear recedes when leadership is clear.",
      "Force without restraint backfires; principled clarity weathers the storm.",
      "Don’t let irritation run the mission; handle resistance, keep moving.",
      "Decide in the center—firm but fair removes blame.",
      "Don’t lunge from impulse; premature moves spoil the cause."
    ]
  },
  {
    no: 44,
    name: "Gou (Coming to Meet)",
    guaci: "Coming to Meet. The maiden is powerful—do not marry such a woman.",
    upper: 4, // Xun (Wind)
    lower: 7, // Qian (Heaven)
    yaoci: [
      "Tied to a metal brake—constancy brings good fortune; going meets misfortune. A lean pig ready to leap.",
      "There is fish in the basket—no blame; not suitable for guests.",
      "The buttocks without skin—movement impeded; danger. No great blame.",
      "No fish in the basket—rising misfortune.",
      "With a gourd, wrapping melons—hidden brilliance; something falls from heaven.",
      "Coming to meet with horns—humiliation; no blame."
    ],
    guaciPlain: "A sudden, seductive force approaches. Meet it consciously—set boundaries. Engage but do not be taken over.",
    yaociPlain: [
      "Apply brakes early; temptation jumps when unguarded.",
      "Small gain is fine; don’t escalate or entertain further.",
      "Compromised position—move carefully, accept limits.",
      "Empty allure leads to loss—decline the bait.",
      "Contain the energy; modesty and restraint draw real blessing.",
      "Deflect with dignity—refuse entanglement without retaliation."
    ]
  },
  {
    no: 45,
    name: "Cui (Gathering Together)",
    guaci: "Gathering. Success. The king approaches his temple; it furthers to see the great man. Perseverance furthers. Offering at the altar is advantageous.",
    upper: 6, // Dui (Lake)
    lower: 0, // Kun (Earth)
    yaoci: [
      "Gathering with cries—then laughter. No blame. Do not worry; to go is without blame.",
      "Led together—good fortune; no blame. Sincere offerings are favorable.",
      "Gathering with sighs—no advantage; going without blame; small regret.",
      "Great good fortune; no blame.",
      "Gathered to a position—no blame. Not trusting—ever steadfast; regret disappears.",
      "Sighing and tears—no blame."
    ],
    guaciPlain: "Unite around meaning, not noise. Ritual, gratitude, and sound leadership bind diverse people into real cohesion.",
    yaociPlain: [
      "Early confusion settles—go forward without anxiety.",
      "Sincere ceremony bonds the group—good fortune.",
      "If morale dips, don’t force; steady steps restore tone.",
      "Shared purpose crystallizes—big luck.",
      "Hold the center steadily; trust builds with consistency.",
      "Even honest grief can gather hearts—be true and gentle."
    ]
  },
  {
    no: 46,
    name: "Sheng (Pushing Upward)",
    guaci: "Pushing Upward. Great success. See the great man. Fear not. Southward going brings good fortune.",
    upper: 4, // Xun (Wind)
    lower: 0, // Kun (Earth)
    yaoci: [
      "True ascent—great good fortune.",
      "Sincere ascent—good fortune; nothing unfavorable.",
      "Ascending into an empty city.",
      "The king uses it to offer at Mount Qi—good fortune; no blame.",
      "Persistent rectitude—good fortune; advancing step by step.",
      "Ascending in darkness—unceasing perseverance furthers."
    ],
    guaciPlain: "Grow like a tree—quiet, steady, rooted. Seek mentors, move south (toward clarity and warmth), and let persistence do the lifting.",
    yaociPlain: [
      "Authentic growth opens doors—fortune follows truth.",
      "Wholehearted effort clears resistance.",
      "When opposition vanishes, advance simply and humbly.",
      "Honor what is higher; service uplifts your ascent.",
      "Climb with rhythm—ethical stamina compounds.",
      "In obscurity, keep going; endurance makes the summit."
    ]
  },
  {
    no: 47,
    name: "Kun (Oppression / Exhaustion)",
    guaci: "Oppression. Success. Perseverance. The great man brings good fortune. No blame. When one has something to say, it is not believed.",
    upper: 6, // Dui (Lake)
    lower: 2, // Kan (Water)
    yaoci: [
      "Buttocks oppressed in the stocks; entering a gloomy gorge—three years one sees no one.",
      "Oppressed while drinking and feasting; crimson sash comes—good to make offering; going brings misfortune; no blame.",
      "Oppressed by stone; leaning on thorns; entering the house, not seeing the wife—misfortune.",
      "Coming slowly—oppressed in a metal carriage; distress, yet there is an end.",
      "Nose and feet cut off—oppressed in scarlet; slowly there is joy; good to make offering.",
      "Oppressed by creeping vines and thorns; three years not obtained—misfortune."
    ],
    guaciPlain: "Tight places test breath and voice. Conserve strength, keep faith, and act only when pathways are genuinely open.",
    yaociPlain: [
      "Severe limits—accept containment; endure without self-pity.",
      "Even in hardship, honor keeps dignity; ritual steadies the soul.",
      "Isolation and strain—don’t push further into harm.",
      "Progress crawls; patience carries you through.",
      "Humiliation can ripen into clarity—thanksgiving helps recovery.",
      "If the pattern stays the same, time won’t free you—change strategy."
    ]
  },
  {
    no: 48,
    name: "Jing (The Well)",
    guaci: "The Well. The town may be changed, but the well does not. It neither increases nor decreases. People come and go and draw from it.",
    upper: 2, // Kan (Water)
    lower: 4, // Xun (Wind)
    yaoci: [
      "The well is muddy—no one drinks; the old well has no birds.",
      "The well is full of fish—cracks in the pitcher; it leaks.",
      "The well is cleaned but not used; my heart is sad. If I were used, good fortune.",
      "The well is lined—no blame.",
      "The well water is clear and cold—one may drink.",
      "The well gathers—do not cover it. There is trust, yet no completion."
    ],
    guaciPlain: "Tend the source. Infrastructure and virtues that nourish all must be kept clear, accessible, and shared.",
    yaociPlain: [
      "Neglected sources don’t nourish—restore fundamentals.",
      "Resources exist but the vessel fails—fix the container.",
      "Capacity without application wastes potential—put gifts to use.",
      "Solid craftsmanship prevents loss—do the unseen work.",
      "When the water is clear, share it freely.",
      "Keep the well open and trustworthy—common good over private control."
    ]
  }
);

// Append #49 ~ #56 (EN)
LIST.push(
  {
    no: 49,
    name: "Ge (Revolution / Molting)",
    guaci: "Revolution. On your own day, there is trust. Great success. Perseverance furthers. Regret disappears.",
    upper: 6, // Dui (Lake)
    lower: 5, // Li (Fire)
    yaoci: [
      "The superior man changes like a leopard; the inferior man changes his face. Setting forth brings misfortune; to remain persevering brings good fortune.",
      "The great man changes like a tiger; even before consulting the oracle, he is believed.",
      "Regret disappears. With trust, changing the mandate is auspicious.",
      "Advancing brings misfortune; steadfastness is perilous. When talk of change has gone three times, there is trust.",
      "When one’s own day comes, make the change; going forth brings good fortune—no blame.",
      "Firmly bound with yellow oxhide."
    ],
    guaciPlain: "Authentic change lands when the time is truly yours. Reform through integrity, not impulse; then support appears and regret dissolves.",
    yaociPlain: [
      "Transform substance, not just appearances; at peak momentum, stay principled rather than charging out.",
      "When vision is great and timely, trust precedes persuasion.",
      "If the center is right, even bold resets become wholesome.",
      "Don’t rush change; let consensus mature—then move.",
      "Act when timing and mandate align; decisive steps are protected.",
      "Anchor the process—secure constraints keep change from unraveling."
    ]
  },
  {
    no: 50,
    name: "Ding (The Cauldron)",
    guaci: "The Cauldron. Supreme good fortune. Success.",
    upper: 5, // Li (Fire)
    lower: 4, // Xun (Wind)
    yaoci: [
      "The cauldron has jade rings—great good fortune; nothing that does not further.",
      "The cauldron has yellow ears and golden rings—beneficial to be steadfast.",
      "The cauldron’s legs break; the lord’s food is spilled; its form is stained—misfortune.",
      "The cauldron’s ears are changed; movement is blocked. Pheasant fat not eaten. After rain—regret vanishes; good fortune.",
      "The cauldron is filled. My adversary is ill and cannot approach—good fortune.",
      "The cauldron overturns its feet; it is favorable to remove what is spoiled. Gaining a concubine for her son—no blame."
    ],
    guaciPlain: "The cauldron symbolizes culture—how we refine raw materials into shared nourishment. Align talent with service, and refinement becomes blessing.",
    yaociPlain: [
      "Beauty and function united—excellence that uplifts everyone.",
      "Solid fittings and steady virtue make gifts dependable.",
      "If the base fails, offerings spill—repair foundations first.",
      "Adapt the form; after the storm, use refinement to restore value.",
      "Right content repels hostility—quiet abundance is protective.",
      "Clear out what’s spoiled; new alliances can extend the work without shame."
    ]
  },
  {
    no: 51,
    name: "Zhen (The Arousing / Thunder)",
    guaci: "Shock. Success. Shock comes—laughing words follow. The shock terrifies for a hundred miles, yet he does not drop the sacrificial spoon and chalice.",
    upper: 1, // Zhen (Thunder)
    lower: 1, // Zhen (Thunder)
    yaoci: [
      "Shock flutters and flurries; eyes stare. Going brings misfortune. If shock does not reach oneself but only the neighbor—no blame. Words about marriage.",
      "Shock comes and goes—danger. Nothing is lost; there is work to do.",
      "Shock drives into the mud.",
      "Startled and unsettled; yet acting under shock brings no blame.",
      "Shock comes—loss of valuables; climbing the nine hills. Do not pursue—it is recovered in seven days.",
      "Shock comes: at first terror, afterward laughter—good fortune."
    ],
    guaciPlain: "Disruption awakens. Hold to what is sacred and functional, and fear gives way to clarity and renewal.",
    yaociPlain: [
      "Don’t sprint into the storm; if the hit passes you by, keep centered.",
      "Aftershocks test resilience; stay useful and steady.",
      "When shaken, traction is lost—pause until ground reforms.",
      "Act calmly amid alarm; poised response is blameless.",
      "Accept initial losses; what’s rightful returns when you stop chasing.",
      "First the jolt, then relief—courage ripens into joy."
    ]
  },
  {
    no: 52,
    name: "Gen (Keeping Still / Mountain)",
    guaci: "Keeping still. His back is still so he no longer feels his body. He goes into the courtyard and does not see his people. No blame.",
    upper: 3, // Gen (Mountain)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "Thick stillness—good fortune.",
      "Stillness in the jaw—words are ordered; regret disappears.",
      "Stillness in the body—no blame.",
      "Stillness at the waist—spine split; danger smokes the heart.",
      "Stillness in the calves—cannot rescue those who follow; the heart is not glad.",
      "Stillness in the toes—no blame; favorable to have lasting correctness."
    ],
    guaciPlain: "Real stillness is skill, not inertia. Stabilize from the center outward; speech, body, and choices align when the heart is quiet.",
    yaociPlain: [
      "Deep composure nourishes strength.",
      "Quiet the mouth; clear speech ends regret.",
      "Hold posture—integrity felt through action.",
      "If tension locks the core, release before proceeding.",
      "Don’t drag others while unsteady—regroup first.",
      "Begin with the smallest step; sustainable steadiness follows."
    ]
  },
  {
    no: 53,
    name: "Jian (Gradual Development)",
    guaci: "Gradual progress. The maiden is given in marriage—good fortune. Perseverance furthers.",
    upper: 4, // Xun (Wind)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "The wild goose gradually reaches the dry land: the young child is in danger; there is talk—no blame.",
      "The wild goose gradually reaches the rock: eating and drinking joyfully—good fortune.",
      "The wild goose gradually reaches the plains: the husband goes and does not return; the wife is pregnant and does not rear—misfortune. Advantage in defending against raiders.",
      "The wild goose gradually reaches the tree: perhaps it gains a branch—no blame.",
      "The wild goose gradually reaches the hill: for three years the woman bears no child; in the end nothing can overcome it—good fortune.",
      "The wild goose gradually reaches the land: its feathers can be used for ceremony—good fortune."
    ],
    guaciPlain: "Grow like a wild goose—measured, seasonal, purposeful. Progress that honors timing becomes stable and beautiful.",
    yaociPlain: [
      "Early steps are vulnerable—shield what’s young and avoid showiness.",
      "Simple abundance shared with companions—quiet luck.",
      "Don’t press a journey past its season; protect what remains.",
      "A modest perch appears—use it and keep moving.",
      "Long patience ripens into undeniable fruition.",
      "Arrival brings grace that dignifies the whole path."
    ]
  },
  {
    no: 54,
    name: "Guimei (The Marrying Maiden)",
    guaci: "The Marrying Maiden. Misfortune—nothing that furthers.",
    upper: 1, // Zhen (Thunder)
    lower: 6, // Dui (Lake)
    yaoci: [
      "The woman carries a basket yet nothing in it; the man slaughters a sheep yet no blood—no advantage.",
      "Emperor Yi marries off his younger sister—her lord’s sleeves are not so fine as her sister’s; near the full moon—good fortune.",
      "The marrying maiden delays; late marriage at the right time.",
      "The marrying maiden waits; she returns as a secondary wife.",
      "One-eyed yet able to see—favorable for the reclusive person’s constancy.",
      "Marrying as a secondary wife; lame yet able to walk—setting forth brings good fortune."
    ],
    guaciPlain: "Entering a structure not your own demands humility and timing. When position is secondary, dignity comes from conduct.",
    yaociPlain: [
      "Hollow ritual yields nothing—seek substance over appearance.",
      "Right alliance despite modest trappings—blessing lies in fitness, not flash.",
      "Better to be late and right than early and wrong.",
      "Accept a lesser role without resentment; contribution still matters.",
      "Limited vantage can be wise when steady and inwardly clear.",
      "Even from a lower seat, principled steps lead to good outcomes."
    ]
  },
  {
    no: 55,
    name: "Feng (Abundance)",
    guaci: "Abundance. Success. The king reaches it—do not be sad; be like the sun at midday.",
    upper: 1, // Zhen (Thunder)
    lower: 5, // Li (Fire)
    yaoci: [
      "Meets his partner—though for ten days no blame; going brings honor.",
      "Abundance veiled; at noon seeing the Dipper; going brings suspicious illness; with trust bursting forth—good fortune.",
      "Abundance drenched; at noon seeing foam; breaking his right arm—no blame.",
      "Abundance veiled; at noon seeing the Dipper; meeting the unpolished lord—good fortune.",
      "Coming adorned; there is celebration and praise—good fortune.",
      "Abundance in the house; the curtains are drawn; peering through the door, it is quiet with no one. For three years one does not see—misfortune."
    ],
    guaciPlain: "Fullness is bright and brief. Use the zenith to serve widely, not to enclose yourself; otherwise abundance turns to isolation.",
    yaociPlain: [
      "Right partner, right timing—recognition follows action.",
      "When light meets haze, pause and realign; sincerity clears doubt.",
      "If overflow floods capability, accept limits; protect function.",
      "Meet the plain and sincere; shared purpose beats glitter.",
      "Honor arrives—receive it on behalf of the work, not the ego.",
      "Drawing the curtains on abundance breeds loneliness—stay open."
    ]
  },
  {
    no: 56,
    name: "Lü (The Wanderer / The Traveler)",
    guaci: "The Wanderer. Success for the small. Perseverance brings good fortune.",
    upper: 5, // Li (Fire)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "The traveler is petty and fussy—this is how he invites misfortune.",
      "The traveler lodges; he holds his goods; he gains a steadfast servant—good fortune.",
      "The traveler burns his lodging; he loses his young helper—steadfastness brings danger.",
      "The traveler rests at a place; he obtains tools and resources; yet his heart is not glad.",
      "He shoots a pheasant—one arrow is lost; in the end, praise and a mandate.",
      "The bird burns its nest; the traveler laughs first, then wails. Losing the ox in the open—misfortune."
    ],
    guaciPlain: "Away from home, status is provisional. Travel light, act with courtesy, and secure essentials—then small successes accrue.",
    yaociPlain: [
      "Fretful entitlement attracts trouble—simplify and adapt.",
      "Protect your basics; reliability invites trustworthy help.",
      "Don’t scorch your own base; zeal without care costs allies.",
      "Even with resources, homesickness skews judgment—stay measured.",
      "Skill recognized abroad: a small loss, then earned honor.",
      "If you torch your support, joy turns to grief—guard your base."
    ]
  }
);

// Append #57 ~ #64 (EN)
LIST.push(
  {
    no: 57,
    name: "Xun (The Gentle / Penetrating Wind)",
    guaci: "The Gentle. Success through what is small. It furthers to have somewhere to go. It furthers to see the great man.",
    upper: 4, // Xun (Wind)
    lower: 4, // Xun (Wind)
    yaoci: [
      "Creeping beneath the bed; loses property and axe. Perseverance brings misfortune.",
      "Truthfulness bound together—no remorse.",
      "Repeated penetration. Humbling—shame.",
      "Remorse disappears; in the fields, three kinds are secured.",
      "Centering in sincerity—no regret.",
      "Advance and retreat; favorable for a warrior’s constancy."
    ],
    guaciPlain: "Influence works best like wind—subtle, steady, and sincere. Let your integrity permeate quietly; aim for small, consistent gains and good counsel.",
    yaociPlain: [
      "Manipulation backfires; sneaking erodes trust and costs real assets.",
      "Reliable bonds form when your word holds—keep promises.",
      "Over-pressing others creates pushback; soften and listen.",
      "Consistent, gentle effort yields diverse returns.",
      "Lead from inner truth; centered intention calms the field.",
      "Know when to advance and when to yield; disciplined flexibility wins."
    ]
  },
  {
    no: 58,
    name: "Dui (The Joyous / Lake)",
    guaci: "The Joyous. Success. Joy is favorable for perseverance.",
    upper: 6, // Dui (Lake)
    lower: 6, // Dui (Lake)
    yaoci: [
      "Enticing joy—misfortune.",
      "Trusting joy—good fortune; remorse disappears.",
      "Coming joy—misfortune.",
      "Negotiating joy not yet settled; slight illness—there is joy.",
      "Trust in stripping away—danger.",
      "Harmonious joy—good fortune."
    ],
    guaciPlain: "Joy connects. But pleasure must be truthful, not indulgent. Let joy be a channel for trust, clarity, and shared purpose.",
    yaociPlain: [
      "Flattery and thrill-seeking corrupt judgment.",
      "Sincere, grounded joy heals relationships.",
      "Chasing highs leads to lows—recenter.",
      "Lightness with prudence eases strain.",
      "Pleasure that erodes honesty is risky—set limits.",
      "Deep, clean joy strengthens the whole group."
    ]
  },
  {
    no: 59,
    name: "Huan (Dispersion / Dissolution)",
    guaci: "Dispersion. Success. The king approaches his temple. It furthers to cross the great water. Perseverance furthers.",
    upper: 4, // Xun (Wind)
    lower: 2, // Kan (Water)
    yaoci: [
      "Use strong horses to rescue—good fortune.",
      "Dispersion: hasten to his aid—regret vanishes.",
      "Dispersion of the self—no regret.",
      "Dispersion of the group—supreme good fortune. Dispersion piled up like a mound—no fault.",
      "Dispersion of blood; the king stays in his temple—no blame.",
      "Dispersion of blood—going far away—no blame."
    ],
    guaciPlain: "Break up fear, rigidity, and factionalism. Gather people around a sacred center, then move together with clarity and trust.",
    yaociPlain: [
      "Act decisively to free what’s stuck.",
      "Run to support what is worthy; worry dissolves in service.",
      "Let ego melt; the work is larger than you.",
      "Unite scattered efforts; shared purpose becomes powerful.",
      "Stabilize at the core—principles over personalities.",
      "Cut the cycle of harm and step away from past enmities."
    ]
  },
  {
    no: 60,
    name: "Jie (Limitation / Measure)",
    guaci: "Limitation. Success. Bitter limitation should not be persisted in.",
    upper: 2, // Kan (Water)
    lower: 6, // Dui (Lake)
    yaoci: [
      "Not leaving the door and courtyard—no blame.",
      "Not leaving the gate and courtyard—misfortune.",
      "Not regulating measure—sighing; misfortune.",
      "Content in limitation—success.",
      "Sweet limitation—good fortune; going brings honor.",
      "Bitter limitation—perseverance brings misfortune; remorse disappears."
    ],
    guaciPlain: "Measure brings freedom. Set humane limits—enough to protect, not to suffocate—and you create trust, focus, and sustainable progress.",
    yaociPlain: [
      "Start with simple boundaries; safety first.",
      "Over-isolation harms growth; engage the world wisely.",
      "Without clear rules, stress compounds—design fair constraints.",
      "Accept appropriate limits; flourishing follows.",
      "Kind discipline tastes sweet; respect grows.",
      "Rigid austerity backfires; adjust and release regret."
    ]
  },
  {
    no: 61,
    name: "Zhongfu (Inner Truth)",
    guaci: "Inner Truth. Pigs and fishes—good fortune. It furthers to cross the great water. Perseverance furthers.",
    upper: 6, // Dui (Lake)
    lower: 4, // Xun (Wind)
    yaoci: [
      "Being true—good fortune; others are unsettled.",
      "A crane calls from the shade; its young answer. I have a fine cup—share it with you.",
      "Gains an enemy; now drums, now stops; now weeps, now sings.",
      "Moon nearly full; the horse lost—no blame.",
      "Truth held fast—no blame.",
      "Wing-sound rising to heaven—perseverance brings misfortune."
    ],
    guaciPlain: "Truth felt in the heart moves others naturally. Lead by resonance—clear, gentle, and consistent—then trust multiplies.",
    yaociPlain: [
      "Your sincerity steadies the space even if others wobble.",
      "Real kinship answers the honest call; share your best freely.",
      "Mixed signals fracture trust; stabilize your rhythm.",
      "Near completion—don’t cling; let what must go, go.",
      "Stay aligned with inner truth; it needs no force.",
      "Preaching from on high turns truth brittle—stay humble."
    ]
  },
  {
    no: 62,
    name: "Xiaoguo (Preponderance of the Small)",
    guaci: "Small Exceeding. Success. It is not favorable to have somewhere to go; favorable for small works.",
    upper: 1, // Zhen (Thunder)
    lower: 3, // Gen (Mountain)
    yaoci: [
      "Flying bird meets misfortune.",
      "Passing the grandfather, meeting the grandmother; not reaching the prince, meeting the minister—no blame.",
      "Not exceeding; following—someone may be wounded; misfortune.",
      "No blame; going brings honor.",
      "Dense clouds—no rain from our western land. The prince shoots the hawk in the cave.",
      "Exceeding in height: the flying bird—misfortune."
    ],
    guaciPlain: "Make precise, modest moves. Attend to details and proportion; avoid big leaps until conditions truly support them.",
    yaociPlain: [
      "Don’t launch prematurely; altitude without lift crashes.",
      "Honor supporting roles; the right scale keeps you blameless.",
      "Overdoing even the right thing hurts others—pull back.",
      "Earn recognition through careful service.",
      "Power gathers but may not break—wait for a real opening.",
      "Ambition beyond structure brings a fall—stay low and exact."
    ]
  },
  {
    no: 63,
    name: "Jiji (After Completion)",
    guaci: "After Completion. Success in small matters. Perseverance furthers.",
    upper: 2, // Kan (Water)
    lower: 5, // Li (Fire)
    yaoci: [
      "Dragging the wheels; wetting the tail—no blame.",
      "The woman loses her curtain; do not pursue—seven days it is obtained.",
      "King Gaozong campaigns against the Ghostland; three years he conquers it. Do not use the small man.",
      "Soiled hem; all day vigilant.",
      "The eastern neighbor slaughters an ox; not equal to the western neighbor’s simple rite—truly receives blessing.",
      "Soaking the head—danger."
    ],
    guaciPlain: "Completion is delicate. After the win, tighten basics, honor simplicity, and keep watch—otherwise gains unravel.",
    yaociPlain: [
      "Finish carefully; protect the front edge from splash-back.",
      "A minor loss returns in time—don’t overreact.",
      "Great tasks need patient campaigns and worthy allies.",
      "At the summit, vigilance—not celebration—keeps you safe.",
      "Sincere simplicity beats lavish display; spirit matters more than show.",
      "At the very top, a rash move ruins the work—stay modest."
    ]
  },
  {
    no: 64,
    name: "Weiji (Before Completion)",
    guaci: "Before Completion. Success. Little fox—almost across—wets its tail; nothing is favorable.",
    upper: 5, // Li (Fire)
    lower: 2, // Kan (Water)
    yaoci: [
      "Wetting the tail—humiliation.",
      "Braking the wheels—perseverance brings good fortune.",
      "Before completion: going is unfortunate; favorable to cross the great water.",
      "Perseverance brings good fortune; regret disappears. Using thunder to smite the Ghostland—three years, reward in the great state.",
      "Perseverance brings good fortune; no regret. The noble has radiance—trust brings blessing.",
      "Sincerity in drinking—no blame. Wetting the head—loss of the way."
    ],
    guaciPlain: "Not yet finished—keep your balance. Align intent and method before the final step; haste at the end spoils the crossing.",
    yaociPlain: [
      "Rushing the start leads to a stumble—slow down.",
      "Apply the brakes; set your frame, then proceed.",
      "Half-baked action fails; prepare fully before the big crossing.",
      "Steady, principled effort turns the tide over time.",
      "Hold your light steady; integrity attracts trust at the endgame.",
      "Celebrate wisely; excess dulls awareness right when it’s needed most."
    ]
  }
);







export function getHexByUpperLower(upper: number, lower: number): HexDatum | undefined {
  return LIST.find(h => h.upper === upper && h.lower === lower);
}

export { LIST };
export default LIST;
