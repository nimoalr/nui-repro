# Vuetify buttons issue in FiveM's NUI repro
Hey there!
This repo is a little repro resource for my ongoing issue with Vuetify/Vue in FiveM.

## What the issue is
The issue is with Vuetify styled button component ( <v-btn> ).

As you can see in the video below, sometimes clicking doesn't execute the button `@click` action.

It only does execute after a few try. As you can see in the video, it can be quite random.

### Demo video

## When the issue did appeared
Uh, it was in october or november 2019. Didn't reported it since I was thinking it was coming from me.
Before that, it worked fine for ~1 year.
## What did I tried so far
### What didn't worked
- Tried to update every dependencies in package.json
- Tried to not use Vue-Router
- Tried to get back to Vuetify 1.x.x
- Tried older version of Vue
- Tried cleaning client `cache/browser`
- Tried cleaning server `cache`
- Building with `NODE_ENV = debug`
- Building in Gitlab-CI
###What work
- It works fine in Chrome Version 80.0.3987.163 using `vue serve`
- It works fine too in NUI Devtools using same chrome version as ^
- It works fine in Spotify CEF 73 build using `vue serve`
- It works fine on a fresh windows install for some time, then it start to happen again.
- Using a regular `<button>`

## What does this resource use
- Vue
- Vuetify (``src/plugins/vuetify.js``)
- Vuex (``src/store``)
- Vue-Router (``src/router``)

## How to repro
It seems to only repro after some time* on a fresh windows install or on a PC that never loaded this resource. 

*time being client loading/unloading the resource

- Git clone this repo inside a resource folder called `nui`
- `npm install`
- `npm run build`
- Start the resource and launch the client
- Use the command ``nuitest`` to open the demo NUI interface (There's also a `unsetfocus` command)
- Try using buttons in the "Dev Tools" column in the 

NB : Every button are missing their FiveM client handlers but it's not needed to repro it

At some point, buttons will start to work nearly everytime
but if you close it by using the F2 key (will not remove NUIFocus tho) 
which only change the state of a `v-if="$store.state.adminStore.enabled"` (Admin.vue L3)
and open it again using the `nuitest` command, the issue will start again.

