declare module 'vue-select' {
  export interface Option {
    value: string;
    label: string;
  }

  export interface Props {
    // Define props like 'v-model', 'open', etc. with their types
  }

  export default class VSelect {
    props: Props;
    // Define methods like 'open()', 'close()', etc.
    // Define events like 'change', etc.
  }
}
