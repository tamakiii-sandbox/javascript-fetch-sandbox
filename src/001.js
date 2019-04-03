const hoge = (v) => {
  if (v === 0) {
    throw Error('v must not be zero');
  }
  return 'hi'
}

console.log(hoge(1))

try {
  hoge(0)
} catch (err) {
  console.log(err.message)
}
