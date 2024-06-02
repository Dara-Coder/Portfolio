<script setup>
import { watch, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Hambergar from '@/components/svgs/Hambergar.vue'

const route = useRoute()
let name = ref(null)

watch(
  () => route.name,
  () => {
    name.value = route.name
    document.title = route.name.toUpperCase()
  }
)

const navbar = ref(null)

const toggleMenu = () => {
  const el = navbar.value
  if (el) {
    if (el.classList.contains('flex')) {
      el.classList.add('hidden')
      el.classList.remove(
        'flex',
        'flex-col',
        'absolute',
        'rounded-xl',
        'p-3',
        'top-full',
        'right-3',
        'shadow-lg',
        'bg-slate-200'
      )
    } else {
      el.classList.remove('hidden')
      el.classList.add(
        'flex',
        'flex-col',
        'absolute',
        'rounded-xl',
        'p-3',
        'top-full',
        'right-3',
        'shadow-lg',
        'bg-slate-200'
      )
    }
  }
}

document.addEventListener('mouseup', (e) => {
  const el = navbar.value
  if (el && !el.contains(e.target)) {
    el.classList.add('hidden')
    el.classList.remove(
      'flex',
      'flex-col',
      'absolute',
      'rounded-xl',
      'p-3',
      'top-full',
      'right-3',
      'shadow-lg',
      'bg-slate-200'
    )
  }
})
</script>

<template>
  <header class="bg-white p-2 shadow-xl mb-1 sticky top-0 z-10 min-h-[65px]">
    <div class="flex justify-between p-2 relative">
      <div class="w-full h-full relative">
        <img
          class="w-[63px] h-[63px] object-scale-down absolute left-[10%] -top-[15px]"
          src="/images/logo.png"
          alt="user"
        />
      </div>
      <div @click="toggleMenu" class="flex justify-center items-center cursor-pointer sm:hidden">
        <Hambergar></Hambergar>
      </div>
      <nav ref="navbar" class="bg-white hidden sm:flex">
        <RouterLink
          :to="{ name: 'home' }"
          class="font-semibold py-1 px-2 rounded-md hover:bg-sky-500 hover:text-white"
          :class="name === 'home' ? 'bg-sky-500 text-white' : ''"
          >Home</RouterLink
        >
        <RouterLink
          :to="{ name: 'about' }"
          class="font-semibold py-1 px-2 rounded-md hover:bg-sky-500 hover:text-white"
          :class="name === 'about' ? 'bg-sky-500 text-white' : ''"
          >About</RouterLink
        >
        <RouterLink
          :to="{ name: 'project' }"
          class="font-semibold py-1 px-2 rounded-md hover:bg-sky-500 hover:text-white"
          :class="name === 'project' ? 'bg-sky-500 text-white' : ''"
          >Project</RouterLink
        >
        <RouterLink
          :to="{ name: 'skill' }"
          class="font-semibold py-1 px-2 rounded-md hover:bg-sky-500 hover:text-white"
          :class="name === 'skill' ? 'bg-sky-500 text-white' : ''"
          >Skill</RouterLink
        >
        <RouterLink
          :to="{ name: 'service' }"
          class="font-semibold py-1 px-2 rounded-md hover:bg-sky-500 hover:text-white"
          :class="name === 'service' ? 'bg-sky-500 text-white' : ''"
          >Services</RouterLink
        >
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
