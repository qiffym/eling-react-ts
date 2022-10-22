export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Login = 'LOGIN',
  Classes = 'CLASSES',
  DeleteSuccess = 'SUCCESS',
  CreateClassSuccess = 'CLASS_SUCCESS',
  AddContentSuccess = 'CONTENT_SUCCESS',
  AddMaterialSuccess = 'MATERIAL_SUCCESS',

  // Payload Create User
  Role = 'ROLE',
  Gender = 'GENDER',
  Name = 'NAME',
  Username = 'USERNAME',
  Email = 'EMAIL',
  Password = 'PASSWORD',
  ConfirmPassword = 'CONFIRM_PASSWORD',

  // Payload Update User
  UpdateName = 'UPDATE_NAME',
  UpdateUsername = 'UPDATE_USERNAME',
  UpdateEmail = 'UPDATE_EMAIL',
  UpdateGender = 'UPDATE_GENDER',
  UpdateReligion = 'UPDATE_RELIGION',
  UpdateBirthday = 'UPDATE_BIRTHDAY',
  UpdateStatus = 'UPDATE_STATUS',
  UpdateAddress = 'UPDATE_ADDRESS',
  UpdateTelpon = 'UPDATE_TELPON',
  UpdatePassword = 'UPDATE_PASSWORD',
  UpdateConfirmPassword = 'UPDATE_CONFIRM_PASSWORD',

  // Payload Create Class
  ClassName = 'CLASS_NAME',
  ClassDescription = 'CLASS_DESCRIPTION',
  RombelID = 'ROMBEL_CLASS_ID',

  // Payload Add Content
  ContentTitle = 'CONTENT_TITLE',
  ContentDesc = 'CONTENT_DESC',

  // Payload Add Material
  MaterialTitle = 'MATERIAL_TITLE',
  MaterialFile = 'MATERIAL_FILE',

  // Payload Add Forum
  ForumTopic = 'FORUM_TOPIC',
  ForumDesc = 'FORUM_DESC',
}

export type LoginPayload = {
  [Types.Login]: {
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
      role: string;
      avatar: string;
    };
    token: string;
  };
};

export type ClassPayload = {
  [Types.Classes]: {
    classList:
      | [
          {
            rombel_name: string;
            id: number;
            name: string;
            description: string;
            teacher_avatar: string;
            teacher_id?: number;
            teacher_name?: string;
          },
        ]
      | undefined;
  };
};

export type DeleteSuccessPayload = {
  [Types.DeleteSuccess]: {
    success: boolean;
  };
};

export type CreateClassSuccessPayload = {
  [Types.CreateClassSuccess]: {
    success: boolean;
  };
};

export type AddContentSuccessPayload = {
  [Types.AddContentSuccess]: {
    success: boolean;
  };
};

export type AddMaterialSuccessPayload = {
  [Types.AddMaterialSuccess]: {
    success: boolean;
  };
};

export type CreateUserPayload = {
  [Types.Role]: {
    role: number;
  };
  [Types.Gender]: {
    gender: string;
  };
  [Types.Name]: {
    name: string;
  };
  [Types.Username]: {
    username: string;
  };
  [Types.Email]: {
    email: string;
  };
  [Types.Password]: {
    password: string;
  };
  [Types.ConfirmPassword]: {
    confirm_password: string;
  };
};

export type UpdateUserPayload = {
  [Types.UpdateName]: {
    name: string;
  };
  [Types.UpdateUsername]: {
    username: string;
  };
  [Types.UpdateEmail]: {
    email: string;
  };
  [Types.UpdateGender]: {
    gender: string;
  };

  [Types.UpdateReligion]: {
    religion: string;
  };

  [Types.UpdateBirthday]: {
    birthday: string;
  };

  [Types.UpdateTelpon]: {
    telpon: string;
  };

  [Types.UpdateStatus]: {
    status: number;
  };

  [Types.UpdateAddress]: {
    address: string;
  };
  [Types.UpdatePassword]: {
    password?: string;
  };
  [Types.UpdateConfirmPassword]: {
    confirm_password?: string;
  };
};

export type CreateClassPayload = {
  [Types.ClassName]: {
    name: string;
  };
  [Types.ClassDescription]: {
    description: string;
  };
  [Types.RombelID]: {
    rombel_class_id: number;
  };
};

export type AddContentPayload = {
  [Types.ContentTitle]: {
    title: string;
  };
  [Types.ContentDesc]: {
    description: string;
  };
};

export type AddMaterialPayload = {
  [Types.MaterialTitle]: {
    title: string;
  };
  [Types.MaterialFile]: {
    file: FileList | null;
  };
};

export type AddForumPayload = {
  [Types.ForumTopic]: {
    topic: string;
  };
  [Types.ForumDesc]: {
    description: string;
  };
};
