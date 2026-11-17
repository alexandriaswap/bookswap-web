"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

// TODO: set to the day these terms go live, before publishing.
const effectiveDate = "November 17, 2026";

type Block =
  | { type: "text"; text: string }
  | { type: "subtitle"; text: string }
  | { type: "list"; items: string[] };

type Section = {
  title: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    title: "1. Accepting These Terms",
    blocks: [
      {
        type: "text",
        text: "These Terms of Service (\"Terms\") are an agreement between you and BookSwap (\"BookSwap,\" \"we,\" \"our,\" or \"us\"). They apply to the BookSwap mobile application, our website, and related services (collectively, the \"Services\").",
      },
      {
        type: "text",
        text: "By creating an account or using the Services, you agree to these Terms and to our Privacy Policy. If you do not agree, please do not use the Services.",
      },
    ],
  },
  {
    title: "2. Who Can Use BookSwap",
    blocks: [
      {
        type: "text",
        text: "You must be at least 13 years old to use BookSwap. Where local law requires a higher minimum age or parental consent for users under a specified age, you must meet that requirement. If you are under the age of majority where you live, you may only use the Services with the involvement of a parent or legal guardian, especially before meeting anyone in person.",
      },
      {
        type: "text",
        text: "You may not use the Services if we have previously suspended or removed your account, or if you are prohibited from doing so under applicable law.",
      },
    ],
  },
  {
    title: "3. Your Account",
    blocks: [
      {
        type: "text",
        text: "You sign in to BookSwap with your phone number. You agree to provide accurate information, to keep your phone number and device secure, and to tell us promptly if you believe someone else has accessed your account.",
      },
      {
        type: "text",
        text: "You are responsible for activity that happens through your account. Accounts are personal: do not share, sell, or transfer your account to anyone else.",
      },
      {
        type: "text",
        text: "You can delete your account at any time from the Profile tab in the app, or at bookswapapp.com/delete-account.",
      },
    ],
  },
  {
    title: "4. How BookSwap Works",
    blocks: [
      {
        type: "text",
        text: "BookSwap is a platform that helps readers list the physical books they own, discover books owned by others, and arrange one-for-one book swaps. BookSwap is free to use.",
      },
      {
        type: "text",
        text: "BookSwap is not a party to any swap. Swaps are agreements made directly between users. We do not own, inspect, store, ship, or guarantee any book, and we do not verify the identity, condition, authenticity, or ownership of books or users. You decide whether to make, accept, or cancel an offer, and whether and where to meet.",
      },
      {
        type: "text",
        text: "Distances, locations, and availability shown in the app are approximate and may not always be accurate or up to date.",
      },
    ],
  },
  {
    title: "5. Meeting Other Users",
    blocks: [
      {
        type: "text",
        text: "Most swaps involve meeting another person. Your safety is your responsibility, and you meet other users at your own risk. We strongly recommend that you:",
      },
      {
        type: "list",
        items: [
          "Meet in a busy public place, such as a café, library, or campus common area",
          "Keep your conversation and arrangements inside the app",
          "Check the book before you complete the swap",
          "Tell someone you trust where you are going",
          "Leave or cancel at any time if something feels wrong",
        ],
      },
      {
        type: "text",
        text: "If you are ever in immediate danger, contact your local emergency services first.",
      },
    ],
  },
  {
    title: "6. Your Content",
    blocks: [
      {
        type: "text",
        text: "\"Your Content\" means anything you add to the Services, such as your profile details and photo, book listings, wishlist, swap offers, and messages. You keep ownership of Your Content.",
      },
      {
        type: "text",
        text: "You give BookSwap a worldwide, non-exclusive, royalty-free licence to host, store, reproduce, and display Your Content only as needed to operate, provide, and improve the Services - for example, to show your listings and profile to other users. This licence ends when Your Content is deleted from the Services, except where it has been shared with other users (such as messages in their conversations) or where we must retain it by law.",
      },
      {
        type: "text",
        text: "You confirm that you have the rights to everything you post, and that Your Content and the books you offer comply with these Terms and applicable law.",
      },
    ],
  },
  {
    title: "7. Community Rules",
    blocks: [
      {
        type: "text",
        text: "BookSwap has zero tolerance for objectionable content and abusive users. When using the Services, you must not:",
      },
      {
        type: "list",
        items: [
          "Harass, threaten, bully, stalk, or intimidate anyone",
          "Post content that is hateful, discriminatory, violent, sexually explicit, or otherwise objectionable",
          "Offer anything other than a physical book you own and are entitled to give away, or offer items that are illegal, stolen, counterfeit, or pirated",
          "Ask for or offer money, or use BookSwap to sell or advertise goods or services",
          "Send spam, scams, or misleading offers, or misrepresent a book's condition",
          "Impersonate any person, or create fake or multiple accounts",
          "Share another person's personal information without their permission",
          "Use BookSwap to arrange anything other than book swaps",
          "Interfere with or disrupt the Services, scrape data, reverse engineer the app, or bypass any security or access controls",
          "Use the Services in violation of any applicable law",
        ],
      },
    ],
  },
  {
    title: "8. Reporting and Blocking",
    blocks: [
      {
        type: "text",
        text: "You can block a user and report users or content directly in the app - for example for inappropriate behavior, spam, or scams. You can also contact us at the email address below.",
      },
      {
        type: "text",
        text: "We review reports and aim to act on them within 24 hours. We may remove content and suspend or remove accounts that violate these Terms, at our discretion and without prior notice.",
      },
    ],
  },
  {
    title: "9. Suspension and Termination",
    blocks: [
      {
        type: "text",
        text: "You can stop using the Services and delete your account at any time.",
      },
      {
        type: "text",
        text: "We may suspend or terminate your access to the Services, or remove any content, if we reasonably believe you have violated these Terms, created risk or possible legal exposure for us or other users, or if we are required to do so by law. We may also modify, suspend, or discontinue all or part of the Services at any time.",
      },
      {
        type: "text",
        text: "Sections of these Terms that by their nature should survive termination - including Sections 6, 10, 12, 13, and 15 - will continue to apply.",
      },
    ],
  },
  {
    title: "10. BookSwap's Content and Brand",
    blocks: [
      {
        type: "text",
        text: "The Services, including the app, website, design, logos, and the BookSwap name, are owned by BookSwap and protected by intellectual property laws. We give you a personal, limited, non-exclusive, non-transferable, revocable licence to use the app on your own device for its intended purpose. You may not copy, modify, distribute, or create derivative works from the Services except as these Terms allow.",
      },
      {
        type: "text",
        text: "Book titles, authors, and cover images shown in the app may come from third-party book databases and belong to their respective owners.",
      },
    ],
  },
  {
    title: "11. App Stores and Third-Party Services",
    blocks: [
      {
        type: "text",
        text: "If you download BookSwap from the Apple App Store or Google Play, you also agree to that store's terms. These Terms are between you and BookSwap only, not Apple or Google. Apple and Google are not responsible for the app or its content, have no obligation to provide maintenance or support for it, and are not responsible for any claims relating to it. Apple and its subsidiaries are third-party beneficiaries of these Terms and may enforce them against you.",
      },
      {
        type: "text",
        text: "The Services rely on third-party services (described in our Privacy Policy). We are not responsible for third-party services, websites, or content that we do not control.",
      },
    ],
  },
  {
    title: "12. Disclaimers",
    blocks: [
      {
        type: "text",
        text: "The Services are provided \"as is\" and \"as available.\" To the fullest extent permitted by law, we make no warranties of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee that the Services will be uninterrupted, error-free, or secure, or that any swap will take place.",
      },
      {
        type: "text",
        text: "We are not responsible for the conduct of any user, online or offline, or for the condition, content, or legality of any book exchanged through the Services.",
      },
    ],
  },
  {
    title: "13. Limitation of Liability",
    blocks: [
      {
        type: "text",
        text: "To the fullest extent permitted by law, BookSwap will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of data, books, or other property, arising from or related to your use of the Services or your interactions with other users.",
      },
      {
        type: "text",
        text: "Because the Services are provided free of charge, our total liability for any claim relating to the Services is limited to the maximum extent permitted by law. Nothing in these Terms limits liability that cannot be limited under applicable law, including any rights you have as a consumer.",
      },
    ],
  },
  {
    title: "14. Changes to These Terms",
    blocks: [
      {
        type: "text",
        text: "We may update these Terms from time to time. If we make material changes, we will update the Effective Date and, where appropriate, notify you through the app or other reasonable means. If you continue to use the Services after the changes take effect, you accept the updated Terms.",
      },
    ],
  },
  {
    title: "15. Governing Law",
    blocks: [
      {
        type: "text",
        text: "These Terms are governed by the laws of the Republic of Türkiye. Any dispute will be resolved by the courts of Istanbul, unless the mandatory consumer protection laws of your country of residence give you the right to bring a claim in your local courts.",
      },
    ],
  },
];

export default function Terms() {
  return (
    <motion.section
      id="terms"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainer(0.06)}
      className="w-full max-w-2xl px-6 pt-32 pb-20 flex flex-col text-left"
    >
      <motion.span
        variants={fadeUp}
        className="font-mono text-xs tracking-[0.2em] uppercase"
        style={{ color: "var(--primary)" }}
      >
        Terms of Service
      </motion.span>

      <motion.h1
        variants={fadeUp}
        className="font-display mt-4 text-3xl sm:text-4xl font-medium text-[var(--ink)]"
      >
        Terms of Service
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-3 font-mono text-xs"
        style={{ color: "var(--ink-muted)" }}
      >
        Effective Date: {effectiveDate}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-8 text-sm sm:text-base"
        style={{ color: "var(--ink-soft)" }}
      >
        Welcome to BookSwap. These Terms explain the rules for using BookSwap
        to share and swap books with other readers. Please read them together
        with our{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-2"
          style={{ color: "var(--primary)" }}
        >
          Privacy Policy
        </Link>
        , which explains how we handle your information.
      </motion.p>

      <div className="mt-12 w-full flex flex-col gap-10">
        {sections.map((section) => (
          <motion.div key={section.title} variants={fadeUp}>
            <h2 className="font-display text-xl font-medium text-[var(--ink)]">
              {section.title}
            </h2>

            <div className="mt-3 flex flex-col gap-3">
              {section.blocks.map((block, i) => {
                if (block.type === "subtitle") {
                  return (
                    <h3
                      key={i}
                      className="font-display text-base font-medium text-[var(--ink)] mt-1"
                    >
                      {block.text}
                    </h3>
                  );
                }

                if (block.type === "list") {
                  return (
                    <ul
                      key={i}
                      className="list-disc pl-5 flex flex-col gap-1.5 text-sm sm:text-base"
                      style={{ color: "var(--ink-soft)" }}
                    >
                      {block.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p
                    key={i}
                    className="text-sm sm:text-base"
                    style={{ color: "var(--ink-soft)" }}
                  >
                    {block.text}
                  </p>
                );
              })}
            </div>
          </motion.div>
        ))}

        <motion.div variants={fadeUp}>
          <h2 className="font-display text-xl font-medium text-[var(--ink)]">
            16. Contact Us
          </h2>
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: "var(--ink-soft)" }}
          >
            If you have any questions about these Terms, or want to report a
            user or content, please contact us:
          </p>
          <p
            className="mt-3 text-sm sm:text-base"
            style={{ color: "var(--ink-soft)" }}
          >
            Website:{" "}
            <a
              href={siteConfig.url}
              className="underline underline-offset-2"
              style={{ color: "var(--primary)" }}
            >
              {siteConfig.url}
            </a>
          </p>
          <p
            className="mt-1 text-sm sm:text-base"
            style={{ color: "var(--ink-soft)" }}
          >
            Email:{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="underline underline-offset-2"
              style={{ color: "var(--primary)" }}
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
