// File: src/types.ts

// Type for a single MCQ question
export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

// Type for a single section (like a paragraph, list, or MCQ block)
export type ContentSection =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "heading";
      level: number;
      text: string;
    }
  | {
      type: "mcq";
      questions: Question[];
    };

// Type for a single page's content (e.g., "Aim" or "Theory")
export interface ContentPage {
  title: string;
  sections: ContentSection[];
}

// Type for the entire pageContent object
export interface PageContent {
  [key: string]: ContentPage;
}

// Type for a single navigation item
export interface NavItem {
  key: string;
  path: string;
  label: string;
}

// Type for a single reading in the simulation
export interface Reading {
  id: number;
  standard: string;
  measured: string;
  deviation: string;
}