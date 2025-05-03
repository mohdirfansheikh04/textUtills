// 3. 
    import logo from './logo.svg';
    import './App.css';


    let name = "Irfan";
    function App() {
    return (
        //Return only one parent element
        //class - className
        //for - htmlFor
        //self closing tag - <img src={logo} alt="logo" />

        //
        <>
        <nav>
            <li>Home</li>
            <li>About</li>
            <li>Contacts</li>
            <div className="container">
            <p>
                <h1>Hello {name}</h1>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias recusandae cumque minus qui natus quas, aspernatur quos ex, fuga accusamus molestias quibusdam sint velit, doloribus ipsum provident. Illum recusandae autem alias ullam earum, eveniet ducimus dolorem porro unde officia exercitationem fuga sed assumenda magnam voluptatem.
            </p>
            </div>
        </nav>
        </>
    );
    }

    export default App;

// 4. Project 1: Setup + Adding Bootstrap to React
    //Single page application
        // loads once then js controlled by js
    //Multipage applications
        //loads multiple pages html css js files

//5.

//6. Understanding Props and PropTypes in React
    //Props - properties - used to pass data from one component to another component
    //PropTypes - used to validate the props passed to the component
    //DefaultProps - used to set default values for the props passed to the component

    //module1.mjs
        //const name = "Irfan";
        //const age = 22;
        //const isStudent = true;
        //export default name;

        //export { age, isStudent };

    //module2.mjs
        //import d from './module1.mjs';
        //console.log(d); //Irfan
        
        //import as, { age, isStudent } from './module1.mjs';

//7. Understanding State & Handling Events in React

//8. Adding more Logic to TextUtils

//16. React Router- not taking nav bar to the server