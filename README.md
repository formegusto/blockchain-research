# Blockchain 사전조사

# Blockchain

> **데이터가 입력된 블록(Block)을 서로 연결(Chain) 하는 기술**

## History

[블록체인의 역사](https://rtingrting.tistory.com/103)

- 1991년, 초 과학자 스튜어트 하버(Stuard Haber)와 스캇 스토네타(W. Scott Stornetta)의 제시
  - 실용적인 수학적 해결책을 타임 스탬핑에 도입해 **디지털 문서의 날짜가 변경되거나 위조될 수 없게한다.**
- 2004년, 컴퓨터 공학자 할 피니(Hal Finney)의 제시
  - **재사용 가능한 작업증명방식(RPoW:Reusable Proof of Work)**
  - 교환이 불가능하거나 **대체할 수 없는 해시캐시(Hashcash)를 작업 증명 방식 토큰에 기반해 수신**한 뒤, **RSA 서명이 된 재사용 가능한 토큰으로 반환**했으며, **RSA 서명이 된 토큰은 개인간에 전송이 가능**했다.
  - 재사용 가능한 작업 증명 방식은 **암호 화폐 역사의 프로토타입이자 중요한 초기 단계**로 보고 있다.
- 2008년, 블록체인 최초 실현
  [](https://bitcoin.org/files/bitcoin-paper/bitcoin_ko.pdf)
  - 2008년 10월 31일 **사토시 나카모토(Satoshi Nakamoto)의 “비트코인: 개인 대 개인의 전자화폐 시스템” 논문** 발표
    - 07년 글로벌 금융위기 때 **중앙집권화**된 금융시스템의 위험성을 실감**(기존 화페의 신뢰성 하락의 계기)**하고, 이를 해결할 방안으로 구현
- 2009년, **블록체인 기술을 적용한 최초의 암호화폐 비트코인을 개발**
- 2015년, 비트코인 메거진의 공동 창립자 비탈릭 부테린(Vitalik Buterin)의 **이더리움 개발**
  - **비트코인에 사용된 핵심 기술인 블록체인에 화폐 거래 기록뿐 아니라 계약서 등의 추가 정보를 기록**할 수 있다는 점에 착안

## is DataBase

- **_Only Append_** : **삭제와 편집이 불가능한 데이터베이스**이다. 오로지 데이터를 추가만 할 수 있다.
- **_Decentralized_** : 특정 개인이 관리하는 Database가 아니다. 블록체인 네트워크라는 집단에 참여되어 있는 **모든 노드가 Database의 복제본**을 가지고 있다.

## Block Structure

| previousHash | hash | block data | difficulty | nonce |
| ------------ | ---- | ---------- | ---------- | ----- |

- previousHash : 이전 블록의 해시값
- hash : 현재 블록의 해시값
- block data : 블록의 데이터 ex. 거래내역, 학위, 전세계약서 등
- difficulty : 작업 증명의 난이도
- nonce : 작업 증명의 정답값

> **hash : 암호화 기법**

1. **결정론적** : 특정 단어에 대한 Output이 항상 정해져 있다. 한 글자만 바뀌어도 Output은 크게 달라진다.

[온라인 SHA256 해시 생성기](https://www.convertstring.com/ko/Hash/SHA256)

1. **일방향 함수** : Input을 가지고 Ouput을 얻을 수는 있지만, Output을 가지고 Input을 얻어낼 수는 없다.

**→ Blockchain 에서의 Block들은 모두 Hash값을 통하여 Chain되어 있다.**

## Blockchain Simple Process

1. Transaction의 생성 단계

   A가 B에게 보낸 돈에 대한 데이터 생성

   ```json
   {
     "from": "A",
     "to": "B",
     "price": 3000
   }
   ```

2. 이전 블록의 해시(previousHash)를 데이터에 추가하여 블록데이터(data)와 구분해준다.

   ```json
   {
     "previousHash": "019ccab493838f2249e4a6f49488f0ea911be8cdd7c4175d051138afbd7d102c",
     "data": {
       "from": "A",
       "to": "B",
       "price": 3000
     }
   }
   ```

3. 블록데이터와 이전 블록의 해시를 해싱하여 새 블록의 해시를 만들어 준다.

   ```json
   {
     "previousHash": "019ccab493838f2249e4a6f49488f0ea911be8cdd7c4175d051138afbd7d102c",
     "data": {
       "from": "A",
       "to": "B",
       "price": 3000
     },
     "hash": "0e811cbbf0eb29e2880a1729b682c52c78381ad7186937354ddba9ea6454793d"
   }
   ```

→ 이렇듯 현재 생성될 블록의 데이터와 이전 블록의 해시를 **해싱해주는 것을 통해 현재 블록과 이전 블록간에 해시와 데이터라는 연관성**이 생겼으며, 블록체인에서 이를 **Block간 Chain되었다라고 표현**한다.

> **현재 블록과 이전 블록의 연관성이 주는 보안성**

|              | Block#1 | Block#2 | Block#3 |
| ------------ | ------- | ------- | ------- |
| previousHash | 0x111   | 0x112   | 0x113   |
| data         | a       | b       | c       |
| hash         | 0x112   | 0x113   | 0x114   |

위는 정상적인 체인의 상태를 보여준다. 아래의 도표들은 수정 혹은 삭제 시 체인상에 어떤 변화가 일어나야하는지를 보여준다.

|              | Block#1 | Block#2 | Block#3 |
| ------------ | ------- | ------- | ------- |
| previousHash | 0x111   | 0x112   | 0x113   |
| data         | a       | d       | c       |
| hash         | 0x112   | 0x113   | 0x114   |

특정 블록(Block#2)의 데이터가 **강제적으로 수정**될 경우, **이전 블록과 수정되기 전의 블록 데이터의 합으로 만들어진 해시값이 수정**되어야 한다.

|              | Block#1 | Block#2 | Block#3 |
| ------------ | ------- | ------- | ------- |
| previousHash | 0x111   | 0x112   | 0x115   |
| data         | a       | d       | c       |
| hash         | 0x112   | 0x115   | 0x114   |

수정된 블록으로 인하여 해당 블록의 다음 블록의 이전 블록 해시값이 변화하게 된다. 다음 블록의 해시값도 수정된 이전 노드의 해시값과의 조합으로 재 생성 되어야 한다.

|              | Block#1 | Block#3 | Block#4 |
| ------------ | ------- | ------- | ------- |
| previousHash | 0x111   | 0x115   | 0x114   |
| data         | a       | c       | c       |
| hash         | 0x112   | 0x114   | 0x116   |

즉, **하나의 블록에서 수정이 일어나게 되면 체인상에서 연쇄적으로 수정작업이 이루어져야 한다.** 삭제도 마찬가지이다. 특정 블록(Block#2)이 체인상에서 삭제되었을 경우, 연쇄적으로 이전노드와 자신의 해시를 수정하는 작업이 연쇄적으로 일어나게 된다.

**블록체인 네트워크 상의 같은 Database를 각자 소유하는 노드들이 공통적으로 채택하는 체인은 가장 길이가 긴 노드**이다. 탈중앙성을 가지는 블록체인에서는 **각 참여 노드들이 검증한 블록만이 사슬위에 올라가게 되고, 각자의 Database에 동일한 체인 구조를 유지**하게 된다. 이와 같은 상황에서 공격자가 특정 노드의 **단 하나의 블록에 위/변조를 일으킨다 해도 다른 노드들이 검증이 완료된 체인을 가지고 있기 때문에 공격 당한 특정 노드는 새로이 검증이 완료된 체인으로 교체**할 수 있다. **잘못된 노드는 빠르게 이와 같이 감지가 가능**하다. **공격자는 탈중앙성과 해시라는 보안성을 가진 블록체인 네트워크를 해킹하기 위해서는 위/변조된 노드가 아닌, 모든 노드를 속일 수 있는 위/변조된 체인을 만들어 배포해야 한다**는 것을 나타낸다.

## Decentralized & PoW (Proof of Work)

블록체인의 최초의 실용화 서비스로는 비트코인이 있다. 비트코인은 **신뢰받는 제 3자의 개입없이 개인 대 개인의 거래를 사용하여 중앙집권 서버의 단점을 해결**하고자하여 제안된 개인 대 개인간 분산 타임스탬프 서버를 사용한 이중지불 문제의 솔루션 시스템이다.

비트코인은 이중지불의 문제를 해결하기 위한 중점적인 전자화폐 연구를 진행한 것 인데, **블록의 생성부터 해시기반의 블록 연결까지에서의 문제점은 이중지불 검증을 아무도 진행해주지 않는다는 것**에 있다. 이중 지불을 방지하기 위해서 거래가 없음을 확인하는 유일한 방법은 모든 거래를 인식하고 있는 방법 뿐이다. 그리고 비트코인은 이를 **신뢰받는 제 3자의 개입 없이 이뤄내야 했다.** 그래서 **거래를 공개적으로 알리는 탈중앙화의 개념**을 적용했고, **참가자들에게는 그걸 받은 순서의 단일한 이력에 합의하는 시스템, 자격증명 개념을 적용**했다.

### Decentralized

**시간을 기록하는 서버. 타임스탬프 서버를 사용**한다. **새로운 거래가 발생했을 경우** 거래내용과 타임스탬프가 찍힌 항목 **블록의 해시를 널리 배포하는 방식으로 작동**한다. 해당 **타임스탬프는 생성된 블록이 체인에 포함되기 위하여 특정 시간부터 존재했음을 증명**한다. 각 타임스탬프는 그 해시안에 이전 타임스탬프를 포함하고, 그에 앞선 것들을 하나씩 연장하는 **타임스탬프가 찍힌 사슬을 생성한다.(?)**

그리고 이를 **블록체인 네트워크에 참여한 모든 노드에게 알리고, 모든 노드가 블록을 블록체인 위에 새로운 블록으로 연결하기 위하여 작업증명이라는 작업에 투입**한다.

### PoW (Proof of Work)

작업증명은 **SHA-256과 같은걸로 해시 연산을 거친 결과가 0비트 여러 개로 시작할, 특정 값을 찾는 작업을 수행**한다. 블록의 해시에 필요한 0비트를 주는 값이 발견될 때까지 **블록안에 임시값(nonce)을 증분하는 방식으로 동작**된다.

|              | Block#1 | Block#2 |
| ------------ | ------- | ------- |
| previousHash | 0x111   | 0x112   |
| data         | a       | b       |
| difficulty   | 0       | 2       |
| nonce        | null    | ?       |
| hash         | 0x112   | 0x00?   |

즉, 위와 같이 아직 체인에 연결되지 않은 타임스탬프 상에 가장 첫번째의 Block#2가 있고, 난이도(difficulty)가 2라면 이전 노드의 해시값인 0x112와 현재 자신의 데이터 b, 그리고 nonce라는 값을 해싱하여 0x00으로 시작하는 특정 해시를 만들어내야 하는 것 이고, 참가 노드들이 nonce의 값을 찾아야 해당 블록이 체인위에 올라가 연결이 된다.

해시는 결정론적이고, 하나의 값이 변화해도 크게 결과값이 바뀌기 때문에 nonce의 값을 특정 알고리즘으로 예측해내기는 매우어렵다. 그래서 0부터 하나씩 대입해보는 방식을 사용하는데 해당의 과정에서 많은 CPU를 사용하게 된다. 이를 비트코인에서는 채굴이라고 부른다.

**PoW는 해시와 탈중앙성에 이어 블록체인의 보안성을 높여주는 또 하나의 요소**이다. 위에서 **하나의 블록에 위/변조가 일어날 경우 연쇄적인 수정작업에 대해서 언급을 했는데, 값이 변화했으니 특정 블록이 가진 난이도에 따라 올바른 nonce까지 찾아내는 작업까지 수행**해야 한다. 이는 많은 CPU를 요구한다. 각 노드들이 업데이트 받는 최신의 체인은 가장 긴 사슬로 대표되고, 여기에는 참가노드들의 CPU 작업이 있었다. **공격 노드는 완벽히 체인을 수정하기 위해서는 참가노드의 체인을 능가할 많은 CPU 연산량을 필요로 할 것** 이다. 그리고 광범위한 블록체인 네트워크의 경우에는 계속해서 블록이 추가되기 때문에 실질적으로 불가능하다고 볼 수 있다.

그리고 비트코인의 경우에는 nonce값의 정답을 맞추어 체인위에 특정 블록을 등록하게 되면, 인센티브를 정답자에게 주는데, 해당 인센티브는 많은 참가 노드들이 정직하게 행동하기를 유도하는데에 도움을 준다. 많은 체인의 해킹을 감당할 수 있는 CPU를 가지고 있다면, 해킹보다는 새로운 블록을 계속해서 추가해주는 것이 더 이득이기 때문이다.

## Blockchain Process

1. 새로운 거래가 모든 노드에 브로드캐스트 된다. (탈중앙성)
2. 각 노드가 새로운 거래를 블록에 수집한다. (탈중앙 측면에서의 추가 시점)
3. 각 노드가 그 블록에 맞는 난이도의 작업증명을 찾아 나선다. (채굴, PoW)
4. 노드가 작업증명을 찾은 시점에, 거기서 모든 노드로 그 블록을 브로드캐스트 한다.
5. 노드는 모든 거래가 유효하며 아직 지불되지 않았다는 조건에 맞을 경우에는 그 블록을 승인
6. 노드는 블록 승인을 표현하기 위해 이전 해시로 승인된 블록의 해시를 사용해 사슬 안에 다음 블록을 생성한다.

## Blockchain Network Example

[Blockchain Network Example](https://github.com/formegusto/blockchain-research/tree/main/block-chain-view)

---

# Smart Contract

서면으로 이루어지던 계약을 코드로 구현하고 특정 조건이 충족되었을 때, 해당 계약이 이행되게 하는 script를 말한다. 1994년 닉 자보(Nick Szabo)에 의해 처음 제안되었다.

> Blockchain 2.0, Ethereum

[스마트 컨트랙트(Smart Contract), 글 한 편으로 제대로 이해하기](https://medium.com/haechi-audit-kr/smart-contract-a-to-z-79ebc04d6c86)

블록체인 네트워크라는 네트워크에서 동작하는 프로그램을 이야기 한다. 2013년 이더리움의 창시자인 비탈릭 부테린(Vitalik Buterin)은 Smart Contract 라는 개념을 블록체인에 도입하였고, 이렇게 만들어지게 된 것이 이더리움이다.

> Solidity

Solidity는 Smart Contract를 개발하기 위한 script 언어이다. 해당 언어로 Smart Contract를 개발한 후에 이더리움 네트워크에 배포하게 되면 이더리움 블록체인 네트워크 상에 기록되어 serverless한 백엔드로서 동작하게 할 수 있다.

> Advantage

블록체인을 기반으로 만들어졌기 때문에 블록체인의 장점을 따라 가지게 된다.

1. Only Append 작업에 의한 보안성 : 누구도 Smart Contract 프로그램을 수정하거나 삭제할 수 없다.
2. 탈중앙성 : 구현이 어려운 탈중앙이라는 개념의 서버를 이더리움 네트워크에 올림으로, 간단하게 적용할 수 있다. ( 코드의 실행을 자동화할 수 있다. )

## Smart Contract Example

[Smart Contract Example](https://github.com/formegusto/blockchain-research/tree/main/block-chain-metamask)

---

# Solution

## Blockchain Trilemma

> 보안성, 탈중앙화, 확장성

**블록체인에서의 보안성, 탈중앙화, 확장성 문제를 한번에 만족시킬 수 없는 성질을 이야기**한다.

비트코인과 이더리움을 예로들수 있다. 이들은 보안성과 탈중앙화를 실현시켰지만, 네트워크가 확장됨에 따라 초당 거래 속도가 느려지는 확장성의 문제를 만족시키지 못했다. 아이러니한 점은 확장성의 문제를 해결하기 위해서의 가장 큰 두 가지 걸림돌이 탈중앙화와 보안성에 있다는 것 이다.

현재 시중에 나와있는 암호화폐들은 보안성, 탈중앙화, 확장성의 블록체인 트릴레마를 하나 혹은 최대 두 개까지만 해결할 수 있고, 세 가지를 동시에 만족시키는 것은 물리적으로 불가능하다.

이더리움이 확장성 문제를 해결하기 위해 내놓은 이더리움 2.0의 지분증명(PoS:Proof of Stake) 역시 탈중앙화의 약화를 낳아 새로운 중앙화 된 권력을 낳을 가능성을 높였다.

3세대 블록체인으로 떠오르는 이오스도 탈중앙화와 확장성에 집중하여 보안성이 낮아진 문제점을 보여주고 있다. 블록체인의 trilemma는 블록체인 분야가 끊임없이 해결해 나가야 하는 분야이다.
