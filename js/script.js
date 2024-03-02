// buttons fetch by category
const fetchCategory = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/categories"
  );
  const data = await response.json();
  const allData = data.data;
  //   console.log(allData);
  const btnContainer = document.getElementById("catBtn");
  allData.forEach((category) => {
    const catBtn = document.createElement("button");
    catBtn.classList.add("btn");
    catBtn.innerText = category.category;
    btnContainer.appendChild(catBtn);
  });
};

// fetch youtube music
const fetchMusic = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/videos/category/1000"
  );
  const data = await response.json();
  const musicData = data.data;
  //   console.log(musicData);
  const vdoSection = document.getElementById("vdoSection");
  musicData.forEach((musicVdo) => {
    console.log(musicVdo);
    const musicCat = document.createElement("div");
    musicCat.classList = "card bg-base-100 shadow-xl";
    musicCat.innerHTML = `
            <figure>
              <img class="h-40 overflow-hidden"
                src="${musicVdo.thumbnail}"
                alt="Youtube"
              />
            </figure>
            <div class="card-body p-6">
              <div class="flex gap-4">
                <div class="basis-1/4">
                  <img class=" w-12 h-12 rounded-full" src="${musicVdo.authors[0].profile_picture}" alt="" />
                </div>
                <div class="space-y-2">
                  <h2 class="card-title text-lg">
                    ${musicVdo.title}
                  </h2>
                  <div class="flex gap-4">
                    <span class="author-name">${musicVdo.authors[0].profile_name}</span>
                    <span><img src="Group.jpeg" alt="" /></span>
                  </div>
                  <p>${musicVdo.others.views} views</p>
                </div>
              </div>
            </div>
    `;
    vdoSection.appendChild(musicCat);
  });
};

fetchCategory();
fetchMusic();
