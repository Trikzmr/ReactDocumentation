// chapters.js

const chapters = [
  {
    id: "creating-components",
    title: "Creating Components",
    useCase: [
      "Creating buttons, forms, headers, footers, cards, etc., as reusable UI blocks.",
      "Improving code reusability and readability."
    ],
    description: "Components are the foundation of a React application. They let you break the UI into independent, reusable pieces that can be thought of as custom HTML elements.",
    code: [
      {
        step: "Define a functional component",
        snippet: `function Welcome() {
  return <h1>Hello, React!</h1>;
}`
      },
      {
        step: "Use the component inside App",
        snippet: `<Welcome />`
      }
    ]
  },
  {
    id: "using-variables",
    title: "Using Variables to Render Content",
    useCase: [
      "Showing usernames, dynamic titles, prices, etc.",
      "Rendering dynamic values in JSX."
    ],
    description: "Variables help render dynamic data in JSX. You use curly braces {} to embed them inside JSX.",
    code: [
      {
        step: "Define a variable and use it in JSX",
        snippet: `const name = "Debabrato";
return <h2>Welcome, {name}!</h2>;`
      }
    ]
  },
  {
    id: "props",
    title: "Props",
    useCase: [
      "Reusing components with different data.",
      "Passing information from parent to child components."
    ],
    description: "Props allow you to pass data from a parent component to a child component. They are read-only and make components reusable.",
    code: [
      {
        step: "Call component with a prop",
        snippet: `<Greeting name=\"Alice\" />`
      },
      {
        step: "Receive prop in component",
        snippet: `function Greeting(props) {
  return <h3>Hello, {props.name}</h3>;
}`
      }
    ]
  },
  {
    id: "usestate",
    title: "useState",
    useCase: [
      "Form inputs, toggling visibility, counters, etc.",
      "Managing dynamic data inside components."
    ],
    description: "The useState hook lets you manage state in functional components.",
    code: [
      {
        step: "Initialize state",
        snippet: `const [count, setCount] = useState(0);`
      },
      {
        step: "Update state on button click",
        snippet: `<button onClick={() => setCount(count + 1)}>{count}</button>`
      }
    ]
  },
  {
    id: "useeffect",
    title: "useEffect",
    useCase: [
      "API calls, DOM updates, timers, cleanup operations."
    ],
    description: "useEffect handles side effects such as fetching data, event listeners, etc.",
    code: [
      {
        step: "Log message on mount",
        snippet: `useEffect(() => {
  console.log(\"Component mounted\");
}, []);`
      }
    ]
  },
  {
    id: "form-handling",
    title: "Form Handling",
    useCase: [
      "Login forms, registration, search bars, etc.",
      "Handling user inputs and form submissions."
    ],
    description: "Form handling in React involves capturing user input and updating the component's state accordingly.",
    code: [
      {
        step: "Capture user input",
        snippet: `const [email, setEmail] = useState(\"\");`
      },
      {
        step: "Bind input to state",
        snippet: `<input type=\"email\" value={email} onChange={e => setEmail(e.target.value)} />`
      }
    ]
  },

 {
  id: "api-fetching",
  title: "API Fetching",
  useCase: [
    "Getting user profiles, news, product listings, etc.",
    "Dynamically loading external data."
  ],
  description: "Fetching data from APIs in React using useEffect, fetch, and useState—built step-by-step with proper structure and error handling.",
  code: [
    {
      step: "1. Initialize the state to store fetched data",
      snippet: `const [products, setProducts] = useState([]);`
    },
    {
      step: "2. Use useEffect to call onload function when the component mounts",
      snippet: `const [products, setProducts] = useState([]);

useEffect(onload, []);`
    },
    {
      step: "3. Create a separate function to trigger the API fetch logic",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);`
    },
    {
      step: "4. Create the asynchronous API fetching function",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  // logic to fetch data will go here
}`
    },
    {
      step: "5. Save the API endpoint in a variable",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  let api = "https://dummyjson.com/products";
}`
    },
    {
      step: "6. Create a container for API configuration (method, headers, etc.)",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  let api = "https://dummyjson.com/products";
  
  let container = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    // For POST:
    // body: JSON.stringify({ key: "value" })
    // For cookies/tokens:
    // credentials: "include"
  };
}`
    },
    {
      step: "7. Fetch the API using fetch and store the result in response",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  let api = "https://dummyjson.com/products";

  let container = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let response = await fetch(api, container);
}`
    },
    {
      step: "8. Convert the response to JSON format using await",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  let api = "https://dummyjson.com/products";

  let container = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let response = await fetch(api, container);
  let data = await response.json();
}`
    },
    {
      step: "9. Use the set function from useState to update state with data",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  let api = "https://dummyjson.com/products";

  let container = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };

  let response = await fetch(api, container);
  let data = await response.json();
  setProducts(data.products);
}`
    },
    {
      step: "10. Wrap everything in a try-catch block for error handling",
      snippet: `const [products, setProducts] = useState([]);

function onload() {
  apiacall();
}

useEffect(onload, []);

async function apiacall() {
  try {
    let api = "https://dummyjson.com/products";

    let container = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    let response = await fetch(api, container);
    let data = await response.json();
    setProducts(data.products);
  } catch (error) {
    console.error("API call failed:", error);
  }
}`
    },
    {
      step: "11. Final complete implementation of API fetching in React",
      snippet: `import React, { useEffect, useState } from 'react';


  const [products, setProducts] = useState([]);

  function onload() {
    apiacall();
  }

  useEffect(onload, []);

  async function apiacall() {
    try {
      let api = "https://dummyjson.com/products";

      let container = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };

      let response = await fetch(api, container);
      let data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("API call failed:", error);
    }
  }
`
    }
  ]
},
{
  id: "array-mapping",
  title: "API Fetching and Array Mapping",
  useCase: [
    "Fetching and displaying lists like cards, users, products.",
    "Looping through API response data to render UI components."
  ],
  description: "Array mapping allows dynamic rendering of repeated content in JSX. Often used in combination with API data fetching.",
  code: [
    {
      step: "1. Initialize state to store products",
      snippet: `const [products, setProducts] = useState([]);`
    },
    {
      step: "2. Create an async function to call the API",
      snippet: `async function apiacall() {
  try {
    let api = "https://dummyjson.com/products";
    let container = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };
    let response = await fetch(api, container);
    let data = await response.json();
    setProducts(data.products);
  } catch (error) {
    console.error(error);
  }
}`
    },
    {
      step: "3. Create an onload function that calls the API",
      snippet: `function onload() {
  apiacall();
}`
    },
    {
      step: "4. Use useEffect to trigger the API call on component mount",
      snippet: `useEffect(onload, []);`
    },
    {
      step: "5. Define a render function to render a custom component with each product",
      snippet: `function render(product) {
  return (
    <>
      <Card data={product} />
    </>
  );
}`
    },
    {
      step: "6. Use .map() to render all products inside the UI",
      snippet: `<div className="bg-[#1a1a1a] flex overflow-x-scroll scrollbar-hide gap-4 p-4">
  {products.map(render)}
</div>`
    },
    {
      step: "7. Full example combining useState, useEffect, API fetch, and mapping",
      snippet: `import React, { useEffect, useState } from 'react';
import Card from './Card';

const CardSection = () => {
  const [products, setProducts] = useState([]);

  function render(product) {
    return (
      <>
        <Card data={product} />
      </>
    );
  }

  async function apiacall() {
    try {
      let api = "https://dummyjson.com/products";
      let container = {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      };
      let response = await fetch(api, container);
      let data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error(error);
    }
  }

  function onload() {
    apiacall();
  }

  useEffect(onload, []);

  return (
    <div className="bg-[#1a1a1a] flex overflow-x-scroll scrollbar-hide gap-4 p-4">
      {products.map(render)}
    </div>
  );
};

export default CardSection;`
    }
  ]
},
  {
    id: "routing",
    title: "Routing",
    useCase: [
      "Multi-page layout: Home, About, Contact, etc.",
      "Navigate between views using URL."
    ],
    description: "React Router lets you navigate between different pages/components. You can use Link to navigate and useParams to access URL parameters.",
    code: [
      {
        step: "Define routes",
        snippet: `<Routes>
  <Route path=\"/\" element={<Home />} />
  <Route path=\"/about\" element={<About />} />
  <Route path=\"/chapter/:id\" element={<Chapter />} />
</Routes>`
      },
      {
        step: "Link to route",
        snippet: `<Link to=\"/about\">Go to About</Link>`
      },
      {
        step: "Get route param",
        snippet: `const { id } = useParams();`
      }
    ]
  },
  {
    id: "file-structure",
    title: "File Structure",
    useCase: [
      "Keeping code modular and understandable.",
      "Organizing project for better scalability."
    ],
    description: "Organizing your React project makes it easier to scale and maintain. Separate files for components, pages, data, and utilities.",
    code: [
      {
        step: "Recommended folder structure",
        snippet: `src/
├── components/
│   ├── Header.js
│   └── Sidebar.js
├── pages/
│   └── Home.js
├── data/
│   └── chapters.js
└── App.js`
      }
    ]
  }
];

export default chapters;