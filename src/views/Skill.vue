<script setup>
import { onBeforeMount, ref } from 'vue'
import Contact from './Contact.vue'
import getData from '@/helper/getData'

const data = ref([])
const sliced = ref([])
const length = ref(9)

onBeforeMount(() => {
  getData('/data/skill.json').then((response) => {
    data.value = response
    sliced.value = data.value.slice(0, length.value)
  })
})

const showMore = () => {
  length.value = length.value < data.value.length ? length.value + 9 : length.value
  sliced.value = data.value.slice(0, length.value)
}

const showLess = () => {
  length.value = length.value > 9 ? length.value - 9 : length.value
  sliced.value = data.value.slice(0, length.value)
}
</script>

<template>
  <main class="w-full">
    <section class="w-full flex flex-col gap-2">
      <div class="w-full flex flex-col gap-2">
        <p class="uppercase text-center text-xl font-bold text-orange-400">Skills</p>
        <p class="text-center font-bold text-3xl">My Expert Areas</p>
      </div>
      <div class="w-full flex flex-wrap gap-3 mt-5 justify-evenly px-3">
        <div
          v-for="d in sliced"
          :key="d.id"
          class="shadow flex gap-2 min-w-60 max-w-64 w-1/5 h-20 py-3 grow bg-slate-100 rounded-xl cursor-pointer sm:odd:grow-0 hover:border hover:border-solid hover:border-blue-400 hover:scale-105"
        >
          <div class="flex justify-center items-center w-3/6">
            <div class="h-[4.5rem] w-full rounded-full">
              <img class="w-full h-full object-scale-down" :src="d.image_url" :alt="d.name" />
            </div>
          </div>
          <div class="flex flex-col justify-center gap-2 w-3/6">
            <p class="text-slate-700 text-xl font-bold">{{ d.name || '' }}</p>
            <p>{{ d.level || '' }}</p>
          </div>
        </div>
      </div>
      <div class="flex justify-evenly items-center px-3 py-4">
        <button
          @click="showLess"
          class="px-2 py-1 bg-red-400 text-white rounded-md hover:bg-green-400"
          :class="length > 9 ? 'block' : 'hidden'"
        >
          Show Less
        </button>
        <button
          @click="showMore"
          class="px-2 py-1 bg-sky-400 text-white rounded-md hover:bg-orange-400"
          :class="length >= data.length ? 'hidden' : 'block'"
        >
          Show More
        </button>
      </div>
    </section>
  </main>
  <Contact></Contact>
</template>
