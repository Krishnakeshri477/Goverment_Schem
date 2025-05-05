import React from 'react';
import Navbar from '../Navbar/Navbar';

function Home() {
    const items = ["Women & child welfare schemes","Education & Youth development","Agriculture & Framer wilfare","Social Security & Financial Assistance","Healthere & insurance","Housing Employment & Infrast"]
    return (
        <div>
            <Navbar/>
            <div>

            </div>
        </div>
    )
}

export default Home





// import React from 'react';

// const ComponentList = () => {
//   // Array of data for your components
//   const items = [
//     { id: 1, title: 'First Component', color: 'bg-blue-500' },
//     { id: 2, title: 'Second Component', color: 'bg-green-500' },
//     { id: 3, title: 'Third Component', color: 'bg-red-500' },
//   ];

//   return (
//     <div className="p-4">
//       {items.map((item, index) => (
//         <div 
//           key={item.id} 
//           className={${item.color} p-4 mb-4 rounded-lg text-white}
//         >
//           <h2 className="text-xl font-bold">{item.title}</h2>
//           <p>Index: {index}, ID: {item.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ComponentList;