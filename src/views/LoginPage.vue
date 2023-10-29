<template>
    <div class="center">
        <ion-list>
            <ion-item>
                <ion-input label-placement="floating" value="">
                    <div slot="label">Email <ion-text color="danger">(*Обязательно)</ion-text></div>
                </ion-input>
            </ion-item>

            <ion-item>
                <ion-input label="Пароль" label-placement="floating" placeholder=""
                    type="password"></ion-input>
            </ion-item>
        </ion-list>
        <div class="buttons">
            <a href="/tabs"><ion-button class="lol" fill="outline">Войти</ion-button></a>
            <a href="/reg"><ion-button fill="solid">Регистрация</ion-button></a>
        </div>
    </div>
</template>

<script lang="ts">
import { IonInput, IonList, IonButton, IonItem, IonText } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonInput, IonList, IonButton, IonItem, IonText },
});
</script>

<style>
.center {
    text-align: center;
    margin-top: 50%;
}

ion-button {
    --border-color: #efefef !important;
    color: black;
}

.buttons{
    display: flex;
    flex-wrap: wrap;
    margin-right: 25%;
}
.buttons > a {
    width: 100%;
}
</style>