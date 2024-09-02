<template>

  <div class="px-4 xl:px-0">
    <div class="mx-auto">
      <div class="w-full">
        <div>
          <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 rounded-tl-lg rounded-tr-lg">
            <div class="flex items-center justify-between">
              <p class="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
                Registros
              </p>
              <div class="md:flex items-center lg:mt-0">
                <div class="flex items-center">

                  <div class="flex items-center pl-3 bg-white border w-64 rounded border-gray-200">
                    <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 20 20" fill="none">
                      <path
                        d="M8.33333 13.1667C11.555 13.1667 14.1667 10.555 14.1667 7.33333C14.1667 4.11167 11.555 1.5 8.33333 1.5C5.11167 1.5 2.5 4.11167 2.5 7.33333C2.5 10.555 5.11167 13.1667 8.33333 13.1667Z"
                        stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.5 17.5L12.5 12.5" stroke="currentColor" stroke-width="1.25" stroke-linecap="round"
                        stroke-linejoin="round" />
                    </svg>
                    <input type="text"
                      class="py-2.5 pl-1 w-full focus:outline-none border-0 text-sm rounded text-gray-600 placeholder-gray-500"
                      placeholder="Search" />
                  </div>
                </div>
                <div class="flex items-center mt-4 md:mt-0 md:ml-3 lg:ml-0">
                  <button @click="addModal = true"
                    class="inline-flex ml-1.5 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p class="text-sm font-medium leading-none text-white">
                      Añadir
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white shadow overflow-x-auto">
            <table class="w-full whitespace-nowrap">
              <thead>
                <tr class="h-20 w-full text-sm leading-none text-gray-600">
                  <th class="font-normal text-center pl-4">RUT</th>
                  <th class="font-normal text-center pl-11">Nombres</th>
                  <th class="font-normal text-center">Apellidos</th>
                  <th class="font-normal text-center pl-10">Dirección</th>
                  <th class="font-normal text-center pl-6">Ciudad</th>
                  <th class="font-normal text-center">Teléfono</th>
                  <th class="font-normal text-center">Opciones</th>
                </tr>
              </thead>
              <tbody class="w-full">
                <tr v-for="item in items"
                  class="h-20 text-sm leading-none text-gray-700 border-b border-t border-gray-200 bg-white hover:bg-gray-100">
                  <td class="pl-4 text-center">
                    {{ item.rut }}
                  </td>
                  <td class="pl-11 text-center">
                    {{ item.name }}
                  </td>
                  <td class="text-center">
                    {{ item.lastname }}
                  </td>
                  <td class="pl-10 text-center">
                    {{ item.address }}
                  </td>
                  <td class="pl-6 text-center">
                    {{ item.city }}
                  </td>
                  <td class="text-center">
                    {{ item.phone }}
                  </td>
                  <td>
                    <div class="flex items-center">
                      <button class=" mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Ver
                      </button>
                      <button
                        class="bg-gray-100 mr-3 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Editar
                      </button>
                      <button @click="deleteItem(item.id)"
                        class="bg-gray-100 mr-5 hover:bg-gray-200 py-2.5 px-5 rounded text-sm leading-3 text-gray-500">
                        Borrar
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Transition>
    <div id="popup" role="dialog" aria-modal="true" class="w-full h-full fixed left-0 top-0" v-if="addModal">
      <div class="absolute bg-slate-900/40 inset-0 backdrop-blur-sm" @click="addModal = false"></div>
      <div class="w-full py-8 h-full flex items-center justify-center md:px-0 px-4">
        <div
          class="rounded-md w-full overflow-y-auto lg:h-auto h-full sm:w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5 relative">
          <div
            class="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
            <p class="text-base font-semibold">Añadir Registro</p>
            <button @click="addModal = false" class="focus:outline-none">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 7L7 21" stroke="#A1A1AA" stroke-width="1.75" stroke-linecap="round"
                  stroke-linejoin="round" />
                <path d="M7 7L21 21" stroke="#A1A1AA" stroke-width="1.75" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="px-4 md:px-10 pt-8 md:pt-8 md:pb-6 pb-8 bg-white rounded-b-md">
            <form novalidate @submit.prevent="submitForm">
              <div class="sm:flex items-center sm:pt-0">
                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="rut" id="rut" placeholder="RUT" v-model="formData.rut"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none border text-gray-800 bg-white rounded border-gray-200" />
                  <p v-for="error in v$.rut.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>
                </div>
                <div class="sm:w-1/2 ml-9">
                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0 sm:mt-4 sm:space-x-9">

                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" placeholder="Nombres"
                    v-model="formData.name"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                  <p v-for="error in v$.name.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

                </div>

                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" placeholder="Apellidos"
                    v-model="formData.lastname"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                  <p v-for="error in v$.lastname.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

                </div>

              </div>
              <div class="sm:flex items-center sm:pt-0 sm:space-x-9 sm:mt-4">
                <div class="w-full mt-2">
                  <input type="text" name="street-address" id="street-address" autocomplete="street-address"
                    v-model="formData.address" placeholder="Dirección"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                  <p v-for="error in v$.address.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0 sm:space-x-9 sm:mt-4">
                <div class="sm:w-1/2 mt-2">
                  <input type="text" name="city" id="city" autocomplete="address-level2" placeholder="Ciudad"
                    v-model="formData.city"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                  <p v-for="error in v$.city.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

                </div>
                <div class="sm:w-1/2 mt-2">
                  <div class="relative rounded-md shadow-sm">
                    <div class=" pointer-events-none absolute inset-y-0 left-0 border-r flex items-center p-3">
                      <p class="text-gray-500 sm:text-sm">+56</p>
                    </div>
                    <input type="text" name="phone" id="phone" placeholder="Teléfono" v-model="formData.phone"
                      class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 pl-16 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />

                  </div>
                  <p v-for="error in v$.phone.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>
                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0  sm:space-x-9 sm:mt-3">
                <div class="w-full mt-2">
                  <input id="email" name="email" type="email" autocomplete="email" placeholder="Email"
                    v-model="formData.email"
                    class="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200" />
                  <p v-for="error in v$.email.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

                </div>
              </div>
              <div class="sm:flex items-center sm:pt-0 sm:space-x-9 sm:mt-3">

                <div class="sm:w-1/2 w-full">
                  <p class="text-sm font-semibold leading-6 text-gray-600">Fecha de nacimiento</p>
                  <input type="date" v-model="formData.date"
                    class="w-full mt-1 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                    placeholder="Fecha de Nacimiento" />
                  <p v-for="error in v$.date.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

                </div>
                <div >
                  <p class="text-sm font-semibold leading-6 text-gray-600">Estado Civil</p>

                  <div class="w-full sm:mt-2 mt-4 bg-white border rounded border-gray-200 py-2.5 px-3">
                    
                    <select class="text-sm p-0 text-gray-500 border-0 w-full focus:outline-none"
                      v-model="formData.status">
                      <option class="bg-slate-200" selected disabled value=""></option>
                      <option>Soltero(a)</option>
                      <option>Casado(a)</option>
                      <option>Conviviente civil</option>
                      <option>Separado(a) judicialmente</option>
                      <option>Divorciado(a)</option>
                      <option>Viudo(a)</option>
                    </select>

                  </div>
                  <p v-for="error in v$.status.$errors" :key="error.$uid"
                    class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>
                </div>
              </div>
              <div class="mt-6">
                <textarea placeholder="Comentarios" v-model="formData.comment"
                  class="py-3 pl-3 overflow-y-auto h-24 border rounded border-gray-200 w-full resize-none focus:outline-none"></textarea>
                <p v-for="error in v$.comment.$errors" :key="error.$uid"
                  class="text-red-500 font-semibold text-sm pl-2">{{ error.$message }}</p>

              </div>

              <div class="flex items-center justify-between mt-9">
                <button @click="addModal = false"
                  class="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                  Cerrar
                </button>
                <button type="submit"
                  class="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                  Añadir
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Transition>

</template>

<script setup>
import { reactive, ref, computed, onMounted, watch } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, numeric, email, helpers } from '@vuelidate/validators';



// Modal Reactivity
const addModal = ref(false);

const items = ref([]);

// Retrieve from Local Storage
onMounted(() => {
  items.value = JSON.parse(localStorage.getItem('formData')) || [];
})

watch(items, (formData) => {
  localStorage.setItem('formData', JSON.stringify(formData));
}, { deep: true });


const addItem = () => {
  items.value.push(formData)
}

const deleteItem = (id) => {
  items.value = items.value.filter((item) => item.id !== id);
}

const showItem = (id) => {
  
}


// Form submission

const formData = reactive({
  id: Date.now(),
  rut: '',
  name: '',
  lastname: '',
  address: '',
  city: '',
  phone: '',
  email: '',
  date: '',
  status: '',
  comment: '',
})


const rules = computed(() => {
  return {
    
    rut: { required },
    name: { required },
    lastname: { required },
    address: { required },
    city: { required },
    phone: { required, numeric },
    email: { required, email },
    date: {
      required, minValue: helpers.withMessage('Date cannot be after tomorrow', value => {
        console.log(value)
        return new Date(value) < new Date()
      }),
    },
    status: { required },
    comment: { required },
  }
})

const v$ = useVuelidate(rules, formData)

const submitForm = async () => {

  const result = await v$.value.$validate();
  if (result) {
    console.log('success!');
    addItem();
  } else {
    console.log('nope')
  }
};

</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.15s linear;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>