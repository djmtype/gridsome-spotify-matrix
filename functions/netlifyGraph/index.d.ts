// GENERATED VIA NETLIFY AUTOMATED DEV TOOLS, EDIT WITH CAUTION!

export type NetlifyGraphFunctionOptions = {
  /**
   * The accessToken to use for the request
   */
  accessToken?: string;
  /**
   * The siteId to use for the request
   * @default process.env.SITE_ID
   */
  siteId?: string;
};

export type WebhookEvent = {
  body: string;
  headers: Record<string, string | null | undefined>;
};

export type GraphQLError = {
  path: Array<string | number>;
  message: string;
  extensions: Record<string, unknown>;
};

export type LatestTracks = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    me: {
      spotify: {
        /**
  * Returns the most recent tracks played by a user.

Note that a track currently playing will not be visible in play history until it has completed.

A track must be played for more than 30 seconds to be included in play history. Any tracks listened to while the user had “Private Session” enabled in their client will not be returned in the list of recently played tracks.
  */
        recentlyPlayed: {
          /**
           * List of play history items.
           */
          nodes: Array<{
            /**
             * The track the user listened to.
             */
            track: {
              /**
               * The name of the track.
               */
              name: string;
              /**
               * A URL to a 30 second preview (MP3 format) of the track.
               */
              previewUrl: string;
              /**
               * External URLs for this track.
               */
              externalUrls: {
                /**
                 * The Spotify URL for the object.
                 */
                spotify: string;
              };
              /**
               * The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist.
               */
              artists: Array<{
                /**
                 * The name of the artist.
                 */
                name: string;
                /**
                 * Known external URLs for this artist.
                 */
                externalUrls: {
                  /**
                   * The Spotify URL for the object.
                   */
                  spotify: string;
                };
              }>;
            };
            /**
             * The date and time the track was played.
             */
            playedAt: string;
            /**
             * The context the track was played from.
             */
            context: {
              /**
               * External URLs for this context.
               */
              externalUrls: {
                /**
                 * The Spotify URL for the object.
                 */
                spotify: string;
              };
            };
          }>;
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An example query to start with.
 */
export function fetchLatestTracks(
  /**
   * Pass `{}` as no variables are defined for this function.
   */
  variables: Record<string, never>,
  options?: NetlifyGraphFunctionOptions
): Promise<LatestTracks>;

export type MyPlaylistsInput = {
  page: string;
};

export type MyPlaylists = {
  /**
   * Any data from the function will be returned here
   */
  data: {
    pageOne: {
      spotify: {
        /**
         * The Spotify user ID for the user.
         */
        id: string;
        playlistsConnection: {
          /**
           * Playlist
           */
          nodes: Array<{
            /**
             * The Spotify ID for the playlist.
             */
            id: string;
            /**
             * The name of the playlist.
             */
            name: string;
            /**
             * The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists
             */
            public: boolean;
            /**
             * The playlist description. Only returned for modified, verified playlists, otherwise null.
             */
            description: string;
            /**
             * The Spotify URI for the playlist.
             */
            uri: string;
            /**
             * Known external URLs for this playlist.
             */
            externalUrls: {
              /**
               * The Spotify URL for the object.
               */
              spotify: string;
            };
            /**
             * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day.
             */
            images: Array<{
              /**
               * The image height in pixels. If unknown: `null` or not returned.
               */
              height: number;
              /**
               * The image width in pixels. If unknown: `null` or not returned.
               */
              width: number;
              /**
               * The source URL of the image.
               */
              url: string;
            }>;
          }>;
        };
      };
    };
    pageTwo: {
      spotify: {
        /**
         * The Spotify user ID for the user.
         */
        id: string;
        playlistsConnection: {
          /**
           * Playlist
           */
          nodes: Array<{
            /**
             * The Spotify ID for the playlist.
             */
            id: string;
            /**
             * The name of the playlist.
             */
            name: string;
            /**
             * The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. For more about public/private status, see Working with Playlists
             */
            public: boolean;
            /**
             * The playlist description. Only returned for modified, verified playlists, otherwise null.
             */
            description: string;
            /**
             * The Spotify URI for the playlist.
             */
            uri: string;
            /**
             * Known external URLs for this playlist.
             */
            externalUrls: {
              /**
               * The Spotify URL for the object.
               */
              spotify: string;
            };
            /**
             * Images for the playlist. The array may be empty or contain up to three images. The images are returned by size in descending order. See Working with Playlists. Note: If returned, the source URL for the image (url) is temporary and will expire in less than a day.
             */
            images: Array<{
              /**
               * The image height in pixels. If unknown: `null` or not returned.
               */
              height: number;
              /**
               * The image width in pixels. If unknown: `null` or not returned.
               */
              width: number;
              /**
               * The source URL of the image.
               */
              url: string;
            }>;
          }>;
        };
      };
    };
  };
  /**
   * Any errors from the function will be returned here
   */
  errors: Array<GraphQLError>;
};

/**
 * An empty query to start from
 */
export function fetchMyPlaylists(
  variables: MyPlaylistsInput,
  options?: NetlifyGraphFunctionOptions
): Promise<MyPlaylists>;
