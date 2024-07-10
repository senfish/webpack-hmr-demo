import { message } from './message';

export default function printMe() {
  alert(message);
}

// if (module.hot) {
//   module.hot.accept('./message.js', () => {
//     console.log('Accepting the updated print module!');
//   });
// }

