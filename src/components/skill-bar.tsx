import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import type { Skill } from "@/types/schema";

interface SkillBarProps {
  skill: Skill;
  index: number;
}

export default function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      viewport={{ once: true }}
    >
      <Card className="glass-effect">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              {skill.icon && (
                <i className={`${skill.icon} text-xl text-brand-blue`} />
              )}
              <span className="font-semibold">{skill.name}</span>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {skill.level}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{
                delay: index * 0.1 + 0.5,
                duration: 1,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              viewport={{ once: true }}
              className="h-2 gradient-bg rounded-full"
            />
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
