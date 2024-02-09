import {types} from '../actiontypes';

const inititalState = {
  isLoading: false,
  userAccessKey: {},
  userData: {},
  profileData: {},
  latlong: {},
  allinterests: {},
  insert: {},
  forget: {},
  reset: {},
  verify: {},
  update: {},
  postinterests: {},
  notificationData: {},
  allArticles: {},
  report: {},
  userarticles: {},
  userinterests: {},
  mydeals: {},
  userImage: {},
};
export const authReducer = (state = inititalState, {type, payload}) => {
  switch (type) {
    // REGISTER
    case types.REGISTER.start:
      return {...state, isLoading: true};
    case types.REGISTER.failed:
      return {...state, isLoading: false};
    case types.REGISTER.success:
      return {...state, isLoading: false, userAccessKey: payload};

    // LOGIN
    case types.LOGIN.start:
      return {...state, isLoading: true};
    case types.LOGIN.failed:
      return {...state, isLoading: false};
    case types.LOGIN.success:
      return {...state, isLoading: false, userAccessKey: payload};
// LOGOUT
      case types.LOGOUT.start:
        return {...state, isLoading: true};
      case types.LOGOUT.failed:
        return {...state, isLoading: false};
      case types.LOGOUT.success:
        return {...state, isLoading: false, userAccessKey: payload};



      // DELETE ACOUNT
      case types.DELETE.start:
        return {...state, isLoading: true};
      case types.DELETE.failed:
        return {...state, isLoading: false};
      case types.DELETE.success:
        return {...state, isLoading: false, userAccessKey: payload};

    // EDIT IMAGE
    case types.EDIT_IMAGE.start:
      return {...state, isLoading: true};
    case types.EDIT_IMAGE.failed:
      return {...state, isLoading: false};
    case types.EDIT_IMAGE.success:
      return {...state, isLoading: false, userAccessKey: payload};

    // EDIT USERNAME
    case types.EDIT_USERNAME.start:
      return {...state, isLoading: true};
    case types.EDIT_USERNAME.failed:
      return {...state, isLoading: false};
    case types.EDIT_USERNAME.success:
      return {...state, isLoading: false, userAccessKey: payload};

    //   FORGET PASSWORD
    case types.FORGET_PASSWORD.start:
      return {...state, isLoading: true};
    case types.FORGET_PASSWORD.failed:
      return {...state, isLoading: false};
    case types.FORGET_PASSWORD.success:
      return {...state, isLoading: false, forget: payload};
    // VERFICATION CODE
    case types.VERIFICATION_CODE.start:
      return {...state, isLoading: true};
    case types.VERIFICATION_CODE.failed:
      return {...state, isLoading: false};
    case types.VERIFICATION_CODE.success:
      return {...state, isLoading: false, verify: payload};
    // RESET PASSWORD
    case types.CHANGE_PASSWORD.start:
      return {...state, isLoading: true};
    case types.CHANGE_PASSWORD.failed:
      return {...state, isLoading: false};
    case types.CHANGE_PASSWORD.success:
      return {...state, isLoading: false, reset: payload};
    // UPDATE PASS WORD
    case types.UPDATE_PASSWORD.start:
      return {...state, isLoading: true};
    case types.UPDATE_PASSWORD.failed:
      return {...state, isLoading: false};
    case types.UPDATE_PASSWORD.success:
      return {...state, isLoading: false, update: payload};
    //   GET ARTICLES POST
    case types.GET_ALL_INTERESTS.start:
      return {...state, isLoading: true};
    case types.GET_ALL_INTERESTS.failed:
      return {...state, isLoading: false};
    case types.GET_ALL_INTERESTS.success:
      return {...state, isLoading: false, allinterests: payload};
    // INSERT ARTICLES
    case types.INSERT_ARTICLES.start:
      return {...state, isLoading: true};
    case types.INSERT_ARTICLES.failed:
      return {...state, isLoading: false};
    case types.INSERT_ARTICLES.success:
      return {...state, isLoading: false, insert: payload};
    // ALL ARTICLES
    case types.GET_ALL_ARTICLES.start:
      return {...state, isLoading: true};
    case types.GET_ALL_ARTICLES.failed:
      return {...state, isLoading: false};
    case types.GET_ALL_ARTICLES.success:
      return {...state, isLoading: false, allArticles: payload};
    // POST INTERESTS
    case types.POST_INTERESTS.start:
      return {...state, isLoading: true};
    case types.POST_INTERESTS.failed:
      return {...state, isLoading: false};
    case types.POST_INTERESTS.success:
      return {...state, isLoading: false, postinterests: payload};

    // UPDATE INTERESTS
    case types.UPDATE_INTERESTS.start:
      return {...state, isLoading: true};
    case types.UPDATE_INTERESTS.failed:
      return {...state, isLoading: false};
    case types.UPDATE_INTERESTS.success:
      return {...state, isLoading: false, postinterests: payload};

    // POST NOTIFICATION TYPE
    case types.NOTIFICATION.start:
      return {...state, isLoading: true};
    case types.NOTIFICATION.failed:
      return {...state, isLoading: false};
    case types.NOTIFICATION.success:
      return {...state, isLoading: false, notificationData: payload};
    // REPORT
    case types.REPORT.start:
      return {...state, isLoading: true};
    case types.REPORT.failed:
      return {...state, isLoading: false};
    case types.REPORT.success:
      return {...state, isLoading: false, report: payload};

    case types.USER_ARTICLES.start:
      return {...state, isLoading: true};
    case types.USER_ARTICLES.failed:
      return {...state, isLoading: false};
    case types.USER_ARTICLES.success:
      return {...state, isLoading: false, userarticles: payload};
    // USER INERESTS
    case types.USER_INTERESTS.start:
      return {...state, isLoading: true};
    case types.USER_INTERESTS.failed:
      return {...state, isLoading: false};
    case types.USER_INTERESTS.success:
      return {...state, isLoading: false, userinterests: payload};
    // USER DEALS
    case types.MY_DEALS.start:
      return {...state, isLoading: true};
    case types.MY_DEALS.failed:
      return {...state, isLoading: false};
    case types.MY_DEALS.success:
      return {...state, isLoading: false, mydeals: payload};
// LOGOUT
      case types.LOGOUT.start:
        return {...state, isLoading: true};
      case types.LOGOUT.failed:
        return {...state, isLoading: false};
      case types.LOGOUT.success:
        console.log('payload data--- logout--------',payload);
        return {...state, isLoading: false, userAccessKey: payload};
    default:
      return state;
  }
};
