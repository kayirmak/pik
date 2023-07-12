import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import RecommendationCard from "../recommendation-card";

import './style.css';

function Recommendation() {
  return (
    <div className="recommendation">
      <h2 className="recommendation-title">Выбор редакции</h2>
      <Swiper
        slidesPerView={3.5}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode, Pagination, Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <RecommendationCard 
            userName="delphin92"
            userImg="https://cs.pikabu.ru/apps/ub/5.1.0/desktop/sprite_96dpi.png"
            editorName="Лига историков"
            editorImg="https://cs14.pikabu.ru/images/community/2523/168871407836553013.webp"
            imgMain="https://cs13.pikabu.ru/post_img/2023/07/08/0/1688767040119373816.jpg"
            title="Физика рыцарского таранного удара копьем и при чем здесь стремена"
            desc="Среди любителей военной истории широко известна концепция стременной революции. Считается, что появление стремени позволило использовать принципиально новый прием - наносить удар копьем, зажатым под мышкой. Некоторые авторы связывают с этим революцию в военном деле и даже изменение социальной"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RecommendationCard 
            userName="SiaoLun"
            userImg="https://cs14.pikabu.ru/avatars/3162/s3162626-624504250.png"
            editorName="Стендовый моделизм"
            editorImg="https://cs12.pikabu.ru/images/community/996/1641046767394147700.webp"
            imgMain="https://cs13.pikabu.ru/post_img/2023/07/10/5/1688975497175864936.jpg"
            title="Подборка моих работ по теме спецназа в миниатюре"
            desc="Представляю вам серию работ военно-исторической миниатюры в масштабе 1\35 посвященной отечественным спецподразделениям: - 'Спецназ ГРУ в Афганистане' Месяц ежевечернего труда"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RecommendationCard 
            userName="Little.Bit"
            userImg="https://cs13.pikabu.ru/avatars/2261/s2261615-1402836506.png"
            editorName="pikabu GAMES"
            editorImg="https://cs14.pikabu.ru/images/community/2262/1678229176365953475.webp"
            imgMain="https://cs14.pikabu.ru/post_img/2023/07/10/5/1688974903388289766.jpg"
            title="Около 20 интересных хорроров, в которые нужно будет поиграть"
            desc="Не топ, но интересный список перспективных хорров, хоррор-экшенов и психологических триллеров, что выйдут в этом и следующем году, и о которых уже что-то известно. Если что"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RecommendationCard 
            userName="FantasyJedi"
            userImg="https://cs13.pikabu.ru/avatars/6715/s6715581-1505599097.png"
            editorName="Книжная лига"
            editorImg="https://cs14.pikabu.ru/images/community/736/1688485915348470777.webp"
            imgMain="https://cs14.pikabu.ru/post_img/2023/06/22/5/1687415708292033539.jpg"
            title="Эпик в космосе: достойные книги в жанре космооперы от русскоязычных авторов"
            desc="В одном из прошлых постов я уже рассказывал о достойных книжных сериях жанра космооперы, но там успел рассмотреть только зарубежных авторов. Поэтому решил сделать вторую часть"
          />
        </SwiperSlide>

        <SwiperSlide>
          <RecommendationCard 
            userName="ZapahKnig"
            userImg="https://cs14.pikabu.ru/avatars/1071/s1071152-405503508.png"
            editorName="Книжная лига"
            editorImg="https://cs14.pikabu.ru/images/community/736/1688485915348470777.webp"
            imgMain="https://cs13.pikabu.ru/post_img/2023/07/09/8/1688908908260889025.jpg"
            title="7 хороших рассказов, которые читаются меньше чем за час"
            desc="Вторая часть подборки коротких рассказов, всем огромная благодарность за активность в первой и рекомендации! И снова предлагаю потом заглянуть к вдохновителю @mlnhp, у него"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Recommendation;
