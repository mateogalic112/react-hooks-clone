function useState(initialValue) {
  let _val = initialValue;
  const state = () => _val;
  const setState = (newVal) => {
    _val = newVal;
  };
  return [state, setState];
}

const [count, setCount] = useState(0);
console.log(count());
setCount(1);
console.log(count());
