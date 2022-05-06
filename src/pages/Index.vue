<template>
	<Layout>
		<div>
			<div class="entry-list">
				<form>
					<input
						type="search"
						name="search"
						id="search"
						placeholder="Type something..."
						v-model="search"
					/>
				</form>

				<article
					v-for="playlist in searchResults"
					:key="playlist.id"
				>
					<div class="entry">
						<h2>
							<a
							:href="playlist.node.externalUrls.spotify"
							target="_blank"
							rel="noopener"
							v-html="$options.filters.highlight(playlist.node.name, search)" />
							</h2>

						
					</div>

					<div class="entry">
						<img
							:src="playlist.node.images[0].url"
							:width="250"
							:height="250"
							class="playlist-img"
						/>

						<ol>
							<li
								v-for="track in playlist.node.tracksConnection.nodes"
								:key="track.playlistsConnection"
							>
								<span class="track-name" v-html="$options.filters.highlight(track.name, search)" />
									 <br />
								<span
									class="artist-name"
									v-for="artist in track.artists"
									:key="artist.tracks"
								>
									<span v-html="$options.filters.highlight(artist.name, search)" />
								</span>
							</li>
						</ol>

					</div>
					<!-- <a
							:href="playlist.node.externalUrls.spotify"
							target="_blank"
							rel="noopener"
							>{{ playlist.node.name }}</a
						> -->
				</article>
			</div>
		</div>
	</Layout>
</template>

<page-query>
query MyQuery {
  allMyPlaylists(order: ASC) {
    edges {
      node {
        id
        name
        public
        externalUrls {
          spotify
        }
        images {
          url
        }
        tracksConnection {
          nodes {
            name
            id
            durationMs
            artists {
              name
            }
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
		title: 'Playlists',
	},

	data() {
		return {
			search: '',
		};
	},
		computed: {

		searchResults() {

// return this.$page.oneGraph.spotify.me.playlistsConnection.nodes

			return this.$page.allMyPlaylists.edges.filter(
				(playlist) => {
					if (!playlist.node.public) return;

					const searchTerm = this.search.toLowerCase().trim();
					const playlistNameIncludes = playlist.node.name
						.toLowerCase()
						.includes(searchTerm);

					const trackNameIncludes = playlist.node.tracksConnection.nodes.some(
						(track) => track.name.toLowerCase().includes(searchTerm)
					);

					const artistNameIncludes = playlist.node.tracksConnection.nodes.some(
						({ artists }) =>
							artists.some((artist) =>
								artist.name.toLowerCase().includes(searchTerm)
							)
					);

					return (
						playlistNameIncludes || artistNameIncludes || trackNameIncludes
					);
				}
			);
		},
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

input[type='search'] {
	font-size: 2em;
	padding: 0.25em 0.5em;
	width: 100%;
}

form {
	padding-top: 2rem;
	position: sticky;
	top: 0;
}


</style>
