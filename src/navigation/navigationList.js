import SplashScreen from '../screens/static/splash';
import Signin from '../screens/auth/signin';
import ResetPassword from '../screens/auth/reset';
import ForgetPassword from '../screens/auth/forgetpassword';
import Register from '../screens/auth/register';
import Verification from '../screens/auth/verfication';
import Patientsetting from '../screens/main/setting';
import PatientAppointments from '../screens/main/orders';
import BottomTab from './BottomTab';
import PatientNotification from '../screens/main/notification';
import ManagerSignin from '../screens/auth/managersignin';
import CreateOrder from '../screens/main/CreateOrder';
import Generator from '../screens/main/home/Generator';
import PDFViewer from '../screens/main/home/Pdf';
import MapScreen from '../screens/main/home/map';
export const stackNavigationList = [






  {name: 'splash', component: SplashScreen},
  {name: 'signin', component: Signin},
  {name: 'reset', component: ResetPassword},
  {name: 'managersignin', component: ManagerSignin},
  {name: 'generator', component: Generator},
  {name: 'pdf', component: PDFViewer},

  {name: 'forget', component: ForgetPassword},
  {name: 'register', component: Register},
  {name: 'verification', component: Verification},
  {name: 'patienthome', component: BottomTab},
  {name: 'patientappointments', component: PatientAppointments},
  {name: 'patientsetting', component: Patientsetting},

  {name: 'patientnotification', component: PatientNotification},
  {name: 'CreateOrder', component: CreateOrder},

  {name: 'map', component: MapScreen},

];
