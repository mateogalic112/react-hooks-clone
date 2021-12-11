const React = (function () {
  let hooks = [];
  let idx = 0;
  function useState(initialValue) {
    const state = hooks[idx] || initialValue;
    const _idx = idx;
    const setState = (newVal) => {
      hooks[_idx] = newVal;
    };
    idx++;
    return [state, setState];
  }

  function render(Component) {
    // Restart index on component rerender
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }

  function useEffect(cb, depsArray) {
    const oldDeps = hooks[idx];
    let hasChanged = true;
    // detect change
    if (oldDeps) {
      hasChanged = depsArray.some((dep, i) => Object.is(dep, oldDeps[i]));
    }

    if (hasChanged) cb();
    hooks[idx] = depsArray;
    idx++;
  }

  return { useState, render, useEffect };
})();

function Component() {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("apple");

  React.useEffect(() => {
    console.log("I have been invoked");
  }, []);

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  };
}

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("pear");
var App = React.render(Component);
