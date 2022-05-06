// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  Vue.filter('highlight', function(stringToSearch, searchTerm){
    if (searchTerm === '') return stringToSearch;
    var iQuery = new RegExp(searchTerm, "ig");
    return stringToSearch.toString().replace(iQuery, function(matchedText,a,b){
        return ('<span class=\'highlight\'>' + matchedText + '</span>');
    });
});
}
