<template>
    <div id="startpage">
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-card height="500px"></v-card>
                    <v-flex xs4 class="grey lighten-4">
                        <v-container style="position: relative;top: 13%;" class="text-xs-center">
                            <v-card flat>
                                <v-card-title primary-title>
                                    <h4>Registration</h4>
                                </v-card-title>
                                <v-card-text>
                                    <v-form>
                                        <v-text-field v-model="name" :error-messages="nameErrors"  label="Name" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
                                        <v-text-field v-model="email" :error-messages="emailErrors" label="E-mail" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                                        <v-text-field v-model="password" :error-messages="emailErrors" label="Password" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                                        <v-text-field v-model="confirmpassword" :error-messages="emailErrors" label="Confirm Password" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
                                        <v-checkbox v-model="checkbox" :error-messages="checkboxErrors" label="Upgrade for Premium?" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
                                        <v-card-actions>
                                            <div>
                                            <router-link to="/">
                                                <v-btn color="purple" dark>Back</v-btn>
                                            </router-link>
                                            </div>
                                            <div>
                                             <router-link to="/homePage">
                                                <v-btn color="purple" dark>Registration</v-btn>
                                            </router-link>
                                            </div>
                                        </v-card-actions>
                                    </v-form>
                                </v-card-text>
                            </v-card>
                        </v-container>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import AppFooter from './AppFooter'
    
    export default {
        components: {
            AppFooter
        },
    
    }
</script>