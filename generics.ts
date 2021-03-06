/** Generics
 * Definido um tipo generico que é difinido na instanciação.
 * Podem ser letras como:
 * S => State
 * T => Type
 * K => Key
 * V => Value
 * E => Element
 */

type numOrStr = number | string

function useState<S extends numOrStr = string >() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState<number>();

// newState.setState('456');
// console.log(newState.getState());

newState.setState(123);
console.log(newState.getState());
