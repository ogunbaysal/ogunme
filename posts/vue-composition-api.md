---
title: "Vue 3 Composition API: A Complete Guide"
date: "2024-01-22"
excerpt: "Learn how to use Vue 3's Composition API to write more maintainable and reusable code in your Vue applications."
tags: ["Vue", "JavaScript", "Frontend"]
---

# Vue 3 Composition API: A Complete Guide

The Composition API is one of the most significant additions to Vue 3, offering a new way to organize and reuse code in Vue components. It provides better TypeScript support and more flexible code organization.

## What is the Composition API?

The Composition API is a set of APIs that allows you to author Vue components using imported functions instead of declaring options. It's designed to address the limitations of the Options API when working with large components.

## Basic Setup

To use the Composition API, you need to use the `setup()` function:

```javascript
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    // Your composition logic here
    const count = ref(0)
    
    const doubleCount = computed(() => count.value * 2)
    
    const increment = () => {
      count.value++
    }
    
    onMounted(() => {
      console.log('Component mounted')
    })
    
    return {
      count,
      doubleCount,
      increment
    }
  }
}
```

## Reactive References

### ref() for Primitive Values

```javascript
import { ref } from 'vue'

const count = ref(0)
const message = ref('Hello')

// Access the value
console.log(count.value) // 0
count.value = 1
```

### reactive() for Objects

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  user: {
    name: 'Ogün',
    email: 'info@ogun.me'
  }
})

// Direct access to properties
console.log(state.count) // 0
state.count = 1
```

## Computed Properties

```javascript
import { ref, computed } from 'vue'

const firstName = ref('Ogün')
const lastName = ref('Baysal')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
```

## Watchers

```javascript
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

// Watch a single source
watch(count, (newValue, oldValue) => {
  console.log(`Count changed from ${oldValue} to ${newValue}`)
})

// Watch multiple sources
watch([count, message], ([newCount, newMessage], [oldCount, oldMessage]) => {
  // Handle changes
})

// Watch effect
watchEffect(() => {
  console.log(`Count is: ${count.value}`)
})
```

## Lifecycle Hooks

```javascript
import { onMounted, onUpdated, onUnmounted } from 'vue'

onMounted(() => {
  console.log('Component mounted')
})

onUpdated(() => {
  console.log('Component updated')
})

onUnmounted(() => {
  console.log('Component unmounted')
})
```

## Composables

Create reusable composition functions:

```javascript
// composables/useCounter.js
import { ref } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => count.value++
  const decrement = () => count.value--
  const reset = () => count.value = initialValue
  
  return {
    count,
    increment,
    decrement,
    reset
  }
}
```

Use in components:

```javascript
import { useCounter } from '@/composables/useCounter'

export default {
  setup() {
    const { count, increment, decrement, reset } = useCounter(10)
    
    return {
      count,
      increment,
      decrement,
      reset
    }
  }
}
```

## Benefits of Composition API

1. **Better Logic Reuse**: Extract and reuse stateful logic
2. **Better TypeScript Support**: Improved type inference
3. **More Flexible**: Better organization for large components
4. **Tree-shakable**: Only import what you need

## Conclusion

The Composition API is a powerful addition to Vue 3 that makes your code more maintainable and reusable. While the Options API is still supported, the Composition API provides better solutions for complex components and TypeScript integration.

Start experimenting with the Composition API in your next Vue 3 project!