const NetlifyGraph = require("./netlifyGraph");

exports.handler = async event => {
  // By default, all API calls use no authentication
  let accessToken;

  //// If you want to use the client's accessToken when making API calls on the user's behalf:
  // accessToken = event.headers["authorization"]?.split(" ")[1]

  //// If you want to use the API with your own access token:
  accessToken = event.authlifyToken

  const eventBodyJson = JSON.parse(event.body || "{}");

  const {
    errors: MyPlaylistsErrors,
    data: MyPlaylistsData
  } = await NetlifyGraph.fetchMyPlaylists({}, { accessToken: accessToken });

  if (MyPlaylistsErrors) {
    console.error(JSON.stringify(MyPlaylistsErrors, null, 2));
  }

  console.log(JSON.stringify(MyPlaylistsData, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      MyPlaylistsErrors: MyPlaylistsErrors,
      MyPlaylistsData: MyPlaylistsData
    }),
    headers: {
      "content-type": "application/json"
    }
  };
};

/**
 * Client-side invocations:
 * Call your Netlify function from the browser (after saving
 * the code to `MyPlaylists.js`) with these helpers:
 */

/**
async function fetchMyPlaylists(netlifyGraphAuth, params) {
  const {} = params || {};
  const resp = await fetch(`/.netlify/functions/MyPlaylists`,
    {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        ...netlifyGraphAuth?.authHeaders()
      }
    });

    const text = await resp.text();

    return JSON.parse(text);
}
*/
