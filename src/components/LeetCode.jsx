import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const LeetCode = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Problem Solving</p>
      <h2 className={styles.sectionHeadText}>LeetCode.</h2>
    </motion.div>

    <motion.div
      variants={fadeIn("up", "spring", 0.2, 0.75)}
      className="mt-8 rounded-2xl border border-white/10 bg-tertiary p-6 sm:p-8 shadow-card"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#2a1d4c] text-3xl">
            💻
          </div>
          <div>
            <h3 className="text-white text-[22px] font-bold">Coding & Problem Solving</h3>
            <p className="mt-2 max-w-2xl text-secondary text-[16px] leading-7">
              Explore my LeetCode profile to see my coding practice and approach to data structures,
              algorithms, and problem-solving.
            </p>
            <p className="mt-2 text-[#915EFF] font-medium">LeetCode username: RameshKumarrrr</p>
          </div>
        </div>
        <motion.a
          href="https://leetcode.com/u/RameshKumarrrr/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#915EFF] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#7c4dff]"
        >
          Visit LeetCode <span aria-hidden="true">↗</span>
        </motion.a>
      </div>
    </motion.div>
  </>
);

export default SectionWrapper(LeetCode, "leetcode");
