// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');

module.exports = function (api) {

  api.loadSource(async actions => {
    const { data } = await axios.get('https://gridsome-spotify-matrix.netlify.app/api/latestTracks')

    const contentType = actions.addCollection({
      typeName: 'LatestTracks'
    })

    // console.log(data)

    for (const track of data.latestTracksData.me.spotify.recentlyPlayed.nodes) {
      contentType.addNode({
        // id: track.id,
        // name: track.name
         ...track
      })
      
    }

    // console.log(data.latestTracksData.me.spotify.recentlyPlayed)
    
  })







  api.loadSource(async actions => {
    const { data } = await axios.get('https://gridsome-spotify-matrix.netlify.app/api/MyPlaylists')

    const contentType = actions.addCollection({
      typeName: 'MyPlaylists'
    })

    // console.log(data)

    for (const playlist of data.MyPlaylistsData.me.spotify.playlistsConnection.nodes) {
      contentType.addNode({
        // id: track.id,
        // name: track.name
         ...playlist
      })
      
    }

    // console.log(data.latestTracksData.me.spotify.recentlyPlayed)
    
  })










  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
