function main (){
    switch (new caseInput().getInput()){
        case 1:
            savings = savings - (savings * 0.3);
            bills = bills - (bills * 0.3);
            fun = fun - (fun * 0.4);
            break;
        case 2:
            savings = savings - (savings * 0.4);
            bills = bills - (bills * 0.4);
            fun = fun - (fun * 0.2);
            break;
        case 3:
            savings = savings - (savings * 0.3);
            bills = bills - (bills * 0.5);
            fun = fun - (fun * 0.2);
            break;
        default:
            text: "Choose a case input";
    }
}