var names = ["Nguyễn Văn A", "Trần Thị B", "Lê Đình C", "Phạm Thị D"];

var nameListElement = document.getElementById("nameList");
names.forEach(function(name) {
    var listItem = document.createElement("li");
    listItem.textContent = name;
    nameListElement.appendChild(listItem);
});