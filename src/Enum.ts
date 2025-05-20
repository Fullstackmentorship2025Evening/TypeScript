enum Types {
      Male = "male",
      Female = "female",
      Other = "other"
}


interface Student {
      id:number | string,
      fullName:string,
      gender:Types
}

const studentOne : Student = {
      id:"1",
      fullName: "Aisha ali",
      gender: Types.Female
}
const studentTwo : Student = {
      id:"2",
      fullName: "ahmed ali",
      gender: Types.Male
}

console.log(studentOne,studentTwo)