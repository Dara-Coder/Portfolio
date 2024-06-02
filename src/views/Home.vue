<script setup>
import { ref } from 'vue'
import DotPattern from '@/components/svgs/DotPattern.vue'
import IconSend from '@/components/icons/IconSend.vue'
import IconGithub from '@/components/icons/IconGithub.vue'
import Facebook from '@/components/svgs/Facebook.vue'
import Telegram from '@/components/svgs/Telegram.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import IconGmail from '@/components/icons/IconGmail.vue'
import Service from '@/views/Service.vue'
import About from '@/views/About.vue'
import Project from '@/views/Project.vue'
import Skill from '@/views/Skill.vue'
import Modal from '@/components/Modal.vue'

const openWork = ref(false)
const openSay = ref(false)
const profile = ref(null)

let number = 0
setInterval(() => {
  if (number > 360) number = 0
  const el = profile.value
  if (el) el.style.transform = 'rotate(' + number + 'deg)'
  number = number + 1
}, 30)
</script>

<template>
  <main class="w-full h-full">
    <section
      class="h-4/5 w-full flex justify-center relative py-8"
      style="background-image: url(/images/blue_background.png)"
    >
      <div class="p-10 absolute top-0 left-0">
        <DotPattern></DotPattern>
      </div>
      <div class="p-10 absolute -bottom-10 right-10 rotate-90 hidden sm:block">
        <DotPattern></DotPattern>
      </div>
      <div class="flex justify-center items-center flex-col gap-4 max-w-md">
        <div class="w-40 rounded-full overflow-hidden">
          <img class="w-full object-scale-down" src="/images/user.jpg" alt="user" ref="profile" />
        </div>
        <div class="flex flex-col gap-1">
          <p class="text-3xl font-bold text-white text-center">Hi, This is BOUY Chandara</p>
          <p class="text-white text-center text-xl">
            I am a highly passionate and dedicated software engineer based in Cambodia, with a flair
            for creative design.
          </p>
        </div>
        <div class="flex gap-2 justify-center">
          <button
            type="button"
            @click="openWork = !openWork"
            class="py-2 px-8 bg-transparent border border-solid border-white rounded-3xl hover:bg-amber-500 hover:border-0"
          >
            <span class="font-semibold text-white">Work</span>
          </button>
          <Modal :isOpen="openWork" title="Contact For Work">
            <div
              class="w-full p-3 flex flex-wrap justify-start flex-col sm:justify-evenly sm:flex-row gap-3"
            >
              <a
                href="tel:+855888800908"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <IconPhone></IconPhone>
                <p class="font-semibold text-md">(+855) 888 800 908</p>
              </a>
              <a
                href="https://www.facebook.com/dara.bouy.94"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <Facebook></Facebook>
                <p class="font-semibold text-md">Dara Bouy</p>
              </a>
              <a
                href="https://t.me/BOUY_DARA"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <Telegram></Telegram>
                <p class="font-semibold text-md uppercase">bouy chan dara</p>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to:bouychan.dara.info@gmail.com"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <IconGmail></IconGmail>
                <p class="font-semibold text-md">bouychan.dara.info@gmail.com</p>
              </a>
            </div>
          </Modal>
          <button
            type="button"
            @click="openSay = !openSay"
            class="hidden items-center gap-2 py-2 px-8 bg-transparent border border-solid border-white rounded-3xl hover:bg-amber-500 hover:border-0"
          >
            <IconSend></IconSend>
            <span class="font-semibold text-white">Say Hello!</span>
          </button>
          <Modal :isOpen="openSay" title="Say Hello! By">
            <div
              class="w-full p-3 flex flex-wrap justify-start flex-col sm:justify-evenly sm:flex-row gap-3"
            >
              <a
                href="tel:+855888800908"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <IconPhone></IconPhone>
                <p class="font-semibold text-md">(+855) 888 800 908</p>
              </a>
              <a
                href="https://www.facebook.com/dara.bouy.94"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <Facebook></Facebook>
                <p class="font-semibold text-md">Dara Bouy</p>
              </a>
              <a
                href="https://t.me/BOUY_DARA"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <Telegram></Telegram>
                <p class="font-semibold text-md uppercase">bouy chan dara</p>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to:bouychan.dara.info@gmail.com"
                target="_blank"
                class="flex items-center gap-2 cursor-pointer"
              >
                <IconGmail></IconGmail>
                <p class="font-semibold text-md">bouychan.dara.info@gmail.com</p>
              </a>
            </div>
          </Modal>
        </div>
      </div>
    </section>
  </main>
  <Service></Service>
  <About></About>
  <Project></Project>
  <Skill></Skill>
  <footer class="flex w-full bg-orange-400 justify-between mt-5">
    <div class="w-fit h-full px-3 py-5 overflow-hidden">
      <p class="font-semibold text-lg text-slate-100">Design and Developed by BOUY Chandara</p>
    </div>
    <div class="w-fit h-full flex items-center gap-3 px-3 py-5">
      <a href="https://github.com/dara-coder" target="_blank">
        <IconGithub></IconGithub>
      </a>
      <a href="https://www.facebook.com/dara.bouy.94" target="_blank">
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
  </footer>
</template>
