'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "1ff0983bee6cc59af311c81ec8091382",
"version.json": "0b0b191f7aa19cd8b15cc53cea399d8d",
"index.html": "654d709b40d6ccbdc1e9bcfad9d162f6",
"/": "654d709b40d6ccbdc1e9bcfad9d162f6",
"main.dart.js": "adc69e3350fce02389f485301ac2c4ad",
"404.html": "80cd972ee4262f33982218648923c441",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "497ab41acff1bf36cbb9db468d83dd35",
"assets/AssetManifest.json": "a88712a103a071042e21d357fa90ca29",
"assets/NOTICES": "800e59b03ba4e0f890c87b1416c5fa6c",
"assets/FontManifest.json": "4dc99f24f15fdc91c8324e8e8609df9a",
"assets/AssetManifest.bin.json": "ec0d2a7f04222a1b1f93b243a90b9a1a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "5a3f94f5a4cbe35f2ae3bbc430b110e4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8af186c5f7c9b1c9bd822e96b03e66e0",
"assets/fonts/MaterialIcons-Regular.otf": "b418569164125d0492aeab26bbab001e",
"assets/assets/images/website/pslogo.png": "b84f3b4a42b21bc283b057460c9becbc",
"assets/assets/images/mmc2.jpg": "f49376bdc9bad50188d704d1d6654aca",
"assets/assets/images/portfolio/tesa/ranking.PNG": "216f5364789393c98a26ff436a283c6f",
"assets/assets/images/portfolio/tesa/classment_home.PNG": "92823406b0bb47c1931440af03af76eb",
"assets/assets/images/portfolio/tesa/tesalogo.jpg": "7bbed07fe15a2261b7e1d1c9390bf753",
"assets/assets/images/portfolio/tesa/TesaLogo.png": "489f1506d6536645e1f031a1da27f4ad",
"assets/assets/images/portfolio/tesa/players.PNG": "f75a57be3ce07052fb1889d420e381ed",
"assets/assets/images/portfolio/tesa/home.PNG": "5f0e70ee88b461a84132b573ea7cb89d",
"assets/assets/images/portfolio/tesa/events.PNG": "48b3a665e48446d7982a07e92fa49e0d",
"assets/assets/images/portfolio/tesa/contact.PNG": "c355989fe305caf4a0ae0ea35fbf5098",
"assets/assets/images/portfolio/tesa/profil1.PNG": "414f40d41fbb83db233eaf140dd03d50",
"assets/assets/images/portfolio/tesa/profil2.PNG": "14444a4373cb09f1bc9d154596696239",
"assets/assets/images/portfolio/tesa/video_home.PNG": "c54fd273fd5ccfb743bf0eead1fdb83e",
"assets/assets/images/portfolio/artisanDart/logoName.png": "94ae21d6a00718921b69b9d7b07c3d14",
"assets/assets/images/portfolio/artisanDart/home.PNG": "172c48dbdcfb5c0175395244407a5296",
"assets/assets/images/portfolio/artisanDart/logoName2.png": "0f791b4bb1a2e2f3d9fbafa2812c5411",
"assets/assets/images/portfolio/artisanDart/logo.png": "580c530c76b12cb74ea6890897d12695",
"assets/assets/images/portfolio/artisanDart/eventList.PNG": "b2ef334d30a2249db933913aa71d54d0",
"assets/assets/images/portfolio/artisanDart/UpdateArticle1.PNG": "a8e12dfef23227d2e5bc4b38717c4f2d",
"assets/assets/images/portfolio/artisanDart/IMG_2876.PNG": "c6853fd860ffca29bef9c53838538aa1",
"assets/assets/images/portfolio/artisanDart/upgradeAccount.png": "b1e39ac9b087ab6bf3e02c66843b692b",
"assets/assets/images/portfolio/artisanDart/filteredSearch.PNG": "8ee27500bce1ed266c70a2e58804cad3",
"assets/assets/images/portfolio/randev/randev.png": "30ed40730a24dfe2c37401978b3b02ca",
"assets/assets/images/portfolio/randev/randev5.png": "cf20ad36dd65cb04b8cee0816e86dbe6",
"assets/assets/images/portfolio/randev/randev4.png": "6fa3cd707b504e1da7bef322c2b8890c",
"assets/assets/images/portfolio/randev/randev6.png": "1d8057a02d82493fb57dcf528032a7d2",
"assets/assets/images/portfolio/randev/randev3.png": "508b00bccf3c533bac7862a772b392a0",
"assets/assets/images/portfolio/randev/randev2.png": "75fbdfe59e67a8b8301dbd5a94a8e29c",
"assets/assets/images/portfolio/randev/randev1.png": "0a1403181ba4474976b6241906f2172d",
"assets/assets/images/portfolio/esprit/esp2.jpg": "f44f340096dc221c5cb45a4a1ec3fcd0",
"assets/assets/images/portfolio/esprit/esp3.jpg": "034421b5e3a6c21cba9a15d6cb3d4018",
"assets/assets/images/portfolio/esprit/esp1.jpg": "9db453ac3b6b5c758261b75ea9172396",
"assets/assets/images/portfolio/esprit/esp4.jpg": "a39177736d82147595ea286ddafab7f0",
"assets/assets/images/portfolio/esprit/esp5.jpg": "1beb2efc66e3f894fffd411db8693a28",
"assets/assets/images/portfolio/esprit/esp6.jpg": "b23a18a1c612041bc4a6900fcefc21cc",
"assets/assets/images/portfolio/esprit/esprit.png": "002a371738767902527f19e0eea3c83d",
"assets/assets/images/portfolio/esprit/esprit.jpg": "a42477e9a52c4ef626bbf33015e84d05",
"assets/assets/images/portfolio/thelandlord/logotll.png": "e5b0d89588cd09512e79dc978b97e868",
"assets/assets/images/portfolio/thelandlord/logotll.jpg": "7ccfa687d722d6200391bd5a27cba144",
"assets/assets/images/portfolio/lost&found/lost&found2.png": "b1371cac46c7d64c55740e954510c4d7",
"assets/assets/images/portfolio/lost&found/lost6.jpg": "ad154fa997b97adf5a864eb950c086b4",
"assets/assets/images/portfolio/lost&found/lost&found3.png": "ffddfd770376db7a4e1ab93ff1e44f90",
"assets/assets/images/portfolio/lost&found/lost5.jpg": "f648db86c0c6a110086c2cb18f1b38e6",
"assets/assets/images/portfolio/lost&found/lost4.jpg": "56d5defade1dd1255fea3846fd5208d7",
"assets/assets/images/portfolio/lost&found/lost1.jpg": "448b5fc8bcd4657e9e5e9b814282c5f8",
"assets/assets/images/portfolio/lost&found/lost3.jpg": "094559b5d7c999f60b6095a855865d89",
"assets/assets/images/portfolio/lost&found/lost2.jpg": "f2430a740c07eded281fb6db369fa7b1",
"assets/assets/images/fonts/SSTMediumIt.TTF": "5976036e3c27d9608993f0638a102da6",
"assets/assets/images/fonts/SSTRg.TTF": "26207c293866e229a813eb12923d95fb",
"assets/assets/images/fonts/SSTBoldIt.TTF": "3a331f8961a1787b3f104d5dfc1426c5",
"assets/assets/images/fonts/SSTRgIt.TTF": "7c3b1ce704861e052f7f9b5e98bea40f",
"assets/assets/images/fonts/SSTMedium.TTF": "521ebae9bd1158ae614382d77d4280f8",
"assets/assets/images/fonts/SSTLightIt.TTF": "a63abed95dbb4802d6f9c711a8c4c418",
"assets/assets/images/fonts/SSTBold.TTF": "bafc913eb8cf3b14dae9dbfff5791ced",
"assets/assets/images/fonts/SSTLight.TTF": "77a0ddf57e5308d1c2c6589e6f20ad55",
"assets/assets/images/fonts/SSTHeavy.TTF": "eb6fa924011a00487207c61a8819edf1",
"assets/assets/images/fonts/SSTHeavyIt.TTF": "2fc21bb2a758202c952acdf67f8d3be4",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
