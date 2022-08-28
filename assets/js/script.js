const url = 'https://api.github.com/users/joaovic-tech'
const img = document.getElementById('my-icon');

async function getDataGithub() {
  try {
    const response = await fetch(url);
    const resBody = await response.json();

    img.src = resBody.avatar_url;
  } catch { err => console.log(err) }
}

getDataGithub();
