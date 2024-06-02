<script setup>
import { onBeforeMount, ref } from 'vue'
import getData from '@/helper/getData'

const experience = ref([])
const education = ref([])
const projects = ref([])

onBeforeMount(() => {
  ;[
    { name: experience, api: '/data/experience.json' },
    { name: education, api: '/data/education.json' },
    { name: projects, api: '/data/projects.json' }
  ].forEach((d) => {
    getData(d.api).then((response) => {
      d.name['value'] = response
    })
  })
})
</script>

<template>
  <main class="w-full">
    <section class="w-full flex flex-col items-center">
      <div class="w-full flex flex-col gap-2">
        <p class="uppercase text-center text-orange-400 font-bold text-xl">Projects</p>
        <p class="font-bold text-center text-3xl">Digital Portfolio Showcase</p>
      </div>
      <div class="flex flex-wrap gap-3 justify-evenly mt-5">
        <div
          v-for="pr in projects"
          :key="pr.id"
          class="shadow w-72 h-72 rounded-2xl cursor-pointer relative overflow-hidden group border border-slate-500 border-dotted"
        >
          <div class="w-full h-full">
            <img :src="pr.image_url" class="w-full h-full object-cover" :alt="pr.title" />
          </div>
          <div
            class="transition ease-in-out delay-300 duration-300 hidden w-full h-full absolute bottom-0 p-3 bg-gray-600 opacity-70 group-hover:flex group-hover:items-center group-hover:justify-center"
          >
            <p class="text-white font-semibold text-xl capitalize text-center">{{ pr.title }}</p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col mt-5 p-5 sm:flex-row">
        <div class="w-full sm:w-1/2">
          <p class="font-semibold text-xl text-orange-400">Education</p>
          <div class="flex flex-col gap-2 border-l-2 border-solid border-orange-400 mt-5">
            <div
              v-for="ed in education"
              :key="ed.id"
              class="flex justify-end w-full h-fit relative before:w-4 before:h-4 before:bg-orange-400 before:absolute before:rounded-full before:-left-[9px] before:-top-[5px] sm:w-11/12"
            >
              <div class="flex flex-col gap-2 rounded-xl bg-orange-200 w-11/12 h-4/5 p-3">
                <p class="text-black text-opacity-50">{{ ed.academic }}</p>
                <p class="text-black text-opacity-50">{{ ed.location }}</p>
                <p class="text-black text-opacity-80 text-xl font-semibold">{{ ed.school }}</p>
                <p class="text-black text-opacity-50 text-end">{{ ed.degree }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full mt-5 sm:w-1/2 sm:mt-0">
          <p class="font-semibold text-xl text-blue-500">Experience</p>
          <div class="flex flex-col gap-2 border-l-2 border-solid border-blue-400 mt-5">
            <div
              v-for="ex in experience"
              :key="ex.id"
              class="flex justify-end w-full h-fit relative before:w-4 before:h-4 before:bg-blue-400 before:absolute before:rounded-full before:-left-[9px] before:-top-[5px] sm:w-11/12"
            >
              <div class="flex gap-2 flex-col rounded-xl bg-blue-200 w-11/12 h-4/5 p-3">
                <p class="text-black text-opacity-50">{{ ex.duration }}</p>
                <p class="text-black text-opacity-50">{{ ex.company }}</p>
                <p class="text-black text-opacity-80 font-semibold text-xl">{{ ex.title }}</p>
                <p class="text-black text-opacity-50 text-end">{{ ex.location }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
