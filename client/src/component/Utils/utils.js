

export function profileCreation (user) {
  
  const { email, name, picture } = user;

  return { user_email : email, user_name : name, user_image : picture }

};

