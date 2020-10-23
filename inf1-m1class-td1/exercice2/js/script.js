function Salaire(form){
    
    var grossSalary = document.getElementById('grossSalary').value;
    var additionBonus = document.getElementById('additionBonus').value;
    var additionAllowance = document.getElementById('additionAllowance').value;
    var gender = document.getElementById('gender').value;
    var dependents = document.getElementById('dependents').value;

    var tauxImpot = 18;
    var tauxAss = 7;
    var tauxRegime = 5;

    if (gender == "F"){
        tauxImpot -= 2;
    }
    if (dependents == 3){
        tauxImpot =  tauxImpot - 1;
    }
    if (dependents == 4){
        tauxImpot -= 2;
    }

    var supplement = 0;
    var impotR = grossSalary * (tauxImpot/100);
    var assurenceE = grossSalary * (tauxAss/100);
    var regimeP = grossSalary * (tauxRegime/100);
    
    let Salaire = grossSalary - impotR - assurenceE - regimeP ;

    if (additionBonus == "on"){
        Salaire = Salaire + 100;
        supplement += 100;
    }
    if (additionAllowance == "on"){
        Salaire = Salaire + 150;
        supplement += 150;
    }


    document.getElementById("incomeTaxResult").innerHTML= impotR;
    document.getElementById("employmentInsuranceResult").innerHTML= assurenceE;
    document.getElementById("canadaPensionPlanResult").innerHTML= regimeP;
    document.getElementById("additionsResult").innerHTML= supplement;
    document.getElementById("finalSalaryResult").innerHTML= Salaire;



    
   
    
}