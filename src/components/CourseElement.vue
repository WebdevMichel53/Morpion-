<template>
    <li>
        {{ name }}
    </li>
</template>
<script>
export default {
    name: 'CourseElement',
    props: {
        name: String,


    }
}
</script>
<style scoped>
li:hover {
    color: red;
    text-decoration: line-through;
    cursor: pointer;
}
</style>