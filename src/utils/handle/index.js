// eslint-disable-next-line camelcase
import { getAge, handleGender } from '@/utils/plugin/utils'

// eslint-disable-next-line camelcase
export function handle_apply_data (data) {
  for (const index in data) {
    data[index].ids = (parseInt(index) + 1).toString()
    data[index].gender = handleGender(data[index].gender)
    data[index].birthday = getAge(data[index].birthday)
    if (data[index].apply_status === 0) {
      data[index].apply_tag = '待审核'
      data[index].apply_tag_style = 'primary'
    } else if (data[index].apply_status === 1) {
      data[index].apply_tag = '已审核'
      data[index].apply_tag_style = 'success'
    } else if (data[index].apply_status === -1) {
      data[index].apply_tag = '未通过'
      data[index].apply_tag_style = 'danger'
    }
  }
  return data
}
export function deepClone (data) {
  // eslint-disable-next-line no-undef
  const t = typeof data
  let o
  let i
  let ni

  if (t === 'array') {
    o = []
  } else if (t === 'object') {
    o = {}
  } else {
    return data
  }

  if (t === 'array') {
    for (i = 0, ni = data.length; i < ni; i++) {
      o.push(deepClone(data[i]))
    }
    return o
  } else if (t === 'object') {
    for (i in data) {
      o[i] = deepClone(data[i])
    }
    return o
  }
}
