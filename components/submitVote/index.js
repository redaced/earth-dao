const proposalId = "0";
// The address of the wallet you want to check to see if they voted
const address = "0x20242ed732b9A4c718B62F69Ceb47D24482EAAa1";

await contract.hasVoted(proposalId, address);
// The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
const voteType = VoteType.For;
// The (optional) reason for the vote
const reason = "I like this proposal!";

await contract.vote(proposalId, voteType, reason);