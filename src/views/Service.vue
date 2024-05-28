<script setup>
import Backend from '@/components/svgs/Backend.vue'
import Frontend from '@/components/svgs/Frontend.vue'
import Design from '@/components/svgs/Design.vue'
</script>

<template>
  <main class="mb-4">
    <section class="w-full flex mt-8 flex-col">
      <div class="flex flex-col gap-2 justify-center w-full">
        <p class="uppercase font-semibold text-xl text-center text-amber-500">services</p>
        <p class="font-bold text-center text-3xl">Expertise Service! Let's check it out</p>
      </div>
      <div class="flex gap-3 flex-wrap justify-evenly mt-5">
        <div
          class="flex flex-col items-center shadow bg-slate-200 p-5 rounded-xl gap-2 basis-1/3 overflow-hidden max-w-xs cursor-pointer min-w-72 md:basic-full"
        >
          <Backend></Backend>
          <p class="text-xl font-semibold text-center">Back-End Development</p>
          <p class="text-center">
            I specialize in backend development with PHP, Laravel, Next.js, JWT, MySQL creating
            secure APIs for robust web applications.
          </p>
        </div>
        <div
          class="flex flex-col items-center shadow bg-blue-500 p-5 rounded-xl gap-2 basis-1/3 overflow-hidden max-w-xs cursor-pointer min-w-72 md:basis-full"
        >
          <Frontend></Frontend>
          <p class="text-xl font-semibold text-center text-white">Front-End Development</p>
          <p class="text-center text-white">
            I craft visually appealing user interfaces using Next.js, React, Redux, Tailwind CSS and
            Bootstrap, ensuring responsive designs.
          </p>
        </div>
        <div
          class="flex flex-col items-center shadow bg-slate-200 p-5 rounded-xl gap-2 basis-1/3 overflow-hidden max-w-xs cursor-pointer min-w-72 md:basis-full"
        >
          <Design></Design>
          <p class="text-xl font-semibold text-center">Graphic Design</p>
          <p class="text-center">
            I'm a creative expert in Adobe Photoshop and Illustrator, Figma, crafting social media
            posts, flyers, cards, book covers, illustrations.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>
