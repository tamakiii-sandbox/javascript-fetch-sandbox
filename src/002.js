const hoge = async (v) => {
  if (v === 0) {
    throw Error('v must not be zero');
  }
  return 'hi'
}

const h = hoge(1)
h.then(v => console.log(v))

const o = hoge(0)
o.catch(e => console.log(e.message))
