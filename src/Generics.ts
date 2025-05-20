const personData = <T> (objc:T)=>{
      let uuid = Math.floor(Math.random()*100);
      return  {...objc, uuid}
}

const personOne = personData({name:'ahmed ali',age:20,city: 'jigjiga',phone:12345678,isStudent:true})
const personTwo= personData({name:'ayaan ahmed',age:22,city: 'Hargeisa',phone:876543211,isStudent:false})
console.log(personOne,personTwo)