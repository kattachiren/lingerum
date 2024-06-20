import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";

import * as schema from "@/db/schema";

const sql = neon(process.env.DATABASE_URL);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete all existing data
    await Promise.all([
      db.delete(schema.userProgress),
      db.delete(schema.challenges),
      db.delete(schema.units),
      db.delete(schema.lessons),
      db.delete(schema.courses),
      db.delete(schema.challengeOptions),
      db.delete(schema.userSubscription),
    ]);

    // Insert courses
    const courses = await db
      .insert(schema.courses)
      .values([{ title: "English", imageSrc: "/uk.svg" }])
      .returning();

    // For each course, insert units
    for (const course of courses) {
      const units = await db
        .insert(schema.units)
        .values([
          {
            courseId: course.id,
            title: "Unit 1",
            description: `Learn the basic words of ${course.title}`,
            order: 1,
          },
          {
            courseId: course.id,
            title: "Unit 2",
            description: `Learn intermediate ${course.title}`,
            order: 2,
          },
        ])
        .returning();

      // For each unit, insert lessons
      for (const unit of units) {
        const lessons = await db
          .insert(schema.lessons)
          .values([
            { unitId: unit.id, title: "Nouns", order: 1 },
            { unitId: unit.id, title: "Verbs", order: 2 },
            { unitId: unit.id, title: "Adjectives", order: 3 },
            { unitId: unit.id, title: "Phrases", order: 4 },
            { unitId: unit.id, title: "Sentences", order: 5 },
          ])
          .returning();

        // For each lesson, insert challenges
        for (const lesson of lessons) {
          const challenges = await db
            .insert(schema.challenges)
            .values([
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Кто среди них "Кот"?',
                order: 1,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Кто среди них "Собака"?',
                order: 2,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Кто среди них "Мальчик"?',
                order: 3,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"Кот"',
                order: 4,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Кто среди них "Панда"?',
                order: 5,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Кто среди них "Слон"?',
                order: 6,
              },
              {
                lessonId: lesson.id,
                type: "SELECT",
                question: 'Кто среди них "Девочка"?',
                order: 7,
              },
              {
                lessonId: lesson.id,
                type: "ASSIST",
                question: '"Панда"',
                order: 8,
              },
            ])
            .returning();

          // For each challenge, insert challenge options
          for (const challenge of challenges) {
            if (challenge.order === 1) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Cat",
                  imageSrc: "/cat.svg",
                  audioSrc: "/es_cat.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Dog",
                  imageSrc: "/dog.svg",
                  audioSrc: "/es_dog.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Boy",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 2) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Dog",
                  imageSrc: "/dog.svg",
                  audioSrc: "/es_dog.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Boy",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Cat",
                  imageSrc: "/cat.svg",
                  audioSrc: "/es_cat.mp3",
                },
              ]);
            }

            if (challenge.order === 3) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Dog",
                  imageSrc: "/dog.svg",
                  audioSrc: "/es_dog.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Cat",
                  imageSrc: "/cat.svg",
                  audioSrc: "/es_cat.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Boy",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 4) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Dog",
                  audioSrc: "/es_dog.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Cat",
                  audioSrc: "/es_cat.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Boy",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 5) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Cat",
                  imageSrc: "/cat.svg",
                  audioSrc: "/es_cat.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Dog",
                  imageSrc: "/dog.svg",
                  audioSrc: "/es_dog.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Panda",
                  imageSrc: "/panda.svg",
                  audioSrc: "/es_panda.mp3",
                },
              ]);
            }

            if (challenge.order === 6) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Elephant",
                  imageSrc: "/elephant.svg",
                  audioSrc: "/es_elephant.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Panda",
                  imageSrc: "/panda.svg",
                  audioSrc: "/es_panda.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Boy",
                  imageSrc: "/boy.svg",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }

            if (challenge.order === 7) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Girl",
                  imageSrc: "/girl.svg",
                  audioSrc: "/es_girl.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Panda",
                  imageSrc: "/panda.svg",
                  audioSrc: "/es_panda.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Cat",
                  imageSrc: "/cat.svg",
                  audioSrc: "/es_cat.mp3",
                },
              ]);
            }

            if (challenge.order === 8) {
              await db.insert(schema.challengeOptions).values([
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Dog",
                  audioSrc: "/es_dog.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: true,
                  text: "Panda",
                  audioSrc: "/es_panda.mp3",
                },
                {
                  challengeId: challenge.id,
                  correct: false,
                  text: "Boy",
                  audioSrc: "/es_boy.mp3",
                },
              ]);
            }
          }
        }
      }
    }
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed database");
  }
};

void main();
