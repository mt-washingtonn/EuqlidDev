<template>
   <div class="center">
   <ion-list>
        <ion-item>
            <ion-input label-placement="floating" value="hi@ionic.io">
                <div slot="label">Email <ion-text color="danger">(Required)</ion-text></div>
            </ion-input>
        </ion-item>

        <ion-item>
            <ion-input label="Floating label" label-placement="floating" placeholder="Enter text"
                type="password"></ion-input>
        </ion-item>
    </ion-list>

    <a href="/tabs"><ion-button class="lol" fill="outline">Outline</ion-button></a>
    </div>


</template>

<script lang="ts">
import { IonInput, IonList, IonButton, IonItem, IonText} from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonInput, IonList, IonButton, IonItem, IonText  },
});
</script>

<style>

.center{
    text-align: center;
    margin-top: 50%;
}

ion-button{
    --border-color: #efefef !important;
    color: black;
}




</style>