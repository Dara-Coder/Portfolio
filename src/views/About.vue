<script setup>
import { ref } from 'vue'
import WhiteBackground from '@/components/svgs/WhiteBackground.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import Facebook from '@/components/svgs/Facebook.vue'
import Telegram from '@/components/svgs/Telegram.vue'
import IconGmail from '@/components/icons/IconGmail.vue'
import curriculumVitae from '@/components/curriculumVitae.vue'
import Modal from '@/components/Modal.vue'

const open = ref(false)
</script>

<template>
  <main>
    <section class="w-full mt-5 relative">
      <WhiteBackground></WhiteBackground>
      <div class="w-full h-full flex absolute top-0 left-0 flex-col items-center sm:flex-row">
        <div class="flex flex-col items-center justify-center w-6/12">
          <div class="w-80 overflow-hidden rounded-full">
            <img class="w-full h-full object-scale-down" src="/public/images/user.jpg" alt="user" />
          </div>
        </div>
        <div class="flex flex-col w-10/12 sm:w-6/12 justify-center gap-2">
          <p class="font-semibold uppercase text-xl text-orange-400">about me</p>
          <p class="font-bold text-3xl">Code Architect, Problem Solver</p>
          <p class="mr-8 text-base">
            A MERN stack and Next.js developer with a passion for creating attractive landing pages,
            UI design, and full-stack development. I'm also skilled in graphic design and committed
            to continuous learning in the ever-evolving world of web development.
          </p>
          <div class="flex gap-3">
            <a href="https://github.com/bouychandara" target="_blank">
              <IconGithub></IconGithub>
            </a>
            <a href="https://www.facebook.com/dara.bouy.99" target="_blank">
              <Facebook></Facebook>
            </a>
            <a href="https://t.me/BOUY_DARA" target="_blank">
              <Telegram></Telegram>
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to:bouychan.dara.info@gmail.com"
              target="_blank"
            >
              <IconGmail></IconGmail>
            </a>
          </div>
          <div class="mt-4 hidden">
            <button @click="open = !open" type="button" class="p-3 bg-orange-500 rounded-3xl">
              <span class="text-white font-semibold">Preview CV</span>
            </button>
            <Modal :isOpen="open" title="Preview Curriculum Vitae">
              <curriculumVitae></curriculumVitae>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
