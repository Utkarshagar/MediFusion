document.getElementById("check-btn").addEventListener("click", function () {
    const selectedSymptoms = Array.from(document.getElementById("symptoms").selectedOptions).map(option => option.value);
  
    if (selectedSymptoms.length === 0) {
      alert("Please select at least one symptom.");
      return;
    }
  
    const conditions = {
      fever: ["Flu", "COVID-19", "Dengue"],
      cough: ["Common Cold", "Bronchitis", "COVID-19"],
      headache: ["Migraine", "Tension Headache", "Sinus Infection"],
      fatigue: ["Anemia", "Hypothyroidism", "Chronic Fatigue Syndrome"],
      nausea: ["Food Poisoning", "Gastroenteritis", "Pregnancy"],
      "body-pain": ["Influenza", "Fibromyalgia", "Arthritis"],
      "sore-throat": ["Tonsillitis", "Pharyngitis", "Common Cold"],
      "shortness-breath": ["Asthma", "Pneumonia", "COVID-19"]
    };
  
    const possibleConditions = new Set();
    selectedSymptoms.forEach(symptom => {
      if (conditions[symptom]) {
        conditions[symptom].forEach(condition => possibleConditions.add(condition));
      }
    });
  
    const conditionList = document.getElementById("condition-list");
    conditionList.innerHTML = ""; // Clear previous results
  
    if (possibleConditions.size > 0) {
      possibleConditions.forEach(condition => {
        const li = document.createElement("li");
        li.textContent = condition;
        conditionList.appendChild(li);
      });
    } else {
      const li = document.createElement("li");
      li.textContent = "No matching conditions found.";
      conditionList.appendChild(li);
    }
  });
  