<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  isOpen: Boolean,
  title: String
})

const body = document.body
const open = ref(props.isOpen)
const form = ref(null)

watch(
  () => props.isOpen,
  () => {
    open.value = !open.value
  }
)

watch(
  () => open.value,
  () => {
    open.value ? body.classList.add('overflow-hidden') : body.classList.remove('overflow-hidden')
    document.addEventListener('mousedown', (e) => {
      if (form.value && !form.value.contains(e.target)) {
        open.value = false
      }
    })
  }
)
</script>

<template>
  <Teleport to="body">
    <Transition name="bounce">
      <div
        v-if="open"
        class="flex justify-center items-center w-screen h-screen bg-backdrop fixed top-0 bottom-0 z-10"
      >
        <form
          ref="form"
          action=""
          name="modal"
          @submit.prevent=""
          enctype="multipart/form-data"
          class="shadow-lg bg-white border border-solid rounded-lg w-11/12 sm:w-4/6 max-h-[90vh] overflow-hidden relative"
        >
          <header class="flex justify-between">
            <h5 class="font-semibold text-xl py-3 px-2">{{ props.title }}</h5>
          </header>
          <main class="overflow-auto max-h-[73vh]">
            <slot></slot>
          </main>
          <footer class="flex justify-end py-3 px-2 min-h-14">
            <div class="flex gap-3">
              <button type="button" @click="open = !open" class="bg-red-500 px-1.5 py-1 rounded-md">
                <span class="text-white">Close</span>
              </button>
            </div>
          </footer>
        </form>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.bg-backdrop {
  background-color: #000000a9;
}

.overflow-hidden {
  overflow: hidden;
}

.bounce-enter-active {
  animation: bounce-in 1s;
}

.bounce-leave-active {
  animation: bounce-in 1s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>
