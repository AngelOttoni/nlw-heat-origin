const LinksSocialMedia = {
  github: 'jakeliny',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
  // github: 'AngelOttoni',
  // youtube: '',
  // instagram: 'angelinaottoni',
  // facebook: 'AngelMOttoni',
  // twitter: "MMeiras"
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

//changeSocialMediaLinks();
