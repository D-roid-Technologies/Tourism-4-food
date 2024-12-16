import { UserType } from "../../Utils/Types";

const splitFullName = (fullName: string) => {
  return fullName.split(" ");
};

export class AuthFunctions {
  async handleUserSignUp(userData: UserType) {
    const splitName = splitFullName(userData.fullName);
    const firstName = splitName[0];
    const middleName = splitName[1];
    const lastName = splitName[2];
    console.log(firstName, middleName, lastName, userData);
  }
}

export const authFunctions = new AuthFunctions();
