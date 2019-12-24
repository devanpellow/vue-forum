<template>
  <div class="thread">
    <div>
      <p>
        <router-link :to="{name: 'ThreadShow', params: {id: thread['.key']}}">
          {{thread.title}}
        </router-link>
      </p>
      <p 
        class="text-faded text-xsmall"
        :title="thread.publishedAt | humanFriendlyDate"
      >
          By <a href="#">{{user.name}}</a>, {{thread.publishedAt | diffForHumans}}.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{repliesCount }} replies
      </p>
      
      <!-- <img class="avatar-medium" src="" alt=""> -->
      
      <!-- <div>
        <p class="text-xsmall">
          <a href="#">Bruce Wayne</a>
        </p>
        <p class="text-xsmall text-faded">
          2 hours ago
        </p>
      </div> -->
    </div>
  </div>
</template>

<script>
  import sourceData from '@/data'
  import moment from 'moment'

  export default {
    props: {
      thread: {
        required: true,
        type: Object
      }
    },

    computed: {
      repliesCount () {
        return Object.keys(this.thread.posts).length - 1
      },
      user () {
        return sourceData.users[this.thread.userId]
      }
    },

    filters: {
      humanFriendlyDate (date) {
        return moment.unix(date).format('MMMM Do YYYY, h:mm:ss a')
      },
      diffForHumans (date) {
        return moment.unix(date).fromNow()
      }
    }
  }
</script>