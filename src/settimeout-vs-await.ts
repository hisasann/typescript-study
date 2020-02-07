const Foo = (): any => {
  console.log('Foo')
}
const Bar = (): Promise<void> => {
  return new Promise((resolve, reject): void => {
    resolve()
  })
}

async function hoge(): Promise<void> {
  setTimeout(Foo(), 0)
  await Bar()
}

hoge()
