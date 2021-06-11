const quote = [
  {
    content:
      "일을 미루는 건 보통 강박에서 오는 거래요. 내가 이 일을 완벽히 해내야 한다는 강박 나는 왜 늘 미리미리 하지 않고 꼭 이럴까 하는 생각이 든다면 우리 같이 생각해 봐요. 잘하지 않아도 된다고, 오늘 뭔가 했다는 게 바로 잘한 거라고.",
    author: "쿄나 @v_nit_s",
  },
  {
    content:
      "내 기분이랑 그날 할 공부랑은 상관없다니 진짜 미친 가지다. 나도 몇 달은 감정 기복 없이 일상 잘 해오다가 요즘 아픈 뒤로 싱숭생숭해서 꼭 하나씩 빼먹거나 늦게 하고 있었음. 근데 저 말 보니까 정신이 확 든다. 내 기분이나 컨디션 상관없이 할 일은 해야지.",
    author: "토섬레 @rad_bunsbian",
  },
  {
    content:
      "이십 대 내내 끔찍한 완벽주의에 시달렸는데 늘 뭔가를 하다 실수하면, 실패하면 어쩌나 하는 두려움에 사로잡혀서 옴짝달싹 못하고 허송세월만 보냈음. 그 기간을 지나면서 깨친 뼈저린 교훈은 아무것도 안 하는 게 가장 큰 실수고 실패라는 것. 그래서 삼십 대인 지금은 무조건 못해도 고(Go)!가 모토임",
    author: "어두운 안색 @disillusioneder",
  },
  {
    content:
      "Done is better than perfect. 완벽함 보다는 실행하는 것이 낫다. 운동도 공부도 어떠한 도전도 마찬가지 같습니다. 완벽해지려고 하면 시도조차 할 수 없으니까요. 자전거를 타도 자동차를 타도 걸어가더라도 언제나 방향은 수정되기 마련이지만 도착지에 당도하니까요. 그냥 하세요!🙏",
    author: "엉클 @thingthingthin",
  },
  {
    content:
      "약간 좀 부정적인 생각 들면 존나 빠르게 나한테 증거있어???? 라고 되물으면 됨. 보통 증거가 없음",
    author: "팽이 @nompangiclub",
  },
];

const quoteContent = document.querySelector(".quote-content");
const quoteAuthor = document.querySelector(".quote-author");

function outputQuote() {
  const randomQuote = quote[Math.floor(Math.random() * quote.length)];
  quoteContent.innerText = randomQuote.content;
  quoteAuthor.innerText = randomQuote.author;
}

outputQuote();
