/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("books").del();
  await knex("books").insert([
    {
      id: 1,
      title: "The Lost Kingdom",
      description:
        "An epic fantasy tale of a forgotten land and the quest to reclaim a stolen throne.",
      published_date: "2015-09-21",
      author_id: 1,
    },
    {
      id: 2,
      title: "Echoes of Time",
      description:
        "A historical novel that explores the rise and fall of empires through the eyes of its leaders.",
      published_date: "2018-06-15",
      author_id: 2,
    },
    {
      id: 3,
      title: "The Final Clue",
      description:
        "A thrilling mystery that keeps readers guessing until the very last page.",
      published_date: "2013-11-02",
      author_id: 3,
    },
    {
      id: 4,
      title: "Adventures of Lila and Max",
      description:
        "A heartwarming children's story about friendship, adventure, and growing up.",
      published_date: "2020-02-05",
      author_id: 4,
    },
    {
      id: 5,
      title: "Beyond the Horizon",
      description:
        "A futuristic tale of survival in a dystopian world dominated by technology and corporate greed.",
      published_date: "2017-04-19",
      author_id: 5,
    },
    {
      id: 6,
      title: "Love at First Sight",
      description:
        "A romantic comedy about two people who meet under the most unusual circumstances and fall in love.",
      published_date: "2016-08-10",
      author_id: 6,
    },
    {
      id: 7,
      title: "Kings and Tyrants",
      description:
        "A detailed biography of the most powerful rulers in history, and the impact of their reigns.",
      published_date: "2012-12-01",
      author_id: 7,
    },
    {
      id: 8,
      title: "The Mystic Forest",
      description:
        "A fantasy novel where the protagonist embarks on a journey through a magical forest full of secrets.",
      published_date: "2021-07-29",
      author_id: 8,
    },
    {
      id: 9,
      title: "Mind Matters",
      description:
        "A self-help book that delves into the workings of the human mind and how to achieve mental clarity.",
      published_date: "2019-05-03",
      author_id: 9,
    },
    {
      id: 10,
      title: "Whispers of the Wind",
      description:
        "A poetic exploration of the beauty of nature and the journey of personal growth.",
      published_date: "2022-03-22",
      author_id: 10,
    },
  ]);
};
