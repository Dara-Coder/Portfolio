<script setup>
const handleSubmit = (e) => {
  const formData = new FormData(e.target)
  let p = {}
  for (const pair of formData.entries()) {
    p[pair[0]] = pair[1]
  }
  const a = document.createElement('a')
  a.href =
    "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&?su=Hello! Dara, I'm from " +
    p.name +
    '&body=' +
    p.message +
    ' Thank you from ' +
    p.email +
    '&to=bouychan.dara.info@gmail.com'
  a.target = '_blank'
  console.log(a)
  a.click()
}

const validateField = (e) => {
  const el = e.target
  const valid = el.validity.valid
  valid
    ? (el.classList.add('is-valid'), el.classList.remove('is-invalid'))
    : (el.classList.add('is-invalid'), el.classList.remove('is-valid'))
}
</script>

<template>
  <main class="w-full mt-5">
    <section class="w-full gap-3">
      <div class="flex flex-col gap-2">
        <p class="text-center uppercase font-bold text-xl text-orange-400">Contact</p>
        <p class="text-center font-bold text-3xl">Do you have any question?</p>
      </div>
      <div class="w-full flex justify-center">
        <form
          @submit.prevent="handleSubmit"
          action=""
          method="POST"
          class="flex flex-col gap-2 p-3 w-10/12 max-w-3xl"
          enctype="multipart/form-data"
        >
          <div class="w-full flex flex-col gap-2 sm:flex-row">
            <div class="w-full sm:w-1/2">
              <input
                type="text"
                id="name"
                name="name"
                @input="validateField"
                class="w-full p-2 border rounded-lg focus-visible:border-blue-500 focus-visible:outline-0"
                placeholder="Name"
                autocomplete="off"
                pattern="^[a-zA-Z\s]+$"
                required
              />
            </div>
            <div class="w-full sm:w-1/2">
              <input
                type="email"
                id="email"
                name="email"
                @input="validateField"
                class="w-full p-2 border rounded-lg focus-visible:border-blue-500 focus-visible:outline-0"
                placeholder="Email"
                autocomplete="off"
                required
              />
            </div>
          </div>
          <textarea
            id="message"
            name="message"
            @input="validateField"
            class="w-full p-2 border rounded-lg focus-visible:border-blue-500 focus-visible:outline-0"
            placeholder="Message"
            pattern="^[a-zA-Z0-9\s\-]+$"
            required
          ></textarea>
          <div class="flex gap-3">
            <button type="submit" class="w-1/2 rounded-lg bg-orange-400 p-2.5">
              <span class="text-white font-semibold">Send</span>
            </button>
            <a
              href="tel:+855888800908"
              target="_blank"
              class="text-center w-1/2 rounded-lg bg-lime-500 p-2.5"
              title="(+885) 888800908"
            >
              <span class="text-slate-600 font-semibold">Call</span>
            </a>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
.is-valid:valid {
  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20style%3D%22shape-rendering%3AgeometricPrecision%3Btext-rendering%3AgeometricPrecision%3Bimage-rendering%3AoptimizeQuality%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%22%20viewBox%3D%220%200%20150%20150%22%3E%3Cpath%20style%3D%22opacity%3A.992%22%20fill%3D%22%23009045%22%20d%3D%22M123.192%2015.966q8.646%20-0.072%2017.28%200.15%20-15.246%2013.596%20-27.978%2029.442%20-28.224%2035.928%20-51.126%2075.582a852%20852%200%200%200%20-37.194%20-54.048%20444%20444%200%200%201%209.672%20-9.522%202592%202592%200%200%201%2027.102%2018.75q21.072%20-27.084%2047.304%20-49.368a270%20270%200%200%201%2014.946%20-10.992%22%2F%3E%3Cpath%20style%3D%22opacity%3A.901%22%20fill%3D%22%23828282%22%20d%3D%22M60.204%2029.742q3.804%20-0.516%203.372%203.222%20-1.116%202.004%20-3.372%201.32%20-2.322%20-2.316%200%20-4.542%22%2F%3E%3Cpath%20style%3D%22opacity%3A.889%22%20fill%3D%22%23828282%22%20d%3D%22M47.898%2031.2q3.744%200.15%202.784%203.804%20-2.406%202.454%20-4.398%20-0.294%20-0.708%20-2.526%201.608%20-3.516%22%2F%3E%3Cpath%20style%3D%22opacity%3A.896%22%20fill%3D%22%23838383%22%20d%3D%22M73.68%2031.2q3.378%200.168%202.784%203.516%20-1.326%202.208%20-3.666%201.026%20-2.448%20-2.844%200.876%20-4.542%22%2F%3E%3Cpath%20style%3D%22opacity%3A.892%22%20fill%3D%22%23828282%22%20d%3D%22M36.18%2036.18q2.574%200.084%202.928%202.634%20-1.344%203.678%20-4.542%201.47%20-1.434%20-2.994%201.608%20-4.104%22%2F%3E%3Cpath%20style%3D%22opacity%3A.897%22%20fill%3D%22%23838383%22%20d%3D%22M25.632%2044.094q3.918%200.174%202.784%203.804%20-2.406%202.454%20-4.398%20-0.294%20-0.708%20-2.526%201.608%20-3.516%22%2F%3E%3Cpath%20style%3D%22opacity%3A.903%22%20fill%3D%22%23828282%22%20d%3D%22M17.724%2054.348q3.828%200.096%202.784%203.804%20-2.406%202.454%20-4.398%20-0.294%20-0.708%20-2.526%201.608%20-3.516%22%2F%3E%3Cpath%20style%3D%22opacity%3A.89%22%20fill%3D%22%23828282%22%20d%3D%22M12.744%2066.354q3.894%200.15%202.784%203.804%20-2.574%202.502%20-4.398%20-0.582%20-0.354%20-2.22%201.608%20-3.222%22%2F%3E%3Cpath%20style%3D%22opacity%3A.898%22%20fill%3D%22%23838383%22%20d%3D%22M108.546%2066.354q3.882%200.144%202.784%203.804%20-2.376%202.394%20-4.398%20-0.294%20-0.702%20-2.544%201.608%20-3.516%22%2F%3E%3Cpath%20style%3D%22opacity%3A.875%22%20fill%3D%22%23828282%22%20d%3D%22M10.692%2079.248q3.804%20-0.516%203.372%203.222%20-1.854%203.018%20-4.398%200.582%20-1.032%20-2.328%201.026%20-3.804%22%2F%3E%3Cpath%20style%3D%22opacity%3A.9%22%20fill%3D%22%23828282%22%20d%3D%22M110.016%2079.248q4.446%20-0.024%202.784%204.104%20-2.346%201.758%20-4.104%20-0.582%20-0.672%20-2.316%201.32%20-3.516%22%2F%3E%3Cpath%20style%3D%22opacity%3A.895%22%20fill%3D%22%23828282%22%20d%3D%22M12.45%2092.142q2.982%20-0.57%203.516%202.346%20-0.666%203.12%20-3.804%202.196%20-2.43%20-2.478%200.294%20-4.542%22%2F%3E%3Cpath%20style%3D%22opacity%3A.896%22%20fill%3D%22%23828282%22%20d%3D%22M108.252%2092.142q3.084%20-0.582%203.516%202.484%20-0.804%202.97%20-3.804%202.052%20-2.43%20-2.478%200.294%20-4.542%22%2F%3E%3Cpath%20style%3D%22opacity%3A.89%22%20fill%3D%22%23828282%22%20d%3D%22M17.142%20104.148q4.992%20-0.348%202.928%204.248%20-4.434%201.572%20-3.954%20-3.078a6%206%200%200%200%201.026%20-1.17%22%2F%3E%3Cpath%20style%3D%22opacity%3A.908%22%20fill%3D%22%23828282%22%20d%3D%22M103.272%20104.148q2.994%20-0.558%203.516%202.346%20-0.174%202.298%20-2.484%202.346%20-2.802%20-0.168%20-2.346%20-2.928%200.258%20-1.206%201.32%20-1.758%22%2F%3E%3Cpath%20style%3D%22opacity%3A.902%22%20fill%3D%22%23838383%22%20d%3D%22M25.05%20114.402q4.866%20-0.198%202.928%204.248%20-4.434%201.572%20-3.954%20-3.078a6%206%200%200%200%201.026%20-1.17%22%2F%3E%3Cpath%20style%3D%22opacity%3A.877%22%20fill%3D%22%23828282%22%20d%3D%22M95.358%20114.402q4.98%20-0.072%202.634%204.248%20-4.134%201.566%20-3.954%20-2.784%200.45%20-0.966%201.32%20-1.47%22%2F%3E%3Cpath%20style%3D%22opacity%3A.905%22%20fill%3D%22%23838383%22%20d%3D%22M35.304%20122.316q4.632%20-0.522%203.222%203.804%20-1.956%201.746%20-3.954%200%20-1.116%20-2.226%200.732%20-3.804%22%2F%3E%3Cpath%20style%3D%22opacity%3A.896%22%20fill%3D%22%23838383%22%20d%3D%22M84.816%20122.316q5.256%20-0.378%202.928%204.248%20-4.152%201.554%20-3.954%20-2.784a7.8%207.8%200%200%201%201.026%20-1.47%22%2F%3E%3Cpath%20style%3D%22opacity%3A.902%22%20fill%3D%22%23848484%22%20d%3D%22M47.316%20127.296q4.32%20-0.732%203.372%203.516%20-2.196%202.346%20-4.398%200%20-0.618%20-2.172%201.026%20-3.516%22%2F%3E%3Cpath%20style%3D%22opacity%3A.911%22%20fill%3D%22%23838383%22%20d%3D%22M73.098%20127.296q3.072%20-0.732%203.516%202.346%20-0.174%202.298%20-2.484%202.346%20-2.292%20-0.024%20-2.484%20-2.346%200.096%20-1.626%201.47%20-2.346%22%2F%3E%3Cpath%20style%3D%22opacity%3A.901%22%20fill%3D%22%23828282%22%20d%3D%22M60.792%20128.766q3.6%200.024%202.784%203.516%20-1.98%202.748%20-4.398%200.294%20-0.834%20-2.706%201.608%20-3.804%22%2F%3E%3C%2Fsvg%3E);
  background-repeat: no-repeat;
  padding-right: calc(1.5em + 0.75rem);
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}

.is-invalid:invalid {
  background-image: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22150%22%20height%3D%22150%22%20style%3D%22shape-rendering%3AgeometricPrecision%3Btext-rendering%3AgeometricPrecision%3Bimage-rendering%3AoptimizeQuality%3Bfill-rule%3Aevenodd%3Bclip-rule%3Aevenodd%22%20viewBox%3D%220%200%20150%20150%22%3E%3Cpath%20style%3D%22opacity%3A.975%22%20fill%3D%22%23fd475f%22%20d%3D%22M68.115-.146h13.477q39.394%204.785%2059.326%2038.965%207.337%2013.83%208.936%2029.297v13.477q-4.785%2039.394-38.965%2059.326-13.83%207.337-29.297%208.936H68.115q-39.394-4.786-59.326-38.966-7.336-13.83-8.935-29.297V68.115Q4.638%2028.721%2038.818%208.789q13.83-7.337%2029.297-8.936m6.445%208.789q38.459%201.518%2058.154%2034.277%2013.813%2026.502%204.102%2054.785-13.747%2033.814-49.365%2042.042-41.31%206.11-66.65-26.807-19.204-28.977-7.617-61.816Q26.021%2019.975%2058.447%2010.84q8.012-1.922%2016.113-2.197m-.586%2047.754q6.145.216%207.031%206.299a4547%204547%200%200%200-1.025%2018.311q-2.496%206.044-8.35%203.076-1.453-1.221-1.904-3.076a6899%206899%200%200%200-1.025-18.457q.706-4.808%205.273-6.152m-.586%2032.813q7.458-.378%207.178%207.031-2.563%206.519-8.936%203.662-4.91-4.416-.586-9.375a14%2014%200%200%201%202.344-1.318%22%2F%3E%3Cpath%20style%3D%22opacity%3A.99%22%20fill%3D%22%23fd475f%22%20d%3D%22M72.217%2038.232q7.271-.97%2012.451%204.102a6151%206151%200%200%201%2029.297%2048.926q5.48%2010.815-3.955%2018.311a14.3%2014.3%200%200%201-4.395%201.758q-30.762.293-61.523%200-12.314-4.042-9.814-16.846%2014.577-25.708%2029.883-50.977%203.15-4.025%208.057-5.273m1.758%2018.164q-4.567%201.344-5.273%206.152.525%209.223%201.025%2018.457.451%201.855%201.904%203.076%205.854%202.968%208.35-3.076.495-9.164%201.025-18.311-.886-6.083-7.031-6.299m-.586%2032.813a14%2014%200%200%200-2.344%201.318q-4.325%204.959.586%209.375%206.372%202.857%208.936-3.662.28-7.409-7.178-7.031%22%2F%3E%3C%2Fsvg%3E);
  background-repeat: no-repeat;
  padding-right: calc(1.5em + 0.75rem);
  background-position: right calc(0.375em + 0.1875rem) center;
  background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
}
</style>
