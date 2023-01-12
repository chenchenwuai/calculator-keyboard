import { ref } from 'vue'
export default function () {
  const activeKeys = ref<Set<string>>(new Set([]))

  function add(key: string): void {
    activeKeys.value.add(key)
  }
  function remove(key: string): void {
    activeKeys.value.delete(key)
  }
  function has(key: string): boolean {
    return activeKeys.value.has(key)
  }
  return {
    add,
    remove,
    has
  }
}
