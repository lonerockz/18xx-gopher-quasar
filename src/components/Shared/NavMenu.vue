<template>
  <q-drawer
    v-model="nav"
    :width="200"
    :breakpoint="500"
    overlay
    bordered
    content-class="bg-grey-3"
  >
    <q-scroll-area class="fit">
      <q-list
        v-for="(menuItem, index) in menuList"
        :key="index"
      >
        <q-item
          clickable
          :active="menuItem.label === 'Outbox'"
          v-ripple
        >
          <q-item-section avatar>
            <q-icon :name="menuItem.icon" />
          </q-item-section>
          <q-item-section>
            {{ menuItem.label }}
          </q-item-section>
        </q-item>

        <q-separator v-if="menuItem.separator" />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      drawer: true,
      menuList
    }
  },
  computed: {
    nav: {
      get () {
        return this.navMenu
      },
      set () {
        this.toggleNavMenu()
      }
    },
    ...mapState('auth', ['loggedIn']),
    ...mapState('appState', ['navMenu'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser']),
    ...mapActions('appState', ['toggleNavMenu'])
  }
}
</script>

<style lang="scss" scoped>

</style>
