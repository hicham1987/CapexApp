webpackJsonp(["main"],{

/***/ "./build/contracts/MetaCoin.json":
/***/ (function(module, exports) {

module.exports = {"contractName":"MetaCoin","abi":[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":false,"inputs":[{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"}],"name":"sendCoin","outputs":[{"name":"sufficient","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalanceInEth","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"addr","type":"address"}],"name":"getBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x6060604052341561000f57600080fd5b6127106000803273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506103b8806100636000396000f300606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101eb565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610344565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610344565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101cd57600080fd5b5af415156101da57600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561023c576000905061033e565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820e2286e7edb2719cc4049d108042ec0395cc6a87f1845fb8202087c5dc90a85ad0029","deployedBytecode":"0x606060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680637bd703e81461005c57806390b98a11146100a9578063f8b2cb4f14610103575b600080fd5b341561006757600080fd5b610093600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610150565b6040518082815260200191505060405180910390f35b34156100b457600080fd5b6100e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101eb565b604051808215151515815260200191505060405180910390f35b341561010e57600080fd5b61013a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610344565b6040518082815260200191505060405180910390f35b600073__ConvertLib____________________________6396e4ee3d61017584610344565b60026040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808381526020018281526020019250505060206040518083038186803b15156101cd57600080fd5b5af415156101da57600080fd5b505050604051805190509050919050565b6000816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101561023c576000905061033e565b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540392505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490509190505600a165627a7a72305820e2286e7edb2719cc4049d108042ec0395cc6a87f1845fb8202087c5dc90a85ad0029","sourceMap":"316:675:1:-;;;453:62;;;;;;;;506:5;484:8;:19;493:9;484:19;;;;;;;;;;;;;;;:27;;;;316:675;;;;;;","deployedSourceMap":"316:675:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;518:259;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;900:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;780:117;839:4;855:10;:18;874:16;885:4;874:10;:16::i;:::-;891:1;855:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;848:45;;780:117;;;:::o;518:259::-;582:15;630:6;607:8;:20;616:10;607:20;;;;;;;;;;;;;;;;:29;603:47;;;645:5;638:12;;;;603:47;678:6;654:8;:20;663:10;654:20;;;;;;;;;;;;;;;;:30;;;;;;;;;;;710:6;688:8;:18;697:8;688:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;741:8;720:38;;729:10;720:38;;;751:6;720:38;;;;;;;;;;;;;;;;;;769:4;762:11;;518:259;;;;;:::o;900:89::-;954:4;971:8;:14;980:4;971:14;;;;;;;;;;;;;;;;964:21;;900:89;;;:::o","source":"pragma solidity ^0.4.16;\n\nimport \"./ConvertLib.sol\";\n\n// This is just a simple example of a coin-like contract.\n// It is not standards compatible and cannot be expected to talk to other\n// coin/token contracts. If you want to create a standards-compliant\n// token, see: https://github.com/ConsenSys/Tokens. Cheers!\n\ncontract MetaCoin {\n\tmapping (address => uint) balances;\n\n\tevent Transfer(address indexed _from, address indexed _to, uint256 _value);\n\n\tfunction MetaCoin() public {\n\t\tbalances[tx.origin] = 10000;\n\t}\n\n\tfunction sendCoin(address receiver, uint amount) public returns(bool sufficient) {\n\t\tif (balances[msg.sender] < amount) return false;\n\t\tbalances[msg.sender] -= amount;\n\t\tbalances[receiver] += amount;\n\t\tTransfer(msg.sender, receiver, amount);\n\t\treturn true;\n\t}\n\n\tfunction getBalanceInEth(address addr) public view returns(uint){\n\t\treturn ConvertLib.convert(getBalance(addr),2);\n\t}\n\n\tfunction getBalance(address addr) public view returns(uint) {\n\t\treturn balances[addr];\n\t}\n}\n","sourcePath":"/home/h/Documents/KhaoulaPro/ProTest/contracts/MetaCoin.sol","ast":{"absolutePath":"/home/h/Documents/KhaoulaPro/ProTest/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.4",".16"],"nodeType":"PragmaDirective","src":"0:24:1"},{"absolutePath":"/home/h/Documents/KhaoulaPro/ProTest/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"26:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"337:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"346:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"337:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"357:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"390:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"390:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"413:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"413:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"434:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"434:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"389:60:1"},"src":"375:75:1"},{"body":{"id":41,"nodeType":"Block","src":"480:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"484:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":192,"src":"493:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"493:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"484:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"506:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"484:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"484:27:1"}]},"documentation":null,"id":42,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"MetaCoin","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"470:2:1"},"payable":false,"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"480:0:1"},"scope":112,"src":"453:62:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"599:178:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"607:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":182,"src":"616:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"616:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"607:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"630:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"607:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"603:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"645:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"638:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"654:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":182,"src":"663:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"663:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"654:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"678:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"654:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"654:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"688:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"697:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"688:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"710:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"688:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"688:28:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":182,"src":"729:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"729:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"741:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"751:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"720:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"720:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"ExpressionStatement","src":"720:38:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"769:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"762:11:1"}]},"documentation":null,"id":83,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"536:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"536:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"554:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"554:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"535:31:1"},"payable":false,"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"582:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"582:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"581:17:1"},"scope":112,"src":"518:259:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"844:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"885:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"874:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"874:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"891:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"855:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"855:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"855:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"848:45:1"}]},"documentation":null,"id":99,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"805:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"805:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"804:14:1"},"payable":false,"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"839:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"839:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"838:6:1"},"scope":112,"src":"780:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"960:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"971:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"980:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"971:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"964:21:1"}]},"documentation":null,"id":111,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"920:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"920:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"919:14:1"},"payable":false,"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"954:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"954:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"953:6:1"},"scope":112,"src":"900:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"316:675:1"}],"src":"0:992:1"},"legacyAST":{"absolutePath":"/home/h/Documents/KhaoulaPro/ProTest/contracts/MetaCoin.sol","exportedSymbols":{"MetaCoin":[112]},"id":113,"nodeType":"SourceUnit","nodes":[{"id":18,"literals":["solidity","^","0.4",".16"],"nodeType":"PragmaDirective","src":"0:24:1"},{"absolutePath":"/home/h/Documents/KhaoulaPro/ProTest/contracts/ConvertLib.sol","file":"./ConvertLib.sol","id":19,"nodeType":"ImportDirective","scope":113,"sourceUnit":17,"src":"26:26:1","symbolAliases":[],"unitAlias":""},{"baseContracts":[],"contractDependencies":[],"contractKind":"contract","documentation":null,"fullyImplemented":true,"id":112,"linearizedBaseContracts":[112],"name":"MetaCoin","nodeType":"ContractDefinition","nodes":[{"constant":false,"id":23,"name":"balances","nodeType":"VariableDeclaration","scope":112,"src":"337:34:1","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"typeName":{"id":22,"keyType":{"id":20,"name":"address","nodeType":"ElementaryTypeName","src":"346:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"nodeType":"Mapping","src":"337:25:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"},"valueType":{"id":21,"name":"uint","nodeType":"ElementaryTypeName","src":"357:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}},"value":null,"visibility":"internal"},{"anonymous":false,"documentation":null,"id":31,"name":"Transfer","nodeType":"EventDefinition","parameters":{"id":30,"nodeType":"ParameterList","parameters":[{"constant":false,"id":25,"indexed":true,"name":"_from","nodeType":"VariableDeclaration","scope":31,"src":"390:21:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":24,"name":"address","nodeType":"ElementaryTypeName","src":"390:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":27,"indexed":true,"name":"_to","nodeType":"VariableDeclaration","scope":31,"src":"413:19:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":26,"name":"address","nodeType":"ElementaryTypeName","src":"413:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":29,"indexed":false,"name":"_value","nodeType":"VariableDeclaration","scope":31,"src":"434:14:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":28,"name":"uint256","nodeType":"ElementaryTypeName","src":"434:7:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"389:60:1"},"src":"375:75:1"},{"body":{"id":41,"nodeType":"Block","src":"480:35:1","statements":[{"expression":{"argumentTypes":null,"id":39,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"484:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":37,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":35,"name":"tx","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":192,"src":"493:2:1","typeDescriptions":{"typeIdentifier":"t_magic_transaction","typeString":"tx"}},"id":36,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"origin","nodeType":"MemberAccess","referencedDeclaration":null,"src":"493:9:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"484:19:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"hexValue":"3130303030","id":38,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"506:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_10000_by_1","typeString":"int_const 10000"},"value":"10000"},"src":"484:27:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":40,"nodeType":"ExpressionStatement","src":"484:27:1"}]},"documentation":null,"id":42,"implemented":true,"isConstructor":true,"isDeclaredConst":false,"modifiers":[],"name":"MetaCoin","nodeType":"FunctionDefinition","parameters":{"id":32,"nodeType":"ParameterList","parameters":[],"src":"470:2:1"},"payable":false,"returnParameters":{"id":33,"nodeType":"ParameterList","parameters":[],"src":"480:0:1"},"scope":112,"src":"453:62:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":82,"nodeType":"Block","src":"599:178:1","statements":[{"condition":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":56,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":51,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"607:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":54,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":52,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":182,"src":"616:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":53,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"616:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"607:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"<","rightExpression":{"argumentTypes":null,"id":55,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"630:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"607:29:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"falseBody":null,"id":59,"nodeType":"IfStatement","src":"603:47:1","trueBody":{"expression":{"argumentTypes":null,"hexValue":"66616c7365","id":57,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"645:5:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"false"},"functionReturnParameters":50,"id":58,"nodeType":"Return","src":"638:12:1"}},{"expression":{"argumentTypes":null,"id":65,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":60,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"654:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":63,"indexExpression":{"argumentTypes":null,"expression":{"argumentTypes":null,"id":61,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":182,"src":"663:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":62,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"663:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"654:20:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"-=","rightHandSide":{"argumentTypes":null,"id":64,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"678:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"654:30:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":66,"nodeType":"ExpressionStatement","src":"654:30:1"},{"expression":{"argumentTypes":null,"id":71,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":67,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"688:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":69,"indexExpression":{"argumentTypes":null,"id":68,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"697:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":true,"nodeType":"IndexAccess","src":"688:18:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"+=","rightHandSide":{"argumentTypes":null,"id":70,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"710:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"688:28:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":72,"nodeType":"ExpressionStatement","src":"688:28:1"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":74,"name":"msg","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":182,"src":"729:3:1","typeDescriptions":{"typeIdentifier":"t_magic_message","typeString":"msg"}},"id":75,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"sender","nodeType":"MemberAccess","referencedDeclaration":null,"src":"729:10:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":76,"name":"receiver","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":44,"src":"741:8:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},{"argumentTypes":null,"id":77,"name":"amount","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":46,"src":"751:6:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_address","typeString":"address"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":73,"name":"Transfer","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":31,"src":"720:8:1","typeDescriptions":{"typeIdentifier":"t_function_event_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$","typeString":"function (address,address,uint256)"}},"id":78,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"720:38:1","typeDescriptions":{"typeIdentifier":"t_tuple$__$","typeString":"tuple()"}},"id":79,"nodeType":"ExpressionStatement","src":"720:38:1"},{"expression":{"argumentTypes":null,"hexValue":"74727565","id":80,"isConstant":false,"isLValue":false,"isPure":true,"kind":"bool","lValueRequested":false,"nodeType":"Literal","src":"769:4:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"value":"true"},"functionReturnParameters":50,"id":81,"nodeType":"Return","src":"762:11:1"}]},"documentation":null,"id":83,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"sendCoin","nodeType":"FunctionDefinition","parameters":{"id":47,"nodeType":"ParameterList","parameters":[{"constant":false,"id":44,"name":"receiver","nodeType":"VariableDeclaration","scope":83,"src":"536:16:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":43,"name":"address","nodeType":"ElementaryTypeName","src":"536:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"},{"constant":false,"id":46,"name":"amount","nodeType":"VariableDeclaration","scope":83,"src":"554:11:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":45,"name":"uint","nodeType":"ElementaryTypeName","src":"554:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"535:31:1"},"payable":false,"returnParameters":{"id":50,"nodeType":"ParameterList","parameters":[{"constant":false,"id":49,"name":"sufficient","nodeType":"VariableDeclaration","scope":83,"src":"582:15:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"},"typeName":{"id":48,"name":"bool","nodeType":"ElementaryTypeName","src":"582:4:1","typeDescriptions":{"typeIdentifier":"t_bool","typeString":"bool"}},"value":null,"visibility":"internal"}],"src":"581:17:1"},"scope":112,"src":"518:259:1","stateMutability":"nonpayable","superFunction":null,"visibility":"public"},{"body":{"id":98,"nodeType":"Block","src":"844:53:1","statements":[{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":93,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":85,"src":"885:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_address","typeString":"address"}],"id":92,"name":"getBalance","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":111,"src":"874:10:1","typeDescriptions":{"typeIdentifier":"t_function_internal_view$_t_address_$returns$_t_uint256_$","typeString":"function (address) view returns (uint256)"}},"id":94,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"874:16:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"hexValue":"32","id":95,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"891:1:1","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"},"value":"2"}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_rational_2_by_1","typeString":"int_const 2"}],"expression":{"argumentTypes":null,"id":90,"name":"ConvertLib","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":16,"src":"855:10:1","typeDescriptions":{"typeIdentifier":"t_type$_t_contract$_ConvertLib_$16_$","typeString":"type(library ConvertLib)"}},"id":91,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"convert","nodeType":"MemberAccess","referencedDeclaration":15,"src":"855:18:1","typeDescriptions":{"typeIdentifier":"t_function_delegatecall_pure$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) pure returns (uint256)"}},"id":96,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"855:38:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":89,"id":97,"nodeType":"Return","src":"848:45:1"}]},"documentation":null,"id":99,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalanceInEth","nodeType":"FunctionDefinition","parameters":{"id":86,"nodeType":"ParameterList","parameters":[{"constant":false,"id":85,"name":"addr","nodeType":"VariableDeclaration","scope":99,"src":"805:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":84,"name":"address","nodeType":"ElementaryTypeName","src":"805:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"804:14:1"},"payable":false,"returnParameters":{"id":89,"nodeType":"ParameterList","parameters":[{"constant":false,"id":88,"name":"","nodeType":"VariableDeclaration","scope":99,"src":"839:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":87,"name":"uint","nodeType":"ElementaryTypeName","src":"839:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"838:6:1"},"scope":112,"src":"780:117:1","stateMutability":"view","superFunction":null,"visibility":"public"},{"body":{"id":110,"nodeType":"Block","src":"960:29:1","statements":[{"expression":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":106,"name":"balances","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"971:8:1","typeDescriptions":{"typeIdentifier":"t_mapping$_t_address_$_t_uint256_$","typeString":"mapping(address => uint256)"}},"id":108,"indexExpression":{"argumentTypes":null,"id":107,"name":"addr","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":101,"src":"980:4:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"971:14:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"functionReturnParameters":105,"id":109,"nodeType":"Return","src":"964:21:1"}]},"documentation":null,"id":111,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getBalance","nodeType":"FunctionDefinition","parameters":{"id":102,"nodeType":"ParameterList","parameters":[{"constant":false,"id":101,"name":"addr","nodeType":"VariableDeclaration","scope":111,"src":"920:12:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"},"typeName":{"id":100,"name":"address","nodeType":"ElementaryTypeName","src":"920:7:1","typeDescriptions":{"typeIdentifier":"t_address","typeString":"address"}},"value":null,"visibility":"internal"}],"src":"919:14:1"},"payable":false,"returnParameters":{"id":105,"nodeType":"ParameterList","parameters":[{"constant":false,"id":104,"name":"","nodeType":"VariableDeclaration","scope":111,"src":"954:4:1","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":103,"name":"uint","nodeType":"ElementaryTypeName","src":"954:4:1","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"953:6:1"},"scope":112,"src":"900:89:1","stateMutability":"view","superFunction":null,"visibility":"public"}],"scope":113,"src":"316:675:1"}],"src":"0:992:1"},"compiler":{"name":"solc","version":"0.4.21+commit.dfe3193c.Emscripten.clang"},"networks":{"1523099626717":{"events":{},"links":{"ConvertLib":"0x3981a7298df8d45b24b3f2a4a0a82525e7d943c2"},"address":"0x80dad9cf65a9d801c20c643568eca8df4a672ab6","transactionHash":"0x8f2ee64818e417604dfb5f4edc16c34a379406ceb20c368af6d98e09f7ac5f9f"},"1523110869626":{"events":{},"links":{"ConvertLib":"0x3981a7298df8d45b24b3f2a4a0a82525e7d943c2"},"address":"0x80dad9cf65a9d801c20c643568eca8df4a672ab6","transactionHash":"0x8f2ee64818e417604dfb5f4edc16c34a379406ceb20c368af6d98e09f7ac5f9f"}},"schemaVersion":"2.0.0","updatedAt":"2018-04-07T14:21:56.231Z"}

/***/ }),

/***/ "./node_modules/moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ao-status/ao-status.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ao-status/ao-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    \n  <app-employees></app-employees>\n  \n</div>"

/***/ }),

/***/ "./src/app/ao-status/ao-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AoStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employees_shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AoStatusComponent = /** @class */ (function () {
    function AoStatusComponent(dataService, employeeService, tostr, db, auth) {
        this.dataService = dataService;
        this.employeeService = employeeService;
        this.tostr = tostr;
        this.db = db;
        this.auth = auth;
    }
    AoStatusComponent.prototype.ngOnInit = function () {
        this.resetForm();
        this.loadUsers();
        this.loadEmployeeData();
    };
    AoStatusComponent.prototype.onSubmit = function (dataForm) {
        var data = dataForm.value;
        var uid = this.auth.loggedInUser.uid;
        if (dataForm.value.$key == null) {
            this.dataService.insertEmployee(dataForm.value, uid);
        }
        else {
            this.dataService.updateEmployee(dataForm.value);
        }
        this.resetForm(dataForm);
        this.tostr.success('Submitted Succcessfully', 'Ao_status Register');
    };
    AoStatusComponent.prototype.resetForm = function (employeeForm) {
        if (employeeForm != null) {
            employeeForm.reset();
        }
        this.dataService.selectedEmployee = {
            $key: null,
            numDa: null,
            designation: '',
            numDossier: null,
            chefP: '',
            estimation: null,
            numRfi: null,
            situationRfi: '',
            numAo: null,
            situationAo: '',
            montantDeLaCad: 0,
        };
    };
    AoStatusComponent.prototype.loadEmployeeData = function (uid) {
        var _this = this;
        if (uid === void 0) { uid = null; }
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                var uuid = uid ? uid : _this.auth.loggedInUser.uid;
                if (y.creatorUid === uuid) {
                    y['$key'] = element.key;
                    _this.employeeList.push(y);
                }
            });
        });
    };
    AoStatusComponent.prototype.loadUsers = function () {
        var _this = this;
        var u = this.db.list('users/');
        u.snapshotChanges().subscribe(function (item) {
            _this.users = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                _this.users.push(y);
            });
        });
    };
    AoStatusComponent.prototype.onUserSelected = function (data) {
        var uid = data.value['$key'];
        this.loadEmployeeData(uid);
    };
    AoStatusComponent.prototype.isAdmin = function () {
        if (!this.auth.loggedInUser) {
            return false;
        }
        return ('isAdmin' in this.auth.loggedInUser && this.auth.loggedInUser['isAdmin']);
    };
    AoStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ao-status',
            template: __webpack_require__("./src/app/ao-status/ao-status.component.html"),
            styles: [__webpack_require__("./src/app/ao-status/ao-status.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employees_shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_1__employees_shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], AoStatusComponent);
    return AoStatusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color='red' data-image=\"\" [hidden]=\"!sidebar\">\n        <app-sidebar ></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\" [ngStyle]=\"{'width': !sidebar?'100%':''}\">\n        <app-navbar [hidden]=\"!sidebar\"></app-navbar>\n        <router-outlet></router-outlet>\n        <div [hidden]=\"!sidebar\">\n            <app-footer ></app-footer>\n        </div>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__ = __webpack_require__("./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Dashboard







var AppComponent = /** @class */ (function () {
    function AppComponent(location, router, authService, route) {
        this.location = location;
        this.router = router;
        this.authService = authService;
        this.route = route;
        this.yScrollStack = [];
        this.sidebar = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        $.material.init();
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            _this.navbar.sidebarClose();
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["f" /* RoutesRecognized */]) {
                try {
                    var data = event.state.root.firstChild.data;
                    if ('sidebar' in data && data['sidebar'] === false) {
                        _this.sidebar = false;
                    }
                    else {
                        _this.sidebar = true;
                    }
                }
                catch (e) {
                    // pass
                }
            }
            if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AppComponent.prototype.isMaps = function (path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_5_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps.update();
        }
    };
    AppComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__components_navbar_navbar_component__["a" /* NavbarComponent */])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_6__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__meta_meta_module__ = __webpack_require__("./src/app/meta/meta.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__("./node_modules/ng2-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tableau_de_bord_tableau_de_bord_component__ = __webpack_require__("./src/app/tableau-de-bord/tableau-de-bord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__membre_du_projet_user_profile_component__ = __webpack_require__("./src/app/membre-du-projet/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__nomenclature_table_list_component__ = __webpack_require__("./src/app/nomenclature/table-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__documentation_upgrade_component__ = __webpack_require__("./src/app/documentation/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__session_session_module__ = __webpack_require__("./src/app/session/session.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ao_status_ao_status_component__ = __webpack_require__("./src/app/ao-status/ao-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__employees_employees_component__ = __webpack_require__("./src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__situation_situation_component__ = __webpack_require__("./src/app/situation/situation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ag_grid_angular_main__ = __webpack_require__("./node_modules/ag-grid-angular/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ag_grid_angular_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_ag_grid_angular_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__chart_test_chart_test_component__ = __webpack_require__("./src/app/chart-test/chart-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_jqwidgets_scripts_jqwidgets_ts_angular_jqxchart__ = __webpack_require__("./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxchart.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















//Dashboard















//import { ChartModule } from 'modules/chart.module'

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_27__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                //Dashboard
                __WEBPACK_IMPORTED_MODULE_19__tableau_de_bord_tableau_de_bord_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_20__membre_du_projet_user_profile_component__["b" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_20__membre_du_projet_user_profile_component__["a" /* NewUserDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_21__nomenclature_table_list_component__["a" /* TableListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__documentation_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_24__ao_status_ao_status_component__["a" /* AoStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_28__situation_situation_component__["a" /* SituationComponent */],
                __WEBPACK_IMPORTED_MODULE_30__chart_test_chart_test_component__["a" /* ChartTestComponent */],
                __WEBPACK_IMPORTED_MODULE_31_jqwidgets_scripts_jqwidgets_ts_angular_jqxchart__["a" /* jqxChartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__meta_meta_module__["a" /* MetaModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["J" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_18__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_23__session_session_module__["a" /* SessionModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebaseConfig, 'angular-auth-firebase'),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_26_ngx_toastr__["a" /* ToastrModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_25__employees_employees_component__["a" /* EmployeesModule */],
                __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"],
                __WEBPACK_IMPORTED_MODULE_29_ag_grid_angular_main__["AgGridModule"].withComponents([]),
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["G" /* MatTableModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_13__auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_20__membre_du_projet_user_profile_component__["a" /* NewUserDialogComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ao_status_ao_status_component__ = __webpack_require__("./src/app/ao-status/ao-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tableau_de_bord_tableau_de_bord_component__ = __webpack_require__("./src/app/tableau-de-bord/tableau-de-bord.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__membre_du_projet_user_profile_component__ = __webpack_require__("./src/app/membre-du-projet/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__documentation_upgrade_component__ = __webpack_require__("./src/app/documentation/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__situation_situation_component__ = __webpack_require__("./src/app/situation/situation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__session_sign_up_sign_up_component__ = __webpack_require__("./src/app/session/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__session_login_login_component__ = __webpack_require__("./src/app/session/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__auth_guard_service__ = __webpack_require__("./src/app/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__chart_test_chart_test_component__ = __webpack_require__("./src/app/chart-test/chart-test.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'tableau-de-bord', component: __WEBPACK_IMPORTED_MODULE_5__tableau_de_bord_tableau_de_bord_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_11__auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'membre-du-projet', component: __WEBPACK_IMPORTED_MODULE_6__membre_du_projet_user_profile_component__["b" /* UserProfileComponent */] },
    { path: 'formulaire', component: __WEBPACK_IMPORTED_MODULE_4__ao_status_ao_status_component__["a" /* AoStatusComponent */] },
    { path: 'situation', component: __WEBPACK_IMPORTED_MODULE_8__situation_situation_component__["a" /* SituationComponent */] },
    { path: 'documentation', component: __WEBPACK_IMPORTED_MODULE_7__documentation_upgrade_component__["a" /* UpgradeComponent */] },
    { path: 'app-chart-test', component: __WEBPACK_IMPORTED_MODULE_12__chart_test_chart_test_component__["a" /* ChartTestComponent */] },
    //{ path: 'meta',        component: MetaSenderComponent },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_9__session_sign_up_sign_up_component__["a" /* SignUpComponent */], data: { sidebar: false } },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__session_login_login_component__["a" /* LoginComponent */], data: { sidebar: false } },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/tableau-de-bord']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__("./node_modules/firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var User = /** @class */ (function () {
    function User(authData) {
        this.email = authData.email;
        this.displayName = authData.displayName;
        this.isAdmin = false;
    }
    return User;
}());
var AuthService = /** @class */ (function () {
    function AuthService(firebaseAuth, router, afs, db) {
        var _this = this;
        this.firebaseAuth = firebaseAuth;
        this.router = router;
        this.afs = afs;
        this.db = db;
        this.userDetails = null;
        this.user = firebaseAuth.authState;
        this.user.subscribe(function (user) {
            if (user) {
                _this.userDetails = user;
                _this.updateUserDetails(user);
            }
            else {
                _this.userDetails = null;
            }
        });
    }
    AuthService.prototype.signup = function (email, password) {
        var _this = this;
        var secondaryApp = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebaseConfig, 'Secondary');
        secondaryApp.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
            var userData = new User(user);
            var ref = _this.db.object('users/' + user.uid);
            ref.valueChanges()
                .subscribe(function (user$) {
                if (!user$) {
                    ref.set(userData);
                }
            });
        });
    };
    AuthService.prototype.signInWithFacebook = function () {
        return this.firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].FacebookAuthProvider());
    };
    AuthService.prototype.signInWithGoogle = function () {
        return this.firebaseAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.signInRegular = function (email, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_5_firebase_app__["auth"].EmailAuthProvider.credential(email, password);
        return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password).then(function (user) {
            _this.updateUserDetails(user);
        });
    };
    AuthService.prototype.updateUserDetails = function (user) {
        var userData = new User(user);
        var ref = this.db.object('users/' + user.uid);
        ref.valueChanges()
            .subscribe(function (user$) {
            if (!user$) {
                ref.set(userData);
            }
            else {
                userData.isAdmin = user$['isAdmin'];
                userData['uid'] = user.uid;
            }
        });
        this.loggedInUser = userData;
    };
    AuthService.prototype.isLoggedIn = function () {
        if (this.userDetails == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.firebaseAuth.auth.signOut()
            .then(function (res) { return _this.router.navigate(['/login']); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chart-test/chart-test.component.html":
/***/ (function(module, exports) {

module.exports = "<jqxChart style=\"float: left\"\n    [width]=\"400\" [height]=\"250\"\n    [title]=\"''\"\n    [description]=\"charts[0].title\"\n    [showLegend]=\"true\" [enableAnimations]=\"false\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"charts[0].dataSource\" [showBorderLine]=\"true\" \n    [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme03'\">\n</jqxChart>\n\n<jqxChart style=\"float: left\"\n    [width]=\"400\" [height]=\"250\"\n    [title]=\"''\"\n    [description]=\"charts[1].title\"\n    [showLegend]=\"true\" [enableAnimations]=\"false\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"charts[1].dataSource\" [showBorderLine]=\"true\"\n    [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme03'\">\n</jqxChart>\n\n\n<jqxChart style=\"float: left\"\n    [width]=\"400\" [height]=\"250\"\n    [title]=\"''\"\n    [description]=\"charts[2].title\"\n    [showLegend]=\"true\" [enableAnimations]=\"false\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"charts[2].dataSource\" [showBorderLine]=\"true\"\n    [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme03'\">\n</jqxChart>\n\n<jqxChart style=\"float: left\"\n    [width]=\"400\" [height]=\"250\"\n    [title]=\"''\"\n    [description]=\"charts[3].title\"\n    [showLegend]=\"true\" [enableAnimations]=\"false\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"charts[3].dataSource\" [showBorderLine]=\"true\"\n    [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme03'\">\n</jqxChart>"

/***/ }),

/***/ "./src/app/chart-test/chart-test.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/chart-test/chart-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartTestComponent = /** @class */ (function () {
    function ChartTestComponent() {
        this.dataStatCounter = [
            { Browser: 'Chrome', Share: 45.6 },
            { Browser: 'IE', Share: 24.6 },
            { Browser: 'Firefox', Share: 20.4 },
            { Browser: 'Safari', Share: 5.1 },
            { Browser: 'Opera', Share: 1.3 },
            { Browser: 'Other', Share: 3.0 }
        ];
        this.dataW3CCounter = [
            { Browser: 'Chrome', Share: 34.1 },
            { Browser: 'IE', Share: 20.3 },
            { Browser: 'Firefox', Share: 18.3 },
            { Browser: 'Safari', Share: 17.8 },
            { Browser: 'Opera', Share: 2.7 },
            { Browser: 'Other', Share: 6.8 }
        ];
        this.dataWikimedia = [
            { Browser: 'Chrome', Share: 42.7 },
            { Browser: 'IE', Share: 18.0 },
            { Browser: 'Firefox', Share: 15.3 },
            { Browser: 'Safari', Share: 6.1 },
            { Browser: 'Opera', Share: 2.4 },
            { Browser: 'Other', Share: 15.6 }
        ];
        this.dataNetApplications = [
            { Browser: 'Chrome', Share: 16.4 },
            { Browser: 'IE', Share: 55.2 },
            { Browser: 'Firefox', Share: 18.0 },
            { Browser: 'Safari', Share: 5.8 },
            { Browser: 'Opera', Share: 1.3 },
            { Browser: 'Other', Share: 3.4 }
        ];
        this.charts = [
            { title: 'Stat counter', label: 'Stat', dataSource: this.dataStatCounter },
            { title: 'W3C counter', label: 'W3C', dataSource: this.dataW3CCounter },
            { title: 'Wikimedia', label: 'Wikimedia', dataSource: this.dataWikimedia },
            { title: 'Net Applications', label: 'NetApp', dataSource: this.dataNetApplications }
        ];
        this.padding = { left: 5, top: 5, right: 5, bottom: 5 };
        this.titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
        this.seriesGroups = [
            {
                type: 'pie',
                showLegend: true,
                enableSeriesToggle: true,
                series: [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        showLabels: true,
                        labelRadius: 160,
                        labelLinesEnabled: true,
                        labelLinesAngles: true,
                        labelsAutoRotate: false,
                        initialAngle: 0,
                        radius: 125,
                        minAngle: 0,
                        maxAngle: 180,
                        centerOffset: 0,
                        offsetY: 170,
                        formatFunction: function (value, itemIdx, serieIndex, groupIndex) {
                            if (isNaN(value))
                                return value;
                            return value + '%';
                        }
                    }
                ]
            }
        ];
    }
    ChartTestComponent.prototype.ngOnInit = function () {
    };
    ChartTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-chart-test',
            template: __webpack_require__("./src/app/chart-test/chart-test.component.html"),
            styles: [__webpack_require__("./src/app/chart-test/chart-test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChartTestComponent);
    return ChartTestComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sidebar_sidebar_component__["b" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n    <footer >\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <li>\n                    <a href=\"http://www.ocpgroup.ma/fr\">\n                        Entreprise\n                    </a>\n                </li>\n                <li>\n                    <a href=\"\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        Portfolio\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                       Home\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <p class=\"copyright pull-right\">\n            &copy; {{test | date: 'yyyy'}} <a href=\"\">Copyrights OCP</a>\n        </p>\n    </div>\n</footer>\n-->\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(authService) {
        this.authService = authService;
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\"></a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a>\n\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">2</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li>\n                            <a href=\"#\">Fornisseur1 a actualiser l'AO</a>\n                        </li>\n                        <li>\n                            <a href=\"#\">Autre Notification</a>\n                        </li>\n\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"\" (click)=\"onLogout()\" >\n                        <i class=\"material-icons\">person</i>\n                        <p class=\"hidden-lg hidden-md\" >Profile</p>\n                    </a>\n                </li>\n               \n            </ul>\n\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, authService) {
        this.element = element;
        this.authService = authService;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // this.isLoggedIn$ = this.authService.isLoggedIn;
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\"  >\n    <a class=\"simple-text\">\n        <div class=\"logo-img\" >\n            <img src=\"/assets/img/angular2-logo-red.png\"/>\n        </div>\n        Capex\n    </a>\n</div>\n<div class=\"sidebar-wrapper\" >\n    <form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\" >\n        <div class=\"form-group form-black is-empty\" >\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            <span class=\"material-input\"></span>\n        </div>\n        <button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n        </button>\n    </form>\n\n    <ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">\n        <li>\n            <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\" >dashboard</i>\n                <p class=\"hidden-lg hidden-md\">Dashboard</p>\n            </a>\n        </li>\n        <li class=\"dropdown\">\n            <a  class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p class=\"hidden-lg hidden-md\">Notifications</p>\n            </a>\n            <ul class=\"dropdown-menu\">\n                <li><a href=\"#\">Mike John responded to your email</a></li>\n                <li><a href=\"#\">You have 5 new tasks</a></li>\n                <li><a href=\"#\">You're now friend with Andrew</a></li>\n                <li><a href=\"#\">Another Notification</a></li>\n                <li><a href=\"#\">Another One</a></li>\n            </ul>\n        </li>\n        <li>\n            <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n               <i class=\"material-icons\">person</i>\n               <p class=\"hidden-lg hidden-md\">Profile</p>\n            </a>\n        </li>\n    </ul>\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                <a *ngIf=\"!menuItem.admin || (menuItem.admin && isAdmin())\" [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROUTES = [
    { path: 'tableau-de-bord', title: 'Tableau de Bord', icon: 'dashboard', class: '' },
    { path: 'membre-du-projet', title: 'Membre du Projet', icon: 'person', class: '', admin: true },
    { path: 'formulaire', title: 'Formulaire', icon: 'content_paste', class: '' },
    { path: 'situation', title: 'Situation', icon: 'dashboard', class: '' },
    //{ path: 'meta', title: 'Statut',  icon:'content_paste', class: '' },
    { path: 'documentation', title: 'Documentation', icon: 'unarchive', class: 'active-pro' },
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(authService) {
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        // this.isLoggedIn$ = this.authService.isLoggedIn;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    SidebarComponent.prototype.isAdmin = function () {
        if (!this.authService.loggedInUser) {
            return false;
        }
        return ('isAdmin' in this.authService.loggedInUser && this.authService.loggedInUser['isAdmin']);
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/documentation/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentation/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-md-offset-2\">\n                <div class=\"card\">\n                    <div class=\"card-header text-center\" data-background-color=\"red\">\n                        <h4 class=\"title\">Capex Documentation</h4>\n                        <p class=\"category\">Ceci regroupe une note officiel sur le Capex.</p>\n                    </div>\n                    <div class=\"card-content\">\n                        <div class=\"table-responsive table-upgrade\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/documentation/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = /** @class */ (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/documentation/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/documentation/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.css":
/***/ (function(module, exports) {

module.exports = "/*Empty*/\n\n\n.field{\n  width:  85%;\n  size: 20;\n}"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-10 \">\n    <div class=\"card card-profile\">\n        <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Liste</h4>\n            <p class=\"category\"></p>\n            <div class=\"user-selector\" *ngIf=\"isAdmin()\">\n                <mat-form-field class=\"field\">\n                  <mat-select placeholder=\"\" (selectionChange)=\"onUserSelected($event)\">\n                    <mat-option *ngFor=\"let user of users\" [value]=\"user\">\n                      {{ user.email }}\n                    </mat-option>\n                  </mat-select>\n                </mat-form-field>\n              </div>\n          </div>\n        \n          <table class=\"table table-sm table-hover\">\n            <tr *ngFor=\"let employee of employeeList\">\n                \n                <td><label>NUM DA:</label> &ngsp;&ngsp; {{employee.numDa}}</td>\n                <td>\n                    \n                  <a class=\"btn\" (click)=\"onEdit(employee)\">\n                    <i class=\"fa fa-pencil-square-o\"></i>\n                  </a>\n                </td>\n            </tr>\n          </table>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/employees/employee-list/employee-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService, tostr, auth, db) {
        this.employeeService = employeeService;
        this.tostr = tostr;
        this.auth = auth;
        this.db = db;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadEmployeeData();
    };
    EmployeeListComponent.prototype.loadEmployeeData = function (uid) {
        var _this = this;
        if (uid === void 0) { uid = null; }
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                var uuid = uid ? uid : _this.auth.loggedInUser.uid;
                if (y.creatorUid === uuid) {
                    y['$key'] = element.key;
                    _this.employeeList.push(y);
                }
            });
        });
    };
    EmployeeListComponent.prototype.loadUsers = function () {
        var _this = this;
        var u = this.db.list('users/');
        u.snapshotChanges().subscribe(function (item) {
            _this.users = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                _this.users.push(y);
            });
        });
    };
    EmployeeListComponent.prototype.onUserSelected = function (data) {
        var uid = data.value['$key'];
        this.loadEmployeeData(uid);
    };
    EmployeeListComponent.prototype.isAdmin = function () {
        if (!this.auth.loggedInUser) {
            return false;
        }
        return ('isAdmin' in this.auth.loggedInUser && this.auth.loggedInUser['isAdmin']);
    };
    EmployeeListComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp);
    };
    EmployeeListComponent.prototype.onDelete = function (key) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.employeeService.deleteEmployee(key);
            this.tostr.warning("Deleted Successfully", "Employee register");
        }
    };
    EmployeeListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-list',
            template: __webpack_require__("./src/app/employees/employee-list/employee-list.component.html"),
            styles: [__webpack_require__("./src/app/employees/employee-list/employee-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee/employee.component.css":
/***/ (function(module, exports) {

module.exports = ".main-content{\n\n    width: 150%;\n}\n.main-content {\n    display: static;\n    left: 50px;\n  }"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-10\">\n        <div class=\"card border-success mb-3\">\n          <div class=\"card-header\" data-background-color=\"red\">\n            <h4 class=\"title\">Formulaire</h4>\n            <p class=\"category\"></p>\n          </div>\n          <div class=\"card-content\">\n            <form #employeeForm=\"ngForm\" (ngSubmit)=\"onSubmit(employeeForm)\">\n                <input type=\"hidden\" name=\"$key\" #$key=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.$key\">\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n\n                    <label class=\"\">numDa</label>\n                    <input class=\"form-control \" name=\"numDa\" #numDa=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.numDa\" placeholder=\"\"\n                      required>\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"\">numDossier</label>\n                    <input class=\"form-control\" name=\"numDossier\" #numDossier=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.numDossier\"\n                      placeholder=\"\" required>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-9\">\n                <div class=\"form-group form-black label-floating is-empty\">\n                  <label class=\"\">designation</label>\n                  <input class=\"form-control\" name=\"designation\" #designation=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.designation\"\n                    placeholder=\"\">\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"\">chefP</label>\n                    <input class=\"form-control\" name=\"chefP\" #chefP=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.chefP\" placeholder=\"\">\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"\">estimation</label>\n                    <input class=\"form-control\" name=\"estimation\" #estimation=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.estimation\"\n                      placeholder=\"\" required>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"\">numRfi</label>\n                    <input class=\"form-control\" name=\"numRfi\" #numRfi=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.numRfi\" placeholder=\"\">\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"control-label\"></label>\n                    <mat-form-field>\n                      <mat-select name=\"situationRfi\" #situationRfi=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.situationRfi\" placeholder=\"situationRfi\">\n                        <mat-option *ngFor=\"let rfi of Rfis\" [value]=\"rfi.value\">\n                          {{ rfi.viewValue }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"\">numAo</label>\n                    <input class=\"form-control\" name=\"numAo\" #numAo=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.numAo\" placeholder=\"\">\n                  </div>\n                </div>\n                <div class=\"col-md-5\">\n                  <div class=\"form-group form-black label-floating is-empty\">\n                    <label class=\"control-label\"></label>\n                    <mat-form-field>\n                      <mat-select name=\"situationAo\" #situationAo=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.situationAo\" placeholder=\"situationAo\">\n                        <mat-option *ngFor=\"let ao of Aos\" [value]=\"ao.value\">\n                          {{ ao.viewValue }}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <div class=\"input-group-addon\">\n                    <i class=\"fa fa-dollar\"></i>\n                  </div>\n                  <label class=\"control-label\">montantDeLaCad</label>\n                  <input class=\"form-control\" name=\"montantDeLaCad\" #montantDeLaCad=\"ngModel\" [(ngModel)]=\"employeeService.selectedEmployee.montantDeLaCad\"\n                    placeholder=\"\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <button class=\"btn btn-default\" type=\"submit\" [disabled]=\"!employeeForm.valid\">\n                  <i class=\"fa fa-floppy-o\"></i>\n                  Submit</button>\n                <button class=\"btn btn-default\" type=\"button\" (click)=\"resetForm(employeeForm)\">\n                  <i class=\"fa fa-repeat\"></i>\n                  Reset</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/employees/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/toastr.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService, tostr, auth) {
        this.employeeService = employeeService;
        this.tostr = tostr;
        this.auth = auth;
        this.Rfis = [
            { value: 'annulé', viewValue: 'annulé' },
            { value: 'en-cours-de-preparation', viewValue: 'en-cours-de-preparation' },
            { value: 'publié', viewValue: 'publié' },
            { value: 'à ouvrir', viewValue: 'à ouvrir' },
            { value: 'attente evaluation RFI', viewValue: 'attente evaluation RFI' },
            { value: 'attente CGAO', viewValue: 'attente CGAO' },
            { value: 'attente GEL', viewValue: 'attente GEL' },
            { value: 'attente lancement AO', viewValue: 'attente lancement AO' }
        ];
        this.Aos = [
            { value: 'annulé', viewValue: 'annulé' },
            { value: 'publié', viewValue: 'publié' },
            { value: 'à ouvrir', viewValue: 'à ouvrir' },
            { value: 'attente avis technique', viewValue: 'attente avis technique' },
            { value: 'étude commercial', viewValue: 'étude commercial' },
            { value: 'attente CAD', viewValue: 'attente CAD' },
            { value: 'attente AE', viewValue: 'attente AE' },
            { value: 'attente validation contrat-Attribué ', viewValue: 'attente validation contrat-Attribué' },
            { value: 'Soldé', viewValue: 'Soldé' },
        ];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    EmployeeComponent.prototype.onSubmit = function (employeeForm) {
        var data = employeeForm.value;
        var uid = this.auth.loggedInUser.uid;
        if (employeeForm.value.$key == null) {
            this.employeeService.insertEmployee(data, uid);
        }
        else {
            this.employeeService.updateEmployee(data);
        }
        this.resetForm(employeeForm);
        this.tostr.success('Submitted Succcessfully', 'Employee Register');
    };
    EmployeeComponent.prototype.resetForm = function (employeeForm) {
        if (employeeForm != null)
            employeeForm.reset();
        this.employeeService.selectedEmployee = {
            $key: null,
            numDa: null,
            designation: '',
            numDossier: null,
            chefP: '',
            estimation: null,
            numRfi: null,
            situationRfi: '',
            numAo: null,
            situationAo: '',
            montantDeLaCad: 0,
        };
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employees/employee/employee.component.html"),
            styles: [__webpack_require__("./src/app/employees/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EmployeesComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_employee_employee_component__ = __webpack_require__("./src/app/employees/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__employees_employee_list_employee_list_component__ = __webpack_require__("./src/app/employees/employee-list/employee-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employees',
            template: "<div class=\"text-center\">\n  <h2 class=\"jumbotron\">Espace de saisie de donn\u00E9es</h2>\n</div>\n<div class=\"\">\n  <div class=\"col-sm-7\">\n    <app-employee></app-employee>\n  </div>\n  <div class=\"col-md-3 \" style=\" display:relative; right:-10%;\">\n    <app-employee-list></app-employee-list>\n  </div>\n</div>",
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_employee_service__["a" /* EmployeeService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__shared_employee_service__["a" /* EmployeeService */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());

var EmployeesModule = /** @class */ (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__employees_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */],
                EmployeesComponent
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__employees_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__employees_employee_list_employee_list_component__["a" /* EmployeeListComponent */],
                EmployeesComponent,
                __WEBPACK_IMPORTED_MODULE_8__angular_material_card__["a" /* MatCardModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_employee_service__["a" /* EmployeeService */]]
        })
    ], EmployeesModule);
    return EmployeesModule;
}());



/***/ }),

/***/ "./src/app/employees/shared/employee.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/employees/shared/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_model__ = __webpack_require__("./src/app/employees/shared/employee.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(firebase) {
        this.firebase = firebase;
        this.selectedEmployee = new __WEBPACK_IMPORTED_MODULE_2__employee_model__["a" /* Employee */]();
    }
    EmployeeService.prototype.getData = function () {
        this.employeeList = this.firebase.list('employees');
        return this.employeeList;
    };
    EmployeeService.prototype.insertEmployee = function (employee, creatorId) {
        if (creatorId === void 0) { creatorId = null; }
        this.employeeList.push({
            numDa: employee.numDa,
            designation: employee.designation,
            numDossier: employee.numDossier,
            chefP: employee.chefP,
            estimation: employee.estimation,
            numRfi: employee.numRfi,
            situationRfi: employee.situationRfi,
            numAo: employee.numAo,
            situationAo: employee.situationAo,
            montantDeLaCad: employee.montantDeLaCad,
            creatorUid: creatorId
        });
    };
    EmployeeService.prototype.updateEmployee = function (employee) {
        this.employeeList.update(employee.$key, {
            numDa: employee.numDa,
            designation: employee.designation,
            numDossier: employee.numDossier,
            chefP: employee.chefP,
            estimation: employee.estimation,
            numRfi: employee.numRfi,
            situationRfi: employee.situationRfi,
            numAo: employee.numAo,
            situationAo: employee.situationAo,
            montantDeLaCad: employee.montantDeLaCad,
        });
    };
    EmployeeService.prototype.deleteEmployee = function ($key) {
        this.employeeList.remove($key);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/membre-du-projet/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".new-user-btn{\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.card-header{\n  position: relative;\n}"

/***/ }),

/***/ "./src/app/membre-du-projet/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card\">\n                    <div class=\"card-header\" data-background-color=\"green\">\n                        <h4 class=\"title\">Membres Capex</h4>\n                        <p class=\"category\"></p>\n                        <a  matTooltip=\"Add new user\" class=\"new-user-btn\" mat-mini-fab color=\"primary\" (click)=\"newUser()\">+</a>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table\">\n                            <thead class=\"text-danger\">\n                                <tr>\n                                    <th>Email</th>\n                                    <th>Password</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let user of users\">\n                                    <td>{{user.email}}</td>\n                                    <td>***********</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/membre-du-projet/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(auth, db, dialog) {
        this.auth = auth;
        this.db = db;
        this.dialog = dialog;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.loadUsers();
    };
    UserProfileComponent.prototype.loadUsers = function () {
        var _this = this;
        var ref = this.db.list('users');
        ref.snapshotChanges().subscribe(function (item) {
            _this.users = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                _this.users.push(y);
            });
        });
    };
    UserProfileComponent.prototype.newUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(NewUserDialogComponent, {
            width: '250px',
            data: { name: '' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != null) {
                // save user details
                _this.auth.signup(result.email, result.password);
            }
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/membre-du-projet/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/membre-du-projet/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatDialog */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());

var NewUserDialogComponent = /** @class */ (function () {
    function NewUserDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newUser = {
            email: '',
            password: ''
        };
    }
    NewUserDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    NewUserDialogComponent.prototype.onSaveClick = function () {
        this.dialogRef.close(this.newUser);
    };
    NewUserDialogComponent.prototype.isValid = function () {
        return (this.newUser.email !== '' && this.newUser.password !== '');
    };
    NewUserDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-new-user',
            template: "\n  <h2 mat-dialog-title>New User</h2>\n  <mat-dialog-content>\n    <form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput name=\"email\" placeholder=\"Email address\" [(ngModel)]=\"newUser.email\">\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"password\" matInput name=\"password\" placeholder=\"Password\" [(ngModel)]=\"newUser.password\">\n      </mat-form-field>\n    </form>\n  </mat-dialog-content>\n\n  <mat-dialog-actions>\n      <button class=\"mat-raised-button\" (click)=\"onNoClick()\">Close</button>\n      <button class=\"mat-raised-button mat-primary\" [disabled]=\"!isValid()\" (click)=\"onSaveClick()\">Save</button>\n  </mat-dialog-actions>\n  ",
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatDialogRef */], Object])
    ], NewUserDialogComponent);
    return NewUserDialogComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"card\">\n                <div class=\"card-header\" data-background-color=\"blue\">\n                    <h4 class=\"title\">Statut</h4>\n                    <p class=\"category\"></p>\n                </div>\n                <div class=\"card-content table-responsive\">\n              <h1>MetaCoin</h1>\n              <select name=\"account\" (change)=\"clickAddress($event)\">\n                <option *ngFor=\"let account of accounts\">{{account}}</option>\n              </select>\n              <h2>Example Truffle Dapp</h2>\n              <h3>You have\n                <span id=\"balance\">{{model.balance}}</span> META</h3>\n\n              <br>\n              <h1>Send MetaCoin</h1>\n              <br>\n              <label for=\"amount\">Amount:</label>\n              <input type=\"text\" id=\"amount\" placeholder=\"e.g., 95\" (change)=\"setAmount($event)\">\n              <br>\n              <label for=\"receiver\">To Address:</label>\n              <input type=\"text\" id=\"receiver\" placeholder=\"e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae\" (change)=\"setReceiver($event)\">\n              <br>\n              <br>\n              <button id=\"send\" (click)=\"sendCoin()\">Send MetaCoin</button>\n              <br>\n              <br>\n              <span id=\"status\">{{status}}</span>\n              <a class=\"btn btn-danger btn-round\">Actualiser</a>\n            </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n-->"

/***/ }),

/***/ "./src/app/meta/meta-sender/meta-sender.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaSenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_web3_service__ = __webpack_require__("./src/app/util/web3.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_MetaCoin_json__ = __webpack_require__("./build/contracts/MetaCoin.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__build_contracts_MetaCoin_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__build_contracts_MetaCoin_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var MetaSenderComponent = /** @class */ (function () {
    function MetaSenderComponent(web3Service) {
        this.web3Service = web3Service;
        this.model = {
            amount: 5,
            receiver: '',
            balance: 0,
            account: ''
        };
        this.status = '';
        console.log('Constructor: ' + web3Service);
    }
    MetaSenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('OnInit: ' + this.web3Service);
        console.log(this);
        this.watchAccount();
        this.web3Service.artifactsToContract(__WEBPACK_IMPORTED_MODULE_2__build_contracts_MetaCoin_json___default.a)
            .then(function (MetaCoinAbstraction) {
            _this.MetaCoin = MetaCoinAbstraction;
        });
    };
    MetaSenderComponent.prototype.watchAccount = function () {
        var _this = this;
        this.web3Service.accountsObservable.subscribe(function (accounts) {
            _this.accounts = accounts;
            _this.model.account = accounts[0];
            _this.refreshBalance();
        });
    };
    MetaSenderComponent.prototype.setStatus = function (status) {
        this.status = status;
    };
    MetaSenderComponent.prototype.sendCoin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var amount, receiver, deployedMetaCoin, transaction, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.MetaCoin) {
                            this.setStatus('Metacoin is not loaded, unable to send transaction');
                            return [2 /*return*/];
                        }
                        amount = this.model.amount;
                        receiver = this.model.receiver;
                        console.log('Sending coins' + amount + ' to ' + receiver);
                        this.setStatus('Initiating transaction... (please wait)');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.sendCoin.sendTransaction(receiver, amount, { from: this.model.account })];
                    case 3:
                        transaction = _a.sent();
                        if (!transaction) {
                            this.setStatus('Transaction failed!');
                        }
                        else {
                            this.setStatus('Transaction complete!');
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1);
                        this.setStatus('Error sending coin; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.refreshBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var deployedMetaCoin, metaCoinBalance, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Refreshing balance');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.MetaCoin.deployed()];
                    case 2:
                        deployedMetaCoin = _a.sent();
                        return [4 /*yield*/, deployedMetaCoin.getBalance.call(this.model.account)];
                    case 3:
                        metaCoinBalance = _a.sent();
                        console.log('Found balance: ' + metaCoinBalance);
                        this.model.balance = metaCoinBalance;
                        return [3 /*break*/, 5];
                    case 4:
                        e_2 = _a.sent();
                        console.log(e_2);
                        this.setStatus('Error getting balance; see log.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    MetaSenderComponent.prototype.clickAddress = function (e) {
        this.model.account = e.target.value;
        this.refreshBalance();
    };
    MetaSenderComponent.prototype.setAmount = function (e) {
        console.log('Setting amount: ' + e.target.value);
        this.model.amount = e.target.value;
    };
    MetaSenderComponent.prototype.setReceiver = function (e) {
        console.log('Setting receiver: ' + e.target.value);
        this.model.receiver = e.target.value;
    };
    MetaSenderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-meta-sender',
            template: __webpack_require__("./src/app/meta/meta-sender/meta-sender.component.html"),
            styles: [__webpack_require__("./src/app/meta/meta-sender/meta-sender.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__util_web3_service__["a" /* Web3Service */]])
    ], MetaSenderComponent);
    return MetaSenderComponent;
}());



/***/ }),

/***/ "./src/app/meta/meta.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meta_sender_meta_sender_component__ = __webpack_require__("./src/app/meta/meta-sender/meta-sender.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_util_module__ = __webpack_require__("./src/app/util/util.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MetaModule = /** @class */ (function () {
    function MetaModule() {
    }
    MetaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__util_util_module__["a" /* UtilModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__meta_sender_meta_sender_component__["a" /* MetaSenderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__meta_sender_meta_sender_component__["a" /* MetaSenderComponent */]]
        })
    ], MetaModule);
    return MetaModule;
}());



/***/ }),

/***/ "./src/app/nomenclature/table-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nomenclature/table-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"card card-plain\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <h4 class=\"title\">Table on Plain Background</h4>\n                        <p class=\"category\">Here is a subtitle for this table</p>\n                    </div>\n                    <div class=\"card-content table-responsive\">\n                        <table class=\"table table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>Numero de dossier</th>\n                                    <th>Designation</th>\n                                    <th>Description</th>\n                                    <th>Entite</th>\n                                    <th>Groupe</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>Ao</td>\n                                    <td>Appel d'offre</td>\n                                    <td>OCP/Achat</td>\n                                    <td>OCP/Gantour</td>\n                                </tr>\n                                <tr>\n                                        <td>2</td>\n                                        <td>RFI</td>\n                                        <td>...</td>\n                                        <td>OCP/Achat</td>\n                                        <td>OCP/Gantour</td>\n                                    </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/nomenclature/table-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__("./src/app/nomenclature/table-list.component.html"),
            styles: [__webpack_require__("./src/app/nomenclature/table-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/router.animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = moveIn;
/* harmony export (immutable) */ __webpack_exports__["a"] = fallIn;
/* unused harmony export moveInLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");

function moveIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('moveIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.6s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function fallIn() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('fallIn', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateY(40px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.4s .2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateY(0)' }))
        ]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.3s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(-200px)' }))
        ])
    ]);
}
function moveInLeft() {
    return Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('moveInLeft', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '0', transform: 'translateX(-100px)' }),
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.6s .2s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: '1', transform: 'translateX(0)' }))
        ])
    ]);
}


/***/ }),

/***/ "./src/app/session/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "\n container {\n    display: relative;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  \n  .container  {\n    width: 25%;\n  }\n"

/***/ }),

/***/ "./src/app/session/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div class=\"page-header\" style=\"background-image: url('../assets/img/login2.jpg');background-size: 100% 100%;\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n      <div class=\"login__page\">\n        <div class=\"row\">\n          <div class=\"card col-md-2 col-md-offset-4\">\n            <div class=\"login__card\">\n              <div class=\"card-block\">\n                <div class=\"form-group\" class=\"social-line text-center\">\n                  <h3 align=\"center\">Welcome</h3>\n                  <a class=\"btn btn-neutral btn-facebook btn-just-icon\" (click)=\"signInWithFacebook()\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                  </a>\n                  <a class=\"btn btn-neutral btn-twitter btn-just-icon\" (click)=\"signInWithTwitter()\">\n                    <i class=\"fa fa-twitter\" ></i>\n\n                  </a>\n\n                  <a class=\"btn btn-neutral btn-google btn-just-icon\" (click)=\"signInWithGoogle()\">\n                    <i class=\"fa fa-google\" ></i>\n                  </a>\n                </div>\n                <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\n\n                  <div class=\"form-group\">\n\n                    <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\n                  </div>\n                  <div class=\"form-group\">\n\n                    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\" required>\n                  </div>\n\n                  <div class=\"form-group\">\n                    <button type=\"buton\" class=\"btn btn-primary btn-block\" (click)=\"signInWithEmail()\" [disabled]=\"formCtrl.form.invalid\">\n                      Login with Email\n                    </button>\n                  </div>\n                </form>\n\n                \n              </div>\n            </div>\n          </div>\n          <div class=\"footer register-footer text-center\">\n              <h6>&copy;{{test | date: 'yyyy'}}, cree avec \n                <i class=\"fa fa-heart heart\"></i>  par khaoula.\n                <i class=\"fa fa-graduation-cap\"></i><a href=\"https://www.uae.ma/website/index.php\">\n                  université\n              </a>\n              <i class=\"fa fa-building\"></i><a href=\"http://www.ocpgroup.ma/fr\">\n                ocpgroup\n            </a>\n            <i class=\"fa fa-building\"></i><a href=\"https://www.interticket.com/\">\n              Interticket kft\n          </a>\n              </h6>\n            </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/session/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = {
            email: '',
            password: ''
        };
        this.test = new Date();
    }
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.authService.signInWithFacebook()
            .then(function (res) {
            _this.router.navigate(['/tableau-de-bord']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.authService.signInWithGoogle()
            .then(function (res) {
            _this.router.navigate(['/tableau-de-bord']);
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.authService.signInRegular(this.user.email, this.user.password)
            .then(function (res) {
            console.log(res);
            _this.router.navigate(['/tableau-de-bord']);
        })
            .catch(function (err) { return console.log('error: ' + err); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/session/login/login.component.html"),
            styles: [__webpack_require__("./src/app/session/login/login.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/session/session.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/session/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__ = __webpack_require__("./src/app/session/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("./node_modules/angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SessionModule = /** @class */ (function () {
    function SessionModule() {
    }
    SessionModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["F" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["j" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["l" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["m" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["n" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["o" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["p" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["q" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["r" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["s" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["t" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["u" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["v" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["w" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["x" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["y" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["z" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["B" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["A" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["C" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["E" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["G" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["H" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["I" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["J" /* MatTooltipModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__["a" /* SignUpComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sign_up_sign_up_component__["a" /* SignUpComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */]
            ]
        })
    ], SessionModule);
    return SessionModule;
}());



/***/ }),

/***/ "./src/app/session/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/session/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\" *ngIf=\"removeFooter()\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/logi.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Welcome</h3>\n                            <div class=\"social-line text-center\">\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                                <a href=\"#pablo\" class=\"btn btn-neutral btn-twitter btn-just-icon\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </div>\n                            <h1 *ngIf=\"authService.user | async\">Welcome {{ (authService.user | async)?.email }}!</h1>\n                            <form class=\"register-form\" *ngIf=\"!(authService.user | async)\">\n                                <label>Email</label>\n                                <input type=\"text\" [(ngModel)]=\"email\" placeholder=\"email\">\n\n                                <label>Password</label>\n                                <input type=\"password\" [(ngModel)]=\"password\" placeholder=\"email\">\n                                <button class=\"btn btn-danger btn-block btn-round\" (click)=\"signup()\" [disabled]=\"!email || !password\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by </h6>\n                </div>\n            </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/session/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("./src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_interval__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/interval.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService, location, router) {
        this.authService = authService;
        this.location = location;
        this.router = router;
    }
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/session/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/session/sign-up/sign-up.component.css")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["b" /* moveIn */])(), Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* fallIn */])()],
            host: { '[@moveIn]': '' },
            providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/situation/situation.component.css":
/***/ (function(module, exports) {

module.exports = ".card-header{\n  position: relative;\n}\n.card-header .user-selector{\n  position: absolute;\n  right: 10px;\n  top: 5px;\n}"

/***/ }),

/***/ "./src/app/situation/situation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card card-plain\">\n          <div class=\"card-header\" data-background-color=\"orange\">\n              <h4 class=\"title text-center\" >données saisi </h4>\n            <p class=\"category  font-weight-bold \">\n               </p>\n            <div class=\"user-selector\" *ngIf=\"isAdmin()\">\n              <mat-form-field>\n                <mat-select placeholder=\"choisissez un acheteur\" (selectionChange)=\"onUserSelected($event)\">\n                  <mat-option *ngFor=\"let user of users\" [value]=\"user\">\n                    {{ user.email }}\n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </div>\n          <mat-card>\n            <div class=\"card-content table-responsive\">\n              <table class=\"table table-hover\">\n                <thead>\n                  <tr >\n                    <th class=\"text-primary\"><strong>numDa</strong></th>\n                    <th class=\"text-primary\"><strong>designation</strong></th>\n                    <th class=\"text-primary\"><strong>numDossier</strong></th>\n                    <th class=\"text-primary\"><strong>chefP</strong></th>\n                    <th class=\"text-primary\"><strong>estimation</strong></th>\n                    <th class=\"text-primary\"><strong>numRfi</strong></th>\n                    <th class=\"text-primary\"><strong>situationRfi</strong></th>\n                    <th class=\"text-primary\"><strong>numAo</strong></th>\n                    <th class=\"text-primary\"><strong>situationAo</strong></th>\n                    <th class=\"text-primary\"><strong>montantDeLaCad</strong></th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let employee of employeeList\">\n                    <td>{{employee.numDa}}</td>\n                    <td>{{employee.designation}}</td>\n                    <td>{{employee.numDossier}}</td>\n                    <td>{{employee.chefP}}</td>\n                    <td>{{employee.estimation}}</td>\n                    <td>{{employee.numRfi}}</td>\n                    <td>{{employee.situationRfi}}</td>\n                    <td>{{employee.numAo}}</td>\n                    <td>{{employee.situationAo}}</td>\n                    <td>{{employee.montantDeLaCad}}</td>\n                    <td>\n                      <a class=\"btn\" (click)=\"onDelete(employee.$key)\">\n                        <i class=\"fa fa-trash-o\"></i>\n                      </a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n        \n      </mat-card>\n    </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/situation/situation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SituationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__employees_shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__ = __webpack_require__("./node_modules/ngx-toastr/toastr.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SituationComponent = /** @class */ (function () {
    function SituationComponent(employeeService, auth, db, tostr, firebase) {
        this.employeeService = employeeService;
        this.auth = auth;
        this.db = db;
        this.tostr = tostr;
        this.firebase = firebase;
        this.key = 'numDa'; //set default
        this.reverse = false;
        this.columnDefs = [
            {
                headerName: "numDa",
                field: "numDa",
                width: 150,
                sortingOrder: ["asc", "desc"]
            },
            {
                headerName: "designation",
                field: "designation",
                width: 150
            }
        ];
    }
    SituationComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    SituationComponent.prototype.onGridReady = function (params) {
        //this.loadEmployeeData(data.value['$key']);
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        var dataValue = [{ "numDa": "cc", "designation": 22 }];
        params.api.setRowData(dataValue);
    };
    SituationComponent.prototype.ngOnInit = function () {
        this.loadUsers();
        this.loadEmployeeData();
        this.dataSource.sort = this.sort;
    };
    SituationComponent.prototype.loadEmployeeData = function (uid) {
        var _this = this;
        if (uid === void 0) { uid = null; }
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                var uuid = uid ? uid : _this.auth.loggedInUser.uid;
                if (y.creatorUid === uuid) {
                    y['$key'] = element.key;
                    _this.employeeList.push(y);
                }
            });
        });
    };
    SituationComponent.prototype.loadUsers = function () {
        var _this = this;
        var u = this.db.list('users/');
        u.snapshotChanges().subscribe(function (item) {
            _this.users = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                _this.users.push(y);
            });
        });
    };
    SituationComponent.prototype.onUserSelected = function (data) {
        var uid = data.value['$key'];
        this.loadEmployeeData(uid);
    };
    SituationComponent.prototype.isAdmin = function () {
        if (!this.auth.loggedInUser) {
            return false;
        }
        return ('isAdmin' in this.auth.loggedInUser && this.auth.loggedInUser['isAdmin']);
    };
    SituationComponent.prototype.onEdit = function (emp) {
        this.employeeService.selectedEmployee = Object.assign({}, emp);
    };
    SituationComponent.prototype.onDelete = function (key) {
        if (confirm('Are you sure to delete this record ?') == true) {
            this.employeeService.deleteEmployee(key);
            this.tostr.warning("Deleted Successfully", "Employee register");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatSort */])
    ], SituationComponent.prototype, "Sort", void 0);
    SituationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-situation',
            template: __webpack_require__("./src/app/situation/situation.component.html"),
            styles: [__webpack_require__("./src/app/situation/situation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__employees_shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_5__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_toastr__["b" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], SituationComponent);
    return SituationComponent;
}());



/***/ }),

/***/ "./src/app/tableau-de-bord/tableau-de-bord.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/tableau-de-bord/tableau-de-bord.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"orange\">\n                        <i class=\"material-icons\">AO</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Statut</p>\n                        <h3 class=\"title\">49\n                            <small>unité</small>\n                        </h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons text-danger\">warning</i>\n                            <a href=\"#pablo\">49/100 sont cloturer</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\n                <div class=\"card card-stats\">\n                    <div class=\"card-header\" data-background-color=\"red\">\n                        <i class=\"material-icons\">RFI</i>\n                    </div>\n                    <div class=\"card-content\">\n                        <p class=\"category\">Statut</p>\n                        <h3 class=\"title\">75\n                            <small>unité</small>\n                        </h3>\n                    </div>\n                    <div class=\"card-footer\">\n                        <div class=\"stats\">\n                            <i class=\"material-icons text-danger\">warning</i>\n                            <a href=\"#pablo\">75/100 sont cloturer</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n            <jqxChart style=\"float: left\"\n    [width]=\"400\" [height]=\"250\"\n    [title]=\"''\"\n    [description]=\"charts[0].title\"\n    [showLegend]=\"true\" [enableAnimations]=\"false\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"charts[0].dataSource\" [showBorderLine]=\"true\" \n    [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme03'\">\n</jqxChart>\n\n<jqxChart style=\"float: left\"\n    [width]=\"400\" [height]=\"250\"\n    [title]=\"''\"\n    [description]=\"charts[1].title\"\n    [showLegend]=\"true\" [enableAnimations]=\"false\" [padding]=\"padding\"\n    [titlePadding]=\"titlePadding\" [source]=\"charts[1].dataSource\" [showBorderLine]=\"true\"\n    [seriesGroups]=\"seriesGroups\" [colorScheme]=\"'scheme03'\">\n</jqxChart>\n\n            <div class=\"row\">\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card card-nav-tabs\">\n                        <div class=\"card-header\" data-background-color=\"purple\">\n                            <div class=\"nav-tabs-navigation\">\n                                <div class=\"nav-tabs-wrapper\">\n                                    <span class=\"nav-tabs-title\">Tasks:</span>\n                                    <ul class=\"nav nav-tabs\" data-tabs=\"tabs\">\n                                        <li class=\"active\">\n                                            <a href=\"#profile\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">bug_report</i>\n                                                Bugs\n                                                <div class=\"ripple-container\"></div>\n                                            </a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#messages\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">code</i>\n                                                Ajustement\n                                                <div class=\"ripple-container\"></div>\n                                            </a>\n                                        </li>\n                                        <li class=\"\">\n                                            <a href=\"#settings\" data-toggle=\"tab\">\n                                                <i class=\"material-icons\">cloud</i>\n                                                Note\n                                                <div class=\"ripple-container\"></div>\n                                            </a>\n                                        </li>\n                                    </ul>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"card-content\">\n                            <div class=\"tab-content\">\n                                <div class=\"tab-pane active\" id=\"profile\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Avertir fournisseur 1?\"</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>Notifier Fournisseur 2 sur l'equipement2?</td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td></td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"tab-pane\" id=\"messages\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td></td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                                <div class=\"tab-pane\" id=\"settings\">\n                                    <table class=\"table\">\n                                        <tbody>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td></td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td>\n                                                </td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                            <tr>\n                                                <td>\n                                                    <div class=\"checkbox\">\n                                                        <label>\n                                                            <input type=\"checkbox\" name=\"optionsCheckboxes\">\n                                                        </label>\n                                                    </div>\n                                                </td>\n                                                <td></td>\n                                                <td class=\"td-actions text-right\">\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Edit Task\" class=\"btn btn-primary btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">edit</i>\n                                                    </button>\n                                                    <button type=\"button\" rel=\"tooltip\" title=\"Remove\" class=\"btn btn-danger btn-simple btn-xs\">\n                                                        <i class=\"material-icons\">close</i>\n                                                    </button>\n                                                </td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-lg-6 col-md-12\">\n                    <div class=\"card\">\n                        <div class=\"card-header\" data-background-color=\"orange\">\n                            <h4 class=\"title\">Situation</h4>\n                            <p class=\"category\"></p>\n                        </div>\n                        <div class=\"card-content table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead class=\"text-warning\">\n                                    <tr>\n                                        <th>numDa</th>\n                                        <th>numRfi</th>\n                                        <th>situationRfi</th>\n                                        <th>numAo</th>\n                                        <th>situationAo</th>\n                                        <th>montantDeLaCad</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let employee of employeeList\">\n                                        <td>{{employee.numDa}}</td>\n                                        <td>{{employee.numRfi}}</td>\n                                        <td>{{employee.situationRfi}}</td>\n                                        <td>{{employee.numAo}}</td>\n                                        <td>{{employee.situationAo}}</td>\n                                        <td>{{employee.montantDeLaCad}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n "

/***/ }),

/***/ "./src/app/tableau-de-bord/tableau-de-bord.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("./node_modules/chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees_shared_employee_service__ = __webpack_require__("./src/app/employees/shared/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(employeeService, auth, db) {
        this.employeeService = employeeService;
        this.auth = auth;
        this.db = db;
        //Chart
        this.view = [500, 300];
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        // Radar
        this.radarChartLabels = ['annulé', 'en-cours-de-preparation', 'publié', 'à ouvrir', 'attente evaluation RFI', 'attente CGAO', 'attente GEL', 'attente lancement AO', 'attente avis technique', 'étude commercial', 'attente CAD', 'attente AE', 'attente validation contrat-Attribué', 'Soldé'];
        this.radarChartData = [
            { data: [this.employeeService.selectedEmployee.numRfi, this.employeeService.selectedEmployee.situationRfi], label: 'RfI' },
            { data: [this.employeeService.selectedEmployee.numAo, this.employeeService.selectedEmployee.situationAo], label: 'AO' }
        ];
        this.radarChartType = 'radar';
        this.dataRFICounter = [
            { Browser: 'annulé', Share: 45.6 },
            { Browser: 'en-cours-de-preparation', Share: 24.6 },
            { Browser: 'publié', Share: 20.4 },
            { Browser: 'à ouvrir', Share: 5.1 },
            { Browser: 'attente evaluation RFI', Share: 1.3 },
            { Browser: 'attente CGAO', Share: 3.0 },
            { Browser: 'attente GEL', Share: 1.3 },
            { Browser: 'attente lancement AO', Share: 3.0 }
        ];
        this.dataAOCounter = [
            { Browser: 'annulé', Share: 34.1 },
            { Browser: 'publié', Share: 20.3 },
            { Browser: 'à ouvrir', Share: 18.3 },
            { Browser: 'attente avis technique', Share: 17.8 },
            { Browser: 'étude commercial', Share: 2.7 },
            { Browser: 'attente CAD', Share: 6.8 },
            { Browser: 'attente AE', Share: 2.7 },
            { Browser: 'attente validation contrat-Attribué', Share: 6.8 },
            { Browser: 'Soldé', Share: 6.8 }
        ];
        this.charts = [
            { title: 'AO', label: 'Ao', dataSource: this.dataAOCounter },
            { title: 'RFI', label: 'Rfi', dataSource: this.dataRFICounter }
        ];
        this.padding = { left: 5, top: 5, right: 5, bottom: 5 };
        this.titlePadding = { left: 0, top: 0, right: 0, bottom: 10 };
        this.seriesGroups = [
            {
                type: 'pie',
                showLegend: true,
                enableSeriesToggle: true,
                series: [
                    {
                        dataField: 'Share',
                        displayText: 'Browser',
                        showLabels: true,
                        labelRadius: 160,
                        labelLinesEnabled: true,
                        labelLinesAngles: true,
                        labelsAutoRotate: false,
                        initialAngle: 0,
                        radius: 125,
                        minAngle: 0,
                        maxAngle: 180,
                        centerOffset: 0,
                        offsetY: 170,
                        formatFunction: function (value, itemIdx, serieIndex, groupIndex) {
                            if (isNaN(value))
                                return value;
                            return value + '%';
                        }
                    }
                ]
            }
        ];
    }
    DashboardComponent.prototype.startAnimationForLineChart = function (chart) {
        var seq, delays, durations;
        seq = 0;
        delays = 80;
        durations = 500;
        chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: __WEBPACK_IMPORTED_MODULE_1_chartist__["Svg"].Easing.easeOutQuint
                    }
                });
            }
            else if (data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq = 0;
    };
    ;
    DashboardComponent.prototype.startAnimationForBarChart = function (chart) {
        var seq2, delays2, durations2;
        seq2 = 0;
        delays2 = 80;
        durations2 = 500;
        chart.on('draw', function (data) {
            if (data.type === 'bar') {
                seq2++;
                data.element.animate({
                    opacity: {
                        begin: seq2 * delays2,
                        dur: durations2,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });
        seq2 = 0;
    };
    ;
    DashboardComponent.prototype.ngOnInit = function () {
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        var dataDailySalesChart = {
            labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        var optionsDailySalesChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
        };
        var dailySalesChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);
        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        var dataCompletedTasksChart = {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
                [230, 750, 450, 300, 280, 240, 200, 190]
            ]
        };
        var optionsCompletedTasksChart = {
            lineSmooth: __WEBPACK_IMPORTED_MODULE_1_chartist__["Interpolation"].cardinal({
                tension: 0
            }),
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0 }
        };
        var completedTasksChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        // start animation for the Completed Tasks Chart - Line Chart
        this.startAnimationForLineChart(completedTasksChart);
        /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
        var dataEmailsSubscriptionChart = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
                [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]
            ]
        };
        var optionsEmailsSubscriptionChart = {
            axisX: {
                showGrid: false
            },
            low: 0,
            high: 1000,
            chartPadding: { top: 0, right: 5, bottom: 0, left: 0 }
        };
        var responsiveOptions = [
            ['screen and (max-width: 640px)', {
                    seriesBarDistance: 5,
                    axisX: {
                        labelInterpolationFnc: function (value) {
                            return value[0];
                        }
                    }
                }]
        ];
        var emailsSubscriptionChart = new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]('#emailsSubscriptionChart', dataEmailsSubscriptionChart, optionsEmailsSubscriptionChart, responsiveOptions);
        //start animation for the Emails Subscription Chart
        this.startAnimationForBarChart(emailsSubscriptionChart);
        this.loadUsers();
        this.loadEmployeeData();
    };
    DashboardComponent.prototype.loadEmployeeData = function (uid) {
        var _this = this;
        if (uid === void 0) { uid = null; }
        var x = this.employeeService.getData();
        x.snapshotChanges().subscribe(function (item) {
            _this.employeeList = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                var uuid = uid ? uid : _this.auth.loggedInUser.uid;
                if (y.creatorUid === uuid) {
                    y['$key'] = element.key;
                    _this.employeeList.push(y);
                }
            });
        });
    };
    DashboardComponent.prototype.loadUsers = function () {
        var _this = this;
        var u = this.db.list('users/');
        u.snapshotChanges().subscribe(function (item) {
            _this.users = [];
            item.forEach(function (element) {
                var y = element.payload.toJSON();
                y['$key'] = element.key;
                _this.users.push(y);
            });
        });
    };
    DashboardComponent.prototype.onUserSelected = function (data) {
        var uid = data.value['$key'];
        this.loadEmployeeData(uid);
    };
    DashboardComponent.prototype.isAdmin = function () {
        if (!this.auth.loggedInUser) {
            return false;
        }
        return ('isAdmin' in this.auth.loggedInUser && this.auth.loggedInUser['isAdmin']);
    };
    DashboardComponent.prototype.loadsumAo = function () {
    };
    // events
    DashboardComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    DashboardComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/tableau-de-bord/tableau-de-bord.component.html"),
            styles: [__webpack_require__("./src/app/tableau-de-bord/tableau-de-bord.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__employees_shared_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/util/util.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__web3_service__ = __webpack_require__("./src/app/util/web3.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilModule = /** @class */ (function () {
    function UtilModule() {
    }
    UtilModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__web3_service__["a" /* Web3Service */]
            ],
            declarations: []
        })
    ], UtilModule);
    return UtilModule;
}());



/***/ }),

/***/ "./src/app/util/web3.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Web3Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_truffle_contract__ = __webpack_require__("./node_modules/truffle-contract/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_truffle_contract___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_truffle_contract__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3__ = __webpack_require__("./node_modules/web3/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_web3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_web3__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var Web3Service = /** @class */ (function () {
    function Web3Service() {
        var _this = this;
        this.ready = false;
        this.accountsObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Subject */]();
        window.addEventListener('load', function (event) {
            _this.bootstrapWeb3();
        });
    }
    Web3Service.prototype.bootstrapWeb3 = function () {
        var _this = this;
        // Checking if Web3 has been injected by the browser (Mist/MetaMask)
        if (typeof window.web3 !== 'undefined') {
            // Use Mist/MetaMask's provider
            this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3___default.a(window.web3.currentProvider);
        }
        else {
            console.log('No web3? You should consider trying MetaMask!');
            // Hack to provide backwards compatibility for Truffle, which uses web3js 0.20.x
            __WEBPACK_IMPORTED_MODULE_3_web3___default.a.providers.HttpProvider.prototype.sendAsync = __WEBPACK_IMPORTED_MODULE_3_web3___default.a.providers.HttpProvider.prototype.send;
            // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
            this.web3 = new __WEBPACK_IMPORTED_MODULE_3_web3___default.a(new __WEBPACK_IMPORTED_MODULE_3_web3___default.a.providers.HttpProvider('http://localhost:8545'));
        }
        setInterval(function () { return _this.refreshAccounts(); }, 100);
    };
    Web3Service.prototype.artifactsToContract = function (artifacts) {
        return __awaiter(this, void 0, void 0, function () {
            var delay, contractAbstraction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.web3) return [3 /*break*/, 3];
                        delay = new Promise(function (resolve) { return setTimeout(resolve, 100); });
                        return [4 /*yield*/, delay];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.artifactsToContract(artifacts)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        contractAbstraction = __WEBPACK_IMPORTED_MODULE_1_truffle_contract__(artifacts);
                        contractAbstraction.setProvider(this.web3.currentProvider);
                        return [2 /*return*/, contractAbstraction];
                }
            });
        });
    };
    Web3Service.prototype.refreshAccounts = function () {
        var _this = this;
        this.web3.eth.getAccounts(function (err, accs) {
            console.log('Refreshing accounts');
            if (err != null) {
                console.warn('There was an error fetching your accounts.');
                return;
            }
            // Get the initial account balance so it can be displayed.
            if (accs.length === 0) {
                console.warn('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            if (!_this.accounts || _this.accounts.length !== accs.length || _this.accounts[0] !== accs[0]) {
                console.log('Observed new accounts');
                _this.accountsObservable.next(accs);
                _this.accounts = accs;
            }
            _this.ready = true;
        });
    };
    Web3Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Web3Service);
    return Web3Service;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyB2qSPiAXRb-mPW6uDQ21O2VcKVtMPoiCQ",
        authDomain: "capex-81906.firebaseapp.com",
        databaseURL: "https://capex-81906.firebaseio.com",
        projectId: "capex-81906",
        storageBucket: "",
        messagingSenderId: "41938723753"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map