switch (prompt('Enter transaction type')) {
    // For Airtime
    case 'Airtime':
        prompt(`1. Airtime for self
        2. Airtime for others`)

    case '1':
        prompt('Enter amount')
        alert('Transaction Successful')
        break;

    case '2':
        prompt('Enter recipient number')
        break;

    // For Transfer
    case 'Transfer':
        prompt('Select Bank')
        prompt('Enter amount')
        alert('Transaction Successful')
        break;
        
    case 'Data':
        prompt('Select Network')
         prompt('Enter amount')
        alert('Transaction Successful')
        break;

    default:
        break;
}
