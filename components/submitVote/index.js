const proposalId = "0";
const address = "0x20242ed732b9A4c718B62F69Ceb47D24482EAAa1";

await contract.hasVoted(proposalId, address);
const voteType = VoteType.For;
const reason = "I like this proposal!";

await contract.vote(proposalId, voteType, reason);