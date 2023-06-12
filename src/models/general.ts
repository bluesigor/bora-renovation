export declare namespace General {
  interface Benefits {
    id: number;
    title: string;
    desc: string;
    icon: string;
  }

  interface Quote {
    name: string;
    number: string;
    email: string;
    textarea: string;
  }

  interface Window {
    email: any;
  }

  interface Review {
    id: number;
    text: string;
    name: string;
  }
  interface Image {
    id: number;
    src: string;
    index?: number;
  }
}
