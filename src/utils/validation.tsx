export const emailCheck = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    return false;
  } else {
    return true;
  }
};

export const passwordCheck = (string: string) => {
  let reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{9,}$/;
  return reg.test(string);
};
