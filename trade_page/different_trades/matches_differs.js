

  
export async function order_propose(api, amount, barrier, stake, contract_type, duration, duration_unit, symbol){

    let proposal_to_buy = {
        "proposal": 1,
        "amount": parseFloat(amount),
        "barrier": String(parseInt(barrier)),
        "basis": String(stake),
        "contract_type": String(contract_type),
        "currency": "USD",
        "duration": parseInt(duration),
        "duration_unit": String(duration_unit),
        "product_type": "basic",
        "symbol": String(symbol)
    }

    let proposeRes = await api.proposal(proposal_to_buy)

    let proposalId = proposeRes.proposal.id

    return proposalId

}

