<template>
    <div>
        <v-tooltip bottom>
            <template v-slot:activator="{ on }">
                <v-row class="pl-2 pr-2" :class="[activeColor, done ? 'text-decoration-line-through' : '']" v-on="on">
                    <v-col class="pa-1" cols="1">{{increment}}</v-col>
                    <v-col class="pa-1">{{task.title}}</v-col>
                    <v-col class="pa-1" align="right">
                        <task-action-button :task="task" />
                    </v-col>
                    <v-col class="pa-1" cols="1" align="center">
                        <v-btn icon x-small color="deep-grey" @click="remove"><v-icon>mdi-delete</v-icon></v-btn>
                    </v-col>
                </v-row>
            </template>
            <span>{{task.description}}</span>
        </v-tooltip>
        <v-divider />
    </div>
</template>

<script>
import { mapState } from "vuex";
import axios from 'axios';
import TaskActionButton from "./TaskActionButton.vue";

export default {
    name: "TaskItem",
    props: ["task", "increment"], 
    data() {
        return {
            colors: [
                'orange',
                'green',
                'grey'
            ]
        }
    },
    components: {
        TaskActionButton
    },
    computed: {
        ...mapState(["baseUrl"]),
        activeColor() {
            return this.colors[this.task.status];
        },
        done() {
            return this.task.status == 2;
        }
    },
    methods: {
        remove() {
            axios.delete(`${this.baseUrl}task/${this.task.id}`)
            .then(() => {
                this.$store.dispatch("removeTask", this.task);
            });
        }
    }
};
</script>