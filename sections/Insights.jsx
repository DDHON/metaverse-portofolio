/* eslint-disable no-shadow */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
// eslint-disable-next-line quotes

"use client";

import { motion } from "framer-motion";
import { InsightCard, TypingText, TitleText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { insights } from "../constants";

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="Insigh" textStyles="text-center" />
      <TitleText title="Insights About Metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insights, index) => (
          <InsightCard key={`insighh-${index}`} {...insights} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
