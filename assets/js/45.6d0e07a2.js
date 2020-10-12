(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{451:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"nuls-protocol-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nuls-protocol-address"}},[e._v("#")]),e._v(" NULS Protocol Address")]),e._v(" "),a("h2",{attrs:{id:"eckey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eckey"}},[e._v("#")]),e._v(" ECKey")]),e._v(" "),a("p",[e._v("The first step in creating a NULS address is to obtain a public-private key pair based on the elliptic curve algorithm. The elliptic curve parameters of NULS are the same as bitcoin, using secp256k1.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Secp256k1 is based on the elliptic curve on the Fp finite field. Due to the special construction of its special structure, its optimized implementation can be 30% higher than other curves. It has the following two advantages:\n1) Occupy a small amount of bandwidth and storage resources, the length of the key is very short.\n2) Let all users use the same operation to complete the domain operation.\n                                        -- Quoted from the network\n")])])]),a("h2",{attrs:{id:"address-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address-format"}},[e._v("#")]),e._v(" address format")]),e._v(" "),a("p",[e._v("The address format of NULS is as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Address = prefix + Base58Encode(chainId+addressType+pkh+xor)\n")])])]),a("h3",{attrs:{id:"prefix"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prefix"}},[e._v("#")]),e._v(" prefix")]),e._v(" "),a("p",[e._v("The prefix exists to facilitate identification and to distinguish the addresses of different chains. Currently NULS provides two kinds of prefix determination solutions:")]),e._v(" "),a("ol",[a("li",[e._v("Default setting: NULS retains 1 as the primary network chainId, and also defaults all addresses with chainId 1 to start with NULS. Reserved 2 is the chainId of the core test network. By default, all addresses with a chainId of 2 start with tNULS.")]),e._v(" "),a("li",[e._v("Set the prefix by registering the cross-chain: When registering the cross-chain, you need to fill in the prefix of the chain. The system maintains the correspondence table between the chainId and the prefix, and generates the corresponding address according to the corresponding table. At present, the Samos project has communicated to confirm the use of chainId=3, prefixed with SMOS address format.")]),e._v(" "),a("li",[e._v("Automatic calculation: The address of other chainId, NULS provides a unified algorithm to calculate the prefix, the specific calculation code is as follows:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/ / Convert the chainId to a byte array, use the base58 algorithm to calculate the byte array, all converted to uppercase letters after calculation\nString prefix = Base58.encode(SerializeUtils.int16ToBytes(chainId)).toUpperCase();\n")])])]),a("p",[e._v("Between the prefix and the real address, separated by a lowercase letter, it is convenient to extract the chainId and verify the address type and correctness from the address.\nThe lowercase letters are selected by providing an array, the lowercase letters are filled in the order in which the alphabet is installed, and the separated letters are selected according to the length of the prefix.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// The prefix length is a few letters, and the first few elements are selected as the separated letters.\n/ / If the prefix length is 2, then separated by b, the length is 3 separated by c, the length is 4 separated by d, ...\nString[] LENGTHPREFIX = new String[]{"", "a", "b", "c", "d", "e"};\n')])])]),a("h3",{attrs:{id:"chain-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-id"}},[e._v("#")]),e._v(" chain id")]),e._v(" "),a("p",[e._v("The goal of NULS is to establish a multi-chain parallel, value-interoperable blockchain ecosystem. At the beginning of the design, a unique ID, 2 bytes, is defined for each chain, ranging from 1 to 65535. The ChainId is the address. Very important data is the basis for cross-chain operations.")]),e._v(" "),a("h3",{attrs:{id:"account-type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#account-type"}},[e._v("#")]),e._v(" account type")]),e._v(" "),a("p",[e._v("NULS supports setting different account types in a network, such as common addresses, contract addresses, multi-sign addresses, etc. Developers can design according to their needs.\nThe account type is 1 byte, and the value range is 1~128.")]),e._v(" "),a("h3",{attrs:{id:"public-key-summary-pkh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#public-key-summary-pkh"}},[e._v("#")]),e._v(" Public Key Summary PKH")]),e._v(" "),a("p",[e._v("The relationship between the ECKey and the address is reflected in this part. The NULS method uses the Sha-256 to calculate the public key first, and the result is calculated by RIPEMD160 to obtain a result of 20 bytes, which is PKH.")]),e._v(" "),a("h3",{attrs:{id:"check-digit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#check-digit"}},[e._v("#")]),e._v(" Check Digit")]),e._v(" "),a("p",[e._v("NULS adds a one-byte check digit when generating an address in string format, which is obtained by XORing the first 23 bytes (chainId+type+pkh).\nThe check digit does not participate in serialization.")]),e._v(" "),a("h3",{attrs:{id:"generate-address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-address"}},[e._v("#")]),e._v(" Generate Address")]),e._v(" "),a("ul",[a("li",[e._v("Serialized address")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Address = chainId(2) + type(1) + PKH(20)\n")])])]),a("ul",[a("li",[e._v("Fixed prefix string address")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("addressString = prefix + separator + Base58Encode(address+xor)\n")])])]),a("ul",[a("li",[e._v("Automatic prefix string address")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("addressString = Base58Encode(chainId) + separator + Base58Encode(address+xor)\n")])])]),a("h2",{attrs:{id:"non-nuls-system-address-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#non-nuls-system-address-format"}},[e._v("#")]),e._v(" Non-nuls system address format")]),e._v(" "),a("p",[e._v("NULS is a network that supports access to all blockchains. For a completely different address format from NULS, NULS has designed an address translation protocol, as follows:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Address = Base58Encode (chainId + original address length + original address + xor)\n")])])]),a("p",[e._v("For example: Bitcoin address, the two-byte chainId is appended before the address, followed by the original address of the bitcoin. The address resolution mode is determined according to the chain configuration, ensuring that any address can obtain the mapped address in NULS.")])])}],!1,null,null,null);t.default=r.exports}}]);