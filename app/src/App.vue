<script setup lang="ts">
import { computed, ref } from 'vue';
import M from "@vcm/api/math";
import D from "@vcm/cjs/lib/div";

const x = ref<number>(0);
const y= ref<number>(0);

const sum = computed(() => M.sum(x.value, y.value));
const multi = computed(() => M.multi(x.value, y.value));
const div = computed(() => y.value === 0 ? 'invalid y' : D.div(x.value, y.value));

</script>

<template>
  <div>
    <div class="inputs">
      <input type="number" v-model="x">
      <input type="number" v-model="y">
    </div>

    <div class="results">
      <p>result of <pre>sum</pre> function, coming from cjs dep, imported in api dep:<br /><b>{{ sum }}</b></p>
      <p>result of <pre>multi</pre> function, coming from api dep:<br>{{ multi }}</p>
      <p>result of <pre>div</pre> function, directly imported from cjs dep:<br>{{ div }}</p>
    </div>
  </div>
</template>

<style scoped>
.results {
  text-align: center;
}

.results p {
  margin-bottom: 2rem;
}

.inputs {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
}

.inputs input[type="number"] {
  flex: 1;
  background: transparent;
  color: white;
  padding: .5rem 1rem;
}
</style>
