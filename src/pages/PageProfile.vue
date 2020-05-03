<template>
  <div class="flex-grid">
<<<<<<< HEAD
    <UserProfileCard 
      v-if="!edit"
      :user="user"
    />
    <UserProfileCardEditor 
      v-else
      :user="user"
    />
=======
    <UserProfileCard
      v-if="!edit"
      :user="user"
    />
    <UserProfileCardEditor
      v-else
      :user="user"
    />

>>>>>>> development1
    <div class="col-7 push-top">
      <div class="profile-header">
        <span class="text-lead">
            {{user.username}}'s recent activity
        </span>
        <a href="#">See only started threads?</a>
      </div>
<<<<<<< HEAD
=======

>>>>>>> development1
      <hr>
      <PostList :posts="userPosts"/>
    </div>
  </div>
</template>

<script>
    import PostList from '@/components/PostList'
    import UserProfileCard from '@/components/UserProfileCard'
    import UserProfileCardEditor from '@/components/UserProfileCardEditor'
    import {mapGetters} from 'vuex'
<<<<<<< HEAD

=======
    import asyncDataStatus from '@/mixins/asyncDataStatus'
>>>>>>> development1
    export default {
      components: {
        PostList,
        UserProfileCard,
        UserProfileCardEditor
      },
<<<<<<< HEAD
=======
      mixins: [asyncDataStatus],
>>>>>>> development1
      props: {
        edit: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        ...mapGetters({
<<<<<<< HEAD
          user: 'authUser'
        }),
        userPosts () {
          if (this.user.posts) {
            return Object.values(this.$store.state.posts)
              .filter(post => post.userId === this.user['.key'])
          }
          return []
        }
=======
          user: 'auth/authUser'
        }),
        userPosts () {
          return this.$store.getters['users/userPosts'](this.user['.key'])
        }
      },
      created () {
        this.$store.dispatch('posts/fetchPosts', {ids: this.user.posts})
          .then(() => this.asyncDataStatus_fetched())
>>>>>>> development1
      }
    }
</script>

<style scoped>
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> development1
