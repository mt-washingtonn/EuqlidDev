<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Главная</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">Главная</ion-title>
          </ion-toolbar>
        </ion-header>


        <div class="card2">
      <ion-card>
        <img alt="new" src="https://ionicframework.com/docs/img/demos/card-media.png">
        <ion-card-header>
          <ion-card-title>Повышение стипендии</ion-card-title>
          <ion-card-subtitle>Рост прожиточного минимума, и влияние его на стипендию</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget ligula ultrices, fermentum nibh eu, sollicitudin arcu. Donec tristique ex quis tortor iaculis pulvinar. Proin vel arcu suscipit, vehicula elit ut, laoreet risus. Nullam a sapien quis ex dignissim semper vel vel urna. Phasellus tincidunt nec augue commodo rutrum. Suspendisse lectus libero, faucibus a neque eu, blandit dignissim urna. Morbi massa sem, posuere nec urna non, euismod cursus erat. Ut rhoncus purus eu urna tincidunt, nec consequat eros vulputate. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed bibendum magna eu sem egestas sollicitudin.

Mauris eget fringilla sem. Quisque nec justo semper, interdum urna id, feugiat dolor. Vivamus accumsan nibh at justo porttitor, sit amet auctor lorem pretium. Cras libero lorem, laoreet sed risus eu, dictum malesuada ex. Sed est magna, varius eu mi vitae, aliquam elementum tellus. Cras condimentum, velit vel auctor cursus, enim purus accumsan nulla, iaculis condimentum augue dui blandit ante. Aenean ultrices efficitur blandit. In auctor ac felis at accumsan. Curabitur placerat a mauris congue molestie. Aenean rutrum, nunc ac elementum luctus, eros ligula ultrices ante, eu egestas dui neque vitae augue. Pellentesque hendrerit odio vel ante vulputate mollis.
        </ion-card-content>
      </ion-card>
  </div>
  <ion-button fill="outline" @click="$router.push('/tabs/tab1')">Свернуть</ion-button>

  </ion-content>
  </ion-page>
  </template>
  
  <script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonItem } from '@ionic/vue';
  import ExploreContainer from '@/components/ExploreContainer.vue';
  import { defineComponent } from 'vue';
  
  
  
  </script>

