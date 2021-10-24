// Object Social Media
const LinksSocialMedia = {
  github: 'Sr-Renan',
  youtube: 'channel/UC-9vxQ_lg9jp02elLKv1KhA',
  facebook: '',
  instagram: 'renanvianarv',
  linkedin: 'in/renan-viana-37498b1b0'
}

//function of setting new social networks.
function ChangeSocialMediaLinks() {
  for (let li of SocialLinks.children) {
    const Social = li.getAttribute('class')

    li.children[0].href = `https://${Social}.com/${LinksSocialMedia[Social]}`
  }
}

ChangeSocialMediaLinks()

function GetGutHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserPhoto.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}
GetGutHubProfileInfos()
