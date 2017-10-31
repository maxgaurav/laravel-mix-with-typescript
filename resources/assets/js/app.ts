declare function require(name:string);

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

let Vue = require('vue').default;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example', require('./components/Example.vue'));
Vue.component('example-typescript-component', require('./components/ExampleTypescriptComponent.vue'));

const app = new Vue({
    el: '#app'
});

/**
 * Finally, we'll import and log the result of our hello TypeScript example.
 */

const helloWorld = require('./hello-world').helloWorld();

console.log(helloWorld);
