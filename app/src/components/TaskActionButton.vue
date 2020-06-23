<template>
    <div>
        <v-btn small :loading="loading" @click="updateStatus()" :disabled="this.task.status == 2">{{activeTitle}}</v-btn>
    </div>
</template>
<script>
import { mapState } from "vuex";
import axios from 'axios';

export default {
    name: "TaskActionButton",
    props: ["task"],
    data() {
        return {
            titles: [
                'Pending',
                'In Progress',
                'Done'
            ],
            loading: false
        };
    },
    computed: {
        ...mapState(["baseUrl"]),
        activeTitle() {
            return this.titles[this.task.status];
        }
    },   
    methods: {
        updateStatus() {
            if (this.task.status < 2) {
                this.loading = true;

                axios.put(`${this.baseUrl}task/${this.task.id}`, {
                   status: this.task.status + 1
                })
                .then(response => {
                    this.loading = false;
                    this.task.status = response.data.status;
                });
            }
            
        }
    }
};
</script>