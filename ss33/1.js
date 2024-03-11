let person = {
  name: "John Doe",
  age: 30,
  address: "123 Main Street",
};

console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
person.dateOfBirth = "1994-05-15";
delete person.age;
console.log("Đối tượng sau khi thêm ngày sinh và xóa tuổi:");
console.log(person);
