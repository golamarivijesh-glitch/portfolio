"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { jobTitles } from "@/lib/content";

// Cycles through all résumé-related job titles in the hero.
export function RotatingTitle() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % jobTitles.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex h-[1.4em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-gradient whitespace-nowrap"
        >
          {jobTitles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
