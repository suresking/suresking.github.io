/*!
 * Lunr languages, `Korean` language
 * https://github.com/turbobit/lunr-languages
 *
 * Copyright 2021, Manikandan Venkatasubban
 * http://www.mozilla.org/MPL/
 */
/*!
 * based on
 * Snowball JavaScript Library v0.3
 * http://code.google.com/p/urim/
 * http://snowball.tartarus.org/
 *
 * Copyright 2010, Oleg Mazko
 * http://www.mozilla.org/MPL/
 */

/**
 * export the module via AMD, CommonJS or as a browser global
 * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
 */
;
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(factory)
  } else if (typeof exports === 'object') {
    /**
     * Node. Does not work with strict CommonJS, but
     * only CommonJS-like environments that support module.exports,
     * like Node.
     */
    module.exports = factory()
  } else {
    // Browser globals (root is window)
    factory()(root.lunr);
  }
}(this, function() {
  /**
   * Just return a value to define the module export.
   * This example returns an object, but the module
   * can return a function as the exported value.
   */
  return function(lunr) {
    /* throw error if lunr is not yet included */
    if ('undefined' === typeof lunr) {
      throw new Error('Lunr is not present. Please include / require Lunr before this script.');
    }

    /* throw error if lunr stemmer support is not yet included */
    if ('undefined' === typeof lunr.stemmerSupport) {
      throw new Error('Lunr stemmer support is not present. Please include / require Lunr stemmer support before this script.');
    }

    /* register specific locale function */
    lunr.ko = function() {
      this.pipeline.reset();
      this.pipeline.add(
        lunr.ko.trimmer,
        lunr.ko.stopWordFilter
      );

      // change the tokenizer for japanese one
      // if (isLunr2) { // for lunr version 2.0.0
      //   this.tokenizer = lunr.ko.tokenizer;
      // } else {
      //   if (lunr.tokenizer) { // for lunr version 0.6.0
      //     lunr.tokenizer = lunr.ko.tokenizer;
      //   }
      //   if (this.tokenizerFn) { // for lunr version 0.7.0 -> 1.0.0
      //     this.tokenizerFn = lunr.ko.tokenizer;
      //   }
      // }
      /*
       if (this.searchPipeline) {
         this.searchPipeline.reset();
         this.searchPipeline.add(lunr.ko.stemmer)
       }
       */
    };

    /* lunr trimmer function */
    lunr.ko.wordCharacters = "[" +
      "A-Za-z" +
      "\uac00-\ud7a3" +
      "]";
    lunr.ko.trimmer = lunr.trimmerSupport.generateTrimmer(lunr.ko.wordCharacters);

    lunr.Pipeline.registerFunction(lunr.ko.trimmer, 'trimmer-ko');


    /* lunr stop word filter */
    //https://www.ranks.nl/stopwords/korean
    lunr.ko.stopWordFilter = lunr.generateStopWordFilter('�?�?아이�?아이�?아이�?�?�?우리 저�?따라 의해 �?�?�?�?가 으로 �?에게 뿐이�?의거하여 근거하여 입각하여 기준으로 예하�?예를 들면 예를 들자�?저 소인 소생 저�?지말고 하지�?하지마라 다른 물론 또한 그리�?비길�?없다 해서�?안된�?뿐만 아니�?만이 아니�?만은 아니�?막론하고 관계없�?그치지 않다 그러�?그런�?하지�?든간�?논하지 않다 따지지 않다 설사 비록 더라�?아니�?�?못하�?하는 편이 낫다 불문하고 향하�?향해�?향하�?쪽으�?틈타 이용하여 타�?오르�?제외하고 �?외에 �?밖에 하여�?비로�?한다�?몰라�?외에�?이곳 여기 부�?기점으로 따라�?�?생각이다 하려고하�?이리하여 그리하여 그렇�?함으로써 하지�?일때 할때 앞에�?중에�?보는데서 으로�?로써 까지 해야한다 일것이다 반드�?할줄알다 할수있다 할수있어 임에 틀림없�?한다�?�?등등 �?겨우 단지 다만 할뿐 딩동 댕그 대해서 대하여 대하면 훨씬 얼마�?얼마만큼 얼마�?남짓 �?얼마�?약간 다소 좀 조금 다수 �?얼마 지�?하물�?또한 그러�?그렇지�?하지�?이외에도 대�?말하자면 뿐이�?다음�?반대�?반대�?말하자면 이와 반대�?바꾸어서 말하�?바꾸어서 한다�?만약 그렇지않으�?까악 �?�?삐걱거리�?보드�?비걱거리�?꽈당 응당 해야한다 �?가�?�?각각 여러�?각종 각자 제각�?하도록하�?와 �?그러므�?그래�?고로 �?까닭�?하기 때문�?거니와 이지�?대하여 관하여 관�?과연 실로 아니나다를가 생각한대�?진짜�?한적이있�?하곤하였�?�?하하 허허 아하 거바 와 �?�?어째�?무엇때문�?어찌 하겠는가 무슨 어디 어느�?더군다나 하물�?더욱이는 어느�?언제 �?이봐 어이 여보시오 흐흐 �?�?헉헉 헐떡헐떡 영차 여차 어기여차 끙끙 아야 �?아야 콸콸 졸졸 좍좍 뚝뚝 주룩주룩 �?우르�?그래�?�?그리�?바꾸어말하면 바꾸어말하자�?혹은 혹시 답다 �?그에 따르�?때가 되어 �?지든지 설령 가�?하더라도 할지라도 일지라도 지든지 �?거의 하마터면 인젠 이젠 된바에야 된이�?만큼	어찌됏든 그위�?게다가 점에�?보아 비추�?보아 고려하면 하게될것이다 일것이다 비교�?좀 보다�?비하�?시키�?하게하다 할만하다 의해�?연이�?이어�?잇따�?뒤따�?뒤이�?결국 의지하여 기대�?통하�?자마�?더욱�?불구하고 얼마든지 마음대�?주저하지 않고 �?즉시 바로 당장 하자마자 밖에 안된�?하면된다 그래 그렇지 요컨대 다시 말하자면 바꿔 말하�?�?구체적으�?말하자면 시작하여 시초�?이상 �?�?허걱 바와같이 해도좋다 해도된다 게다가 더구�?하물�?와르르 �?�?펄렁 동안 이래 하고있었�?이었�?에서 로부�?까지 예하�?했어�?해요 함께 같이 더불�?마저 마저�?양자 모두 습니�?가까스�?하려고하�?즈음하여 다른 다른 방면으로 해봐�?습니�?했어�?말할것도 없고 무릎쓰고 개의치않�?하는것만 못하�?하는것이 낫다 �?매번 �?�?어느�?어느 로써 갖고말하자면 어디 어느�?어느�?어느�?어느 년도 �?해도 언젠가 어떤�?어느�?저�?저�?저�?그때 그럼 그러�?요만한걸 그래 그때 저것만�?그저 이르기까지 �?�?안다 �?힘이 있다 �?너희 당신 어찌 설마 차라�?할지언정 할지라도 할망�?할지언정 구토하다 게우�?토하�?메쓰겁다 옆사�?�?�?의거하여 근거하여 의해 따라 힘입�?�?다음 버금 두번째로 기타 첫번째로 나머지�?그중에서 견지에서 형식으로 쓰여 입장에서 위해�?단지 의해되다 하도록시키다 뿐만아니�?반대�?전후 전자 앞의�?잠시 잠깐 하면�?그렇지�?다음�?그러한즉 그런�?남들 아무거나 어찌하든지 같다 비슷하다 예컨대 이럴정도�?어떻�?만약 만일 위에�?서술한바와같이 �?듯하�?하지 않는다면 만약�?무엇 무슨 어느 어떤 아래�?조차 한데 그럼에도 불구하고 여전�?심지�?까지�?조차�?하지 않도�?않기 위하�?�?시각 무렵 시간 동안 어때 어떠�?하여�?�?�?우선 누구 누가 알겠는가 아무�?줄은모른�?줄은 몰랏�?하는 김�?겸사겸사 하는�?그런 까닭�?�?이유�?그러�?그러니까 때문�?�?너희 그들 너희�?타�?�?것들 �?위하�?공동으로 동시�?하기 위하�?어찌하여 무엇때문�?붕붕 윙윙 �?우리 엉엉 휘익 윙윙 오호 아하 어쨋�?�?못하�?하기보다�?차라�?하는 편이 낫다 흐흐 놀라다 상대적으�?말하자면 마치 아니라면 �?그렇지 않으�?그렇지 않다�?�?그러�?아니었다�?하든지 아니�?이라�?좋아 알았�?하는것도 그만이다 어쩔�?없다 하나 �?일반적으�?일단 한켠으로�?오자마자 이렇게되�?이와같다�?전부 한마�?한항�?근거�?하기�?아울�?하지 않도�?않기 위해�?이르기까지 �?되다 �?인하�?까닭으로 이유만으�?이로 인하�?그래�?�?때문�?그러므�?그런 까닭�?�?�?있다 결론�?�?�?있다 으로 인하�?있다 어떤�?관계가 있다 관련이 있다 연관되다 어떤것들 �?대�?이리하여 그리하여 여부 하기보다�?하느�?하면 할수�?운운 이러이러하다 하구�?하도�?다시말하�?다음으로 �?있다 �?달려 있다 우리 우리�?오히�?하기는한�?어떻�?어떻�?어찌됏어 어때 어째�?본대�?�?�?이쪽 여기 이것 이번 이렇게말하자�?이런 이러�?이와 같은 요만�?요만�?�?얼마 �?되는 �?이만�?�?정도�?이렇�?많은 �?이와 같다 이때 이렇구나 것과 같이 끼익 삐걱 따위 와 같은 사람�?부류의 사람�?왜냐하면 중의하나 오직 오로지 �?한하�?하기�?하면 도착하다 까지 미치�?도달하다 정도�?이르�?�?지경이�?결과�?이르�?관해서�?여러�?하고 있다 �?�?혼자 자기 자기�?자신 우에 종합한것과같�?총적으로 보면 총적으로 말하�?총적으로 대�?하다 으로�?�?그만이다 �?따름이다 �?탕탕 쾅쾅 둥둥 �?봐라 아이�?아니 와�?�?아이 참나 �?�?�?�?�?�?�?�?�?�?�?�?�?�?�?이천�?이천�?이천�?이천�?하나 �?�?�?다섯 여섯 일곱 여덟 아홉 �?�?.split(' '));
    lunr.Pipeline.registerFunction(lunr.ko.stopWordFilter, 'stopWordFilter-ko');

    /* lunr stemmer function */
    lunr.ko.stemmer = (function() {

      return function(word) {
        // for lunr version 2
        if (typeof word.update === "function") {
          return word.update(function(word) {
            return word;
          })
        } else { // for lunr version <= 1
          return word;
        }

      }
    })();
    lunr.Pipeline.registerFunction(lunr.ko.stemmer, 'stemmer-ko');
  };
}))