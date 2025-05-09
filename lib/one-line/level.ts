import type { Edge, Point } from "@/utils/one-line/one-line-utils";

type Level = {
  name: string;
  points: Point[];
  edges: Edge[];
  hint: string;
};

export type Packs = "Pack 1" | "Pack 2";

export const levelsByPacks: Record<Packs, Level[]> = {
  //========= Levels are still in development – more coming soon!!! ===========//

  "Pack 1": [
    //==================================================//
     
    

    //==================================================//

    {
      name: "Triangle",
      hint: "Three points, one stroke.",
      points: [
        { id: "A", x: 200, y: 100 },
        { id: "B", x: 300, y: 300 },
        { id: "C", x: 100, y: 300 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "C", to: "A" },
      ],
    },
    {
      name: "Square",
      hint: "A classic square shape.",
      points: [
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 300, y: 100 },
        { id: "C", x: 300, y: 300 },
        { id: "D", x: 100, y: 300 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "C", to: "D" },
        { from: "D", to: "A" },
      ],
    },
    {
      name: "Star",
      hint: "Trace the 5-point star in one continuous stroke.",
      points: [
        { id: "A", x: 200, y: 60 },
        { id: "B", x: 80, y: 140 },
        { id: "C", x: 320, y: 140 },
        { id: "D", x: 120, y: 320 },
        { id: "E", x: 280, y: 320 },
      ],
      edges: [
        { from: "A", to: "D" },
        { from: "D", to: "C" },
        { from: "C", to: "B" },
        { from: "B", to: "E" },
        { from: "E", to: "A" },
      ],
    },
    {
      name: "Isometric Prism",
      hint: "Follow the 3D prism's edges in one path.",
      points: [
        { id: "A", x: 100, y: 100 },
        { id: "B", x: 200, y: 100 },
        { id: "C", x: 300, y: 100 },
        { id: "D", x: 100, y: 200 },
        { id: "E", x: 200, y: 200 },
        { id: "F", x: 300, y: 200 },
        { id: "G", x: 200, y: 300 },
      ],
      edges: [
        { from: "A", to: "D" },
        { from: "D", to: "G" },
        { from: "B", to: "E" },
        { from: "C", to: "F" },
        { from: "E", to: "G" },
        { from: "D", to: "E" },
        { from: "E", to: "F" },
        { from: "B", to: "C" },
        { from: "A", to: "B" },
      ],
    },
    {
      name: "Twin Peaks",
      hint: "Connect both mountain peaks through the base.",
      points: [
        { id: "A", x: 200, y: 20 },
        { id: "B", x: 50, y: 90 },
        { id: "C", x: 350, y: 90 },
        { id: "D", x: 50, y: 190 },
        { id: "E", x: 350, y: 190 },
        { id: "F", x: 200, y: 250 },
        { id: "G", x: 50, y: 380 },
        { id: "H", x: 350, y: 380 },
      ],
      edges: [
        { from: "A", to: "E" },
        { from: "B", to: "D" },
        { from: "C", to: "F" },
        { from: "E", to: "C" },
        { from: "F", to: "G" },
        { from: "G", to: "H" },
        { from: "A", to: "D" },
        { from: "F", to: "B" },
        { from: "F", to: "H" },
      ],
    },
    {
      name: "Spider Web",
      hint: "Follow the tangled path of the web.",
      points: [
        { id: "A", x: 120, y: 50 },
        { id: "B", x: 280, y: 50 },
        { id: "C", x: 200, y: 200 },
        { id: "D", x: 280, y: 140 },
        { id: "E", x: 360, y: 80 },
        { id: "F", x: 320, y: 200 },
        { id: "G", x: 360, y: 320 },
        { id: "H", x: 280, y: 260 },
        { id: "I", x: 120, y: 260 },
        { id: "J", x: 40, y: 320 },
        { id: "K", x: 80, y: 200 },
        { id: "L", x: 40, y: 80 },
        { id: "M", x: 120, y: 140 },
      ],
      edges: [
        { from: "A", to: "C" },
        { from: "B", to: "C" },
        { from: "C", to: "D" },
        { from: "D", to: "E" },
        { from: "E", to: "F" },
        { from: "F", to: "G" },
        { from: "G", to: "H" },
        { from: "H", to: "C" },
        { from: "I", to: "C" },
        { from: "J", to: "I" },
        { from: "K", to: "J" },
        { from: "K", to: "L" },
        { from: "M", to: "L" },
        { from: "M", to: "C" },
      ],
    },
    {
      name: "Diamond Path",
      hint: "A gem-like path—just one stroke to shine.",
      points: [
        { id: "A", x: 200, y: 20 },
        { id: "B", x: 280, y: 160 },
        { id: "C", x: 120, y: 160 },
        { id: "D", x: 20, y: 280 },
        { id: "E", x: 120, y: 380 },
        { id: "F", x: 280, y: 380 },
        { id: "G", x: 380, y: 280 },
        { id: "H", x: 200, y: 250 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "B", to: "H" },
        { from: "B", to: "G" },
        { from: "C", to: "A" },
        { from: "C", to: "H" },
        { from: "C", to: "D" },
        { from: "D", to: "H" },
        { from: "D", to: "E" },
        { from: "E", to: "F" },
        { from: "F", to: "G" },
        { from: "G", to: "H" },
      ],
    },
    {
      name: "Anchor",
      hint: "Heavy paths meet in the center.",
      points: [
        { id: "A", x: 60, y: 20 },
        { id: "B", x: 340, y: 20 },
        { id: "C", x: 60, y: 250 },
        { id: "D", x: 340, y: 250 },
        { id: "E", x: 200, y: 120 },
        { id: "F", x: 200, y: 380 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "A", to: "C" },
        { from: "A", to: "E" },
        { from: "A", to: "F" },
        { from: "B", to: "E" },
        { from: "B", to: "F" },
        { from: "B", to: "D" },
        { from: "C", to: "F" },
        { from: "F", to: "D" },
        { from: "F", to: "E" },
      ],
    },
    {
      name: "Hourglass",
      hint: "Time to connect both halves.",
      points: [
        { id: "A", x: 50, y: 30 },
        { id: "B", x: 350, y: 30 },
        { id: "C", x: 200, y: 380 },
        { id: "D", x: 200, y: 30 },
        { id: "E", x: 120, y: 200 },
        { id: "F", x: 280, y: 200 },
      ],
      edges: [
        { from: "A", to: "D" },
        { from: "D", to: "B" },
        { from: "B", to: "F" },
        { from: "F", to: "C" },
        { from: "C", to: "E" },
        { from: "E", to: "A" },
        { from: "D", to: "C" },
        { from: "D", to: "E" },
        { from: "D", to: "F" },
        { from: "E", to: "F" },
      ],
    },
    {
      name: "Maze Box",
      hint: "Boxy and twisted. Solve it cleanly.",
      points: [
        { id: "A", x: 50, y: 30 },
        { id: "B", x: 350, y: 30 },
        { id: "C", x: 350, y: 380 },
        { id: "D", x: 50, y: 380 },
        { id: "E", x: 50, y: 200 },
        { id: "F", x: 350, y: 200 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "F" },
        { from: "F", to: "E" },
        { from: "F", to: "C" },
        { from: "C", to: "D" },
        { from: "D", to: "E" },
        { from: "E", to: "A" },
        { from: "E", to: "B" },
        { from: "B", to: "D" },
        { from: "D", to: "F" },
      ],
    },
  ],

  "Pack 2": [
    {
      name: "Hooked Route",
    hint: "Notice the hook; start at its end.",
      points: [
        { id: "A", x: 250, y: 30 },
        { id: "B", x: 380, y: 30 },
        { id: "C", x: 380, y: 250 },
        { id: "D", x: 150, y: 350 },
        { id: "E", x: 30, y: 350 },
        { id: "F", x: 30, y: 200 },
        { id: "G", x: 150, y: 200 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "F", to: "A" },
        { from: "F", to: "E" },
        { from: "E", to: "D" },
        { from: "D", to: "G" },
        { from: "G", to: "B" },
        { from: "D", to: "B" },
        { from: "D", to: "C" },
      ],
    },
    {
      name: "Circuit",
      hint: "Look at the upper corner and follow the outline.",
      points: [
        { id: "A", x: 50, y: 30 },
        { id: "B", x: 350, y: 30 },
        { id: "C", x: 350, y: 330 },
        { id: "D", x: 50, y: 330 },
        { id: "E", x: 200, y: 250 },
        { id: "F", x: 250, y: 210 },
        { id: "G", x: 150, y: 210 },
        { id: "H", x: 280, y: 380 },
        { id: "I", x: 130, y: 380 },
        { id: "J", x: 100, y: 100 },
        { id: "K", x: 300, y: 100 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "C", to: "D" },
        { from: "C", to: "F" },
        { from: "C", to: "H" },
        { from: "D", to: "A" },
        { from: "D", to: "G" },
        { from: "D", to: "I" },
        { from: "E", to: "H" },
        { from: "E", to: "I" },
        { from: "F", to: "K" },
        { from: "K", to: "J" },
        { from: "J", to: "G" },
      ],
    },
    {
      name: "Enigmatic",
      hint: "Focus on the frame’s vertex to begin.",
      points: [
        { id: "A", x: 20, y: 30 },
        { id: "B", x: 380, y: 30 },
        { id: "C", x: 380, y: 380 },
        { id: "D", x: 20, y: 380 },
        { id: "E", x: 200, y: 280 },
        { id: "F", x: 200, y: 120 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "A", to: "C" },
        { from: "B", to: "C" },
        { from: "B", to: "D" },
        { from: "C", to: "D" },
        { from: "D", to: "A" },
        { from: "E", to: "D" },
        { from: "E", to: "C" },
        { from: "E", to: "F" },
        { from: "F", to: "A" },
        { from: "F", to: "B" },
      ],
    },
    {
      name: "Blueprint",
      hint: "Begin at the edge that catches your eye.",
      points: [
        { id: "A", x: 40, y: 30 },
        { id: "B", x: 360, y: 30 },
        { id: "C", x: 40, y: 370 },
        { id: "D", x: 360, y: 370 },
        { id: "E", x: 360, y: 220 },
        { id: "F", x: 40, y: 220 },
        { id: "G", x: 200, y: 220 },
        { id: "H", x: 200, y: 80 },
      ],
      edges: [
        { from: "A", to: "H" },
        { from: "A", to: "G" },
        { from: "B", to: "G" },
        { from: "B", to: "H" },
        { from: "C", to: "G" },
        { from: "C", to: "F" },
        { from: "D", to: "G" },
        { from: "D", to: "E" },
        { from: "H", to: "F" },
        { from: "H", to: "E" },
      ],
    },
    {
      name: "Core",
      hint: "Let the center set your first stroke.",
      points: [
        { id: "A", x: 200, y: 50 },
        { id: "B", x: 300, y: 350 },
        { id: "C", x: 100, y: 350 },
        { id: "D", x: 40, y: 180 },
        { id: "E", x: 360, y: 180 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "B", to: "E" },
        { from: "B", to: "D" },
        { from: "C", to: "A" },
        { from: "C", to: "D" },
        { from: "C", to: "E" },
      ],
    },
    {
      name: "Diagonal",
      hint: "Start where the slant is evident.",
      points: [
        { id: "A", x: 200, y: 20 },
        { id: "B", x: 340, y: 340 },
        { id: "C", x: 60, y: 340 },
        { id: "D", x: 280, y: 200 },
        { id: "E", x: 220, y: 340 },
        { id: "F", x: 120, y: 200 },
        { id: "G", x: 170, y: 270 },
      ],
      edges: [
        { from: "A", to: "D" },
        { from: "A", to: "F" },
        { from: "B", to: "E" },
        { from: "B", to: "D" },
        { from: "F", to: "D" },
        { from: "F", to: "C" },
        { from: "E", to: "C" },
        { from: "D", to: "G" },
        { from: "D", to: "E" },
        { from: "E", to: "G" },
        { from: "F", to: "G" },
      ],
    },

    {
      name: "Symmetry",
      hint: "Watch for the balancing point.",
      points: [
        { id: "A", x: 200, y: 20 },
        { id: "B", x: 320, y: 300 },
        { id: "C", x: 80, y: 300 },
        { id: "D", x: 200, y: 380 },
        { id: "E", x: 60, y: 100 },
        { id: "F", x: 340, y: 100 },
        { id: "G", x: 200, y: 220 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "A", to: "E" },
        { from: "A", to: "F" },
        { from: "A", to: "C" },
        { from: "B", to: "C" },
        { from: "B", to: "F" },
        { from: "B", to: "D" },
        { from: "B", to: "G" },
        { from: "C", to: "D" },
        { from: "C", to: "E" },
        { from: "C", to: "G" },
      ],
    },

    {
      name: "Alignment",
      hint: "Start at a corner where lines converge.",
      points: [
        { id: "A", x: 150, y: 40 },
        { id: "B", x: 310, y: 40 },
        { id: "C", x: 150, y: 360 },
        { id: "D", x: 310, y: 360 },
        { id: "E", x: 290, y: 220 },
        { id: "F", x: 210, y: 140 },
        { id: "G", x: 50, y: 300 },
        { id: "H", x: 230, y: 240 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "D" },
        { from: "C", to: "A" },
        { from: "C", to: "H" },
        { from: "C", to: "E" },
        { from: "C", to: "G" },
        { from: "D", to: "C" },
        { from: "D", to: "H" },
        { from: "G", to: "F" },
        { from: "E", to: "F" },
      ],
    },

    {
      name: "Trace",
      hint: "Follow the path that runs through the key area.",
      points: [
        { id: "A", x: 40, y: 40 },
        { id: "B", x: 40, y: 360 },
        { id: "C", x: 360, y: 200 },
        { id: "D", x: 200, y: 80 },
        { id: "E", x: 200, y: 320 },
        { id: "F", x: 200, y: 240 },
        { id: "G", x: 200, y: 160 },
        { id: "H", x: 120, y: 200 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "A", to: "G" },
        { from: "B", to: "F" },
        { from: "C", to: "D" },
        { from: "C", to: "E" },
        { from: "D", to: "G" },
        { from: "F", to: "G" },
        { from: "F", to: "E" },
        { from: "H", to: "F" },
        { from: "H", to: "G" },
      ],
    },
    {
      name: "Cycle",
      hint: "Let the outline reveal the starting point.",
      points: [
        { id: "A", x: 50, y: 50 },
        { id: "B", x: 350, y: 50 },
        { id: "C", x: 350, y: 350 },
        { id: "D", x: 50, y: 350 },
        { id: "E", x: 200, y: 240 },
      ],
      edges: [
        { from: "A", to: "B" },
        { from: "B", to: "C" },
        { from: "C", to: "D" },
        { from: "C", to: "E" },
        { from: "C", to: "A" },
        { from: "D", to: "A" },
        { from: "D", to: "B" },
        { from: "D", to: "E" },
        { from: "E", to: "B" },
        { from: "E", to: "A" },
      ],
    },
  ],
};
