import { UserType } from "../../Utils/Types";

const splitFullName = (fullName: string) => {
  return fullName.split(" ");
};


export class AuthFunctions {
  async handleUserSignUp(userData: UserType) {
    try {
      const splitName = splitFullName(userData.fullName);
      const firstName = splitName[0];
      const middleName = splitName[1];
      const lastName = splitName[2];
      console.log(userData);
    } catch (err) {

    }
  }
}

export const authFunctions = new AuthFunctions();
