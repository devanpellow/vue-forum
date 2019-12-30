<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea 
        class="form-input"
        name=""
        id="" 
        cols="30" 
        rows="10"
        v-model="text"
        ></textarea>
      </div>
      <div class="form-actions">
        <button class="btn-blue">Submit Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true
    }
  },

  data () {
    return {
      text: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.text,
        threadId: this.threadId
      }
      this.text = ''
      this.$emit('save', {post})
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>