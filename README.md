# learn_JavaScript
## 1. vue3中具体时间更新, script逻辑
```
<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useDate } from 'vuetify'

const date = useDate()
const currentTime = ref(new Date())
// console.log(currentTime); // test
// const formattedDate = computed(() =>
//   date.format(currentTime.value, 'fullDateWithWeekday')
// );

// 自定义格式化函数，包含时分秒
const formatDateTime = (dateObj) => {
  // 使用vuetify中的函数来显示相应的时间格式；
  return date.format(dateObj, 'fullDateWithWeekday') +
    ' ' +
    dateObj.toLocaleTimeString()  // 使用原生的 toLocaleTimeString 来显示时分秒
}

const formattedDateTime = computed(() =>
  formatDateTime(currentTime.value)
)

let intervalId

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime.value = new Date()
  }, 1000) // 每秒更新一次
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>
```
