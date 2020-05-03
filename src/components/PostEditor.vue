<template>
  <form @submit.prevent="save">
    <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="text"
        ></textarea>
    </div>
    <div class="form-actions">
      <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">Cancel</button>
      <button class="btn-blue">{{isUpdate ? 'Update' : 'Submit post'}}</button>
    </div>
  </form>
</template>

<script>
<<<<<<< HEAD
=======
    import {mapActions} from 'vuex'
>>>>>>> development1
    export default {
      props: {
        threadId: {
          required: false
        },
        post: {
          type: Object,
          validator: obj => {
            const keyIsValid = typeof obj['.key'] === 'string'
            const textIsValid = typeof obj.text === 'string'
            const valid = keyIsValid && textIsValid
            if (!textIsValid) {
              console.error('😳 The post prop object must include a `text` attribute.')
            }
            if (!keyIsValid) {
              console.error('😳 The post prop object must include a `.key` attribute.')
            }
            return valid
          }
        }
      },
      data () {
        return {
          text: this.post ? this.post.text : ''
        }
      },
      computed: {
        isUpdate () {
          return !!this.post
        }
      },
      methods: {
<<<<<<< HEAD
=======
        ...mapActions('posts', ['createPost', 'updatePost']),
>>>>>>> development1
        save () {
          this.persist()
            .then(post => {
              this.$emit('save', {post})
            })
        },
        cancel () {
          this.$emit('cancel')
        },
        create () {
          const post = {
            text: this.text,
            threadId: this.threadId
          }
          this.text = ''
<<<<<<< HEAD
          return this.$store.dispatch('createPost', post)
=======
          return this.createPost(post)
>>>>>>> development1
        },
        update () {
          const payload = {
            id: this.post['.key'],
            text: this.text
          }
<<<<<<< HEAD
          return this.$store.dispatch('updatePost', payload)
=======
          return this.updatePost(payload)
>>>>>>> development1
        },
        persist () {
          return this.isUpdate ? this.update() : this.create()
        }
      }
    }
</script>

<style scoped>
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> development1
