import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { firebaseDatabase } from "../utils/Firebase";
import type { UserModel } from "../models/UserModel";

export class UserRepository {
  collationName = "users";

  private getCollation() {
    return collection(firebaseDatabase, this.collationName);
  }

  createUser(user: UserModel): Promise<boolean> {
    const collectionRef = this.getCollation();
    console.log(user);

    return new Promise((res, rej) => {
      setDoc(doc(collectionRef, user.id), user)
        .then(() => {
          console.log("User created successfully");
          res(true);
        })
        .catch((error) => {
          console.error("Error creating user:", error);
          rej(false);
        });
    });
  }

  readUser(userId: string): Promise<UserModel | null> {
    return new Promise((res, rej) => {
      getDoc(doc(firebaseDatabase, this.collationName, userId))
        .then((doc) => {
          if (doc.exists()) {
            res({ ...doc.data(), id: doc.id } as UserModel);
          } else {
            res(null);
          }
        })
        .catch((error) => {
          rej(error);
        });
    });
  }
}
