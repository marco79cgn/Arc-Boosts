// This script injects a Spotify search link to each song in the playlist

addSpotifyLink()

function addSpotifyLink() {
  const spotifyLink = 'https://open.spotify.com/search/';
  var table = document.getElementsByClassName('trackList')[0];
  for (var i = 1; i < table.rows.length; i++) {
    var row = table.rows[i].getElementsByClassName('left')[0].innerText.split("\n")[0].trim();
    const link = createLink('🎧', 'Spotify', spotifyLink + row.replace(" — ", "%20"));
    table.rows[i].getElementsByClassName('trackInterpret')[0].append(link)
  }
}

function createLink(symbol, name, url) {
  const a = document.createElement('a');
  css(a, {
    display: 'flex',
    color: '#288642',
    margin: '0 0.5em',
  });

  const icon = document.createElement('span');
  icon.innerText = symbol + " Spotify";
  css(icon, { marginTop: 'auto' });

  a.append(icon);
  a.setAttribute('href', url);

  const div = document.createElement('div');
  div.setAttribute('spotify-label', 'Append Spotify link to each song.')
  css(div, {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  })
  div.append(a);

  return div;
}

function css(element, style) {
  for (const key of Object.keys(style)) {
    element.style[key] = style[key];
  }
}
