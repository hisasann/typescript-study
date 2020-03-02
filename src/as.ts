const s = ''
const n: number | null = 0

const obj = {
  s: s as string,
  n: n as number,
  check: (a): void => {
    console.log(a)
  },
}

let hoge = 1
hoge = 2
console.log(hoge)

export {}
