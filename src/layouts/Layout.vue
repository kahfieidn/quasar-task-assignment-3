<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab v-for="nav in navs" :key="nav" exact :to="nav.to" :icon="nav.icon" :label="nav.label" />
      </q-tabs>
    </q-footer>


    <q-drawer :width="250" :breakpoint="767" v-model="leftDrawerOpen" show-if-above bordered class="bg-primary">
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>


        <q-item class="text-grey-4" v-for="nav in navs" :key="nav" clickable :to="nav.to" exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>



      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      navs: [
        {
          label: 'Todo',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        },
      ]
    }
  }
})
</script>

<style lang="scss">
@media screen and (min-width:768px) {
  .q-footer {
    display: none;
  }

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
}
</style>