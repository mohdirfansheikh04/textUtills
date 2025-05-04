import React, {useState} from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: 'black'
    // })

    // const [btnText, setbtnText] = useState("Enable Light Mode")

    // const toggleStyle = () => {
    //     if(myStyle.color=='white'){
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //         })
    //         setbtnText("Enable Dark Mode");
    //     }
    //         else{
    //             setmyStyle({
    //                 color: 'white',
    //                 backgroundColor: 'black',
    //                 border: '1px solid white'
    //             })
    //             setbtnText("Enable Light Mode");
    //         }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
    }



  return (
    <>
        <div className='container py-3 my-3' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
                <div className="accordion mt-3" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>About Me</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>I am a BCA student at Integral University,</strong> passionate about web development and constantly learning new technologies to grow in the tech field.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Education</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                <strong>BCA – Integral University (2023–2026)</strong>, Courses completed: MERN Stack, PHP & MySQL, MongoDB, Cybersecurity Fundamentals, etc.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Skills</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
           <strong>Frontend:</strong> HTML, CSS, JavaScript, React <br />
           <strong>Backend:</strong> PHP, Node.js, Express <br />
           <strong> Database:</strong> MongoDB, MySQL <br />
           <strong> Tools:</strong> Git, Bootstrap
                        </div>
            </div>
        </div>
        </div>
    </div>
    
    {/* <button type='button' className='btn btn-dark' onClick={toggleStyle}>{btnText}</button> */}

    
<div class="d-flex justify-content-center my-3">
  <a href="https://www.linkedin.com/in/mohd-irfan-a7129a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" class="btn btn-light border d-flex align-items-center">
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="24" height="24" class="me-2"/>
    Connect on LinkedIn
  </a>
</div>

    </>
  )
}

