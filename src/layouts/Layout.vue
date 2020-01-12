<template>
  <q-layout view="lHh lpR lFf">
    <q-header
      elevated
      class="bg-primary text-white"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="menu"
          @click="toggleNavMenu"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          18xx Gopher
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs
        v-if="loggedIn"
        align="left"
      >
        <q-route-tab
          to="/players"
          label="Players"
        />
        <q-route-tab
          to="/companies"
          label="Companies"
        />
      </q-tabs>
    </q-header>
    <appNavMenu v-if="navMenu" />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
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
        }
      ]
    }
  },
  components: {
    appNavMenu: require('components/Shared/NavMenu.vue').default
  },
  computed: {
    ...mapState('auth', ['loggedIn']),
    ...mapState('appState', ['navMenu'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    ...mapActions('appState', ['toggleNavMenu']),
    openURL
  }
}
</script>

<style lang="scss">

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
