const escapeStr = '`\\/\\"\'';
const arr = [4, '2'];
const obj = Object.freeze({
  str: '',
  num: 42,
  bool: true,
  undef: undefined,
});
const nested= Object.freeze({
    arr: Object.freeze([4, undefined, '2']),
    obj: Object.freeze({
      str: '',
      num: 3.14,
      bool: false,
    })
});
Object.freeze(nested);
Object.freeze(nested.arr);
Object.freeze(nested.obj);