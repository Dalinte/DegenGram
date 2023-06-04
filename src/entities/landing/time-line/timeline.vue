<template>
  <v-timeline
    align="start"
    line-color="white"
    side="end"
  >
    <v-timeline-item
      v-for="item in timeLineList"
      :key="item"
      dot-color="toxic-green"
      size="24"
      fill-dot
    >
      <template v-slot:opposite>
        <p class="name">{{item.name}}</p>
      </template>
      <div>
        <ul class="list">
          <li v-for="li in item.list" :key="li">{{li}}</li>
        </ul>
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'TimeLine',
  computed: {
    timeLineList () {
      return [
        {
          name: 'PART 1',
          list: [
            'White Paper',
            'Roadmap',
            'Marketing strategy',
            'Collecting applications for alpha testing',
            'Product research',
            'MVP development'
          ]
        },
        {
          name: 'PART 2',
          list: [
            'Discord',
            'MVP release in Test Net',
            'Testing and feedback processing',
            'Hiring a lawyer',
            'Hiring marketers',
            'Expanding the development team',
          ]
        },
        {
          name: 'PART 3',
          list: [
            'Promotion campaign',
            'Launch DAO design',
            'DAO release',
            'Smart contracts audits',
            'Relese in Main Net',
          ]
        },
        {
          name: 'PART 4',
          list: [
            'Recommender system',
            'Rating system',
            'Mobile app',
            'Adding ads (If approved by the community)'
          ]
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.name {
  color: #FFFF;
}

.list {
  list-style: inside;
  color: #FFFF;
}
</style>
