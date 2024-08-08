import { useState } from 'react'
import React, { useContext } from 'react';
import { ThemeContext } from '../component/ThemeContext'; 

import 'react-countup';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Count = () => {
const [counterOn, setCounterOn] = useState(false);

const { isDarkMode } = useContext(ThemeContext);




return (

<div className={`count-container shadow-lg rounded-xl my-3 pt-2 ${isDarkMode ? 'dark-mode-card' : 'light-mode-card'}`}>
<ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} ></ScrollTrigger>

<div className='text-center mr-1'>
<h3 className={`text-lg font-medium pt-8 pb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Achivements</h3>

</div>
<div className='flex justify-evenly p-8'>
<div className='m-auto' >

<h2 className=''>
<span className='mt-5'> {counterOn && <CountUp start={0} end={20} duration={3} delay={0} />}
+</span>

</h2><h2 className='pr-1 ' ><span className='text-teal-600'>UI</span> </h2>
</div>

<div className='m-auto' >

<h2 className='pl-1'>

<span className='pl-[50px]'> {counterOn && <CountUp start={110} end={4} duration={2} delay={0} />}
+</span><br></br><span className='text-teal-600'>Major Projects</span> 

</h2>
</div>


<div className='m-auto' >

<h2>
<span className='pl-2'> {counterOn && <CountUp start={0} end={98} duration={4} delay={0} />}
+</span><br></br><span className='text-teal-600'>Clients</span> 

</h2>
</div>


</div>

</div>
);
}

export default Count;