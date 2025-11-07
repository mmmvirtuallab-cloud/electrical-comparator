// File: .\src/data/content.js

// --- Pre-Test Questions (Electrical Comparator Specific) ---
const pretestQuestions = [
  {
    id: 'pre_q1',
    question: "What is the operating principle of an Electrical Comparator?",
    options: [
      "Light reflection and magnification",
      "Thermal expansion of components",
      "Change in inductance/resistance due to plunger movement",
      "Direct mechanical measurement using gears",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 'pre_q2',
    question: "What does an Electrical Comparator measure?",
    options: [
      "Absolute dimension of the workpiece",
      "The deviation (difference) in height from a standard",
      "The hardness of the metal",
      "The electrical conductivity of the workpiece",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'pre_q3',
    question: "The movement of the comparator's plunger is converted into:",
    options: [
      "A change in temperature",
      "A change in magnetic flux, which induces voltage",
      "A change in acoustic frequency",
      "A change in fluid pressure",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'pre_q4',
    question: "What component is used to visually display the measured deviation?",
    options: [
      "A digital camera",
      "A precision dial or digital readout",
      "A spirit level",
      "A micrometer screw",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'pre_q5',
    question: "Electrical comparators are best suited for:",
    options: [
      "Measuring large objects with low precision",
      "Fast, high-magnification comparison measurements",
      "Measuring surface roughness",
      "Long-distance measurements",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'pre_q6',
    question: "Before using an Electrical Comparator, it must be 'set' or 'calibrated' using a:",
    options: [
      "Ruler",
      "Workpiece with a known, standard dimension",
      "Vernier Caliper",
      "A large magnifying glass",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'pre_q7',
    question: "Compared to mechanical comparators, electrical comparators generally offer:",
    options: [
      "Lower magnification",
      "Less sensitivity",
      "Higher measurement speed and sensitivity",
      "More physical wear and tear",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 'pre_q8',
    question: "The component that detects the displacement in an electrical comparator is the:",
    options: [
      "Lamp source",
      "Amplifier",
      "Transducer (e.g., LVDT or similar coil/armature system)",
      "Main base block",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 'pre_q9',
    question: "What is the primary function of the 'Lock Head' mechanism?",
    options: [
      "To prevent unauthorized use",
      "To switch the comparator off",
      "To fix the measuring head's position during measurement or setting",
      "To reset the reading to zero",
    ],
    correctAnswerIndex: 2,
  },
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

// --- Post-Test Questions (Electrical Comparator Specific) ---
const posttestQuestions = [
  {
    id: 'post_q1',
    question: "If a reading is **+0.150 mm** after setting the standard to 50.000 mm, the measured height of the workpiece is:",
    options: [
      "50.150 mm",
      "49.850 mm",
      "0.150 mm",
      "50.000 mm",
    ],
    correctAnswerIndex: 0, // 50.000 + 0.150 = 50.150 mm
  },
  {
    id: 'post_q2',
    question: "Why is an amplifier necessary in an Electrical Comparator setup?",
    options: [
      "To make the light brighter",
      "To mechanically reduce the measurement error",
      "To boost the small electrical signal from the transducer into a readable value",
      "To cool the machine down",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 'post_q3',
    question: "What is the tolerance limit given for the workpieces in the virtual lab (0 - 0.500 mm)?",
    options: [
      "The smallest measurable difference",
      "The total permissible deviation from the standard dimension",
      "The range of travel for the plunger",
      "The maximum magnification",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'post_q4',
    question: "If the workpiece deviation is measured as **0.600 mm**, based on the given limit (0.500 mm), the workpiece should be marked as:",
    options: [
      "Accepted",
      "Rejected",
      "Retested",
      "Standard",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'post_q5',
    question: "What component restricts the vertical movement of the measuring head?",
    options: [
      "The base",
      "The armature",
      "The locking screw",
      "The digital readout",
    ],
    correctAnswerIndex: 2,
  },
  {
    id: 'post_q6',
    question: "How is the workpiece's position typically changed in a real-world comparator setup (mimicked by the arrow buttons)?",
    options: [
      "By manually lifting and placing it",
      "By adjusting the precision stage/table movement",
      "By using an overhead crane",
      "By changing the magnification",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'post_q7',
    question: "What kind of measurement error is a comparator designed to minimize, unlike a standard micrometer?",
    options: [
      "Zero error",
      "Reading error due to high magnification and digital display",
      "Temperature variation error",
      "Cosmetic flaws",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'post_q8',
    question: "Why is it important to move the workpiece across its width to take multiple readings (as suggested in the procedure)?",
    options: [
      "To make the experiment last longer",
      "To check for parallelism and flatness variations across the surface",
      "To increase the deviation reading",
      "To reset the machine",
    ],
    correctAnswerIndex: 1,
  },
  {
    id: 'post_q9',
    question: "If the standard is 50.000 mm and the test piece is 49.900 mm, what deviation reading should the comparator ideally show?",
    options: [
      "+0.100 mm",
      "-0.100 mm",
      "50.000 mm",
      "49.900 mm",
    ],
    correctAnswerIndex: 1, // Deviation = Measured - Standard. 49.900 - 50.000 = -0.100 mm.
  },
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
export const pageContent = {
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
      { type: 'paragraph', text: 'Answer the following questions to test your basic understanding before the lab.' },
      { type: 'mcq', questions: pretestQuestions }
    ]
  },
  Test2: {
    title: "Post-Test and Evaluation",
    sections: [
       { type: 'paragraph', text: 'Answer the following questions to assess what you learned during the virtual experiment.' },
       { type: 'mcq', questions: posttestQuestions }
    ]
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
          "J. KARALAN - 2023507028"
        ],
      },
    ],
  },
};

// This is no longer strictly necessary if using item.key directly
// export const topicMap = {
//   Aim: "Aim",
//   Theory: "Theory",
//   Procedure: "Procedure",
//   Test1: "Test1", // Changed from "Pretest" to 'Test1' for key consistency
//   Test2: "Test2", // Changed from "Posttest" to 'Test2' for key consistency
//   Acknowledgement: "Acknowledgement",
// };