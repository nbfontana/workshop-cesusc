# workshop-cesusc

### content

* basic initial config
* basic components
* routes and nested routes
* lifecycles hooks

### steps

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
* adds router.js with vue-router
* adds <router-view/> to App.vue
* test and explain routes
* adds children to countdown and test
* show lifecycle hooks in /one
* adds countdown effect using lifecycle

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
