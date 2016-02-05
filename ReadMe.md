Move state outside NavigationRootContainer, so you can combine navigator state into your redux reducer.

## NavigationRootContainer modified props
* **navState** navigation state in redux store
* **onNavigation** navigation handler

## NavigationReducer wrapper
```javascript
import { NavigationReducer } from 'navigation-rfc';

const initialState = {routes: ['first page'], index: 0};

export default function navigation(state = initialState, action = {}) {
    return NavigationReducer(state, action);
}
```
