export declare namespace General {
  interface Benefits {
    id: number;
    title: string;
    desc: string;
    icon: string;
  }

  interface Quote {
    full_name: string;
    phone: string;
    email: string;
    text: string;
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
