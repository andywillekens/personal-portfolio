<script setup lang="ts">
interface Props {
  icon?: string
  variant?: 'link' | 'solid' | 'outline' | 'soft' | 'ghost' | undefined
  label?: string
  trailing?: boolean
  to?: string | {}
  loading?: boolean
  block?: boolean
  square?: boolean
  disabled?: boolean
}

const props = defineProps<Props>()

const variant = computed(() => {
  switch (props.variant) {
    case 'solid':
      return `text-purple-100 border-transparent bg-purple-950 hover:bg-purple-600`
    case 'outline':
      return `text-purple-950 border-purple-950 bg-transparent hover:bg-purple-600/10`
    case 'ghost':
      return `text-purple-950 border-transparent bg-transparent hover:bg-purple-600/10`
    case 'link':
      return `text-purple-950 border-transparent bg-transparent hover:underline`
    case 'soft':
      return `text-purple-950 border-transparent bg-purple-500/10 hover:bg-purple-500/20`
    default:
      return `text-purple-100 bg-purple-950 hover:bg-purple-600`
  }
})

const block = computed(() => {
  switch (props.block) {
    case true:
      return 'w-full'
    case false:
      return 'w-fit'
  }
})

const loading = computed(() => {
  switch (props.loading) {
    case true:
      return 'opacity-70 pointer-events-none cursor-wait'
    case false:
      return 'opacity-100'
  }
})

const disabled = computed(() => {
  return props.disabled && 'pointer-events-none grayscale'
})

const component = computed(() => {
  return props.to ? resolveComponent('NuxtLink') : 'button'
})

const buttonProps = computed(() => {
  return props.to ? { to: props.to } : { type: 'button' }
})
</script>
<template>
  <!-- The actual button -->
  <component
    v-bind="buttonProps"
    :disabled="disabled"
    :is="component"
    type="button"
    :class="[
      `button group font-base inline-flex justify-start no-underline text-center transition-all outline-0 outline-none cursor-pointer gap-2 border border-solid items-center px-3.5 py-1.5 text-md rounded-md`,
      variant,
      block,
      loading,
      disabled
    ]">
    <!-- Leading icon -->
    <Icon
      v-if="!props.trailing && !props.loading && props.icon"
      :name="props.icon"
      class="transition-all shrink-0 text-lg pointer-events-none" />
    <!-- Leading loader icon -->
    <Icon
      v-if="!props.trailing && props.loading"
      name="svg-spinners:ring-resize"
      class="transition-all shrink-0 text-lg pointer-events-none" />
    <slot name="leading"></slot>
    <slot v-if="!props.label" class="w-full"></slot>
    <span v-if="props.label && props.label !== ''" class="w-full">{{ props.label }}</span>
    <slot name="trailing"></slot>
    <!-- Trailing loader icon -->
    <Icon
      v-if="props.trailing && !props.loading && props.icon"
      :name="props.icon"
      class="transition-all shrink-0 text-lg pointer-events-none" />
    <!-- Trailing icon -->
    <Icon
      v-if="props.trailing && props.loading"
      name="svg-spinners:ring-resize"
      class="transition-all shrink-0 text-lg pointer-events-none" />
  </component>
</template>
