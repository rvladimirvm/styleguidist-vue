<template>
    <v-card>
        <v-card-title>
            Select One simulation
        </v-card-title>
        <v-card-text>
            Simulation <b>Select One !!</b>
            <v-spacer></v-spacer>
            <VuetifyButton color="primary" icon="mdi-alarm-check"/>        
            <VuetifyButton class="button" icon="mdi-allergy"/>
        </v-card-text>        
    </v-card>
</template>
<script>
import VuetifyButton from './VuetifyButton'

export default {
    name: 'CardVuetify',
    components: {VuetifyButton}
}
</script>
<style scoped>
    .button {
        padding-top: 5px;
    }
</style>
<docs>
Source Code:

```
<template>
    <v-card>
        <v-card-title>
            Select One simulation
        </v-card-title>
        <v-card-text>
            Simulation <b>Select One !!</b>
            <v-spacer></v-spacer>
            <VuetifyButton color="primary" icon="mdi-alarm-check"/>        
            <VuetifyButton class="button" icon="mdi-allergy"/>
        </v-card-text>        
    </v-card>
</template>
<script>
import VuetifyButton from './VuetifyButton'

export default {
    name: 'CardVuetify',
    components: {VuetifyButton}
}
</script>
<style scoped>
    .button {
        padding-top: 5px;
    }
</style>
```

</docs>