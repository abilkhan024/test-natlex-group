import { ref, UnwrapRef } from "vue";

export function useLoader<T>(request: Promise<T>) {
  const loading = ref(false);
  const data = ref<T | null>(null);

  loading.value = true;
  request
    .then((response) => {
      data.value = response as UnwrapRef<T>;
    })
    .finally(() => {
      loading.value = false;
    });

  return [loading, data];
}
