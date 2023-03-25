const url = "https://api.github.com/users";

const containerDiv = document.querySelector(".container");
const inputTag = document.querySelector(".input");
let users = [];
const buildUI = (users) => {
  for (let i = 0; i < users.length; i++) {
    const userDiv = document.createElement("div");
    userDiv.innerHTML = ` <div
  class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
>
  <img
    class="imageClass"
    src =${users[i].avatar_url}
  />

  <a href="">
    <h5
      class="userClass mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"
    >
    ${users[i].login}
    </h5>
  </a>
  <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">info</p>
  <a
    href=" ${users[i].html_url}"
    class="linkClass inline-flex items-center text-blue-600 hover:underline"
  >
    Go-to ${users[i].login} page
  </a>
</div>`;
    containerDiv.append(userDiv);
  }
};
const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  users = data;
  //buildUI(data);
};

fetchData();

inputTag.addEventListener("keyup", (event) => {
  //console.log(users);
  const inputText = event.target.value;
  const newfilteredArray = users.filter((user) => {
    return user.login.includes(inputText);
  });
  //   console.log(newfilteredArray);
  //   buildUI(newfilteredArray);

  if (inputText.length === 0) {
    containerDiv.innerHTML = "";
  } else {
    buildUI(newfilteredArray);
  }
});
