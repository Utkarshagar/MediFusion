document.getElementById("calculate-btn").addEventListener("click", function () {
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const activity = parseFloat(document.getElementById("activity").value);
  
    if (!age || !weight || !height || !gender || !activity) {
      alert("Please fill in all fields correctly!");
      return;
    }
  
    let bmr; // Basal Metabolic Rate
    if (gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
  
    const calorieNeeds = (bmr * activity).toFixed(2);
    document.getElementById("calorie-result").textContent = calorieNeeds;
  });
  