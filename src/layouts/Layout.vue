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
    <!-- <q-drawer
      show-if-above
      v-model="left"
      side="left"
      elevated
    >
      <q-item
        clickable
        tag="a"
        target="_blank"
        href="https://quasar.dev"
      >
        <q-item-section avatar>
          <q-icon name="school" />
        </q-item-section>
        <q-item-section>
          <q-item-label>Docs</q-item-label>
          <q-item-label caption>
            quasar.dev
          </q-item-label>
        </q-item-section>
      </q-item>
      <q-btn
        v-if="!loggedIn"
        align="between"
        class="full-width"
        to="/auth"
        flat
        icon="account_circle"
        label="Login"
      />

      <q-btn
        v-else
        @click="logoutUser"
        align="between"
        class="full-width"
        flat
        icon="account_circle"
        label="Logout"
      />
    </q-drawer> -->

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
  <!-- <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          icon-right="account_circle"
          label="Login"
          class="absolute-right"
        />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          icon-right="account_circle"
          label="Logout"
          class="absolute-right"
        />
      </q-toolbar>
    </q-header> -->
  <!-- <q-drawer>
      <q-item
        v-for="sideNav in sideNavs"
        :key="sideNav.label"
        :to="sideNac.to"
        :icon="sideNav.icon"
        :label="sideNav.label"
      />
    </q-drawer> -->
  <!-- <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon"
          :label="nav.label"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="250"
      bordered
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header>
          Navigation
        </q-item-label>

        <q-item
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          class="text-grey-4"
          exact
          clickable
        >
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
  </q-layout> -->
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
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
  // @media screen and (min-width: 768px) {
  //   .q-footer {
  //     display: none;
  //   }
  // }

  .q-drawer {
    .q-router-link--exact-active {
      color: white !important;
    }
  }
</style>
