function MyPick(todo,keys) {
  const obj = {}
  keys.forEach(key => {
    obj[key] = todo[key]
  });
  return obj
}
type MyPick<T,K extends keyof T> = {
  [P in K ] : T[P]
}