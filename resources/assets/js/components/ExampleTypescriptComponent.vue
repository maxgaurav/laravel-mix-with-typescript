<template>
    <div class="container">
        <div class="row">
            <div class="col-md-8 col-md-offset-2">
                <div class="panel panel-default">
                    <div class="panel-heading">Example Class Component</div>

                    <div class="panel-body">
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
    export default class ExampleTypescriptComponent extends Vue{
        public content:string = "Content from vue class";
    }

</script>
