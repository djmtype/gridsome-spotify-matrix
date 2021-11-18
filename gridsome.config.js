// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: 'https://serve.onegraph.com/graphql?app_id=f1fcae98-6b30-456d-8b8b-6b09db957a48',
        fieldName: 'oneGraph',
        typeName: 'ONEGRAPH',

        headers: {
          Authorization: `Bearer ${process.env.SPOTIFY_TOKEN}`,
        },
				// remark: {
        //   plugins: [
				// 		'@silvenon/remark-smartypants',
				// 	]
        // },
      },
    },
  ]
}
