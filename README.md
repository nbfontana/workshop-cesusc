# workshop-cesusc

## content

* basic initial config
* basic components
* routes and nested routes
* lifecycles hooks
* i18n
* dev environments

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## steps

* npm i -d -g @vue/cli
* vue create workshop-cesusc
* run, build, lint w/ vue-cli-service
* add .editorconfig
* add .eslintrc.js
* ide plugins tip
* explain App.vue
* remove helloworld component
* create /countdown 6 components
* create coolmenu
* create coolText component?
* adds router.js with vue-router
* adds <router-view/> to App.vue
* test and explain routes
* adds children to countdown and test
* show lifecycle hooks in /one
* adds countdown effect using lifecycle
* i18n - npm i -d --save vue-i18n
* adds /i18n index.js and messages.js
* adds i18n message in coolMenu
* i18n routes
* short paths with @
* .env / .env.development / .env.staging
* .env.js file
* copy some login stuff from the internet and be creative, or not

## Lifecycle Hooks

Vue has certain lifecycle events that we can hook into to run our code. The main ones are:

```
created
mounted
updated
destroyed
```

We also have access to these other hooks that run before the above:

```
beforeCreate
beforeMount
beforeUpdate
beforeDestroy
```