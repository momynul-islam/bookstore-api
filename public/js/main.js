const createAuthorBtn = document.querySelector(".createAuthorBtn");
const createBookBtn = document.querySelector(".createBookBtn");

if (createAuthorBtn) {
  createAuthorBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const bio = document.getElementById("bio").value;
    const birthdate = document.getElementById("birthdate").value;

    const res = await fetch("/api/v1/authors", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name, bio, birthdate }),
    });

    const data = await res.json();

    if (data.status === "success") {
      window.location.href = "/authors";
    } else {
      alert(data.message);
    }
  });
}

if (createBookBtn) {
  createBookBtn.addEventListener("click", async function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const published_date = document.getElementById("published_date").value;
    const author_id = document.getElementById("author_id").value;

    const res = await fetch("/api/v1/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ title, published_date, author_id }),
    });

    const data = await res.json();

    if (data.status === "success") {
      window.location.href = "/books";
    } else {
      alert(data.message);
    }
  });
}
