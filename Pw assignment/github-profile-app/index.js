const input = document.querySelector('input')
const btn = document.querySelector('button')
const card = document.querySelector('.card')
const repos_container = document.querySelector('.repos')
const fullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const userRepos = document.getElementById("userRepos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const userImg = document.getElementById("userImg");
const gitProfile = document.getElementById("gitProfile");




async function user (username) {
    const resp = await fetch(`https://api.github.com/users/${username}`)
    const respData = await resp.json()
    return respData
}

async function repos (username) {
    const resp = await fetch(`https://api.github.com/users/${username}/repos`)
    const respData = await resp.json()

    return respData
}
async function add_repo (username) {
    const reposData = await repos(username)
    repos_container.innerHTML = reposData.map(repo => {
        return `
            <div class="repoCard">
                <h2>${repo.name}</h2>
                <p>${repo.description!==null ? repo.description : ""}</p>
                <p>${repo.language !==null ? repo.language : ""}</p>
                <a href="${repo.clone_url}" target="_blank">See Full Repo On Github</a>
            </div>
        `
    }).join('')
}

btn.addEventListener('click', async (e) => {
    e.preventDefault();
    const input_val = input.value

    if(!input_val) {
        alert("Please Enter username...");
        return
    }
    const search_result = await user(input_val)

    add_repo(input_val);

    if (!search_result.login) {
        alert('No user found!')
    } else {
        fullName.innerHTML = search_result.name;
        userName.innerHTML = search_result.login;
        userImg.src = search_result.avatar_url;
        followers.innerHTML = search_result.followers;
        following.innerHTML = search_result.following;
        userRepos.innerHTML = search_result.public_repos;
        gitProfile.href = search_result.html_url;
    }
})

async function userDetails(){
    const userData = await user("jeetu16");
    console.log(userData)
    fullName.innerHTML = userData.name;
    userName.innerHTML = userData.login;
    userImg.src = userData.avatar_url;
    followers.innerHTML= userData.followers;
    following.innerHTML = userData.following;
    userRepos.innerHTML = userData.public_repos;
    gitProfile.href = userData.html_url;
    add_repo("jeetu16")
}

userDetails();
