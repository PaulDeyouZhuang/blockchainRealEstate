pragma solidity ^0.4.2;
contract BuyHouse {
	address public Owner;
	address public Buyer;
	string public Region;
	uint256 public Area;
	uint256 public Price_etherValue;
	uint256 public Buyer_balance;
	uint256 public Owner_balance;
	mapping (address => uint256) private balances;

	//event TransferEvent(address from, address to, uint256 value, uint256 timestamp);
	function BuyHouse(){
		Buyer = msg.sender;//預設買家呼叫contract
		balances[msg.sender] = 100 ether;
		Buyer_balance = balances[msg.sender];
	}
	function setRegion(string region){
		Region = region;
	}

	function setArea(uint256 area){
		Area = area;
	}
	function setPrice(uint256 price){
		Price_etherValue = price;
	}
	function setOwner(address owner){
		Owner = owner;
		balances[Owner] = 0;
		Owner_balance = balances[Owner];
	}
	function getRegion() returns(string){
		return Region;

	}
	function getArea() returns(uint256){
		return Area;
	}
	function getPrice() returns(uint256){
		return Price_etherValue;
	}
	function getOwner() returns(address){
		return Owner;
	}
	function getOwner_blance() returns(uint256){
		return balances[Owner];
	}
	function getBuyer_blance() returns(uint256) {
		return balances[Buyer];
	}
	function transfer() {
		uint256 weiValue = Price_etherValue * 1 ether;

		if (balances[msg.sender] < weiValue) {
			throw;
		}

		balances[msg.sender] -= weiValue;
		balances[Owner] += weiValue;
		Buyer_balance = balances[msg.sender];
		Owner_balance = balances[Owner];
		//TransferEvent(msg.sender, to, etherValue, now);
	}


}

