// import React, { useState } from 'react'
// import Logo from "../assets/LOGO.png"
// import emailjs from '@emailjs/browser'
// import { useNavigate } from 'react-router-dom';

// const EmailForm = () => {
//     const navigate = useNavigate();
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = (e) => {
//         console.log("test")
//         e.preventDefault();

//         const serviceId = 'service_4gz62og';
//         const templateId = 'template_0hldrv6';
//         const publicKey = 'QSFVxt9xdm1WJP5Xl';

        
//         const templateParams = {
//             from_name: name,
//             from_email: email,
//             to_name: 'Naveen',
//             message: message,
//         };

//         emailjs.send(serviceId, templateId, templateParams, publicKey)
//             .then((response) => {
//                 console.log('Email sent successfully!', response);
//                 alert("Email Sent Successfully");
//                 setName('');
//                 setEmail('');
//                 setMessage('');
//                 navigate('/')

//             })
//             .catch((error) => {
//                 console.error('Error sending email:', error);
//                 alert("Error in Sending Email");
//             });

//     }
//     return (
//         <div className=' flex justify-center   border border-gray-200'>
//             <div className="w-full max-w-xl">
//                 <form onSubmit={handleSubmit}>
//                     <div className="bg-white shadow-md rounded px-8 pt-2 pb-6 mb-4">
//                         <div className='flex justify-center '>
//                             <img src={Logo} alt="8waysShipping" className=' h-[8rem] ' onClick={()=>navigate('/')}></img></div>
//                         <div className='text-center'>
//                             <p className='text-xl   text-gray-900 font-bold '>8 Ways Shipping & Logistics</p></div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700 text-sm font-bold  mb-2" >
//                                 Name
//                             </label>
//                             <input className="  shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight   focus:outline-none focus:shadow-outline"
//                                 id="name"
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-4">
//                             <label className="block text-gray-700  font-bold text-sm mb-2">
//                                 Email
//                             </label>
//                             <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="email"
//                                 type="email"
//                                 placeholder="Enter your Email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                             />
//                         </div>
//                         <div className="mb-2">
//                             <label className="block text-gray-700 text-sm font-bold mb-2">
//                                 Your Message
//                             </label>
//                             <textarea className="shadow appearance-none border rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                 id="textbox"
//                                 type="text"
//                                 placeholder='Enter your Query'
//                                 rows={4}
//                                 value={message}
//                                 onChange={(e) => setMessage(e.target.value)}
//                             />
//                         </div>
//                         <div className="flex items-center justify-center my-3">
//                             <button className="bg-secondary-main text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
//                                 type="submit">
//                                 Submit
//                             </button>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>

//     )
// }

// export default EmailForm;




import React, { useState } from 'react'
import Logo from "../assets/LOGO.png"
import emailjs from '@emailjs/browser'
import { useNavigate } from 'react-router-dom';

const EmailForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    const isFormValid = () => {
        return name.trim() !== '' && email.trim() !== '' && message.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isFormValid()) {
            alert("Please fill out all fields.");
            return;
        }

        const serviceId = 'service_4gz62og';
        const templateId = 'template_0hldrv6';
        const publicKey = 'QSFVxt9xdm1WJP5Xl';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Naveen',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setFormSubmitted(true);
                alert("Email Sent Successfully");
                setName('');
                setEmail('');
                setMessage('');
                navigate('/')
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                alert("Error in Sending Email");
            });
    };

    return (
        <div className=' flex justify-center border border-gray-200'>
            <div className="w-full max-w-xl">
                <form onSubmit={handleSubmit}>
                    <div className="bg-white shadow-md rounded px-8 pt-2 pb-6 mb-4">
                        <div className='flex justify-center'>
                            <img src={Logo} alt="8waysShipping" className='h-[8rem]' onClick={() => navigate('/')} />
                        </div>
                        <div className='text-center'>
                            <p className='text-xl text-gray-900 font-bold'>Infin Eightways Shipping & Logistics</p>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold text-sm mb-2">
                                Email
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Enter your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Your Message
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="textbox"
                                placeholder='Enter your Query'
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <div className="flex items-center justify-center my-3">
                            <button className="bg-secondary-main text-white font-bold py-2 px-16 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                disabled={!isFormValid()}>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmailForm;

