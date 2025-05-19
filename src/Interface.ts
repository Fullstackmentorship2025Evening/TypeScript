      type UUID = number | string
      type FullName = string
      type Class = string
      type Phone= number |string
      
interface Students {
      id:UUID,
      fullName: FullName,
      class: Class,
      phone:Phone
}

const student : Students = {
      id: '12#32-445',
      fullName: 'Ahmed ali',
      class: 'A',
      phone: "+251 911 234 567"
}

console.log(student)