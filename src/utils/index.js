const countObjectProperties = obj => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length
  }
  return 0
}

<<<<<<< HEAD
export {
  countObjectProperties
=======
const removeEmptyProperties = obj => {
  const objCopy = {...obj}
  Object.keys(objCopy).forEach(key => {
    if (!objCopy[key]) {
      delete objCopy[key]
    }
  })
  return objCopy
}

export {
  countObjectProperties,
  removeEmptyProperties
>>>>>>> development1
}
