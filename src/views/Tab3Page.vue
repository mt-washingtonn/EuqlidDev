<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Профиль</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Профиль</ion-title>
        </ion-toolbar>
      </ion-header>
      <div class="user">
        <ion-item>
          <ion-thumbnail slot="start">
            <img alt="LOL" src="https://ionicframework.com/docs/img/demos/card-media.png" />
          </ion-thumbnail>
          <div class="name"><ion-label>Гилимжан Олжас Канатович</ion-label></div>
        </ion-item>
      </div>
      <h3>Высший технический колледж г.Кокшетау</h3>
      <h1>4.10</h1>
      <h2>GPA</h2>

      <div class="inf">
        <ion-item>
        <ion-label>
          <h4>Группа</h4>
          <p>ЗТМ-19-К</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <h4>Курс</h4>
          <p>5</p>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <h4>Специальность</h4>
          <p>Ремонт и эксплуатация автомобильного транспорта</p>
        </ion-label>
      </ion-item>
    </div>

      <ion-item>
        <ion-input label="О себе" label-placement="fixed" placeholder=""></ion-input>
      </ion-item>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

<style scoped>
.user {
  margin-top: 20%;
}

.name {
  font-size: 20px;
}

h1 {
  color: #3880ff;
  font-size: 50px;
  text-align: center;
  margin-top: 15px;
  font-family: 'Roboto', sans-serif;
}

h2 {
  color: #3881ff;
  font-size: large;
  text-align: center;
  margin-top: 5px;
}

h3 {
  text-align: center;
  font-size: large;
  font-family: 'Roboto', sans-serif;
}

.inf{
  margin-top: 10%;
}
</style>