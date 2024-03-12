# react-json-difference
Display json diffs in react. Based on [jsondiffpatch](https://github.com/benjamine/jsondiffpatch) and originally customized for [React Query Rewind](https://reactqueryrewind.com/)

Now as it's own module, this component can easily be installed into any react app:

Import the component at the top of your file:

  `import JsonDiff from 'jsondiff-react';`

The `JsonDiff1` component takes in 3 properties:
1. `oldJson`: The old JSON object
2. `currentJson`: The new version of the JSON object
3. `isHidden`: Hides unchanged fields when `true`, shows all fields when `false`

```typescript
    <JsonDiff
      oldJson={{
        a: 1,
        b: 2,
        c: 4,
        d: ["hello", "world"],
        nested: { e: 5, f: 6, h: ["goodbye", "world"], i: 8 },
      }}
      currentJson={{
        a: 1,
        b: 2,
        c: 3,
        d: ["hello", "everyone"],
        nested: { e: 5, f: 6, g: 7, h: ["goodbye", "everyone"] },
      }}
      isHidden={false} // set to true to hide unchanged fields, false to show all fields
    />
```

With `isHidden` = false:

![example where isHidden is false](https://raw.githubusercontent.com/johnwdunn20/react-jsondiff/main/package/images/example-hiddenFalse.png)

With `isHidden` = true:

![example where isHidden is true](https://raw.githubusercontent.com/johnwdunn20/react-jsondiff/main/package/images/example-hiddenTrue.png)

This component uses classnames and CSS for styling. If you run into any issues, take a look at the source code at [https://github.com/johnwdunn20/react-jsondiff](https://github.com/johnwdunn20/react-jsondiff)