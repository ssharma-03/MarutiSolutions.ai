// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { motion } from 'framer-motion';

// export default function PrivacyPolicy() {
//   const introRef = useScrollAnimation();
//   const collectionRef = useScrollAnimation();
//   const useRef = useScrollAnimation();
//   const sharingRef = useScrollAnimation();
//   const securityRef = useScrollAnimation();
//   const cookiesRef = useScrollAnimation();
//   const rightsRef = useScrollAnimation();
//   const contactRef = useScrollAnimation();

//   return (
//     <div className="min-h-screen pt-20">
//       {/* Hero Section */}
//       <section className="section bg-background-light/30">
//         <div className="container">
//           <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
//             Privacy Policy
//           </h1>
//           <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
//             How we collect, use, and protect your information
//           </p>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="section bg-background-dark/50">
//         <div className="container">
//           <div ref={introRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Introduction</h2>
//             <div className="card p-8">
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 At Maruti Solutions, we respect your privacy and are committed to protecting your personal data. 
//                 This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
//                 you visit our website or use our services.
//               </p>
//               <p className="text-gray-300 leading-relaxed">
//                 We use your data to provide and improve our services. By using our services, you agree to the 
//                 collection and use of information in accordance with this policy. This Privacy Policy applies 
//                 to all information collected through our website, services, and any related communications.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Information Collection */}
//       <section className="section bg-background-light/30">
//         <div className="container">
//           <div ref={collectionRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Information We Collect</h2>
//             <div className="card p-8">
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Personal Data</h3>
//                   <p className="text-gray-300 leading-relaxed mb-3">
//                     While using our services, we may ask you to provide us with certain personally identifiable 
//                     information that can be used to contact or identify you. This may include, but is not limited to:
//                   </p>
//                   <ul className="list-disc pl-6 text-gray-300 space-y-2">
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.1 }}
//                     >
//                       Name and contact information (email address, phone number, etc.)
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                     >
//                       Company information
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.3 }}
//                     >
//                       Billing and payment information
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.4 }}
//                     >
//                       Information provided in forms, surveys, or other interactive features
//                     </motion.li>
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Usage Data</h3>
//                   <p className="text-gray-300 leading-relaxed mb-3">
//                     We may also collect information about how our services are accessed and used. This usage data 
//                     may include:
//                   </p>
//                   <ul className="list-disc pl-6 text-gray-300 space-y-2">
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.1 }}
//                     >
//                       Your computer's Internet Protocol (IP) address
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                     >
//                       Browser type and version
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.3 }}
//                     >
//                       Pages of our website that you visit
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.4 }}
//                     >
//                       Time and date of your visit
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.5 }}
//                     >
//                       Time spent on those pages
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.6 }}
//                     >
//                       Other diagnostic data
//                     </motion.li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Use of Data */}
//       <section className="section bg-background-dark/50">
//         <div className="container">
//           <div ref={useRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">How We Use Your Information</h2>
//             <div className="card p-8">
//               <p className="text-gray-300 leading-relaxed mb-4">
//                 Maruti Solutions uses the collected data for various purposes:
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     title: "Provide and maintain our services",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Notify you about changes to our services",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Allow you to participate in interactive features",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Provide customer support",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Gather analysis to improve our services",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Monitor the usage of our services",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Detect, prevent, and address technical issues",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Process payments and fulfill contracts",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                       </svg>
//                     ),
//                   },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     className="flex items-start space-x-4"
//                   >
//                     <div className="flex-shrink-0">{item.icon}</div>
//                     <p className="text-gray-300">{item.title}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Data Sharing */}
//       <section className="section bg-background-light/30">
//         <div className="container">
//           <div ref={sharingRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Disclosure of Data</h2>
//             <div className="card p-8">
//               <p className="text-gray-300 leading-relaxed mb-6">
//                 Maruti Solutions may disclose your personal data in the following situations:
//               </p>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Business Transaction</h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     If Maruti Solutions is involved in a merger, acquisition, or asset sale, your personal data 
//                     may be transferred. We will provide notice before your personal data is transferred and becomes 
//                     subject to a different Privacy Policy.
//                   </p>
//                 </div>
                
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Service Providers</h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     We may employ third-party companies and individuals to facilitate our services, provide services 
//                     on our behalf, perform service-related tasks, or assist us in analyzing how our services are used. 
//                     These third parties have access to your personal data only to perform these tasks on our behalf 
//                     and are obligated not to disclose or use it for any other purpose.
//                   </p>
//                 </div>
                
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Legal Requirements</h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     Maruti Solutions may disclose your personal data in the good faith belief that such action is 
//                     necessary to:
//                   </p>
//                   <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-3">
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.1 }}
//                     >
//                       Comply with a legal obligation
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                     >
//                       Protect and defend the rights or property of Maruti Solutions
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.3 }}
//                     >
//                       Prevent or investigate possible wrongdoing in connection with our services
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.4 }}
//                     >
//                       Protect the personal safety of users of our services or the public
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.5 }}
//                     >
//                       Protect against legal liability
//                     </motion.li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Security */}
//       <section className="section bg-background-dark/50">
//         <div className="container">
//           <div ref={securityRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Data Security</h2>
//             <div className="card p-8">
//               <p className="text-gray-300 leading-relaxed mb-6">
//                 The security of your data is important to us, but remember that no method of transmission over 
//                 the Internet or method of electronic storage is 100% secure. While we strive to use commercially 
//                 acceptable means to protect your personal data, we cannot guarantee its absolute security.
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                 {[
//                   {
//                     title: "Encryption",
//                     description: "We use encryption to protect sensitive information transmitted online",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Regular Audits",
//                     description: "We conduct regular security audits and vulnerability assessments",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Access Controls",
//                     description: "We implement strict access controls and authentication procedures",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     ),
//                   },
//                 ].map((item, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     className="card p-6 flex flex-col items-center text-center h-full"
//                   >
//                     <div className="mb-4">{item.icon}</div>
//                     <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
//                     <p className="text-gray-300">{item.description}</p>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Cookies */}
//       <section className="section bg-background-light/30">
//         <div className="container">
//           <div ref={cookiesRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Cookies and Tracking</h2>
//             <div className="card p-8">
//               <p className="text-gray-300 leading-relaxed mb-6">
//                 We use cookies and similar tracking technologies to track activity on our services and hold certain 
//                 information. Cookies are files with a small amount of data which may include an anonymous unique 
//                 identifier.
//               </p>
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Types of Cookies We Use</h3>
//                   <ul className="list-disc pl-6 text-gray-300 space-y-2">
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.1 }}
//                     >
//                       <strong>Essential Cookies:</strong> Necessary for the website to function properly
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.2 }}
//                     >
//                       <strong>Functionality Cookies:</strong> Allow us to remember your preferences and settings
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.3 }}
//                     >
//                       <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
//                     </motion.li>
//                     <motion.li
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: 0.4 }}
//                     >
//                       <strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements
//                     </motion.li>
//                   </ul>
//                 </div>
                
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3 text-white">Your Cookie Choices</h3>
//                   <p className="text-gray-300 leading-relaxed">
//                     You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
//                     However, if you do not accept cookies, you may not be able to use some portions of our services. 
//                     You can learn more about how to manage cookies in your browser at 
//                     <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">www.allaboutcookies.org</a>.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Your Rights */}
//       <section className="section bg-background-dark/50">
//         <div className="container">
//           <div ref={rightsRef} className="fade-in">
//             <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Your Data Protection Rights</h2>
//             <div className="card p-8">
//               <p className="text-gray-300 leading-relaxed mb-6">
//                 Depending on your location, you may have certain rights regarding your personal data. These may include:
//               </p>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {[
//                   {
//                     title: "Right to Access",
//                     description: "The right to request copies of your personal data",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Right to Rectification",
//                     description: "The right to request that we correct inaccurate data",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                       </svg>
//                     ),
//                   },
//                   {
//                     title: "Right to Erasure",
//                     description: "The right to request that we delete your personal data",
//                     icon: (
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
//                       </svg>
//                     ),


import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const introRef = useScrollAnimation();
  const collectionRef = useScrollAnimation();
  const useRef = useScrollAnimation();
  const sharingRef = useScrollAnimation();
  const securityRef = useScrollAnimation();
  const cookiesRef = useScrollAnimation();
  const rightsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section bg-background-light/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient-animate">
            Privacy Policy
          </h1>
          <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
            How we collect, use, and protect your information
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={introRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Introduction</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                At Maruti Solutions, we respect your privacy and are committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                you visit our website or use our services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We use your data to provide and improve our services. By using our services, you agree to the
                collection and use of information in accordance with this policy. This Privacy Policy applies
                to all information collected through our website, services, and any related communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Information Collection */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={collectionRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Information We Collect</h2>
            <div className="card p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Personal Data</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    While using our services, we may ask you to provide us with certain personally identifiable
                    information that can be used to contact or identify you. This may include, but is not limited to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Name and contact information (email address, phone number, etc.)
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Company information
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      Billing and payment information
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      Information provided in forms, surveys, or other interactive features
                    </motion.li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Usage Data</h3>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We may also collect information about how our services are accessed and used. This usage data
                    may include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Your computer's Internet Protocol (IP) address
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Browser type and version
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      Pages of our website that you visit
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      Time and date of your visit
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      Time spent on those pages
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      Other diagnostic data
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use of Data */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={useRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">How We Use Your Information</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-4">
                Maruti Solutions uses the collected data for various purposes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Provide and maintain our services",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    ),
                  },
                  {
                    title: "Notify you about changes to our services",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    ),
                  },
                  {
                    title: "Allow you to participate in interactive features",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Provide customer support",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Gather analysis to improve our services",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Monitor the usage of our services",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Detect, prevent, and address technical issues",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Process payments and fulfill contracts",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <p className="text-gray-300">{item.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={sharingRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Disclosure of Data</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Maruti Solutions may disclose your personal data in the following situations:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Business Transaction</h3>
                  <p className="text-gray-300 leading-relaxed">
                    If Maruti Solutions is involved in a merger, acquisition, or asset sale, your personal data
                    may be transferred. We will provide notice before your personal data is transferred and becomes
                    subject to a different Privacy Policy.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Service Providers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may employ third-party companies and individuals to facilitate our services, provide services
                    on our behalf, perform service-related tasks, or assist us in analyzing how our services are used.
                    These third parties have access to your personal data only to perform these tasks on our behalf
                    and are obligated not to disclose or use it for any other purpose.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Legal Requirements</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Maruti Solutions may disclose your personal data in the good faith belief that such action is
                    necessary to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2 mt-3">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      Comply with a legal obligation
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      Protect and defend the rights or property of Maruti Solutions
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      Prevent or investigate possible wrongdoing in connection with our services
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      Protect the personal safety of users of our services or the public
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      Protect against legal liability
                    </motion.li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={securityRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Data Security</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                The security of your data is important to us, but remember that no method of transmission over
                the Internet or method of electronic storage is 100% secure. While we strive to use commercially
                acceptable means to protect your personal data, we cannot guarantee its absolute security.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Encryption",
                    description: "We use encryption to protect sensitive information transmitted online",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Regular Audits",
                    description: "We conduct regular security audits and vulnerability assessments",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Access Controls",
                    description: "We implement strict access controls and authentication procedures",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="card p-6 flex flex-col items-center text-center h-full"
                  >
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={cookiesRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Cookies and Tracking</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                We use cookies and similar tracking technologies to track activity on our services and hold certain
                information. Cookies are files with a small amount of data which may include an anonymous unique
                identifier.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Types of Cookies We Use</h3>
                  <ul className="list-disc pl-6 text-gray-300 space-y-2">
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <strong>Essential Cookies:</strong> Necessary for the website to function properly
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <strong>Functionality Cookies:</strong> Allow us to remember your preferences and settings
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
                    </motion.li>
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    >
                      <strong>Marketing Cookies:</strong> Used to track visitors across websites to display relevant advertisements
                    </motion.li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">Your Cookie Choices</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                    However, if you do not accept cookies, you may not be able to use some portions of our services.
                    You can learn more about how to manage cookies in your browser at
                    <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline ml-1">www.allaboutcookies.org</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="section bg-background-dark/50">
        <div className="container">
          <div ref={rightsRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Your Data Protection Rights</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Depending on your location, you may have certain rights regarding your personal data. These may include:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Right to Access",
                    description: "The right to request copies of your personal data",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Right to Rectification",
                    description: "The right to request that we correct inaccurate data",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Right to Erasure",
                    description: "The right to request that we delete your personal data",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    ),
                  },
                  {
                    title: "Right to Restrict Processing",
                    description: "The right to request that we restrict the processing of your data",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Right to Data Portability",
                    description: "The right to request that we transfer your data to another organization",
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
      <section className="section bg-background-light/30">
        <div className="container">
          <div ref={contactRef} className="fade-in">
            <h2 className="text-3xl font-bold mb-6 text-gradient-animate">Contact Us</h2>
            <div className="card p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  By email: <a href="mailto:privacy@marutisolutions.in" className="text-accent hover:underline">privacy@marutisolutions.in</a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  By visiting this page on our website: <a href="https://www.marutisolutions.com/contact" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.marutisolutions.com/contact</a>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  By phone number: +91-6267525680
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  By mail: Maruti Solutions, 03 Tech Park, Tilak Nagar, Indore, MP 452018, India
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}