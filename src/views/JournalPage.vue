<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Журнал</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Журнал</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-list>
                <ion-item-group>
                    <ion-item>
                        <ion-label>A1</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>A2</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>A2</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>A2</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>A2</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>A2</ion-label>
                    </ion-item>
                    <ion-item>
                        <ion-label>A2</ion-label>
                    </ion-item>
                    <ion-item lines="none">
                        <ion-label>A3</ion-label>
                    </ion-item>
                </ion-item-group>

            </ion-list>
            <ion-button fill="outline" @click="$router.push('/tabs/tab2')">Свернуть</ion-button>
        </ion-content>
    </ion-page>
</template>




<script setup lang="ts">

import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonDatetimeButton, IonModal, IonList, IonButton } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';


</script>



<style>

    ion-button{
        margin-left: 35%;
    }

</style>