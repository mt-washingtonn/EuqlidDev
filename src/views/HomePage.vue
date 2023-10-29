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


  
      <div class="container">
      <div class="card1">
    
    <ion-card>
      <ion-card-header>
        <ion-card-title>Здраствуй (Имя пользователя)</ion-card-title>
        <ion-card-subtitle>Удачи в учебе!</ion-card-subtitle>
      </ion-card-header>
    </ion-card>
  </div>
  <div class="loc">
  <IonItem>
    <ion-label>
      Следующая пара в 15:50
    </ion-label>
  </IonItem>
  
  <ion-button fill="" @click="$router.push('/tabs/tab2')">WEB разработка гл.корпус 34 кб</ion-button>
  </div>
    
  <IonItem>
    <ion-label>
    Вас также может заинтересовать
    </ion-label>
  </IonItem>
  <div class="card2">
      <ion-card button="true" @click="$router.push('/tabs/news')">
        <img alt="new" src="https://ionicframework.com/docs/img/demos/card-media.png">
        <ion-card-header>
          <ion-card-title>Повышение стипендии</ion-card-title>
          <ion-card-subtitle>Рост прожиточного минимума, и влияние его на стипендию</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          О повышении стипендии.
        </ion-card-content>
      </ion-card>
  </div>
</div>
</ion-content>
</ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonLabel, IonItem } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { defineComponent } from 'vue';



</script>

<style scoped>
  ion-button{
    margin: 15px 15px 15px 10px;
    align-items: center;
  }

  .container{
    align-items: center;
  }

  ion-card-header{
    align-items: center;
  }

  
  .card1{
    margin-top: 10%;
  }
  .card2{
    margin-bottom: 0;
  }
  
  ion-label{
    margin-top: 10%;
    align-items: center;
    text-align: center;
  }
  
  .loc{
    margin-inline: 10%;
    margin-top: 30px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 0.875rem;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  }
</style>
