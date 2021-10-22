const UsersSocialMedia = {
  github: 'AngelOttoni',
  youtube: '',
  instagram: 'angelinaottoni',
  facebook: 'AngelMOttoni',
  twitter: 'MMeiras'
}

function changeSocialMediaUsers() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${UsersSocialMedia[social]}`
  }
}

changeSocialMediaUsers()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${UsersSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      //userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfo()
