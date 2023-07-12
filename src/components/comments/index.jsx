import Comment from '../comment';
import './style.css';

function Comments() {
  return (
    <div className="comments">
      <div className="comments-head">
        <div className="comments-head-left">
          <span>Все комментарии</span>
        </div>
        <div className="comments-head-right">
          <span>
            Рейтинговые
            <svg style={{width: '15px', height: '15px'}}>
              <path fill="#618f45" fillRule="evenodd" d="M3.646 5.646a.5.5 0 0 1 .708 0L8 9.293l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708Z" clipRule="evenodd"></path>
            </svg>
          </span>
        </div>
      </div>
      <div className="comments-body">
        <Comment 
          userName="raven308"
          userImg="https://cs.pikabu.ru/apps/ub/5.1.0/desktop/sprite_96dpi.png"
          rating="103"
          createdTime="6 дней назад"
          message="Сериал «Человек будущего» - фантастическая чёрная комедия об обычном уборщике, который должен спасти мир от зла Ща каждый новорег про него будет писать."
        />
        <Comment 
          userName="gambitushka"
          userImg="https://cs8.pikabu.ru/avatars/67/l67175-1448508774.png"
          rating="13"
          createdTime="6 дней назад"
          message="И свою помойку в телеге рекламить. "
        />
        <Comment 
          userName="raven308"
          userImg="https://cs.pikabu.ru/apps/ub/5.1.0/desktop/sprite_96dpi.png"
          rating="8"
          createdTime="6 дней назад"
          message="Но где же еще ты узнаешь в фантастических сериалах, если не на его авторском канале про фантастику?"
        />
        <Comment 
          userName="Krolmer"
          userImg=""
          rating="7"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="dimkinnn"
          userImg="https://cs6.pikabu.ru/avatars/1544/v1544571-1219608002.jpg"
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Mj0lnir"
          userImg="https://cs13.pikabu.ru/avatars/2869/l2869387-300965688.png"
          rating="2"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="dimak99"
          userImg="https://cs8.pikabu.ru/avatars/1605/l1605835-657431545.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="cubear"
          userImg="https://cs6.pikabu.ru/avatars/385/v385860-326057379.jpg"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="NeoSilence"
          userImg="https://cs13.pikabu.ru/avatars/793/l793169-1964153963.png"
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="redplumber"
          userImg="https://cs13.pikabu.ru/avatars/2460/l2460216-851156173.png"
          rating="73"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="olyx2007"
          userImg="https://cs8.pikabu.ru/avatars/281/l281800-797834489.png"
          rating="11"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Avtichrist"
          userImg="https://cs6.pikabu.ru/avatars/672/v672127-1179536284.jpg"
          rating="5"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Spirine"
          userImg="https://cs13.pikabu.ru/avatars/2498/l2498207-506716041.png"
          rating="3"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="JDay"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Spirine"
          userImg="https://cs13.pikabu.ru/avatars/2498/l2498207-506716041.png"
          rating="0"
          createdTime="1 день назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="JDay"
          userImg=""
          rating="0"
          createdTime="5 часов назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="RickSanchez1"
          userImg="https://cs13.pikabu.ru/avatars/2922/l2922346-25001072.png"
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="stalkself"
          userImg="https://cs13.pikabu.ru/avatars/2922/l2922346-25001072.png"
          rating="56"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Duugrim"
          userImg="https://cs13.pikabu.ru/avatars/136/l136199-898226705.png"
          rating="48"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="jafariuse"
          userImg="https://cs14.pikabu.ru/avatars/1634/l1634621-1062296690.png"
          rating="19"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="G0LEM"
          userImg="https://cs6.pikabu.ru/avatars/1019/v1019940-1629366472.jpg"
          rating="8"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Ildar99"
          userImg="https://cs14.pikabu.ru/avatars/2720/l2720091-1950551860.png"
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="alch"
          userImg=""
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Eses84"
          userImg=""
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Robenderr"
          userImg=""
          rating="33"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="PuK.u.MopTu"
          userImg="https://cs14.pikabu.ru/avatars/365/l365873-1606253395.png"
          rating="2"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="alch"
          userImg=""
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="SolmirMech"
          userImg="https://cs14.pikabu.ru/avatars/3757/l3757294-923611925.png"
          rating="1"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Robender"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Koroed69"
          userImg="https://cs8.pikabu.ru/avatars/2318/l2318515-1239596011.png"
          rating="30"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="baron.Sanmdi"
          userImg="https://cs6.pikabu.ru/avatars/454/v454882-391306617.jpg"
          rating="6"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Koroed69"
          userImg="https://cs8.pikabu.ru/avatars/2318/l2318515-1239596011.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="boo4a"
          userImg="https://cs13.pikabu.ru/avatars/1256/l1256408-1336605565.png"
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Yaltana"
          userImg="https://cs8.pikabu.ru/avatars/1592/l1592483-2039237402.png"
          rating="10"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Jasper666"
          userImg="https://cs8.pikabu.ru/avatars/1592/l1592483-2039237402.png"
          rating="9"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="CrazyNinja"
          userImg="https://cs13.pikabu.ru/avatars/4246/l4246255-1916559339.png"
          rating="3"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Slant24rus"
          userImg="https://cs8.pikabu.ru/avatars/1592/l1592483-2039237402.png"
          rating="3"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Mastotron88"
          userImg="https://cs14.pikabu.ru/avatars/3404/l3404152-1973517575.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="EvgenyLev"
          userImg="https://cs14.pikabu.ru/avatars/3688/l3688670-1484503117.png"
          rating="23"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Ildar99"
          userImg="https://cs14.pikabu.ru/avatars/2720/l2720091-1950551860.png"
          rating="16"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="nazar81"
          userImg="https://cs9.pikabu.ru/avatars/2090/l2090523-682614199.png"
          rating="14"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Kesha66"
          userImg="https://cs9.pikabu.ru/avatars/2230/l2230485-415734115.png"
          rating="14"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="GvardMen"
          userImg="https://cs13.pikabu.ru/avatars/1372/l1372060-307580758.png"
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="KorbenFly"
          userImg="https://cs14.pikabu.ru/avatars/3580/l3580389-515471474.png"
          rating="8"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="dobhair"
          userImg="https://cs8.pikabu.ru/avatars/2077/l2077348-1027305180.png"
          rating="8"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Inquabator"
          userImg="https://cs8.pikabu.ru/avatars/2077/l2077348-1027305180.png"
          rating="7"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="pr0r0k007"
          userImg=""
          rating="6"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="MiMaMi"
          userImg="https://cs13.pikabu.ru/avatars/7001/l7001062-2030963946.png"
          rating="4"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="NeoSilence"
          userImg="https://cs13.pikabu.ru/avatars/793/l793169-1964153963.png"
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="dominoshk"
          userImg="4"
          rating=""
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Avansul"
          userImg="4"
          rating=""
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="zloy.moroz"
          userImg="https://cs6.pikabu.ru/avatars/1710/v1710469-1060356567.jpg"
          rating="3"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="GhostKalter"
          userImg="https://cs14.pikabu.ru/avatars/388/l388914-930768786.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="zloy.moroz"
          userImg="https://cs6.pikabu.ru/avatars/1710/v1710469-1060356567.jpg"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="pjwolf"
          userImg="https://cs8.pikabu.ru/avatars/939/l939179-1413425641.png"
          rating="3"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="mistireaper"
          userImg=""
          rating="3"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="DeadMoroz74"
          userImg="https://cs14.pikabu.ru/avatars/1150/l1150447-1293822713.png"
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Ynnp"
          userImg="https://cs13.pikabu.ru/avatars/2169/l2169846-1312391861.png"
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="user4405511"
          userImg="https://cs13.pikabu.ru/avatars/4405/l4405511-1536422675.png"
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="GamilkarBarka"
          userImg=""
          rating="2"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Paradisco"
          userImg="https://cs9.pikabu.ru/avatars/2208/l2208375-1302471724.png"
          rating="2"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Dimas002"
          userImg="https://cs8.pikabu.ru/avatars/790/l790534-1967110237.png"
          rating="1"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="goof82"
          userImg="https://cs13.pikabu.ru/avatars/2714/l2714081-1654681898.png"
          rating="0"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Wintersky"
          userImg="https://cs6.pikabu.ru/avatars/345/v345215.jpg"
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="hrenoman"
          userImg=""
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="JeffLynne"
          userImg="https://cs13.pikabu.ru/avatars/4070/l4070370-423501704.png"
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="ksenob19"
          userImg=""
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="MrFirestart"
          userImg=""
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Leticiaa"
          userImg="https://cs13.pikabu.ru/avatars/757/l757317-38543796.png"
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Dom047"
          userImg="https://cs14.pikabu.ru/avatars/3752/l3752915-1878605541.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="NoraInu"
          userImg=""
          rating="1"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="laptilapti"
          userImg="https://cs13.pikabu.ru/avatars/1460/l1460744-1041899018.png"
          rating="1"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Homo.Digit"
          userImg="https://cs13.pikabu.ru/avatars/1460/l1460744-1041899018.png"
          rating="1"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="gidrovitamin"
          userImg="https://cs6.pikabu.ru/avatars/529/v529848-256108692.jpg"
          rating="1"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Krasnoe"
          userImg="https://cs13.pikabu.ru/avatars/587/l587678-546403516.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Dimondi"
          userImg="https://cs14.pikabu.ru/avatars/3936/l3936583-948571547.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="NeoSilence"
          userImg="https://cs13.pikabu.ru/avatars/793/l793169-1964153963.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="ScaryChupacabra"
          userImg=""
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="aGGroBabruisk"
          userImg="https://cs13.pikabu.ru/avatars/7044/l7044610-520682720.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="QuokkaToys"
          userImg="https://cs14.pikabu.ru/avatars/1137/l1137176-838140127.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Shpingalett"
          userImg="https://cs14.pikabu.ru/avatars/3322/l3322262-301004760.png"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="PunkStaR"
          userImg="https://cs6.pikabu.ru/avatars/578/v578301.jpg?1290204584"
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="evtuhovdo"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="denivanov"
          userImg="https://cs6.pikabu.ru/avatars/578/v578301.jpg?1290204584"
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="StalkerWerwolf"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="MadHampster"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Kolbasa93"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="techni"
          userImg="https://cs13.pikabu.ru/avatars/4162/l4162866-1721511936.png"
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="zloileto"
          userImg="https://cs13.pikabu.ru/avatars/788/l788150-1690524611.png"
          rating="0"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="urtik"
          userImg=""
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="heckfy1971"
          userImg="https://cs6.pikabu.ru/avatars/822/v822033-1942190148.jpg"
          rating="0"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="Pauluzzz"
          userImg=""
          rating="0"
          createdTime="4 дня назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="aZZkiy"
          userImg="https://cs13.pikabu.ru/avatars/1024/l1024980-950586669.png"
          rating="0"
          createdTime="6 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
        <Comment 
          userName="virtualwyvern"
          userImg="https://cs6.pikabu.ru/avatars/1200/v1200471-1692112375.jpg"
          rating="0"
          createdTime="5 дней назад"
          message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem earum, reprehenderit iusto veritatis quidem ipsa illo, ducimus pariatur itaque beatae consectetur dolorum illum? Praesentium asperiores voluptatum iure. Accusamus, excepturi molestias?"
        />
      </div>
    </div>
  )
}

export default Comments;
