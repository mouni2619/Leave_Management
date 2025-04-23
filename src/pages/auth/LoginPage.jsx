// import { useSelector } from 'react-redux';
// import { CircleX } from 'lucide-react';

// // Components
// import Logo from '../../components/logo/Logo';

// // Images
// import URL_IMG_LOGO from '../../assets/images/brand/admavin-short-logo.png';

// // Page Components
// import LoginForm from './LoginForm';

// // Page Components
// // ----------------------------------------------------------------------------

// function LoginError() {
//   // TODO: If needed please use the loginError to display customized error messages..
//   return (
//     <div className="card bg-secondary-subtle">
//       <div className="card-body text-danger d-flex justify-content-center align-items-center gap-1">
//         <CircleX size={16} />
//         Username/Password is incorrect
//       </div>
//     </div>
//   );
// }

// /**
//  * Login Page
//  */
// export default function LoginPage() {
//   // Selector
//   const loginError = useSelector((state) => state.auth.loginError);

//   return (
//     <div className="container my-5 pt-sm-5">
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6 col-xl-5">
//           <div className="card shadow mt-5">
//             <div className="card-body position-relative">
//               {/* Logo Component */}
//               <div className="d-flex justify-content-center">
//                 <Logo
//                   redirect={false}
//                   containerClassName="image"
//                   imageHeight={140}
//                   imageURL={URL_IMG_LOGO}
//                 />
//               </div>

//               <div className="p-2 pt-5">
//                 <LoginForm />
//                 {loginError && <LoginError error={loginError} />}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
