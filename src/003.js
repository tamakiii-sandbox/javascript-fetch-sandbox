const fuga = async (i) => {
  if (i === 0) {
    throw Error('i must not be zero');
  }
  return 'hello'
}

const hoge = async (v) => {
  try {
    const result = await fuga(v)
    return result
  } catch (err) {
    throw err
  }
}

const h = hoge(1)
h.then(v => console.log(v))

const o = hoge(0)
o.catch(e => console.log(e.message))
