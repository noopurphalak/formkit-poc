<template>
  <div class="p-4">
    <FormKit
      type="form"
      id="myForm"
      #default="{ value }"
      @submit="handleSubmit"
    >
      <FormKit
        type="text"
        name="name"
        id="name"
        label="Name"
        help="Please enter your name here"
        validation="required|length:5,20"
      />
      <FormKit
        v-if="formDisabled !== 'checkbox'"
        type="checkbox"
        name="isActive"
        label="Is the user active?"
        help="Is the above user active?"
        validation="accepted"
        :validation-messages="{
          accepted: 'User must be active',
        }"
      />
      <FormKit type="group" name="address" v-if="formDisabled !== 'address'">
        <FormKit
          type="text"
          name="address1"
          label="Flat No. and Street"
          validation="required|length:5,90"
        />
        <FormKit type="text" name="city" label="City" validation="required" />
        <FormKit type="text" name="state" label="State" validation="required" />
        <FormKit type="text" name="zip" label="Zip" validation="required" />
      </FormKit>
      <FormKit
        type="antSelect"
        label="Frameworks"
        name="frameworks"
        help="Please select your favorite framework"
        validation="required"
        :options="[
          { label: 'Vue', value: 'vue' },
          { label: 'React', value: 'react' },
          { label: 'Angular', value: 'angular' },
        ]"
        allowClear
      />
      <pre>{{ value }}</pre>
    </FormKit>

    <div class="flex mt-16">
      <FormKit type="button" @click="formDisabled = 'address'">
        Activate checkbox
      </FormKit>
      <FormKit type="button" @click="formDisabled = 'checkbox'">
        Activate Address
      </FormKit>
      <FormKit type="button" @click="reset('myForm')"> Clear Form </FormKit>
      <FormKit type="button" @click="induceErrors">Induce Errors</FormKit>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reset, setErrors } from '@formkit/core'

const formDisabled = ref('address')

const handleSubmit = (value: any) => {
  console.log(value)
}

const induceErrors = () => {
  setErrors('myForm', {
    name: ['Name is Required', 'Name is not of desired length'],
    isActive: ['User is not active'],
    frameworks: ['Please select a framework'],
  })
}
</script>

<style scoped></style>
