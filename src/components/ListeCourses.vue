<template>
  <div class="">
    <input type="text" v-model="item" v-on:keyup.enter="ajouterItem">
    <input type="button" value="OK" @click="ajouterItem">
    <p>
    <ul>
      <CourseElement :name="element" v-for="(element, index) of listeCourses" :key="index" @click="deleteItem(index)">
      </CourseElement>
    </ul>
    </p>
  </div>
</template>

<script>
import CourseElement from './CourseElement.vue'
export default {
  name: 'ListeCourses',
  components: {
    CourseElement
  },
  data() {
    return {
      item: '',
      listeCourses: []
    }
  },
  methods: {
    ajouterItem() {
      this.listeCourses.push(this.item)
      this.item = ''
    },
    deleteItem(index) {
      this.listeCourses.splice(index, 1)
    }
  }
}
</script>