import { Handler, getSecrets, NetlifySecrets } from "@netlify/functions";

const handler: Handler = async (event, context) => {
	let secrets: NetlifySecrets = {};
	secrets = await getSecrets(event);

	if (secrets.spotify) {
		return {
			statusCode: 200,
			body: JSON.stringify({ ready: secrets.spotify.isLoggedIn }),
		};
	} else {
		return {
			statusCode: 200,
			body: JSON.stringify({ message: "Could not get Spotify information." }),
		};
	}
};

export { handler };
