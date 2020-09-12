<template>
  <div class="main_menu_area">
    <b-navbar toggleable="md" fixed="top" variant="white">
      <b-navbar-brand href="/" class="logo">
        <img src="/assets/images/logoes/logo.png" alt="logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <nav class="techno_menu mx-auto">
          <ul id="menu-main-menu" class="sub-menu">
            <li class="menu-item">
              <nuxt-link to="/"> Home</nuxt-link>
            </li>
            <li class="menu-item">
              <nuxt-link to="/about">About</nuxt-link>
            </li>
            <li class="menu-item menu-item-has-children">
              <nuxt-link to="#">Product</nuxt-link>
              <ul class="sub-menu">
                <li class="menu-item menu-item-has-children" submenu v-for="(item,i) in categoryData"
                  v-bind:key="i">
                  <nuxt-link to="#">{{item.name}}</nuxt-link>
                  <ul class="sub-menu">
                    <li id="menu-item-2392" class="menu-item" v-for="(subMenu, i) in item.sub_category" v-bind:key="i">
                      <nuxt-link :to="'/product/'+subMenu.id">{{subMenu.name}}</nuxt-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="menu-item menu-item-has-children">
              <nuxt-link to="/applications">Applications</nuxt-link>
            </li>
            <li class="menu-item menu-item-has-children">
              <nuxt-link to="/contact">Contact</nuxt-link>
            </li>
          </ul>
        </nav>
        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
  export default {
    name: "Header",
    data () {
      return {
        categoryData: this.$store.state.categories.list
      }
    },
    mounted() {
      this.setCategories()
    },
    methods: {
      async setCategories () {
        if(this.categoryData==''){
          this.categoryData = await this.$axios.get('getCategory').then(res => res.data)
          this.$store.commit('categories/setData', this.categoryData)
        }
      },
    }
  }
</script>

<style scoped>
</style>
