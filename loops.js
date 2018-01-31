function whileLoop(x){
  while (x >= 0) {
    console.log(x)
    x -= 1
    if (x === 0) { return 'done' }
  }
}

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push('I am 1 strange loop.')
<<<<<<< HEAD
    } else {
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
    }
  }
  return array
=======
      console.log(array)
    } else {
      array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
      console.log(array)
    }
  }
>>>>>>> 6f40e544e0e7b3ab5ccc27c7805d060237b7bac0
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }
  do {
    array.pop()
  } while (array.length > 0 && maybeTrue())
  return array
}