// File: src/data/content.ts

import { PageContent, Question } from "../types"; // <-- Import types

// --- Pre-Test Questions ---
const pretestQuestions: Question[] = [
  {
    id: "pre_q1",
    question: "What is the operating principle of an Electrical Comparator?",
    options: [
      "Light reflection and magnification",
      "Thermal expansion of components",
      "Change in inductance/resistance due to plunger movement",
      "Direct mechanical measurement using gears",
    ],
    correctAnswerIndex: 2,
  },
  // ... (paste all your other pretest questions here) ...
  {
    id: 'pre_q10',
    question: "A positive reading on the comparator's display typically indicates that the test piece is:",
    options: [
      "Identical to the standard",
      "Smaller than the standard",
      "Larger than the standard",
      "Made of the wrong material",
    ],
    correctAnswerIndex: 2,
  },
];

// --- Post-Test Questions ---
const posttestQuestions: Question[] = [
  {
    id: "post_q1",
    question: "If a reading is +0.150 mm after setting the standard to 50.000 mm, the measured height of the workpiece is:",
    options: ["50.150 mm", "49.850 mm", "0.150 mm", "50.000 mm"],
    correctAnswerIndex: 0, 
  },
  // ... (paste all your other posttest questions here) ...
  {
    id: 'post_q10',
    question: "The core measurement principle is that the change in the coil's electrical property is directly proportional to the plunger's mechanical displacement. This relationship is maintained by the:",
    options: [
      "Locking screw",
      "Calibration against a standard",
      "Workpiece selector",
      "The footer section",
    ],
    correctAnswerIndex: 1,
  },
];

// --- Page Content Definition ---
// This is now fully type-checked
export const pageContent: PageContent = {
  Aim: {
    title: "Study of Electrical Comparator and Component Inspection",
    sections: [
      {
        type: "paragraph",
        text: "The purpose of this experiment is to understand the construction, working principle, and application of the Electrical Comparator. The main objective is to use it for rapid and high-precision inspection of manufactured components by comparing their height against a known standard dimension.",
      },
    ],
  },
  Theory: {
    title: "Electrical Comparator Theory",
    sections: [
      {
        type: "paragraph",
        text: "An Electrical Comparator is a comparison type measuring instrument that translates small mechanical displacements of a plunger into an amplified electrical signal. It typically uses an Inductance Bridge circuit where the plunger's movement (caused by the workpiece deviation) shifts an armature between two coils, changing their inductance and producing a voltage signal proportional to the displacement.",
      },
      {
        type: "list",
        items: [
          "Principle: Conversion of linear mechanical movement into a proportional electrical signal (transduction).",
          "Transducer: Often an LVDT (Linear Variable Differential Transformer) or similar system of coils and an armature.",
          "Amplification: The minute voltage change is amplified electronically and displayed on a dial or digital readout.",
          "Measurement Type: Comparison (or relative) measurement against a Standard Workpiece (gauge block).",
        ],
      },
    ],
  },
  Procedure: {
    title: "Experimental Procedure (Electrical Comparator)",
    sections: [
      {
        type: "paragraph",
        text: "Follow these general steps to perform the experiment in the virtual lab. The detailed, step-by-step guidance is available in the 'Virtual experiment' section's interactive procedure panel.",
      },
      {
        type: "list",
        items: [
          "1. Set the standard workpiece on the table and adjust the measuring head using the arrows until the reading is zero (setting the reference).",
          "2. Lock the measuring head using the locking screw.",
          "3. Replace the standard workpiece with the test workpiece (WP1 or WP2).",
          "4. Move the test workpiece across the plunger to check for parallelism and take multiple deviation readings.",
          "5. Based on the deviation and the specified tolerance limit (0 - 0.500 mm), determine if the workpiece is Accepted or Rejected.",
        ],
      },
    ],
  },
  Test1: {
    title: "Pre-Test on Electrical Comparators",
    sections: [
      {
        type: "paragraph",
        text: "Answer the following questions to test your basic understanding before the lab.",
      },
      { type: "mcq", questions: pretestQuestions },
    ],
  },
  Test2: {
    title: "Post-Test and Evaluation",
    sections: [
      {
        type: "paragraph",
        text: "Answer the following questions to assess what you learned during the virtual experiment.",
      },
      { type: "mcq", questions: posttestQuestions },
    ],
  },
  Acknowledgement: {
    title: "Acknowledgement",
    sections: [
      {
        type: "paragraph",
        text: "The Department of Production Technology appreciates the following students for their support in the development of Metrology and measurements virtual laboratory experiment.",
      },
      {
        type: "heading",
        level: 2,
        text: "Contributions",
      },
      {
        type: "list",
        items: [
          "E. VINOTH - 2023507001",
          "M. Desakar - 2023507003",
          "N. S. ASHWIN - 2023507027",
          "J. KARALAN - 2023507028",
        ],
      },
    ],
  },
};