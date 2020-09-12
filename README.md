### React native starter boilerplate

**Techs**
- `redux/redux-thunk` for state management and async actions
- `@react-native-community/eslint-config` for code styling. Check the `.eslintrc.js` for rule definition. 
- simple implementation of navigation stack for routing
- `prop-types` for property validation
- `axios` to manage the api and a wrapper to default loading and error states.
- `expo-barcode-scanner`

**Some Notes**
In order to implement new reducers `./store/index.js` and follow the pattern. The request helper located in `utils` should allow you to manage your api in a more simplified way.

You can use either `useSelector` or `mapStateToProps` with connect in order to inject redux store to the screen. I decided to use mapStateToProps with `connect` to state and actions as I feel they are kept in different concerns as if we used `useSelector` or `dispatch` for actions, as all the code is placed inside the components. Please check `screens/Projects/Projects.js` for an example 

Screens are defined on the `App.json`. The screens are meant to contain the logic of the app and the components should be representational.

**commands**
- `yarn` install dependencies.
- `yarn start` starts app on the browser.
- `yarn ios` starts app and open it on the ios emulator.
- `yarn android` starts app and open it on the android emulator.
- `yarn lint` apply linter.
- `yarn lint --fix ` fix lint issues.