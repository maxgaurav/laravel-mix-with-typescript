# Laravel Mix TypeScript Example

A minimal example project on how to get started with Laravel Mix and TypeScript.

**BONUS:** The repo also contains instructions to use typescript within vue files and converting single vue files to 
class components

## Requirements

* PHP 5.6.4 or greater
* Composer
* Node 6.10.2 or greater
* npm or yarn 

## Installation

Clone the repository and run the following commands one by one to setup the project

```
$ composer install 
$ yarn install 
``` 

## Example

The repo contains following examples

1. Hello word example
2. Standard single file vue component
3. Typescript component based single file vue component

### Build the Example

Run the command to build typescript content
```
$ yarn run dev
```

Finally spun up the development  server within larvel to see the examples in action
```
$ php artisan serve
```


## Working

Following will explain what changes were done in files and how they work

### Changes to package.json

In order to use typescript with Laravel mix some additional packages were required like
1. Typescript (version 2.5.2)
2. ts-loader (version 3.1.1)

Additionally in order to use vue class components the package vue-class-component has been added with latest vue version

### Changes to webpack.mix.js

```javascript

mix.ts('resources/assets/js/app.ts', 'public/js')  //<= originally mix.ts
   .sass('resources/assets/sass/app.scss', 'public/css');


```

### Changes to Example.vue

To allow typescript to do type checking on .vue files the lang attribute with value ts needs to be set. This allows the 
vue files to compiled with type checking. See below

```vue
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts"> //<= addition of lang attribute

    export default {
        mounted(): void {
            console.log('Component mounted.')
        }
    }


</script>

```

### Vue Class components

The file ExampleTypescriptComponent.vue is based on vue class component. See example below

```vue

<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Component</div>

                    <div class="panel-body">
                        I'm an example component!
                        <p>
                            {{ content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">

    import Vue from 'vue';
    import Component from 'vue-class-component';

    @Component({})
    export default class Example extends Vue{
        public content:string = "Content from vue class";
    }

</script>

```