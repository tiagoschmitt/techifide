<template>
    <v-main>
        <v-container>
            <v-row class="text-center">
                <v-col cols="12">
                    <h1 class="display-2 font-weight-bold mb-3">Task Manager</h1>
                </v-col>
            </v-row>

            <v-row justify="center" v-for="(data, index) in tasks" :key="data.id">
                <v-col class="pa-0" cols="6">
                    <task-item :task="data" :increment="index + 1" />
                </v-col>
            </v-row>
            <task-form />
        </v-container>
    </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import TaskItem from "./TaskItem.vue";
import TaskForm from "./TaskForm.vue";

export default {
    name: "Tasks",
    computed: {
        ...mapGetters(["tasks"])
    },
    components: {
        TaskItem,
        TaskForm
    },
    methods: {
        ...mapActions(["loadTasks"]),
        showForm() {

        }
    },
    created() {
        this.loadTasks();
    }
};
</script>