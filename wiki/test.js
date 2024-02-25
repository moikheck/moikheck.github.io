let postsData = "";
const searchResults = document.querySelector(".search-results");

fetch(
  "../search.json"
).then(async (response) => {
  postsData = await response.json();
  postsData.map((post) => createPost(post));
});

const createPost = (postData) => {
  const { title, link } = postData;
//   const post = document.createElement("div");
//   post.innerHTML = `
//     <button type="button" class="dropbtn" onclick="window.location='${link}'">${title}</button>
//       </div>
//   `;

  searchResults.append(`<button type="button" class="dropbtn" onclick="window.location='${link}'">${title}</button>
  </div>
`);
};

const handleSearchPosts = (query) => {
  const searchQuery = query.trim().toLowerCase();
  
  if (searchQuery.length <= 1) {
    resetPosts()
    return
  }
  
  let searchResults = [...postsData].filter(
    (post) =>
      post.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
      post.title.toLowerCase().includes(searchQuery)
  );

  resetPosts();
  searchResults.map((post) => createPost(post));
};

const resetPosts = () => {
    searchResults.innerHTML = ""
};

const search = document.getElementById("search");
console.log(search);

let debounceTimer;
const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

search.addEventListener(
  "input",
  (event) => {
    const query = event.target.value;
    debounce(() => handleSearchPosts(query), 500);
  },
  false
);