import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const AboutUsPage = () => {
  return (
    <div>
      <h1 className="mb-3 mt-3 text-2xl font-extrabold tracking-wide text-purple-600">
        О нас
      </h1>
      <div className="hidden h-2 w-full border-t-2 border-slate-200 p-2 lg:block"></div>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        Добро пожаловать в приложение Lingerum!
      </h2>
      <div className="w-[950px] text-xl">
        Мы верим, что изучение новых языков должно быть доступным и
        увлекательным для всех. Наше приложение разработано, чтобы помочь вам
        освоить новые языки через интерактивные уроки и упражнения, которые
        делают процесс обучения интересным и эффективным.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        Наша миссия
      </h2>
      <div className="w-[950px] text-xl">
        Наша миссия — сделать изучение языков доступным для каждого. Мы
        стремимся создать удобную и дружелюбную платформу, которая поможет вам
        достичь ваших языковых целей, независимо отуровня подготовки.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        Наши особенности
      </h2>
      <div className="w-[950px] text-xl">
        Интерактивные уроки: Наши уроки включают разнообразные упражнения,
        которые помогут вам улучшить все аспекты языка: чтение, письмо,
        говорение и слушание.<br></br>
        <br></br> Персонализированное обучение: Мы адаптируем курсы под ваши
        нужды и уровень подготовки, чтобы вы могли учиться в своем собственном
        темпе.<br></br>
        <br></br>Сообщество: Присоединяйтесь к нашему сообществу учащихся,
        делитесь своими успехами и мотивируйте друг друга.
      </div>
      <br></br>
      <h2 className="mb-3 text-2xl font-extrabold tracking-wide text-blue-600">
        Наши ценности
      </h2>
      <div className="w-[950px] text-xl">
        Качество: Мы стремимся предоставить высококачественные образовательные
        материалы и ресурсы.
        <br></br>
        <br></br>
        Доступность: Мы верим, что изучение языков должно быть доступным для
        всех, независимо от их финансового положения.
        <br></br>
        <br></br>
        Инновации: Мы постоянно совершенствуем наше приложение, чтобы сделать
        обучение еще более эффективным и интересным.
        <br></br>
        <br></br>
        Спасибо, что выбрали нас для вашего языкового путешествия. Мы рады быть
        частью вашего пути к новому языку!
      </div>
      <br></br>
      <div className=" mb-[10px] w-[950px] text-xl">
        Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами в
        наших социальных сетях:
      </div>
      <div className="flex flex-row pb-[30px]">
        <Link href="https://github.com/kattachiren" className="mr-[30px]">
          <Avatar>
            <AvatarImage src="/github.svg" />
            <AvatarFallback>git</AvatarFallback>
          </Avatar>
        </Link>
        <Link href="https://twitter.com/kattachi16601" className="mr-[30px]">
          <Avatar>
            <AvatarImage src="/x.svg" />
            <AvatarFallback>x</AvatarFallback>
          </Avatar>
        </Link>
        <Link href="https://t.me/kattachiren">
          <Avatar>
            <AvatarImage src="/telegram.png" />
            <AvatarFallback>tg</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default AboutUsPage;
