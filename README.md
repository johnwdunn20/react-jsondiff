# react-jsondiff
Display json diffs in react. Based on [jsondiffpatch](https://github.com/benjamine/jsondiffpatch) and originally customized for [React Query Rewind](https://reactqueryrewind.com/)

Now as it's own module, this component can easily be installed into any react app:

Import the component: `import JsonDiff from 'jsondiff-react';`

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
![example where isHidden is false](images/example-hiddenFalse.png)

With `isHidden` = true:
![example where isHidden is true](images/example-hiddenTrue.png)
