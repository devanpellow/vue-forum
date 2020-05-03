export default {
  data () {
    return {
      asyncDataStatus_ready: false
    }
  },
<<<<<<< HEAD
=======

>>>>>>> development1
  methods: {
    asyncDataStatus_fetched () {
      this.asyncDataStatus_ready = true
      this.$emit('ready')
    }
  }
}
