/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/2017/01/08/hello-world/index.html","0a8a59ba8a14079ab278373716bb9e56"],["/2017/01/08/hexo-404-page/index.html","dad0fd87eaa548b772b0d5459e94aac0"],["/2017/01/08/readme/index.html","6402b36d6668c1a5ce321aa549433ed2"],["/2017/01/14/javascript-variable-hoisting/index.html","ffbc7b293b1e95b19fb10cae3172e856"],["/2017/01/20/using-javascript-to-create-web-storage/index.html","fdc0a67606af4231b1d02a023f90df55"],["/2017/02/02/javascript-true-and-false/index.html","1193076f2e66f3d5cbd6edc118d66206"],["/2017/02/19/javascript-closure/index.html","af9cdbd7eb4d9458d4c63995e11030f1"],["/2017/02/19/supercharger-hackathon/index.html","26ed7bc033ba50cf038f0ce59c9d1fcf"],["/2017/02/22/using-javascript-to-push-web-notification/index.html","71af0011468b114f7d4fdcc84a2ad4a9"],["/2017/02/23/github-edcation-package/index.html","e06416bf7b42042f510aaed72ebd8390"],["/2017/02/26/hexo-change-site-url/index.html","54cad4a27ab848036e7c3cf9178e136b"],["/2017/02/26/hexo-seo-nofollow/index.html","4cdd07ef60bd66179e07232be4848ec3"],["/2017/03/25/javascript-this/index.html","23f83cb5587d4340d500467b72ee6f44"],["/2017/03/27/interview/index.html","260e52eeb5d3a01af27e5a928316594d"],["/2017/04/01/git-workflow/index.html","2e0d1b31a30b035acf6ab6983d799fa1"],["/2017/04/05/front-end-booklist/index.html","e5a199b745046531dba395954a09599e"],["/2017/04/08/common-http-status-code/index.html","a8e08f654188dc1070db3f3dec8472a6"],["/2017/04/11/github-ssh/index.html","6892fc440199094a97fb2af75617d24a"],["/2017/04/11/react-native-run-android/index.html","dcaab39a77b867abf5be9ecbb156b651"],["/2017/04/12/use-css-to-draw-circle/index.html","2f9a9fbad48bad696dbc0faae2f3ccdf"],["/2017/04/20/bootstrap-code-analysis-1/index.html","f39b29a69a074c230a00c41a9e92859a"],["/2017/04/23/hackUST-2017-hackathon-summary/index.html","75716512e359cd5b348bd276bbca4a92"],["/2017/04/25/coders-of-the-caribbean-review/index.html","42470b8fac5d026dfb2a209f975a6152"],["/2017/04/27/n-ways-to-output-hello-world/index.html","31f1aefff9ed668c69263b4526854a91"],["/2017/05/01/CreateListFromArrayLike-problem-solution/index.html","78c76fab5e1e0b085a02a17820d96784"],["/2017/05/02/how-to-generate-svg-sprite/index.html","3c4f05b6d2c8b6c864ffeb3d074dfe39"],["/2017/05/03/redux-array-push-function/index.html","2807d18f5d135cc40c94489b4b3c8910"],["/2017/05/05/javascript-array/index.html","1561affb5a075176f17f8de11917d343"],["/2017/05/06/introduction-to-regular-expression/index.html","60c3e424757a66dfff0acb0db146d867"],["/2017/05/06/vertical-align-with-css/index.html","4a4d9269d1c439c26e7f05f025316bcf"],["/2017/05/16/react-component-lifecycle/index.html","1733e90de50d1da12ada6f2fc46e580f"],["/2017/05/18/javascript-data-structures/index.html","5256de9f7f02061cd48200ca7df5045b"],["/2017/05/21/learn-javascript-in-six-steps/index.html","fa9edd37d1ba2c2dc5761bf24f54622b"],["/2017/05/30/why-i-write-blog-posts/index.html","db8506ffa7b1baba5fa7df0e9998d22f"],["/2017/05/31/javascript-array-map-parseint-solutions/index.html","69c45211f5c314a17f3339171d710587"],["/2017/06/01/create-markdown-powerpoint-in-5-mins/index.html","304e6832db80b7469dff200419bedc04"],["/2017/06/12/hong-kong-open-data-from-zero-to-giveup/index.html","715ccd20a540f8b72f990d074ea9f662"],["/2017/06/14/hong-kong-open-sources-conference-remarks/index.html","0c3a26a696298df868a2532b61043d0d"],["/2017/06/19/front-end-performance-check-list-for-production-in-chinese/index.html","3c6f2a6a2190d7a32d940dbabebfb2bd"],["/2017/07/02/introduction-to-hhkb-pro-2/index.html","46077d8609816daf20c4ff8aeab8fccf"],["/2017/07/06/titanic-a-set-of-animated-icons/index.html","76aa874ff562d6470022592e8f466857"],["/2017/07/24/six-steps-to-debug-before-directly-ask-question/index.html","6a334fae0cdc12f5b635dd356c36909b"],["/2017/08/04/utilize-github-issue-by-using-gitalk/index.html","39c96808269d5d90ed545eed629a2176"],["/2017/08/27/react-app-optimization-1-source-map/index.html","344096edb3b33e3de6daabd025d581c4"],["/404.html","5be2fc40750d8f77c45e17883436ffe6"],["/Tags/index.html","1b354c81d6fcbf0d8c4b51e2e1d2f8a3"],["/about/index.html","f496ffcb4f888ea38d5749160403efa1"],["/archive/index.html","0b3c0ec5d288a5e815773b8d89724e4d"],["/assets/algolia/algoliasearch.js","f53b7616aead4563af8ff9f3fdbddac0"],["/assets/algolia/algoliasearch.min.js","00910903fa27aa02871a5de9ecc39753"],["/assets/algolia/algoliasearchLite.js","c7b9d58b98c220f623601e8ad76031a7"],["/assets/algolia/algoliasearchLite.min.js","5bc80d27d70e2a60fef3b8fe588cdf37"],["/css/blog-style.css","e831fccd9a1d2bb9b130d7819ef18047"],["/css/bootstrap.min.css","d061941b23f176a7d2d2dfb055b6aa08"],["/css/pace-theme-minimal.min.css","94b55bbf8dd68d989be366ada1f27f15"],["/css/syntax.css","51ca022a40a3b80dc4a09e6c1882187d"],["/fonts/glyphicons-halflings-regular.eot","f4769f9bdb7466be65088239c12046d1"],["/fonts/glyphicons-halflings-regular.svg","89889688147bd7575d6327160d64e760"],["/fonts/glyphicons-halflings-regular.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/fonts/glyphicons-halflings-regular.woff","fa2772327f55d8198301fdb8bcfc8158"],["/fonts/glyphicons-halflings-regular.woff2","448c34a56d699c29117adc64c43affeb"],["/img/blue-blur-background.jpg","7ad67456212393dd24661f5e1689136c"],["/img/blue-blur-background.png","3973d3872c00b4867242fdd99e8acfa7"],["/img/gitalk.svg","2a8891125015a735aa60a90559a34055"],["/img/icon.png","abe3fd9934da70d11edb575e5f68acea"],["/img/javascript-data-structures.svg","82974b6fe6d4461e082e7b07b8b311ec"],["/img/leetcode-448-fail.png","45f1e9acbb2c781024695e16d16e81cc"],["/img/post-backup.jpg","7508136e2e319d4f26313255b5128bbc"],["/img/post-default.jpg","73237509d5afbad3f17f138bdf73f414"],["/img/profile.png","04995ed44cb6c6426acc3ed1264c914d"],["/img/qrcode.png","c80d2de26edaedf4ae7064237ba49507"],["/img/react-mount.svg","912bd69bc69434d145b0030d8462494a"],["/index.html","bbc19963590ef6c49a99d2fa87e0b696"],["/js/blog.js","762497a1acf711446a2d0fdafa9aa678"],["/js/jquery.tagcloud.js","29be493c486274b127c2d68503892ce5"],["/js/magic.js","865cbcc32fd606e55b1d4d83acedd966"],["/js/totop.js","0c27d9bd6020c4634ff98959fbac8a67"],["/page/2/index.html","8ffcf705accd71ec7e0e066236cfa90b"],["/page/3/index.html","4a9737f5da670f0c1c318726931a1ed6"],["/page/4/index.html","1edca326dddbca149078c4f04880e286"],["/page/5/index.html","a884e4f49c53f805b2c3574357d5455f"],["/page/6/index.html","3963ed30a8abd414c1a0ca24b0a43769"],["/search/index.html","f49564344133f9b2b52ea4d148fef1f0"],["/works/index.html","ed9f623ae2a2558decdd4e893a5c5ee6"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







