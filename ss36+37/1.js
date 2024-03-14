
    function validateAnswer() {
        var userInput = document.getElementById("inputField").value;
        var resultMessage = document.getElementById("resultMessage");
        var errorMessage = document.getElementById("errorMessage");

        if (userInput.length > 10) {
            resultMessage.textContent = "";
            errorMessage.textContent = "Câu trả lời không hợp lệ. Độ dài câu trả lời phải nhỏ hơn hoặc bằng 10 ký tự.";
        } else {
            errorMessage.textContent = "";
            resultMessage.textContent = "Câu trả lời hợp lệ. Độ dài câu trả lời là " + userInput.length + " ký tự.";
        }
    }
