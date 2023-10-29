<template>
<div class="center">
    <ion-list>
      <ion-item>
        <ion-input label="Имя" placeholder=""></ion-input>
      </ion-item>
      
      <ion-item>
        <ion-input label="Фамилия" placeholder=""></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-input label="Пароль" type="password" value="password"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-input label="Email" type="email" placeholder=""></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-input label="Телефон(+7)" type="tel" placeholder=""></ion-input>
      </ion-item>
    </ion-list>
    <a href="/login"><ion-button fill="solid">Создать аккаунт</ion-button></a>
</div>
  </template>
  
  <script lang="ts">
    import { IonInput, IonItem, IonList } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonInput, IonItem, IonList },
    });
  </script>

  <style scoped>

.center {
    text-align: center;
    margin-top: 50%;
}

ion-button{
  margin-left: 5%;
}

</style>