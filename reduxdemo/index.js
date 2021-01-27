//Action creator
const CreatePolicy = (name, amount) => {
    return {
      type: "CREATE_POLICY",
      payload: {
        name: name,
        amount: amount,
      },
    };
  };
   
  const DeletePolicy = (name) => {
    return {
      type: "DELETE_POLICY",
      payload: {
        name: name,
      },
    };
  };
   
  const CreateClaim = (name, amountWantToWithdraw) => {
    return {
      type: "CREATE_CLAIM",
      payload: {
        name: name,
        amountWantToWithdraw: amountWantToWithdraw,
      },
    };
  };
   
  //dispatcher it will come in last
   
  //Reducer - here we will have different reducer for different departments
  //it will take two arguments action and the state
  const claimHistory = (oldListOfClaim = [], action) => {
    if (action.type === "CREATE_CLAIM") {
      //add the payload in state
      return [...oldListOfClaim, action.payload];
    }
    //if the department does not do any work related to action passed by dispat return the data without doing anything cher
    return oldListOfClaim;
  };
   
  const accounting = (bagOfMoney = 100, action) => {
    if (action.type === "CREATE_CLAIM") {
      return bagOfMoney - action.payload.amountWantToWithdraw;
    } else if (action.type === "CREATE_POLICY") {
      return bagOfMoney + action.payload.amount;
    }
    return bagOfMoney;
  };
   
  const policies = (listOFPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
      return [...listOFPolicies, action.payload.name];
    } else if (action.type === "DELETE_POLICY") {
      return listOFPolicies.filter((name) => name !== action.payload.name);
    }
    return listOFPolicies;
  };
   
  //testing the application
   
  const { createStore, combineReducers } = require("redux");
   
  const ourDepartments = combineReducers({
    accounting: accounting,
    claimHistory: claimHistory,
    policies: policies,
  });
   
  const store = createStore(ourDepartments);
   
  store.dispatch(CreatePolicy("Anurag", 250));
  store.dispatch(CreatePolicy("Harsh", 300));
   
  store.dispatch(CreateClaim("Anurag", 120));
  store.dispatch(DeletePolicy("Anurag"));
  //get hole data
  console.log(store.getState());
  