/* --------- 　ここから編集禁止  ------------- */
console.info("\n %c Orelop Static - https://github.com/hilosiva/orelop-static \n", "color: #66ffa5; background: #001010; padding:8px 0;");
import.meta.glob(["../img/**"]);
/* --------- 　ここまで編集禁止  ------------- */


const target = ".p-splide .splide";
const target_options = {
  type: "fade",
  rewind: true,
  autoplay: true,
  arrows: false,
  interval: 7000, //1枚のスライドをどのぐらい表示させておくか（次のスライド表示まで何秒かけるか。）⇒Swiperのautoplayのdelayに相当
  speed: 2000, //次のスライダーへの移動時間をミリ秒単位で指定（ミリ秒）
};

const mySplide = new Splide(target, target_options);
mySplide.mount();
