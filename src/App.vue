<template>
    <div id="app">
        Hello, World
        <One/>
    </div>
</template>

<script>
import One from '@components/one/One'

export default {
    name: 'app',
    components: {
        One,
    }
}
</script>

<style lang="scss" scoped>
#app{
    color: blue;
}
</style>
