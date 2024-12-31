"use client";

import { useState } from "react";
import { 
    Tabs,  
    TabsList,
    TabsTrigger
} from "./ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";


interface FAQItem {
    question: string;
    answer: string;
    id: string;
  }
  
interface FAQSection {
    category: string;
    items: FAQItem[];
}

const FAQ_SECTIONS: Record<ViewType, FAQSection> = {
    general: {
        category: "General",
        items: [
          {
            id: "what-is-app",
            question: "What is this application about?",
            answer:
              "This application is a tool designed to help users streamline their workflows and improve productivity through intuitive design and powerful features.",
          },
          {
            id: "free-to-use",
            question: "Is this application free to use?",
            answer:
              "Yes, this application is completely free to use. We also offer premium features available through subscription plans.",
          },
          {
            id: "platform-support",
            question: "What platforms does the application support?",
            answer:
              "The application supports all major platforms, including web browsers, iOS, and Android devices.",
          },
          {
            id: "user-feedback",
            question: "Can I provide feedback about the application?",
            answer:
              "Absolutely! We value user feedback. You can submit your suggestions or report issues through the 'Feedback' section in the app.",
          },
          {
            id: "data-security",
            question: "How secure is my data?",
            answer:
              "We prioritize data security by implementing industry-standard encryption and adhering to strict privacy policies.",
          },
          {
            id: "updates",
            question: "How often is the application updated?",
            answer:
              "We release updates regularly to introduce new features, fix bugs, and improve overall performance.",
          },
          {
            id: "support-channels",
            question: "How can I contact support if I have an issue?",
            answer:
              "You can reach our support team via email, live chat, or through the 'Help' section in the app.",
          },
        ],
    },
    icons: {
      category: "Icons",
      items: [
        {
          id: "how-to-use-icons",
          question: "How can I use the icons in my project?",
          answer:
            "You can download the icons in various formats and directly import them into your project files.",
        },
        {
          id: "custom-icons",
          question: "Can I request custom icons?",
          answer:
            "Yes, we provide the option to request custom icons tailored to your needs. Contact our support team for more information.",
        },
      ],
    },
    library: {
      category: "Library",
      items: [
        {
          id: "what-is-library",
          question: "What is the library feature?",
          answer:
            "The library feature allows users to save and organize their favorite components for quick access in future projects.",
        },
        {
          id: "sharing-library",
          question: "Can I share my library with others?",
          answer:
            "Yes, you can share your saved libraries with team members or collaborators by generating a shareable link.",
        },
      ],
    },
};
  

interface FAQAccordionProps {
  category: string;
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ category, items }) => (
  <div className="">
    <Badge variant={"outline"} className="py-2 px-6 rounded-md">
      {category}
    </Badge>
    <Accordion type="single" collapsible className="w-full">
      {items.map((faq) => (
        <AccordionItem key={faq.id} value={faq.id}>
          <AccordionTrigger className="text-left hover:no-underline">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);


type ViewType = "general" | "icons" | "library";

export function FAQSection() {
  const [activeView, setActiveView] = useState<ViewType>("general");

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <header className="text-center mb-12">
        <p className="text-sm font-medium text-primary mb-2">FAQs</p>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Frequently asked questions
        </h1>
        <p className="text-xl text-muted-foreground">
          Need help with something? Here are our most frequently asked
          questions.
        </p>
      </header>

      <div className="flex justify-center sticky top-2">
        <Tabs
          defaultValue="general"
          onValueChange={(value) => setActiveView(value as ViewType)}
          className="mb-8 max-w-xl border rounded-xl bg-background"
        >
          <TabsList className="w-full justify-start h-12 p-1">
            <TabsTrigger value="general">General FAQs</TabsTrigger>
            <TabsTrigger value="icons">UI Icons</TabsTrigger>
            <TabsTrigger value="library">Library</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <FAQAccordion
        category={FAQ_SECTIONS[activeView].category}
        items={FAQ_SECTIONS[activeView].items}
      />
    </div>
  );
}
