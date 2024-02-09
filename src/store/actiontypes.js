const manageActionType = type => {
  return {
    start: type + '_Start',
    success: type + '_Success',
    failed: type + '_Failed',
  };
};

export const types = {
  // +++++++++ AUTH ACTION TYPES +++++++++++++ //
  REGISTER: manageActionType('REGISTER'),
  LOGIN: manageActionType('LOGIN'),
  UPDATE_PROFILE: manageActionType('UPDATE_PROFILE'),
  FORGET_PASSWORD: manageActionType('FORGET_PASSWORD'),
  UPDATE_PASSWORD: manageActionType('UPDATE_PASSWORD'),
  CHANGE_PASSWORD: manageActionType('CHANGE_PASSWORD'),
  VERIFICATION_CODE: manageActionType('VERIFICATION_CODE'),
  VERIFICATION_EMAIL: manageActionType('VERIFICATION_EMAIL'),
  USER_INTERESTS: manageActionType('USER_INTERESTS'),
  LOGOUT: manageActionType('LOGOUT'),
  DELETE:manageActionType('DELETE'),
  // +++++++++ ARTICLES ++++++++++ //
  INSERT_ARTICLES: manageActionType('INSERT_ARTICLES'),
  GET_ALL_ARTICLES: manageActionType('GET_ALL_ARTICLES'),
  USER_ARTICLES: manageActionType('USER_ARTICLES'),
  // ++++++++++INTERESTS ACTION TYPES +++++++++++ //
  GET_ALL_INTERESTS: manageActionType('GET_ALL_INTERESTS'),
  POST_INTERESTS: manageActionType('POST_INTERESTS'),
  UPDATE_INTERESTS: manageActionType('UPDATE_INTERESTS'),
  // +++++++++ NOTIFICATION ACTION TYPES ++++++++ //
  NOTIFICATION: manageActionType('NOTIFICATION'),
  REPORT: manageActionType('REPORT'),

  //Likes
  LIKE_ARTICLES: manageActionType('LIKE_ARTICLES'),
  UNLIKE_ARTICLES: manageActionType('UNLIKE_ARTICLES'),



  // EDIT IMAGE
  EDIT_IMAGE: manageActionType('EDIT_IMAGE'),
  EDIT_USERNAME: manageActionType('EDIT_USERNAME'),



  MY_DEALS:manageActionType('MY_DEALS'),
};
