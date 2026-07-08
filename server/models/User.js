/*User
│
├── name
├── email
├── password
├── avatar
├── role
├── streak
├── totalPractice
├── totalQuiz
├── createdAt
└── updatedAt*/

import mongoose, { Schema ,model} from "mongoose";

const userSchema =new Schema({
    name:{
        type:string,
        required:true,
        trim: true
    },
    email:{
        trype:string,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:string,
        required:true,
        trim:true
    },
    avatar:{
        type:string,
        required:true,
        trim:true
    },
    role:{
        type:string,
        enum:["user","admin"],
        default:"user"
    },
    streak:{
        type:number,
        default:0
    },
    totalPractice:{
        type:number,
        default:0
    },
    totalQuiz:{
        type:number,
        default:0
    }
},{
    timestamps:true
}
);
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
});
export const User = mongoose.model("User",userSchema);
