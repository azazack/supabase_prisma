<template lang="pug">
.test(v-for="post in posts") {{post.content}}
</template>

<script lang="ts" setup>
import {onMounted} from "#imports";


const {data: posts} = await useFetch(`/api/posts`)
</script>
