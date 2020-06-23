<template>
    <v-app>
        <v-app-bar app color="primary" dark />

        <v-main>
            <tasks />
        </v-main>
    </v-app>
</template>

<script>
import Tasks from "./components/Tasks";

export default {
    name: "App",

    components: {
        Tasks
    }
};
</script>
