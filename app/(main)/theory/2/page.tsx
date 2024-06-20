import Image from "next/image";
import { redirect } from "next/navigation";

import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import {
  getCourseProgress,
  getUserProgress,
  getUserSubscription,
} from "@/db/queries";

const TheoryPage = async () => {
  const userProgressData = getUserProgress();
  const courseProgressData = getCourseProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, courseProgress, userSubscription] = await Promise.all([
    userProgressData,
    courseProgressData,
    userSubscriptionData,
  ]);
  if (!courseProgress || !userProgress || !userProgress.activeCourse)
    redirect("/courses");

  const isPro = !!userSubscription?.isActive;
  return (
    <div className="absolute flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <div>
        <h1 className="mb-3 mt-3 text-2xl font-extrabold tracking-wide text-purple-600">
          Теория раздела 2
        </h1>
        <div className="hidden h-2 w-full border-t-2 border-slate-200 p-2 lg:block"></div>
        <h2 className="mb-3 text-xl font-extrabold tracking-wide text-blue-600">
          Ключевые фразы
        </h2>
        <div>
          <Image src="/bbq.svg" alt="BBQ" height={200} width={200}></Image>
          <div className="ml-[0px] text-lg">Девочка жарит сосиски.</div>{" "}
          <div className="ml-[-10px] text-lg text-gray-500">
            The girl is cooking sausages.
          </div>
        </div>
        <div className="ml-[300px]">
          <Image src="/drawing.svg" alt="Girl" height={200} width={200}></Image>
          <div className="ml-[0px] text-lg">Девочка рисует на бумаге.</div>{" "}
          <div className="ml-[0px] text-lg text-gray-500">
            The girl is drawing on paper.
          </div>
        </div>
        <div>
          <Image
            className="ml-[20px]"
            src="/laundry.svg"
            alt="Cat"
            height={200}
            width={200}
          ></Image>
          <div className="ml-[-20px] text-lg">
            Мальчик вешает одежду сушиться.
          </div>{" "}
          <div className="ml-[-36px] text-lg text-gray-500">
            The boy is hanging up clothes for drying.
          </div>
        </div>
        <div className="ml-[300px]">
          <Image src="/mail.svg" alt="dog" height={200} width={200}></Image>
          <div className="ml-[-40px] text-lg">
            Мальчик проверяет почтовый ящик.
          </div>{" "}
          <div className="ml-[-15px] text-lg text-gray-500">
            The boy is checking his mailbox.
          </div>
        </div>
        <div>
          <Image
            className="ml-[30px]"
            src="/recycle.svg"
            alt="panda"
            height={200}
            width={200}
          ></Image>
          <div className="ml-[-30px] text-lg">
            Девочка занимается уборкой мусора.
          </div>{" "}
          <div className="ml-[15px] text-lg text-gray-500">
            The girl is cleaning up trash.
          </div>
        </div>
        <div className="ml-[300px]">
          <Image
            src="/telescope.svg"
            alt="elephant"
            height={200}
            width={200}
          ></Image>
          <div className="ml-[10px] text-lg">Девочка смотрит в телескоп.</div>{" "}
          <div className="ml-[-10px] text-lg text-gray-500">
            The girl looking through a telescope.
          </div>
        </div>
        <h2 className="mb-3 text-xl font-extrabold tracking-wide text-blue-600">
          Теория
        </h2>
        <div className="w-[600px] border-2 border-b-4 border-slate-200 bg-white p-3 text-slate-500 hover:bg-slate-100 active:border-b-2">
          <div className="text-lg">
            Hello! <br></br>Вы знаете, что в мире больше людей, изучающих
            английский, чем носителей языка? Добро пожаловать! Мы рады вам.{" "}
            <br></br>В этом уроке мы будем изучать слова, которые обозначают
            животных и людей.
            <br></br> Вот и эти слова: кот <b>(cat)</b>, мальчик <b>(boy)</b>,
            девочка
            <b>(girl)</b>, панда <b>(panda)</b>, слон <b>(elephant)</b> и собака{" "}
            <b>(dog)</b>.<br></br>
            <br></br>
            Теперь давайте попробуем составить предложения с этими словами:
            <br></br>
            <br></br>
            Кот сидит на окне. <b>The cat is sitting on the window.</b>
            <br></br>
            <br></br> Мальчик играет с собакой.{" "}
            <b>The boy is playing with the dog.</b>
            <br></br>
            <br></br> Девочка читает книгу о слонах.{" "}
            <b>The girl is reading a book about elephants.</b>
            <br></br>
            <br></br> Панда ест бамбук в зоопарке.{" "}
            <b>The panda is eating bamboo at the zoo.</b>
            <br></br>
            <br></br> Слон пьет воду из реки.{" "}
            <b>The elephant is drinking water from the river.</b>
            <br></br>
            <br></br> Собака бежит по парку.{" "}
            <b>The dog is running in the park.</b>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default TheoryPage;
