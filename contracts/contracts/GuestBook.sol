pragma solidity ^0.5.7;

import "@openzeppelin/upgrades/contracts/Initializable.sol";

contract BasicAccessControl is Initializable {
    address public owner;
    address[] moderatorsArray;
    address[] serversArray;
    uint16 public totalModerators;
    uint16 public totalServers;
    mapping(address => bool) moderators;
    mapping(address => bool) servers;
    bool public isMaintaining;

    function initialize(address sender) initializer public {
        owner = sender;
        if (moderators[sender] == false) {
            moderators[sender] = true;
            moderatorsArray.push(sender);
            totalModerators += 1;
        }

        isMaintaining = true;
        totalServers = 0;
        totalModerators = 0;
    }

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    modifier onlyServer {
        require(servers[msg.sender] == true);
        _;
    }

    modifier onlyModerators() {
        require(moderators[msg.sender] == true);
        _;
    }

    modifier isActive {
        require(!isMaintaining);
        _;
    }

    function findInArray(address _address) internal view returns (uint8) {
        uint8 i = 0;
        while (moderatorsArray[i] != _address) {
            i++;
        }
        return i;
    }

    function ChangeOwner(address _newOwner) onlyOwner public {
        if (_newOwner != address(0)) {
            owner = _newOwner;
        }
    }

    function AddModerator(address _newModerator) onlyOwner public {
        if (moderators[_newModerator] == false) {
            moderators[_newModerator] = true;
            moderatorsArray.push(_newModerator);
            totalModerators += 1;
        }
    }

    function AddServer(address _newServer) onlyOwner public {
        if (servers[_newServer] == false) {
            servers[_newServer] = true;
            serversArray.push(_newServer);
            totalServers += 1;
        }
    }

    function getModerators() public view returns (address[] memory) {
        return moderatorsArray;
    }

    function getServers() public view returns (address[] memory) {
        return serversArray;
    }

    function RemoveModerator(address _oldModerator) onlyOwner public {
        if (moderators[_oldModerator] == true) {
            moderators[_oldModerator] = false;
            uint8 i = findInArray(_oldModerator);
            while (i < moderatorsArray.length - 1) {
                moderatorsArray[i] = moderatorsArray[i + 1];
                i++;
            }
            moderatorsArray.length--;
            totalModerators -= 1;
        }
    }

    function RemoveServer(address _oldServer) onlyOwner public {
        if (servers[_oldServer] == true) {
            servers[_oldServer] = false;
            uint8 i = findInArray(_oldServer);
            while (i < serversArray.length - 1) {
                serversArray[i] = serversArray[i + 1];
                i++;
            }
            serversArray.length--;
            totalServers -= 1;
        }
    }

    function UpdateMaintaining(bool _isMaintaining) onlyOwner public {
        isMaintaining = _isMaintaining;
    }

    function isModerator(address _address) public view returns (bool) {
        return (moderators[_address]);
    }

    function isServer(address _address) public view returns (bool) {
        return (servers[_address]);
    }
}

contract GuestBook is Initializable, BasicAccessControl {

    uint public totalEntries;

    struct Entry {
        uint id;
        address owner;
        string message;
    }

    mapping(address => bool) hasEntry;
    mapping(uint => Entry) entries;

    function init(address _admin) initializer public {
//        BasicAccessControl.initialize(_admin);
    }

    function addEntry() public {
        require(hasEntry[msg.sender] == false);
        Entry storage entry = entries[totalEntries];
        entry.id = totalEntries;
        entry.owner = msg.sender;
        entry.message = '';
        hasEntry[msg.sender] = true;
        totalEntries++;
    }

    function modifyEntry(uint _id, string memory _message) public onlyModerators {
        Entry storage entry = entries[_id];
        entry.message = _message;
    }

    function getEntry(uint _id) public view returns(address owner, string memory message) {
        Entry memory entry = entries[_id];
        return (entry.owner, entry.message);
    }

}
