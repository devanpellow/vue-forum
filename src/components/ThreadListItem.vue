<template>
  <div class="thread">
    <div>
      <p>
        <a href="#">{{thread.title}}</a>
      </p>
      <p class="text-faded text-xsmall">
          By <a href-"#">Joseph Kerr</a>, {{thread.publishedAt}}.
      </p>
    </div>

    <div class="activity">
      <p class="replies-count">
        {{Object.keys(thread.posts).length-1}} replies
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
  export default {
    props: {
      thread: {
        required: true,
        type: Object
      }
    }
  }
</script>