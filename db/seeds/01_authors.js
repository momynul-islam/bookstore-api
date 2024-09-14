/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("authors").del();
  await knex("authors").insert([
    {
      id: 1,
      name: "John Doe",
      bio: "John Doe is a prolific writer known for his works on fiction and fantasy. He has published over 20 novels.",
      birthdate: "1978-05-12",
    },
    {
      id: 2,
      name: "Jane Smith",
      bio: "Jane Smith is an award-winning author and journalist, focusing on historical novels with strong female leads.",
      birthdate: "1985-08-23",
    },
    {
      id: 3,
      name: "Samuel Green",
      bio: "Samuel Green has written numerous best-selling mystery novels and is well-known for his intricate plotlines and character development.",
      birthdate: "1969-11-04",
    },
    {
      id: 4,
      name: "Emily White",
      bio: "Emily White specializes in children's literature, creating stories that inspire and captivate young minds.",
      birthdate: "1990-02-14",
    },
    {
      id: 5,
      name: "Michael Brown",
      bio: "Michael Brown is an author of science fiction and futuristic dystopian novels, exploring themes of technology and society.",
      birthdate: "1982-09-30",
    },
    {
      id: 6,
      name: "Isabella Black",
      bio: "Isabella Black writes romantic comedies and has gained a large following for her witty and heartwarming stories.",
      birthdate: "1975-12-05",
    },
    {
      id: 7,
      name: "David King",
      bio: "David King is a historian and biographer, known for his deep insights into political and historical figures.",
      birthdate: "1961-03-17",
    },
    {
      id: 8,
      name: "Olivia Blue",
      bio: "Olivia Blue is a fantasy novelist with a particular interest in world-building and magical realism.",
      birthdate: "1988-07-11",
    },
    {
      id: 9,
      name: "Ethan Woods",
      bio: "Ethan Woods has authored several non-fiction books on psychology and self-improvement, with a focus on mental well-being.",
      birthdate: "1972-06-27",
    },
    {
      id: 10,
      name: "Sophia Green",
      bio: "Sophia Green is known for her poetry collections that explore themes of nature, identity, and personal growth.",
      birthdate: "1993-11-21",
    },
  ]);
};
