<template>
	<Layout>
		<div>

			


		<ul>
			<li v-for="(item, index) in $page.allLatestTracks.edges" :key="index">
			
			<a :href="item.node.track.externalUrls.spotify" target="_blank" rel="noopener">{{ item.node.track.name }}</a> by {{ item.node.track.artists[0].name }}
			
			</li>
		</ul>
		</div>
	</Layout>
</template>

<page-query>
query MyQuery {
  allLatestTracks {
    edges {
      node {
        id
        playedAt(format: "MM-DD-YYYY")
        track {
					artists {
            name
          }
          name
          
          externalUrls {
            spotify
          }
        }
      }
    }
  }
}
</page-query>



<script>
export default {
	metaInfo: {
		title: "Playlists",
	},
	


};
</script>

<style scoped>
article {
	margin-top: 3rem;
	border-top: 1px dashed black;
}

.entry {
	gap: 1.5rem;
	display: grid;
	grid-template-columns: minmax(25%, 250px) 1fr;
}

h2 {
	grid-column: 2;
	font-size: 2.5rem;
	font-weight: 400;
}
ol {
	padding-left: 1em;
	columns: 2;
	margin-top: 0;
}
ol > li {
	padding: 0.3em 1em 0.3em 0.5em;
}

.track-name {
	font-size: 1.25rem;
	/* font-style: italic; */
}

.artist-name {
	font-weight: 400;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	font-size: 0.85rem;
	font-family: Azeret Mono, Courier New, monospace;
}
img {
	max-width: 100%;
	height: auto;
}

input[type="search"] {
	font-size: 2em;
	padding: .25em .5em;
	width: 100%;
}

form {
	padding-top: 2rem;
	position: sticky;
	top: 0;
}
</style>
