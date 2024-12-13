# useMount

The `useMount` hook is used to mount a component after the initial render.

## Usage

```tsx
import { useMount } from 'react-hooks';

function App() {
    useMount(() => {
        console.log('Hello world!');
    });

    return <div>Hello world!</div>;
}
```

## Type Parameters

| Name | Type | Description |
| --- | --- | --- |
| T | `any` | The type of the component to mount. |

## Parameters

| Name | Type | Description |
| --- | --- | --- |
| callback | `T` | The callback function to execute after the initial render. |

## Returns

`void`

## Examples

### Basic Usage

```tsx
import { useMount } from 'react-hooks';

function App() {
    useMount(() => {
        console.log('Hello world!');
    });

    return <div>Hello world!</div>;
}
```

### TypeScript

```tsx
import { useMount } from 'react-hooks';

function App() {
    useMount(() => {
        console.log('Hello world!');
    });

    return <div>Hello world!</div>;
}
```
