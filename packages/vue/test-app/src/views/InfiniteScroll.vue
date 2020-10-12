<template>
  <ion-page data-pageid="navigation">
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button></ion-back-button>
        </ion-buttons>
        <ion-title>Infinite Scroll</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Infinite Scroll</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-list>
        <ion-item v-for="item in items" :key="item.id">
          <ion-label>Item {{ item.id }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll threshold="100px" @ionInfinite="loadData($event)">
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Navigation',
  components: {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonList,
    IonItem,
    IonLabel,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInfiniteScroll,
    IonInfiniteScrollContent
  },
  setup() {
    const items: any = ref([]);
    let counter = 0;
    for (let i = 0; i < 50; i++) {
      items.value = [
        ...items.value,
        {
          id: counter++
        }
      ]
    }

    const loadData = (ev: CustomEvent) => {
      console.log('infintie scroll!', ev);
      setTimeout(() => {
        for (let i = 0; i < 20; i++) {
          items.value = [
            ...items.value,
            {
              id: counter++
            }
          ]
        }

      (ev.target as any).complete();
      }, 3000);
    }

    return { items, loadData }
  }
});
</script>
