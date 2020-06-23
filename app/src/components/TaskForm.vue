<template>
    <div>
        <v-row justify="center">
            <v-col align="center" cols="6">
                <v-divider />
            </v-col>
        </v-row>
        <v-row justify="center" v-if="!show">
            <v-col align="center">
                <v-btn color="success" fab x-large dark @click="showForm">
                    <v-icon>mdi-plus</v-icon>
                </v-btn>
            </v-col>
        </v-row>
        <v-row justify="center" v-if="show">
            <v-col align="center" cols="4">
                <v-form ref="form" v-model="valid">
                    <v-text-field
                        v-model="form.title"
                        :rules="rules.required"
                        :counter="30"
                        label="Title"
                        required
                    ></v-text-field>
                    <v-textarea
                        v-model="form.description"
                        :rules="rules.required"
                        label="Description"
                        :counter="250"
                        required
                    ></v-textarea>

                    <v-btn color="success" class="mr-4" @click="save" :disabled="!valid" :loading="loading">Save</v-btn>
                    <v-btn color="error" class="mr-4" @click="close">Close</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import { mapState } from "vuex";
import axios from 'axios';

export default {
    name: "TaskForm",
    data: () => ({
        valid: true,
        show: false,
        loading: false,
        form: {
            title: "",
            description: "",
            status: 0
        },
        rules: {
            required: [value => !!value || "Required."]
        }
    }),
    computed: {
        ...mapState(["baseUrl"]),
    },
    methods: {
        save() {
            if (this.valid && !this.loading) {
                this.loading = true;

                axios.post(`${this.baseUrl}task`, this.form)
                .then(response => {
                    this.loading = false;
                    this.$store.commit("addTask", response.data)

                    this.close();
                });
            }
        },
        close() {
            this.$refs.form.reset();
            this.show = false;
        },
        showForm() {
            this.show = true;
        }
    }
};
</script>