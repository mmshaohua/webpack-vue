<template>
  <div id="one">
    我是 views 界面
    <One/>
  </div>
</template>

<script>
import One from '@components/one/One'

export default {
  name: 'one',
  components: {
    One,
  }
}
</script>

<style lang="scss" scoped>
$color: red;

#one {
  color: $color;
}
</style>
