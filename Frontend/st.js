document.getElementById("calculate-btn").addEventListener("click", function () {
    const responses = document.querySelectorAll(".response");
    let totalScore = 0;
  
    // Calculate total score
    responses.forEach((response) => {
      const value = parseInt(response.value);
      if (!value) {
        alert("Please answer all the questions!");
        return;
      }
      totalScore += value;
    });
  
    // Determine stress level
    let resultLevel = "";
    let feedback = "";
  
    if (totalScore <= 6) {
      resultLevel = "Low";
      feedback = "You seem to have a low level of stress or anxiety. Keep maintaining a healthy lifestyle!";
    } else if (totalScore <= 10) {
      resultLevel = "Moderate";
      feedback = "You may be experiencing some stress or anxiety. Consider adopting relaxation techniques like meditation or exercise.";
    } else if (totalScore <= 14) {
      resultLevel = "High";
      feedback = "You are likely experiencing significant stress or anxiety. It's recommended to talk to a counselor or therapist.";
    } else {
      resultLevel = "Severe";
      feedback = "You may be under severe stress or anxiety. Please seek professional help as soon as possible.";
    }
  
    // Display result
    document.getElementById("result-level").textContent = resultLevel;
    document.getElementById("feedback").textContent = feedback;
  });
  